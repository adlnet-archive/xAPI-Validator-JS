'use strict';

import {properties, objectTypes, xapiValidationIfiPropertyNames, xApiValidObjectTypes} from '/constants/properties';
import {xapiWhiteListProperties} from '/constants/whitelists';
import {xapiErrorLevels, xapiValidationErrors} from '/constants/errors';
import {xapiValidationRegex, dateFormatRegexPositions} from '/constants/regex';
import {xapiValidationInteractionTypes} from '/constants/interaction-types';
import {xapiGeneral} from '/constants/general';
import {xapiValidationUtils} from '/utils/utils';

var xapiValidator;

function makeV1Report(instance, errors) {
  var version;

  instance = instance || null;
  errors   = errors || null;
  version  = xapiGeneral.FIRST_REPORT_VERSTION;
  return {instance, errors, version};
}

function makeV1SingleErrorReport(instance, error) {
  return makeV1Report(instance, error === null || error === undefined ? [] : [error]);
}

function validateAbsenceOfNonWhitelistedProperties(target, allowedProperties, trace, errors) {
  var localErrors, localTrace, propertyName;

  localErrors = errors || [];
  localTrace  = trace  || '';

  for (propertyName in target) {
    if (target.hasOwnProperty(propertyName) && allowedProperties.indexOf(propertyName) === xapiGeneral.NO_INDEX_FOUND) {
      localErrors.push({
        trace:   xapiValidationUtils.addPropToTrace(localTrace, propertyName),
        message: xapiValidationErrors.UNEXPECTED,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }
  }

  return localErrors;
}

function validatePropertyIsString(parent, propertyName, trace, errors, isRequired, violationType) {
  var localErrors, localTrace, propValue, localViolationType;

  localErrors        = errors || [];
  localTrace         = trace  || '';
  propValue          = parent[propertyName],
  localViolationType = violationType || xapiErrorLevels.MUST_VIOLATION;

  if (propValue !== undefined) {
    if (propValue === null || !xapiValidationUtils.isString(propValue)) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, propertyName),
        message: `${propertyName} ${xapiValidationErrors.MUST_BE_STRING}`,
        level:   localViolationType
      });
    }
  } else if (isRequired) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace, propertyName),
      message: `${propertyName} ${xapiValidationErrors.MUST_BE_PRESENT}`,
      level:   localViolationType
    });
  }

  return localErrors;
}

function validatePropertyIsUri(target, propertyName, trace, errors, isRequired) {
  var localErrors, localTrace, propValue;

  localErrors = errors || [];
  localTrace  = trace  || '';
  propValue   = target[propertyName];

  if (propValue !== undefined) {
    if (propValue === null || !xapiValidationUtils.isString(propValue)) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, propertyName),
        message: `${propertyName} ${xapiValidationErrors.MUST_BE_URI_STRING}`,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    } else if (!xapiValidationRegex.IRI.test(propValue)) {
      localErrors.push({
        trace:  xapiValidationUtils.localTraceToString(localTrace, propertyName),
        message: `${propertyName} ${xapiValidationErrors.MUST_BE_IRI_STRING}`,
        level:   xapiErrorLevels.SHOULD_VIOLATION
      });
    }
  } else if (isRequired) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace, propertyName),
      message: `${propertyName} ${xapiValidationErrors.MUST_BE_URI_PRESENT}`,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }
  return localErrors;
}

function validatePropertyIsUrl(target, propertyName, trace, errors, isRequired) {
  // TODO - check whether a formal URL format definition is recommended/enforced for xAPI
  return validatePropertyIsString(target, propertyName, trace, errors, isRequired);
}

function validatePropertyIsBoolean(parent, propertyName, trace, errors, isRequired) {
  var localErrors, localTrace, propValue;

  localErrors = errors || [];
  localTrace  = trace  || '';
  propValue   = parent[propertyName];

  if (propValue !== undefined) {
    if (propValue === null || !xapiValidationUtils.isBoolean(propValue)) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, propertyName),
        message: `${propertyName} ${xapiValidationErrors.MUST_BE_BOOLEAN}`,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }
  } else if (isRequired) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace, propertyName),
      message: `${propertyName} ${xapiValidationErrors.MUST_BE_BOOLEAN_PRESENT}`,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }
  return localErrors;
}

function validatePropertyIsNumber(parent, propertyName, trace, errors, isRequired) {
  var localErrors, localTrace, propValue;

  localErrors = errors || [];
  localTrace  = trace  || '';
  propValue   = parent[propertyName];

    if (propValue !== undefined) {
      if (propValue === null || !xapiValidationUtils.isNumber(propValue)) {
        localErrors.push({
          trace:   xapiValidationUtils.localTraceToString(localTrace, propertyName),
          message: `${propertyName} ${xapiValidationErrors.MUST_BE_NUMBER}`,
          level:   xapiErrorLevels.MUST_VIOLATION
        });
      }
    } else if (isRequired) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, propertyName),
        message: `${propertyName} ${xapiValidationErrors.MUST_BE_NUMBER_PRESENT}`,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }
    return localErrors;
}

function validateIFIProperties(target, trace, errors) {
  var localErrors, localTrace, accountTrace;

  localErrors = errors || [];
  localTrace  = trace  || '';

  if (target.mbox !== undefined && target.mbox !== null) {
    if (!xapiValidationUtils.isString(target.mbox)) {
      localErrors.push({
        trace: xapiValidationUtils.localTraceToString(localTrace, properties.MBOX),
        message: xapiValidationErrors.MUST_BE_MBOX_URI,
        level: xapiErrorLevels.MUST_VIOLATION
      });
    } else if (!xapiValidationRegex.MAILTO_URI.test(target.mbox)) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, properties.MBOX),
        message: xapiValidationErrors.MUST_BE_VALID_MBOX_FORMAT,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }
  }

  validatePropertyIsString(target, properties.MBOX_SHA_1_SUM, localTrace, localErrors,  /*isRequired*/false);
  validatePropertyIsUri(target, properties.OPEN_ID, localTrace, localErrors, /*isRequired*/false);

  if (target.account !== undefined && target.account !== null) {
    accountTrace = xapiValidationUtils.addPropToTrace(localTrace, properties.ACCOUNT);
    validatePropertyIsUri(target.account, properties.HOME_PAGE,accountTrace, localErrors, /*isRequired*/true);
    validatePropertyIsString(target.account, properties.NAME, accountTrace, localErrors, /*isRequired*/true);
    validateAbsenceOfNonWhitelistedProperties(target.account, xapiWhiteListProperties.IFI, accountTrace, localErrors);
  }

  return localErrors;
}

function getIFIs(target) {
  var ifis, propertiesLength, i, propName, propValue;

  ifis = [];
  propertiesLength = xapiValidationIfiPropertyNames.length;

  if (target === null || target === undefined)  {
    return ifis;
  }

  for (i = 0; i < propertiesLength; i += 1) {
    propName  = xapiValidationIfiPropertyNames[i];
    propValue = target[propName];

    if (propValue !== undefined && propValue !== null) {
      ifis.push({key: propName, value: propValue});
    }
  }

  return ifis;
}

function getIFICount(target) {
  return getIFIs(target).length;
}

function validateExtensions(extensions, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [],
  localTrace  = trace  || properties.EXTENSIONS;

  if (extensions === undefined) {return localErrors;}

  if (!xapiValidationUtils.isNonNullMapObject(extensions)) {
    localErrors.push({
      trace:   localTrace,
      message: xapiValidationErrors.EXTENSIONS_MUST_NOT_BE_NULL,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }
  // TODO - double-check what further enforceable constraints exist on extension object properties
  return localErrors;
}

  function validateLanguageMap(languageMap, trace, errors) {
    var localErrors, localTrace, propName, mappedValue;

    localErrors = errors || [];
    localTrace  = trace  || properties.LANGUAGE_MAP;

    if (languageMap === undefined) {return localErrors;}

    if (!xapiValidationUtils.isNonNullMapObject(languageMap)) {
      localErrors.push({
        trace:   xapiValidationUtils.addPropToTrace(localTrace),
        message: xapiValidationErrors.LANGUAGE_MAPS_MUST_NOT_BE_NULL,
        level:   xapiErrorLevels.MUST_VIOLATION
      });

      return localErrors;
    }

    for (propName in languageMap) {
      if (languageMap.hasOwnProperty(propName)) {
        if (!xapiValidationUtils.isValidLanguageTag(propName)) {
          localErrors.push({
            trace:   xapiValidationUtils.addPropToTrace(localTrace, propName),
            message: `${propName} ${xapiValidationErrors.LANGUAGE_MAP_KEY_INVALID}`,
            level:   xapiErrorLevels.MUST_VIOLATION
          });
        }

        mappedValue = languageMap[propName];

        if (mappedValue === null || mappedValue === undefined || !xapiValidationUtils.isString(mappedValue)) {
          localErrors.push({
            trace:   xapiValidationUtils.addLookupToTrace(localTrace, propName),
            message: `${propName} ${xapiValidationErrors.LANGUAGE_MAP_KEY_MUST_BE_STRING}`,
            level:   xapiErrorLevels.MUST_VIOLATION
          });
        }
      }
    }

    return localErrors;
  }

  function validateVerb(verb, trace, errors) {
    var localErrors, localTrace;

    localErrors = errors || [];
    localTrace  = trace  || properties.VERB;

    if (verb === undefined) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace),
        message: xapiValidationErrors.VERB_MUST_BE_PROVIDED,
        level:   xapiErrorLevels.MUST_VIOLATION
      });

      return localErrors;
    }

    if (!xapiValidationUtils.isNonNullMapObject(verb)) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace),
        message: xapiValidationErrors.VERB_MUST_NOT_BE_NULL,
        level:   xapiErrorLevels.MUST_VIOLATION
      });

      return localErrors;
    }

    validatePropertyIsUri(verb, properties.ID, localTrace, localErrors,  /*isRequired*/true);

    if (verb.display === undefined) {
      localErrors.push({
        trace:   xapiValidationUtils.addPropToTrace(localTrace, properties.DISPLAY),
        message: xapiValidationErrors.DISPLAY_SHOULD_BE_PROVIDED,
        level:   xapiErrorLevels.SHOULD_VIOLATION
      });
    } else {
      validateLanguageMap(verb.display, xapiValidationUtils.addPropToTrace(localTrace, properties.DISPLAY), localErrors);
    }

    validateAbsenceOfNonWhitelistedProperties(verb, xapiWhiteListProperties.URI, localTrace, localErrors);

    return localErrors;
  }

  function validateInteractionComponentArray(components, interactionType, allowedInteractionTypes, trace, errors) {
    var localErrors, localTrace, isAllowedComponentType, ids, interactionComponent, componentsLength, perComponentTrace, i;

    localErrors            = errors || [];
    localTrace             = trace  || properties.INTERACTION_COMPONENTS;
    isAllowedComponentType = allowedInteractionTypes.indexOf(interactionType) !== xapiGeneral.NO_INDEX_FOUND;
    ids                    = [];


    if (isAllowedComponentType && components !== undefined) {
      if (components === null || !xapiValidationUtils.isArray(components)) {
        localErrors.push({
          trace:   localTrace,
          message: xapiValidationErrors.INTERACTION_COMPONENT_SHOULD_BE_ARRAY,
          level:   xapiErrorLevels.SHOULD_VIOLATION
        });

      } else {
        componentsLength = components.length;

        for (i = 0; i < componentsLength; i += 1) {
          interactionComponent = components[i];
          perComponentTrace    = xapiValidationUtils.addLookupToTrace(localTrace, i);

          if (!xapiValidationUtils.isNonNullMapObject(interactionComponent)) {
            localErrors.push({
              trace:   perComponentTrace,
              message: xapiValidationErrors.INTERACTION_COMPONENT_MUST_NOT_BE_NULL,
              level:   xapiErrorLevels.MUST_VIOLATION
            });
          } else {
            validatePropertyIsString(interactionComponent, properties.ID, perComponentTrace, localErrors, /*isRequired*/true, xapiErrorLevels.MUST_VIOLATION);

            if (ids.indexOf(interactionComponent.id) !== xapiGeneral.NO_INDEX_FOUND) {
              localErrors.push({
                trace:   xapiValidationUtils.addPropToTrace(perComponentTrace, properties.ID),
                message: xapiValidationErrors.ID_MUST_BE_UNIQUE,
                level:   xapiErrorLevels.MUST_VIOLATION
              });
            } else {
              ids.push(interactionComponent.id);
            }

            if (interactionComponent.id && xapiValidationRegex.CONTAINS_WHITESPACE.test(interactionComponent.id)) {
              localErrors.push({
                trace:   xapiValidationUtils.addPropToTrace(perComponentTrace, properties.ID),
                message: xapiValidationErrors.ID_SHOULD_NOT_CONTAIN_WHITESPACES,
                level:   xapiErrorLevels.SHOULD_VIOLATION
              });
            }

            validateLanguageMap(interactionComponent.description, xapiValidationUtils.addPropToTrace(perComponentTrace, properties.DESCRIPTION), localErrors);
            validateAbsenceOfNonWhitelistedProperties(interactionComponent, xapiWhiteListProperties.COMPONENT_ARRAY, perComponentTrace, localErrors);
          }
        }
      }

    } else if (interactionType && components) {
      localErrors.push({
        trace:   localTrace,
        message: `${xapiValidationErrors.INTERACTION_TYPE_MUST_BE_VALID} ${interactionType}`,
        level:   xapiErrorLevels.SHOULD_VIOLATION
      });
    }

    return localErrors;
  }

  function validateActivityDefintion(definition, trace, errors) {
    var localErrors, localTrace, correctResponsesPatternTrace, correctResponsesPatternLength, crpItem, i;

    localErrors = errors || [];
    localTrace = trace || properties.DEFINITION;
    correctResponsesPatternTrace = xapiValidationUtils.addPropToTrace(localTrace, properties.CORRECT_RESPONSES_PATTERN);

    if (!xapiValidationUtils.isNonNullMapObject(definition)) {
      localErrors.push({
        trace:   xapiValidationUtils.addPropToTrace(localTrace),
        message: xapiValidationErrors.DEFINITIONS_MUST_BE_OBJECTS,
        level:   xapiErrorLevels.MUST_VIOLATION
      });

      return localErrors;
    }

    validateLanguageMap(definition.name, xapiValidationUtils.addPropToTrace(localTrace, properties.NAME), localErrors);
    validateLanguageMap(definition.description, xapiValidationUtils.addPropToTrace(localTrace, properties.DESCRIPTION), localErrors);

    validatePropertyIsUri(definition, properties.TYPE, localTrace, localErrors,  /*isRequired*/false);
    validatePropertyIsUrl(definition, properties.MORE_INFO, localTrace, localErrors,  /*isRequired*/false);
    validateExtensions(definition.extensions, xapiValidationUtils.addPropToTrace(localTrace, properties.EXTENSIONS), localErrors);

    if (definition.interactionType !== undefined) {
      if (definition.type !== xapiGeneral.INTERACTION_DEFINITION_TYPE) {
        localErrors.push({
          trace:   xapiValidationUtils.localTraceToString(localTrace, properties.TYPE),
          message: `${xapiValidationErrors.INTERACTION_ACTIVITY_SHOULD_HAVE} "${xapiGeneral.INTERACTION_DEFINITION_TYPE}"`,
          level:   xapiErrorLevels.SHOULD_VIOLATION
        });
      }

      if (xapiValidationInteractionTypes.indexOf(definition.interactionType) === xapiGeneral.NO_INDEX_FOUND) {
        localErrors.push({
          trace:   xapiValidationUtils.localTraceToString(localTrace, properties.INTERACTION_TYPE),
          message: xapiValidationErrors.INTERACTION_TYPE_MUST_BE_CMI,
          level:   xapiErrorLevels.MUST_VIOLATION
        });
      }
    }

    if (definition.correctResponsesPattern !== undefined) {
      if (!xapiValidationUtils.isArray(definition.correctResponsesPattern)) {
        localErrors.push({
          trace:   correctResponsesPatternTrace,
          message: xapiValidationErrors.CORRECT_RESPONSES_PATTERN_MUST_BE_ARRAY,
          level:   xapiErrorLevels.MUST_VIOLATION
        });
      } else {
        correctResponsesPatternLength = definition.correctResponsesPattern.length;

        for (i = 0; i < correctResponsesPatternLength; i += 1) {
          crpItem = definition.correctResponsesPattern[i];

          if (crpItem === null || crpItem === undefined || !xapiValidationUtils.isString(crpItem)) {
            localErrors.push({
              trace:   xapiValidationUtils.addLookupToTrace(correctResponsesPatternTrace, i),
              message: xapiValidationErrors.CORRECT_RESPONSES_PATTERN_MUST_BE_STRINGS,
              level:   xapiErrorLevels.MUST_VIOLATION
            });
          }
        }
      }
    }

    validateInteractionComponentArray(
      definition.choices,
      definition.interactionType,
      [properties.CHOICE, properties.SEQUENCING],
      xapiValidationUtils.addPropToTrace(localTrace, properties.CHOICES),
      localErrors
    );

    validateInteractionComponentArray(
      definition.scale,
      definition.interactionType,
      [properties.LIKERT],
      xapiValidationUtils.addPropToTrace(localTrace, properties.SCALE),
      localErrors
    );

    validateInteractionComponentArray(
      definition.source,
      definition.interactionType,
      [properties.MATCHING],
      xapiValidationUtils.addPropToTrace(localTrace, properties.SOURCE),
      localErrors
    );

    validateInteractionComponentArray(
      definition.target,
      definition.interactionType,
      [properties.MATCHING],
      xapiValidationUtils.addPropToTrace(localTrace, properties.TARGET),
      localErrors
    );

    validateInteractionComponentArray(
      definition.steps,
      definition.interactionType,
      [properties.PERFORMANCE],
      xapiValidationUtils.addPropToTrace(localTrace, properties.STEPS),
      localErrors
    );

    validateAbsenceOfNonWhitelistedProperties(definition, xapiWhiteListProperties.ACTIVITY_DEFINITION, localTrace, localErrors);
    return localErrors;
}

function validateActivity(activity, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace  = trace  || properties.ACTIVITY;

  if (!xapiValidationUtils.isNonNullMapObject(activity)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.ACTIVITIES_MUST_NOT_BE_NULL,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  validatePropertyIsUri(activity, properties.ID, localTrace, localErrors,  /*isRequired*/true);

  if (activity.definition !== undefined) {
    validateActivityDefintion(
      activity.definition,
      xapiValidationUtils.addPropToTrace(localTrace, properties.DEFINITION),
      localErrors
    );
  }

  validateAbsenceOfNonWhitelistedProperties(activity, xapiWhiteListProperties.ACTIVITY, localTrace, localErrors);

  return localErrors;
}

function validateStatementRef(statementRef, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace  = trace  || properties.STATEMENT_REF;

  if (!xapiValidationUtils.isNonNullMapObject(statementRef)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.STATEMENT_REF_MUST_NOT_BE_NULL_MAP_OBJECTS,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
    return localErrors;
  }


  if (statementRef.objectType !== objectTypes.STATEMENT_REF) {
    localErrors.push({
      trace:   xapiValidationUtils.addPropToTrace(localTrace, properties.OBJECT_TYPE),
      message: xapiValidationErrors.OBJECT_TYPE_MUST_BE_STATEMENT_REF,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  if (!statementRef.id || !xapiValidationRegex.UUID.test(statementRef.id)) {
    localErrors.push({
      trace:   xapiValidationUtils.addPropToTrace(localTrace, properties.ID),
      message: xapiValidationErrors.ID_MUST_BE_VALID_UUID_REF,
      level:  xapiErrorLevels.MUST_VIOLATION
    });
  }

  validateAbsenceOfNonWhitelistedProperties(statementRef, xapiWhiteListProperties.STATEMENT_REF, localTrace, localErrors);

  return localErrors;
}

function validateScore(score, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace  = trace  || properties.SCORE;

  if (score === undefined) {
      return localErrors;
  }

  validatePropertyIsNumber(score, properties.SCALED, localTrace, localErrors,  /*isRequired*/false);

  if (score.scaled !== undefined) {
    if (score.scaled < xapiGeneral.MIN_SCALED_VALUE || score.scaled > xapiGeneral.MAX_SCALED_VALUE) {
      localErrors.push({
        trace:   xapiValidationUtils.addPropToTrace(localTrace, properties.SCALED),
        message: xapiValidationErrors.SCALED_MUST_BE_BETWEEN_0_1,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }
  }

  if (score.min !== undefined) {
    validatePropertyIsNumber(score, properties.MIN, localTrace, localErrors,  /*isRequired*/false);

      if (score.raw !== undefined && score.raw < score.min) {
        localErrors.push({
          trace:   xapiValidationUtils.addPropToTrace(localTrace, properties.RAW),
          message: xapiValidationErrors.RAW_MUST_BE_GREATER_THAN_MIN,
          level:   xapiErrorLevels.MUST_VIOLATION
        });
      }

      if (score.max !== undefined && score.max < score.min) {
        localErrors.push({
          trace:   xapiValidationUtils.addPropToTrace(localTrace, properties.MAX),
          message: xapiValidationErrors.MAX_MUST_BE_GREATER_THAN_MIN,
          level:   xapiErrorLevels.MUST_VIOLATION
        });
      }
  }

  if (score.max !== undefined) {
    validatePropertyIsNumber(score, properties.MAX, localTrace, localErrors,  /*isRequired*/false);

    if (score.raw !== undefined && score.raw > score.max) {
      localErrors.push({
        trace:   xapiValidationUtils.addPropToTrace(localTrace, properties.RAW),
        message: xapiValidationErrors.RAW_MUST_BE_LESS_THAN_MAX,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }
  }

  validatePropertyIsNumber(score, properties.RAW, localTrace, localErrors,  /*isRequired*/false);
  validateAbsenceOfNonWhitelistedProperties(score, xapiWhiteListProperties.SCORE, localTrace, localErrors);

  return localErrors;
}

function validateResult(result, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace  = trace  || properties.RESULT;

  if (result === undefined) {return localErrors;}

  if (!xapiValidationUtils.isNonNullMapObject(result)) {
    localErrors.push({
      trace:   xapiValidationUtils.addPropToTrace(localTrace),
      message: xapiValidationErrors.RESULT_MUST_BE_MAP_OBJECT,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  validateScore(result.score, xapiValidationUtils.addPropToTrace(localTrace, properties.SCORE), localErrors);
  validatePropertyIsBoolean(result, properties.SUCCESS, localTrace, localErrors,  /*isRequired*/false);
  validatePropertyIsBoolean(result, properties.COMPLETION, localTrace, localErrors,  /*isRequired*/false);
  validatePropertyIsString(result, properties.RESPONSE, localTrace, localErrors,  /*isRequired*/false);
  validateExtensions(result.extensions, xapiValidationUtils.addPropToTrace(localTrace, properties.EXTENSIONS), localErrors);

  if (result.duration !== undefined && (result.duration === null || !xapiValidationUtils.isString(result.duration) || !xapiValidationRegex.ISO_8601_DURATION.test(result.duration))) {
    localErrors.push({
      trace:   xapiValidationUtils.addPropToTrace(localTrace, properties.DURATION),
      message: xapiValidationErrors.DURATION_MUST_BE_VALID,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  validateAbsenceOfNonWhitelistedProperties(result, xapiWhiteListProperties.RESULT, localTrace, localErrors);

  return localErrors;
}

function validatePropertyIsISO8601String(parent, propertyName, trace, errors) {
  var localErrors, localTrace, matched, datetime;

  localErrors = errors || [];
  localTrace  = trace  || properties.DATE_TIME;
  datetime    = parent[propertyName];

  if (datetime === undefined) {return localErrors;}

  if (datetime === null || !xapiValidationUtils.isString(datetime)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace, propertyName),
      message: `${propertyName} ${xapiValidationErrors.MUST_BE_STRING}`,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  matched = xapiValidationRegex.ISO_8601_DATE_TIME.exec(datetime);

  if (matched) {
    if (!dateIncludesZoneInformation(matched)) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, propertyName),
        message: xapiValidationErrors.DATE_SHOULD_INCLUDE_ZONE_INFORMATION,
        level:   xapiErrorLevels.SHOULD_VIOLATION
      });
    }
  } else {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace, propertyName),
      message: xapiValidationErrors.DATE_MUST_BE_VALID,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  return localErrors;
}

function validateVersion(version, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace  = trace  || properties.VERSION;

  if (version === undefined) {return localErrors;}

  if (version === null || !xapiValidationUtils.isString(version) || !xapiValidationRegex.SEMVER_1_P_0_P_0.test(version)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.VERSION_MUST_COMPLY_SEMANTIC_VERSIONING,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  return localErrors;
}

function validateAttachmentObject(attachment, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace  = trace || properties.ATTACHMENT;

  if (!xapiValidationUtils.isNonNullMapObject(attachment)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.ATTACHMENTS_MUST_NOT_BE_NULL_MAP_OBJECTS,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  if (attachment.display === undefined) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace, properties.DISPLAY),
      message: xapiValidationErrors.DISPLAY_SHOULD_BE_PROVIDED,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

  } else {
    validateLanguageMap(attachment.display, xapiValidationUtils.addPropToTrace(localTrace, properties.DISPLAY), localErrors);
  }

  validateLanguageMap(attachment.description, xapiValidationUtils.addPropToTrace(localTrace, properties.DESCRIPTION), localErrors);
  validatePropertyIsUri(attachment, properties.USAGE_TYPE, localTrace, localErrors, /*isRequired*/true, xapiErrorLevels.MUST_VIOLATION);
  validatePropertyIsUri(attachment, properties.FILE_URL, localTrace, localErrors,  /*isRequired*/false, xapiErrorLevels.MUST_VIOLATION);

  // TODO - more complete validation for Internet Media Type via RFC 2046
  validatePropertyIsString(attachment, properties.CONTENT_TYPE, localTrace, localErrors, /*isRequired*/true, xapiErrorLevels.MUST_VIOLATION);

  if (attachment.length === undefined || attachment.length === null || !xapiValidationUtils.isNumber(attachment.length) || (attachment.length % 1 !== 0)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace, properties.LENGTH),
      message: xapiValidationErrors.LENGTH_MUST_BE_INTEGER,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  if (attachment.sha2 === undefined) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace, properties.SHA2),
      message: xapiValidationErrors.SHA2_MUST_BE_PROVIDED_ON_ATTACHMENT_OBJECTS,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  } else if (attachment.sha2 === null || !xapiValidationUtils.isString(attachment.sha2) || !xapiValidationRegex.BASE_64.test(attachment.sha2)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace, properties.SHA2),
      message: xapiValidationErrors.SHA2_MUST_CONTAIN_BASE_64_STRING,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  validateAbsenceOfNonWhitelistedProperties(attachment, xapiWhiteListProperties.ATTACHMENT, localTrace, localErrors);
  return localErrors;
}

function validateAttachments(attachments, trace, errors) {
  var localErrors, localTrace, attachmentsLength, i;

  localErrors = errors || [];
  localTrace  = trace  || properties.ATTACHMENTS;

  if (attachments === undefined) {return localErrors;}

  if (attachments === null || !xapiValidationUtils.isArray(attachments)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.ATTACHMENTS_MUST_BE_NOT_NULL_ARRAY,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  attachmentsLength = attachments.length;
  for (i = 0; i < attachmentsLength; i += 1) {
    validateAttachmentObject(attachments[i], xapiValidationUtils.addLookupToTrace(localTrace, i), localErrors);
  }

  return localErrors;
}

function validateAgent(agent, trace, errors) {
  var localErrors, localTrace, ifiCount;

  localErrors = errors || [];
  localTrace  = trace  || properties.AGENT;

  if (!xapiValidationUtils.isNonNullMapObject(agent)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.AGENT_MUST_BE_NON_NULL_MAP_OBJECT,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
    return localErrors;
  }

  ifiCount = getIFICount(agent);

  if (ifiCount !== xapiGeneral.NUMER_OF_SPECIFIED_IFI_PROPERTIES) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.AGENT_IFI_PROPERTIES_MUST_BE_SPECIFIED,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  if (agent.objectType === objectTypes.GROUP) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.AGENT_MUST_NOT_HAVE_GROUP_CHARACTERISTICS,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  validateIFIProperties(agent, localTrace, localErrors);
  validatePropertyIsString(agent, properties.NAME, localTrace, localErrors,  /*isRequired*/false);

  validateAbsenceOfNonWhitelistedProperties(agent, xapiWhiteListProperties.AGENT, localTrace, localErrors);

  return localErrors;
}

function validateGroup(group, trace, errors) {
  var localErrors, localTrace, memberTrace, ifiCount, numMembers, i;

  localErrors = errors || [];
  localTrace  = trace  || properties.GROUP;
  memberTrace = xapiValidationUtils.addPropToTrace(localTrace, properties.MEMBER);

  if (!xapiValidationUtils.isNonNullMapObject(group)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.GROUP_MUST_BE_NON_NULL_MAP_OBJECT,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  ifiCount = getIFICount(group);

  if (ifiCount === 0) {
    if (group.member === null || group.member === undefined) {
      localErrors.push({
        trace:   memberTrace,
        message: xapiValidationErrors.MEMBER_MUST_BE_PROVIDED_FOR_ANONYMOUS_GROUPS,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }
  } else if (ifiCount > xapiGeneral.NUMER_OF_SPECIFIED_IFI_PROPERTIES) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.GROUP_IFI_PROPERTIES_MUST_BE_SPECIFIED,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  validateIFIProperties(group, localTrace, localErrors);

  validatePropertyIsString(group, properties.NAME, localTrace, localErrors,  /*isRequired*/false);

  if (group.member !== undefined) {
    if (group.member === null || !xapiValidationUtils.isArray(group.member)) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, properties.MEMBER),
        message: xapiValidationErrors.GROUP_MEMBER_MUST_BE_ARRAY,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    } else {
      numMembers = group.member.length;

      for (i = 0; i < numMembers; i += 1) {
        validateAgent(group.member[i], xapiValidationUtils.addLookupToTrace(memberTrace, i), localErrors);
      }
    }
  }

  validateAbsenceOfNonWhitelistedProperties(group, xapiWhiteListProperties.GROUP, localTrace, localErrors);

  return localErrors;
}

function validateActor(actor, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace  = trace  || properties.ACTOR;

  if (actor === null || actor === undefined) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.ACTOR_MUST_BE_PROVIDED,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  if (xapiValidationUtils.isGroup(actor)) {
    validateGroup(actor, localTrace, localErrors);
  } else {
    validateAgent(actor, localTrace, localErrors);
  }

  return localErrors;
}

function validateAuthority(authority, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace  = trace  || properties.AUTHORITY;

  if (authority === undefined) {
    return localErrors;
  }

  if (!xapiValidationUtils.isNonNullMapObject(authority)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.AUTHORITY_MUST_BE_NON_NULL_MAP_OBJECT,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }
  if (xapiValidationUtils.isGroup(authority)) {
    validateGroup(authority, localTrace, localErrors);
    if (!authority.member || !authority.member.length || authority.member.length !== xapiGeneral.GROUP_AUTHORITY_AGENT_MEMBERS) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, properties.MEMBER),
        message: xapiValidationErrors.GROUP_AUTHORITY_AGENT_MEMBERS_MUST_BE_TWO,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }
  } else {
    validateAgent(authority, localTrace, localErrors);
  }

  return localErrors;
}

function validateContextActivitySubContext(subContext, trace, errors) {
  var localErrors, localTrace, numActivities, i;

  localErrors = errors || [];
  localTrace  = trace  || properties.SUB_CONTEXT;

  if (subContext === undefined) {return localErrors;}

  if (subContext === null) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.CONTEXT_ACTIVITIES_MUST_NOT_BE_NULL,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  } else if (xapiValidationUtils.isArray(subContext)) {
      numActivities = subContext.length;
      for (i = 0; i < numActivities; i += 1) {
        validateActivity(subContext[i], xapiValidationUtils.addLookupToTrace(localTrace, i), localErrors);
      }
  } else if (xapiValidationUtils.isObject(subContext)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.CONTEXT_ACTIVITIES_SHOULD_BE_AN_ARRAY,
      level:   xapiErrorLevels.SHOULD_VIOLATION
    });

    validateActivity(subContext, localTrace, localErrors);
  } else {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.CONTEXT_ACTIVITIES_MUST_BE_ARRAY_OR_ACTIVITY_OBJ,
      level:   xapiErrorLevels.MUST_VIOLATION});
  }
  return localErrors;
}

function validateContextActivities(contextActivities, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace  = trace  || properties.CONTEXT_ACTIVITIES;

  if (contextActivities === undefined) {
    return localErrors;
  }

  if (!xapiValidationUtils.isNonNullMapObject(contextActivities)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.CONTEXT_ACTIVITIES_MUST_BE_NON_NULL_MAP_OBJECT,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
    return localErrors;
  }

  validateContextActivitySubContext(contextActivities.parent, xapiValidationUtils.addPropToTrace(localTrace, properties.PARENT), localErrors);
  validateContextActivitySubContext(contextActivities.grouping, xapiValidationUtils.addPropToTrace(localTrace, properties.GROUPING), localErrors);
  validateContextActivitySubContext(contextActivities.category, xapiValidationUtils.addPropToTrace(localTrace, properties.CATEGORY), localErrors);
  validateContextActivitySubContext(contextActivities.other, xapiValidationUtils.addPropToTrace(localTrace, properties.OTHER), localErrors);

  validateAbsenceOfNonWhitelistedProperties(contextActivities, xapiWhiteListProperties.CONTEXT_ACTIVITIES, localTrace, localErrors);

  return localErrors;
}

function validateContext(context, trace, errors, statementObjectObjectType) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace = trace || properties.CONTEXT;

  if (context === undefined) {return localErrors;}

  if (!xapiValidationUtils.isNonNullMapObject(context)) {
    localErrors.push({
      trace:   localTrace,
      message: xapiValidationErrors.CONTEXT_MUST_BE_NON_NUL_MAP_OBJECT,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  if (context.registration !== undefined && (context.registration === null || !xapiValidationUtils.isString(context.registration) || !xapiValidationRegex.UUID.test(context.registration))) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace, properties.REGISTRATION),
      message: xapiValidationErrors.REGISTRATION_MUST_BE_UUID_STRING,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  if ([objectTypes.GROUP, objectTypes.AGENT].indexOf(statementObjectObjectType) !== xapiGeneral.NO_INDEX_FOUND) {
    if (context.revision !== undefined) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, properties.REVISION),
        message: xapiValidationErrors.REVISION_MUST_BE_AGENT_OR_GROUP,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }

    if (context.platform !== undefined) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, properties.PLATFORM),
        message: xapiValidationErrors.PLATFORM_MUST_NOT_BE_USED_WITH_REVISION_AGENT_OR_GROUP,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }
  }

  validatePropertyIsString(context, properties.REVISION, localTrace, localErrors, /*isRequired*/false, xapiErrorLevels.MUST_VIOLATION);
  validatePropertyIsString(context, properties.PLATFORM, localTrace, localErrors, /*isRequired*/false, xapiErrorLevels.MUST_VIOLATION);

  if (context.team !== undefined) {
      validateGroup(context.team, xapiValidationUtils.addPropToTrace(localTrace, properties.TEAM), localErrors);
  }

  if (context.contextActivities !== undefined) {
    validateContextActivities(context.contextActivities, xapiValidationUtils.addPropToTrace(localTrace, properties.CONTEXT_ACTIVITIES), localErrors);
  }

  if (context.language !== undefined && !xapiValidationUtils.isValidLanguageTag(context.language)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace, properties.LANGUAGE),
      message: xapiValidationErrors.LANGUAGE_MUST_BE_STRING,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  if (context.statement !== undefined) {
    validateStatementRef(context.statement, xapiValidationUtils.addPropToTrace(localTrace, properties.STATEMENT), localErrors);
  }

  if (context.instructor !== undefined) {
    if (xapiValidationUtils.isGroup(context.instructor)) {
      validateGroup(context.instructor, xapiValidationUtils.addPropToTrace(localTrace, properties.INSTRUCTOR), localErrors);
    } else {
      validateAgent(context.instructor, xapiValidationUtils.addPropToTrace(localTrace, properties.INSTRUCTOR), localErrors);
    }
  }

  validateExtensions(context.extensions, xapiValidationUtils.addPropToTrace(localTrace, properties.EXTENSIONS), localErrors);
  validateAbsenceOfNonWhitelistedProperties(
    context,
    [
      properties.REGISTRATION,
      properties.INSTRUCTOR,
      properties.TEAM,
      properties.CONTEXT_ACTIVITIES,
      properties.REVISION,
      properties.PLATFORM,
      properties.LANGUAGE,
      properties.STATEMENT,
      properties.EXTENSIONS
    ],
    localTrace,
    localErrors
  );

  return localErrors;
}

function validateObject(object, trace, errors, isWithinSubStatement) {
  var localErrors, localTrace, objectType;

  localErrors = errors || [];
  localTrace  = trace  || properties.OBJECT;

  if (object === undefined) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.OBJECT_MUST_BE_DEFINED,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  if (!xapiValidationUtils.isNonNullMapObject(object)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.OBJECT_MUST_BE_NON_NULL_MAP_OBJECT,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  validatePropertyIsString(object, properties.OBJECT_TYPE, localTrace, localErrors, /*isRequired*/true, xapiErrorLevels.SHOULD_VIOLATION);
  objectType = object.objectType || objectTypes.ACTIVITY;

  // TODO: Switch
  if (objectType === objectTypes.ACTIVITY) {
    validateActivity(object, localTrace, localErrors);
  } else if (objectType === objectTypes.AGENT) {
    validateAgent(object, localTrace, localErrors);
  } else if (objectType === objectTypes.GROUP) {
    validateGroup(object, localTrace, localErrors);
  } else if (objectType === objectTypes.STATEMENT_REF) {
    validateStatementRef(object, localTrace, localErrors);
  } else if (objectType === objectTypes.SUB_STATEMENT) {
    if (isWithinSubStatement) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, properties.OBJECT_TYPE),
        message: xapiValidationErrors.SUB_STATEMENT_MUST_NOT_CONTAIN_SUB_STATEMENT,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }

    validateStatement(object, localTrace, localErrors,  /*isSubStatement*/true);
  } else {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace, properties.OBJECT_TYPE),
      message: `${xapiValidationErrors.OBJECT_TYPE_MUST_BE_VALID_OPTION} ${xApiValidObjectTypes.toString()}`,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }
  return localErrors;
}

function validateStatement(statement, trace, errors, isSubStatement) {
  var localErrors, localTrace, statementObjectObjectType, whitelistedProperties;

  localErrors = errors || [];
  localTrace  = trace  || properties.STATEMENT;

  whitelistedProperties = xapiWhiteListProperties.STATEMENT;

  if (!xapiValidationUtils.isNonNullMapObject(statement)) {
    localErrors.push({
      trace:   xapiValidationUtils.localTraceToString(localTrace),
      message: xapiValidationErrors.STATEMENT_REF_MUST_NOT_BE_NULL_MAP_OBJECTS,
      level:   xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  if (!isSubStatement) {
    if (statement.id === null || statement.id === undefined || !xapiValidationUtils.isString(statement.id)) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, properties.ID),
        message: xapiValidationErrors.IDS_SHOULD_BE_GENERATED_BY_LRS,
        level:   xapiErrorLevels.SHOULD_VIOLATION
      });
    } else if (!xapiValidationRegex.UUID.test(statement.id)) {
      localErrors.push({
        trace:   xapiValidationUtils.localTraceToString(localTrace, properties.ID),
        message: xapiValidationErrors.ID_MUST_BE_VALID,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }
  } else {
    whitelistedProperties = xapiWhiteListProperties.SUB_STATEMENT;
  }

  validateActor(statement.actor, xapiValidationUtils.addPropToTrace(localTrace, properties.ACTOR), localErrors);
  validateVerb(statement.verb, xapiValidationUtils.addPropToTrace(localTrace, properties.VERB), localErrors);
  validateObject(statement.object, xapiValidationUtils.addPropToTrace(localTrace, properties.OBJECT), localErrors, isSubStatement);
  validateResult(statement.result, xapiValidationUtils.addPropToTrace(localTrace, properties.RESULT), localErrors);

  statementObjectObjectType = statement.object && statement.object.objectType ? statement.object.objectType : objectTypes.ACTIVITY;

  validateContext(statement.context, xapiValidationUtils.addPropToTrace(localTrace, properties.CONTEXT), localErrors, statementObjectObjectType);
  validatePropertyIsISO8601String(statement, properties.TIMESTAMP, localTrace, localErrors);
  validatePropertyIsISO8601String(statement, properties.STORED, localTrace, localErrors);

  validateAuthority(statement.authority, xapiValidationUtils.addPropToTrace(localTrace, properties.AUTHORITY), localErrors);
  validateVersion(statement.version, xapiValidationUtils.addPropToTrace(localTrace, properties.VERSION), localErrors);
  validateAttachments(statement.attachments, xapiValidationUtils.addPropToTrace(localTrace, properties.ATTACHMENTS), localErrors);

  validateAbsenceOfNonWhitelistedProperties(statement, whitelistedProperties, localTrace, localErrors);

  return localErrors;
}

function makeStatementReport(statement) {
  var localErrors;

  localErrors = [];
  validateStatement(statement, properties.STATEMENT, localErrors,  /*isRequired*/false);

  return makeV1Report(statement, localErrors);
}

function validateAmbiguousTypeStatement(statement) {
  var statementObject;

  if (statement === undefined) {
    return makeV1SingleErrorReport(/*instance*/null, {
      trace:   properties.STATEMENT,
      message: xapiValidationErrors.STATEMENT_ARGUMENT_MUST_BE_PROVIDED,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  if (statement === null) {
    return makeV1SingleErrorReport(/*instance*/null, {
      trace:   properties.STATEMENT,
      message: xapiValidationErrors.STATEMENT_MUST_NOT_BE_NULL,
      level:   xapiErrorLevels.MUST_VIOLATION
    });
  }

  if (xapiValidationUtils.isString(statement)) {
    try {
      statementObject = JSON.parse(statement);
      if (statementObject === null || !xapiValidationUtils.isObject(statementObject) || xapiValidationUtils.isArray(statementObject)) {
        return makeV1SingleErrorReport(statementObject, {
          trace:   properties.STATEMENT,
          message: xapiValidationErrors.STATEMENT_MUST_BE_PARSED_CORRECTLY,
          level:   xapiErrorLevels.MUST_VIOLATION
        });
      }
    } catch (e) {
      return makeV1SingleErrorReport(statementObject, {
        trace:   properties.STATEMENT,
        message: `${xapiValidationErrors.INVALID_JSON}: ${e.message}`,
        level:   xapiErrorLevels.MUST_VIOLATION
      });
    }

    return makeStatementReport(statementObject);
  }

  if (xapiValidationUtils.isObject(statement) && !xapiValidationUtils.isArray(statement)) {
    return makeStatementReport(statement);
  }

  return makeV1SingleErrorReport(/*instance*/null, {
    trace:   properties.STATEMENT,
    message: xapiValidationErrors.STATEMENT_ARGUMENT_IS_NOT_VALID,
    level:   xapiErrorLevels.MUST_VIOLATION
  });
}

function dateIncludesZoneInformation(matched) {
  return matched[dateFormatRegexPositions.ZONE] ||
          (matched[dateFormatRegexPositions.RELATIVE_TIME] && matched[dateFormatRegexPositions.TIME_ZONE_HOUR]);
}

xapiValidator = {
  validateStatement: validateAmbiguousTypeStatement
};

export default xapiValidator;
window.xapiValidator = xapiValidator; //FIXME
