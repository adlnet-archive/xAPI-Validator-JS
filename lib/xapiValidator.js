(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.beepBoop = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var xapiErrorLevels = Object.freeze({
  MAY_VIOLATION: 'MAY_VIOLATION',
  MUST_VIOLATION: 'MUST_VIOLATION',
  SHOULD_VIOLATION: 'SHOULD_VIOLATION'
});

var xapiValidationErrors = Object.freeze({
  UNEXPECTED: 'Unexpected property not permitted',
  MUST_BE_STRING: 'property, if present, must be a string.',
  MUST_BE_PRESENT: 'property was required to be a string but was absent.',
  MUST_BE_URI_STRING: 'property, if present, must be a URI string.',
  MUST_BE_URI_PRESENT: 'property was required to be a URI string but was absent.',
  MUST_BE_IRI_STRING: 'property, if present, should be a IRI-like absolute URI per RFC 3987.',
  MUST_BE_BOOLEAN: 'property, if present, must be a Boolean.',
  MUST_BE_BOOLEAN_PRESENT: 'property was required to be a Boolean but was absent.',
  MUST_BE_NUMBER: 'property, if present, must be a Number.',
  MUST_BE_NUMBER_PRESENT: 'property was required to be a Number but was absent.',
  MUST_BE_MBOX_URI: 'mbox property was required to be a mailto URI string but was not a string at all.',
  MUST_BE_VALID_MBOX_FORMAT: 'mbox property was required to be a mailto URI string but did not match the mailto format.',
  EXTENSIONS_MUST_NOT_BE_NULL: 'If present, the extensions property must be a non-null map object.',
  LANGUAGE_MAPS_MUST_NOT_BE_NULL: 'Language Maps, when present, must be non-null map objects',
  LANGUAGE_MAP_KEY_INVALID: 'key, Language does not conform to RFC 5646',
  LANGUAGE_MAP_KEY_MUST_BE_STRING: 'key: Language Map value should be a String, but was not',
  VERB_MUST_BE_PROVIDED: 'Verb must be provided',
  VERB_MUST_NOT_BE_NULL: 'Verb property value must a non-null map object.',
  DISPLAY_SHOULD_BE_PROVIDED: '"display" property should be provided.',
  INTERACTION_ACTIVITY_SHOULD_HAVE: 'Interaction Activity Definitions should have a type property of',
  INTERACTION_COMPONENT_SHOULD_BE_ARRAY: 'This interaction component collection property should be an array.',
  INTERACTION_COMPONENT_MUST_NOT_BE_NULL: 'This interaction component collection member must be a non-null map object',
  INTERACTION_TYPE_MUST_BE_CMI: 'If present, the "interactionType" value must be a CMI interaction type option.',
  ID_MUST_BE_UNIQUE: '"id" properties must be unique within each interaction component array',
  ID_SHOULD_NOT_CONTAIN_WHITESPACES: '"id" properties on interaction components should not contain whitespace',
  INTERACTION_TYPE_MUST_BE_VALID: 'This interaction component collection property is not associated with the present interactionType of: ',
  DEFINITIONS_MUST_BE_OBJECTS: '"definitions", when present, must be map objects',
  CORRECT_RESPONSES_PATTERN_MUST_BE_ARRAY: 'If present, the "correctResponsesPattern" value must be an Array of strings.',
  CORRECT_RESPONSES_PATTERN_MUST_BE_STRINGS: '"correctResponsesPattern" items must be strings.',
  ACTIVITIES_MUST_NOT_BE_NULL_MAP_OBJECTS: 'Activities must be non-null map objects',
  STATEMENT_REF_MUST_NOT_BE_NULL_MAP_OBJECTS: 'StatementRef instances must be non-null map objects',
  OBJECT_TYPE_MUST_BE_STATEMENT_REF: '"objectType" property value must be "StatementRef" for statement reference objects.',
  ID_MUST_BE_VALID_UUID_REF: '"id" property value must be a valid UUID string for statement reference objects.',
  SCALED_MUST_BE_BETWEEN_0_1: 'If present, the scaled property value must be between 0 and 1',
  RAW_MUST_BE_GREATER_THAN_MIN: 'If both "raw" and "min" are present, the raw property value should be greater than min',
  MAX_MUST_BE_GREATER_THAN_MIN: 'If both "max" and "min" are present, the max property value should be greater than min',
  RAW_MUST_BE_LESS_THAN_MAX: 'If both "raw" and "max" are present, the raw property value should be less than max',
  RESULT_MUST_BE_MAP_OBJECT: 'If present, the result must be a map object',
  DURATION_MUST_BE_VALID: 'If present, the "duration" property value must be an ISO 8601 duration',
  DATE_SHOULD_INCLUDE_ZONE_INFORMATION: 'ISO 8601 date time strings used in the xAPI should include time zone information.',
  DATE_MUST_BE_VALID: 'This propertys string value must be conformant to ISO 8601 for Date Times.',
  VERSION_MUST_COMPLY_SEMANTIC_VERSIONING: '"version" must be a non-null string that complies with Semantic Versioning 1.0.0',
  ATTACHMENTS_MUST_NOT_BE_NULL_MAP_OBJECTS: '"attachment" instances must be non-null map objects.',
  LENGTH_MUST_BE_INTEGER: '"length" property must be provided with an integer value',
  SHA2_MUST_BE_PROVIDED_ON_ATTACHMENT_OBJECTS: '"sha2" property must be provided on attachment objects',
  SHA2_MUST_CONTAIN_BASE_64_STRING: '"sha2" property must contain a string with base64 contents',
  ATTACHMENTS_MUST_BE_NOT_NULL_ARRAY: '"attachments" must be a non-null Array.',
  AGENT_MUST_BE_NON_NULL_MAP_OBJECT: '"agent" must be a non-null map object',
  AGENT_IFI_PROPERTIES_MUST_BE_SPECIFIED: 'Exactly one Inverse Functional Identifier property must be specified for an "agent".',
  AGENT_MUST_NOT_HAVE_GROUP_CHARACTERISTICS: 'Invalid object with characteristics of a Group when an Agent was expected.',
  GROUP_MUST_BE_NON_NULL_MAP_OBJECT: '"group" must be a non-null map object',
  MEMBER_MUST_BE_PROVIDED_FOR_ANONYMOUS_GROUPS: '"member" property must be provided for Anonymous Groups.',
  GROUP_IFI_PROPERTIES_MUST_BE_SPECIFIED: 'Exactly one Inverse Functional Identifier property must be specified for a "group".',
  GROUP_MEMBER_MUST_BE_ARRAY: 'If present, the member property of a Group must be an Array',
  ACTOR_MUST_BE_PROVIDED: 'Actor must be provided.',
  AUTHORITY_MUST_BE_NON_NULL_MAP_OBJECT: 'If present, the "authority" property must be a non-null map object.',
  GROUP_AUTHORITY_AGENT_MEMBERS_MUST_BE_TWO: 'If used as a Group, the "authority" property must contain a "member" property that is an array containing exactly two Agent objects.',
  CONTEXT_ACTIVITIES_MUST_NOT_BE_NULL: '"Context Activities" property values must not be null.',
  CONTEXT_ACTIVITIES_SHOULD_BE_AN_ARRAY: 'Context Activities property values should prefer to be an array of Activities rather than a single Activity object.',
  CONTEXT_ACTIVITIES_MUST_BE_ARRAY_OR_ACTIVITY_OBJ: 'Context Activities property values must be an array of Activity Objects or a single Activity Object.',
  CONTEXT_ACTIVITIES_MUST_BE_NON_NULL_MAP_OBJECT: 'The Context Activities instances must be a non-null map object.',
  CONTEXT_MUST_BE_NON_NUL_MAP_OBJECT: 'If present, the "context" property must be a non-null map object.',
  REGISTRATION_MUST_BE_UUID_STRING: 'If present, the registration property must be a UUID string.',
  REVISION_MUST_BE_AGENT_OR_GROUP: 'The revision property must not be used if the Statement\'s Object is an Agent or Group.',
  LANGUAGE_MUST_BE_STRING: 'The language property must be encoded as an RFC 5646 compliant string, but was not.',
  OBJECT_MUST_BE_DEFINED: '"object" property must be provided.',
  OBJECT_MUST_BE_NON_NULL_MAP_OBJECT: '"object" property must be a non-null map object.',
  SUB_STATEMENT_MUST_NOT_CONTAIN_SUB_STATEMENT: 'A SubStatement must not contain a SubStatement',
  OBJECT_TYPE_MUST_BE_VALID_OPTION: 'object\'s "objectType" did not match a valid option',
  IDS_SHOULD_BE_GENERATED_BY_LRS: 'Ids should be generated by the Activity Provider, and must be generated by the LRS',
  ID_MUST_BE_VALID: 'Id was not a valid UUID',
  STATEMENT_ARGUMENT_MUST_BE_PROVIDED: 'No statement argument provided.',
  STATEMENT_MUST_NOT_BE_NULL: 'Null statement argument provided.',
  STATEMENT_MUST_BE_PARSED_CORRECTLY: 'Null or non-object statement value parsed from provided statment JSON.',
  INVALID_JSON: 'Invalid JSON. The statement could not be parsed.',
  STATEMENT_ARGUMENT_IS_NOT_VALID: 'Statement argument provided was not a valid object or a valid JSON string.'
});

exports.xapiErrorLevels = xapiErrorLevels;
exports.xapiValidationErrors = xapiValidationErrors;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var xapiGeneral = Object.freeze({
  FIRST_REPORT_VERSTION: '1.0.0',
  GROUP_AUTHORITY_AGENT_MEMBERS: 2,
  INTERACTION_DEFINITION_TYPE: 'http://adlnet.gov/expapi/activities/cmi.interaction',
  MAX_SCALED_VALUE: 1,
  MIN_SCALED_VALUE: 0,
  NO_INDEX_FOUND: -1,
  NUMER_OF_SPECIFIED_IFI_PROPERTIES: 1
});

exports.xapiGeneral = xapiGeneral;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var interactionTypes = exports.interactionTypes = Object.freeze({
  CHOICE: 'choice',
  FILL_IN: 'fill-in',
  LIKERT: 'likert',
  LONG_FILL_IN: 'long-fill-in',
  MATCHING: 'matching',
  NUMERIC: 'numeric',
  OTHER: 'other',
  PERFORMANCE: 'performance',
  SEQUENCING: 'sequencing',
  TRUE_FALSE: 'true-false'
});

var xapiValidationInteractionTypes = exports.xapiValidationInteractionTypes = Object.freeze([interactionTypes.CHOICE, interactionTypes.FILL_IN, interactionTypes.LIKERT, interactionTypes.LONG_FILL_IN, interactionTypes.MATCHING, interactionTypes.NUMERIC, interactionTypes.OTHER, interactionTypes.PERFORMANCE, interactionTypes.SEQUENCING, interactionTypes.TRUE_FALSE]);

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var properties = Object.freeze({
  ACCOUNT: 'account',
  ACTIVITY: 'activity',
  ACTOR: 'actor',
  AGENT: 'agent',
  ATTACHMENT: 'attachment',
  ATTACHMENTS: 'attachments',
  AUTHORITY: 'authority',
  CATEGORY: 'category',
  CHOICE: 'choice',
  CHOICES: 'choices',
  COMPLETION: 'completion',
  CONTENT_TYPE: 'contentType',
  CONTEXT_ACTIVITIES: 'contextActivities',
  CONTEXT: 'context',
  CORRECT_RESPONSES_PATTERN: 'correctResponsesPattern',
  DATE_TIME: 'dateTime',
  DEFINITION: 'definition',
  DESCRIPTION: 'description',
  DISPLAY: 'display',
  DURATION: 'duration',
  EXTENSIONS: 'extensions',
  FILE_URL: 'fileUrl',
  GROUP: 'group',
  GROUPING: 'grouping',
  HOME_PAGE: 'homePage',
  ID: 'id',
  INSTRUCTOR: 'instructor',
  INTERACTION_COMPONENTS: 'interactionComponents',
  INTERACTION_TYPE: 'interactionType',
  LANGUAGE_MAP: 'languageMap',
  LANGUAGE: 'language',
  LENGTH: 'length',
  LIKERT: 'likert',
  MATCHING: 'matching',
  MAX: 'max',
  MBOX_SHA_1_SUM: 'mbox_sha1sum',
  MBOX: 'mbox',
  MEMBER: 'member',
  MIN: 'min',
  MORE_INFO: 'moreInfo',
  NAME: 'name',
  OBJECT_TYPE: 'objectType',
  OBJECT: 'object',
  OPEN_ID: 'openID',
  OTHER: 'other',
  PARENT: 'parent',
  PERFORMANCE: 'performance',
  PLATFORM: 'platform',
  RAW: 'raw',
  REGISTRATION: 'registration',
  RESPONSE: 'response',
  RESULT: 'result',
  REVISION: 'revision',
  SCALE: 'scale',
  SCALED: 'scaled',
  SCORE: 'score',
  SEQUENCING: 'sequencing',
  SHA2: 'sha2',
  SOURCE: 'source',
  STATEMENT_REF: 'statementRef',
  STATEMENT: 'statement',
  STEPS: 'steps',
  STORED: 'stored',
  SUB_CONTEXT: 'subContext',
  SUCCESS: 'success',
  TARGET: 'target',
  TEAM: 'team',
  TIMESTAMP: 'timestamp',
  TYPE: 'type',
  USAGE_TYPE: 'usageType',
  VERB: 'verb',
  VERSION: 'version'
});

var objectTypes = Object.freeze({
  GROUP: 'Group',
  AGENT: 'Agent',
  ACTIVITY: 'Activity',
  STATEMENT_REF: 'StatementRef',
  SUB_STATEMENT: 'SubStatement'
});

var xapiValidationIfiPropertyNames = Object.freeze([properties.ACCOUNT, properties.MBOX_SHA_1_SUM, properties.MBOX, properties.OPEN_ID]);

var xApiValidObjectTypes = Object.freeze([objectTypes.GROUP, objectTypes.AGENT, objectTypes.ACTIVITY, objectTypes.STATEMENT_REF, objectTypes.SUB_STATEMENT]);

exports.properties = properties;
exports.objectTypes = objectTypes;
exports.xapiValidationIfiPropertyNames = xapiValidationIfiPropertyNames;
exports.xApiValidObjectTypes = xApiValidObjectTypes;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var xapiValidationRegex = Object.freeze({
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  ISO_8601_DURATION: /^P((\d+([\.,]\d+)?Y)?(\d+([\.,]\d+)?M)?(\d+([\.,]\d+)?W)?(\d+([\.,]\d+)?D)?)?(T(\d+([\.,]\d+)?H)?(\d+([\.,]\d+)?M)?(\d+([\.,]\d+)?S)?)?$/,
  ISO_8601_DATE_TIME: /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
  MAILTO_URI: /^mailto:/,
  CONTAINS_WHITESPACE: /\s/g,
  SEMVER_1_P_0_P_0: /^((\d+)\.(\d+)\.(\d+))(?:-([\dA-Za-z\-]+))?$/,
  BASE_64: /^(?:[A-Za-z0-9\+\/]{4})*(?:[A-Za-z0-9\+\/]{2}==|[A-Za-z0-9\+\/]{3}=|[A-Za-z0-9\+\/]{4})$/,
  IRI: /^[a-z](?:[\-a-z0-9\+\.])*:(?:\/\/(?:(?:%[0-9a-f][0-9a-f]|[\-a-z0-9\._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\u10000-\u1FFFD\u20000-\u2FFFD\u30000-\u3FFFD\u40000-\u4FFFD\u50000-\u5FFFD\u60000-\u6FFFD\u70000-\u7FFFD\u80000-\u8FFFD\u90000-\u9FFFD\uA0000-\uAFFFD\uB0000-\uBFFFD\uC0000-\uCFFFD\uD0000-\uDFFFD\uE1000-\uEFFFD!\$&'\(\)\*\+,;=:])*@)?(?:\[(?:(?:(?:[0-9a-f]{1,4}:){6}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|::(?:[0-9a-f]{1,4}:){5}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9a-f]{1,4}:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|v[0-9a-f]+[\-a-z0-9\._~!\$&'\(\)\*\+,;=:]+)\]|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}|(?:%[0-9a-f][0-9a-f]|[\-a-z0-9\._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\u10000-\u1FFFD\u20000-\u2FFFD\u30000-\u3FFFD\u40000-\u4FFFD\u50000-\u5FFFD\u60000-\u6FFFD\u70000-\u7FFFD\u80000-\u8FFFD\u90000-\u9FFFD\uA0000-\uAFFFD\uB0000-\uBFFFD\uC0000-\uCFFFD\uD0000-\uDFFFD\uE1000-\uEFFFD!\$&'\(\)\*\+,;=@])*)(?::[0-9]*)?(?:\/(?:(?:%[0-9a-f][0-9a-f]|[\-a-z0-9\._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\u10000-\u1FFFD\u20000-\u2FFFD\u30000-\u3FFFD\u40000-\u4FFFD\u50000-\u5FFFD\u60000-\u6FFFD\u70000-\u7FFFD\u80000-\u8FFFD\u90000-\u9FFFD\uA0000-\uAFFFD\uB0000-\uBFFFD\uC0000-\uCFFFD\uD0000-\uDFFFD\uE1000-\uEFFFD!\$&'\(\)\*\+,;=:@]))*)*|\/(?:(?:(?:(?:%[0-9a-f][0-9a-f]|[\-a-z0-9\._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\u10000-\u1FFFD\u20000-\u2FFFD\u30000-\u3FFFD\u40000-\u4FFFD\u50000-\u5FFFD\u60000-\u6FFFD\u70000-\u7FFFD\u80000-\u8FFFD\u90000-\u9FFFD\uA0000-\uAFFFD\uB0000-\uBFFFD\uC0000-\uCFFFD\uD0000-\uDFFFD\uE1000-\uEFFFD!\$&'\(\)\*\+,;=:@]))+)(?:\/(?:(?:%[0-9a-f][0-9a-f]|[\-a-z0-9\._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\u10000-\u1FFFD\u20000-\u2FFFD\u30000-\u3FFFD\u40000-\u4FFFD\u50000-\u5FFFD\u60000-\u6FFFD\u70000-\u7FFFD\u80000-\u8FFFD\u90000-\u9FFFD\uA0000-\uAFFFD\uB0000-\uBFFFD\uC0000-\uCFFFD\uD0000-\uDFFFD\uE1000-\uEFFFD!\$&'\(\)\*\+,;=:@]))*)*)?|(?:(?:(?:%[0-9a-f][0-9a-f]|[\-a-z0-9\._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\u10000-\u1FFFD\u20000-\u2FFFD\u30000-\u3FFFD\u40000-\u4FFFD\u50000-\u5FFFD\u60000-\u6FFFD\u70000-\u7FFFD\u80000-\u8FFFD\u90000-\u9FFFD\uA0000-\uAFFFD\uB0000-\uBFFFD\uC0000-\uCFFFD\uD0000-\uDFFFD\uE1000-\uEFFFD!\$&'\(\)\*\+,;=:@]))+)(?:\/(?:(?:%[0-9a-f][0-9a-f]|[\-a-z0-9\._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\u10000-\u1FFFD\u20000-\u2FFFD\u30000-\u3FFFD\u40000-\u4FFFD\u50000-\u5FFFD\u60000-\u6FFFD\u70000-\u7FFFD\u80000-\u8FFFD\u90000-\u9FFFD\uA0000-\uAFFFD\uB0000-\uBFFFD\uC0000-\uCFFFD\uD0000-\uDFFFD\uE1000-\uEFFFD!\$&'\(\)\*\+,;=:@]))*)*|(?!(?:%[0-9a-f][0-9a-f]|[\-a-z0-9\._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\u10000-\u1FFFD\u20000-\u2FFFD\u30000-\u3FFFD\u40000-\u4FFFD\u50000-\u5FFFD\u60000-\u6FFFD\u70000-\u7FFFD\u80000-\u8FFFD\u90000-\u9FFFD\uA0000-\uAFFFD\uB0000-\uBFFFD\uC0000-\uCFFFD\uD0000-\uDFFFD\uE1000-\uEFFFD!\$&'\(\)\*\+,;=:@])))(?:\?(?:(?:%[0-9a-f][0-9a-f]|[\-a-z0-9\._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\u10000-\u1FFFD\u20000-\u2FFFD\u30000-\u3FFFD\u40000-\u4FFFD\u50000-\u5FFFD\u60000-\u6FFFD\u70000-\u7FFFD\u80000-\u8FFFD\u90000-\u9FFFD\uA0000-\uAFFFD\uB0000-\uBFFFD\uC0000-\uCFFFD\uD0000-\uDFFFD\uE1000-\uEFFFD!\$&'\(\)\*\+,;=:@])|[\uE000-\uF8FF\uF0000-\uFFFFD|\u100000-\u10FFFD\/\?])*)?(?:\#(?:(?:%[0-9a-f][0-9a-f]|[\-a-z0-9\._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\u10000-\u1FFFD\u20000-\u2FFFD\u30000-\u3FFFD\u40000-\u4FFFD\u50000-\u5FFFD\u60000-\u6FFFD\u70000-\u7FFFD\u80000-\u8FFFD\u90000-\u9FFFD\uA0000-\uAFFFD\uB0000-\uBFFFD\uC0000-\uCFFFD\uD0000-\uDFFFD\uE1000-\uEFFFD!\$&'\(\)\*\+,;=:@])|[\/\?])*)?$/i,
  BCP_47: /^(?:(en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(art-lojban|cel-gaulish|no-(?:bok|nyn)|zh-(?:guoyu|hakka|min|min-nan|xiang)))$|^(x(?:-[0-9a-z]{1,8})+)$|^(?:((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|[0-9]{3}))?((?:-(?:[a-z0-9]{5,8}|[0-9][a-z0-9]{3}))*)?((?:-[0-9a-wy-z](?:-[a-z0-9]{2,8}){1,})*)?(-x(?:-[0-9a-z]{1,8})+)?)$/i
});

var dateFormatRegexPositions = Object.freeze({
  YEAR: 1,
  MONTH: 2,
  DAY: 3,
  HOUR: 4,
  MINUTE: 5,
  SECOND: 6,
  MSECOND: 7,
  ZONE: 8,
  RELATIVE_TIME: 9,
  TIME_ZONE_HOUR: 10,
  TIME_ZONE_MINUTE: 11
});

exports.xapiValidationRegex = xapiValidationRegex;
exports.dateFormatRegexPositions = dateFormatRegexPositions;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xapiWhiteListProperties = undefined;

var _properties = require('../constants/properties');

var xapiWhiteListProperties = Object.freeze({
  IFI: [_properties.properties.HOME_PAGE, _properties.properties.NAME],
  URI: [_properties.properties.ID, _properties.properties.DISPLAY],
  COMPONENT_ARRAY: [_properties.properties.ID, _properties.properties.DESCRIPTION],
  ACTIVITY_DEFINITION: [_properties.properties.NAME, _properties.properties.DESCRIPTION, _properties.properties.TYPE, _properties.properties.MORE_INFO, _properties.properties.EXTENSIONS, _properties.properties.INTERACTION_TYPE, _properties.properties.CORRECT_RESPONSES_PATTERN, _properties.properties.CHOICES, _properties.properties.SCALE, _properties.properties.SOURCE, _properties.properties.TARGET, _properties.properties.STEPS],
  ACTIVITY: [_properties.properties.OBJECT_TYPE, _properties.properties.ID, _properties.properties.DEFINITION],
  STATEMENT_REF: [_properties.properties.ID, _properties.properties.OBJECT_TYPE],
  SCORE: [_properties.properties.SCALED, _properties.properties.RAW, _properties.properties.MIN, _properties.properties.MAX],
  RESULT: [_properties.properties.SCORE, _properties.properties.SUCCESS, _properties.properties.COMPLETION, _properties.properties.RESPONSE, _properties.properties.DURATION, _properties.properties.EXTENSIONS],
  ATTACHMENT: [_properties.properties.USAGE_TYPE, _properties.properties.DISPLAY, _properties.properties.DESCRIPTION, _properties.properties.CONTENT_TYPE, _properties.properties.LENGTH, _properties.properties.SHA2, _properties.properties.FILE_URL],
  AGENT: [_properties.properties.OBJECT_TYPE, _properties.properties.NAME, _properties.properties.ACCOUNT, _properties.properties.MBOX_SHA_1_SUM, _properties.properties.MBOX, _properties.properties.OPEN_ID],
  GROUP: [_properties.properties.OBJECT_TYPE, _properties.properties.NAME, _properties.properties.MEMBER, _properties.properties.ACCOUNT, _properties.properties.MBOX_SHA_1_SUM, _properties.properties.MBOX, _properties.properties.OPEN_ID],
  CONTEXT_ACTIVITIES: [_properties.properties.PARENT, _properties.properties.GROUPING, _properties.properties.CATEGORY, _properties.properties.OTHER],
  STATEMENT: [_properties.properties.ID, _properties.properties.ACTOR, _properties.properties.VERB, _properties.properties.OBJECT, _properties.properties.RESULT, _properties.properties.CONTEXT, _properties.properties.TIMESTAMP, _properties.properties.STORED, _properties.properties.AUTHORITY, _properties.properties.VERSION, _properties.properties.ATTACHMENTS],
  SUB_STATEMENT: [_properties.properties.ACTOR, _properties.properties.VERB, _properties.properties.OBJECT, _properties.properties.RESULT, _properties.properties.CONTEXT, _properties.properties.TIMESTAMP, _properties.properties.ATTACHMENTS, _properties.properties.OBJECT_TYPE]
});

exports.xapiWhiteListProperties = xapiWhiteListProperties;

},{"../constants/properties":4}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properties = require('../constants/properties');

var _whitelists = require('../constants/whitelists');

var _errors = require('../constants/errors');

var _regex = require('../constants/regex');

var _interactionTypes = require('../constants/interaction-types');

var _general = require('../constants/general');

var _utils = require('../utils/utils');

var xapiValidator;

function makeV1Report(instance, errors) {
  var version;

  instance = instance || null;
  errors = errors || null;
  version = _general.xapiGeneral.FIRST_REPORT_VERSTION;
  return { instance: instance, errors: errors, version: version };
}

function makeV1SingleErrorReport(instance, error) {
  return makeV1Report(instance, error === null || error === undefined ? [] : [error]);
}

function validateAbsenceOfNonWhitelistedProperties(target, allowedProperties, trace, errors) {
  var localErrors, localTrace, propertyName;

  localErrors = errors || [];
  localTrace = trace || '';

  for (propertyName in target) {
    if (target.hasOwnProperty(propertyName) && allowedProperties.indexOf(propertyName) === _general.xapiGeneral.NO_INDEX_FOUND) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.addPropToTrace(localTrace, propertyName),
        message: _errors.xapiValidationErrors.UNEXPECTED,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }
  }

  return localErrors;
}

function validatePropertyIsString(parent, propertyName, trace, errors, isRequired, violationType) {
  var localErrors, localTrace, propValue, localViolationType;

  localErrors = errors || [];
  localTrace = trace || '';
  propValue = parent[propertyName], localViolationType = violationType || _errors.xapiErrorLevels.MUST_VIOLATION;

  if (propValue !== undefined) {
    if (propValue === null || !_utils.xapiValidationUtils.isString(propValue)) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, propertyName),
        message: propertyName + ' ' + _errors.xapiValidationErrors.MUST_BE_STRING,
        level: localViolationType
      });
    }
  } else if (isRequired) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, propertyName),
      message: propertyName + ' ' + _errors.xapiValidationErrors.MUST_BE_PRESENT,
      level: localViolationType
    });
  }

  return localErrors;
}

function validatePropertyIsUri(target, propertyName, trace, errors, isRequired) {
  var localErrors, localTrace, propValue;

  localErrors = errors || [];
  localTrace = trace || '';
  propValue = target[propertyName];

  if (propValue !== undefined) {
    if (propValue === null || !_utils.xapiValidationUtils.isString(propValue)) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, propertyName),
        message: propertyName + ' ' + _errors.xapiValidationErrors.MUST_BE_URI_STRING,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    } else if (!_regex.xapiValidationRegex.IRI.test(propValue)) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, propertyName),
        message: propertyName + ' ' + _errors.xapiValidationErrors.MUST_BE_IRI_STRING,
        level: _errors.xapiErrorLevels.SHOULD_VIOLATION
      });
    }
  } else if (isRequired) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, propertyName),
      message: propertyName + ' ' + _errors.xapiValidationErrors.MUST_BE_URI_PRESENT,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
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
  localTrace = trace || '';
  propValue = parent[propertyName];

  if (propValue !== undefined) {
    if (propValue === null || !_utils.xapiValidationUtils.isBoolean(propValue)) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, propertyName),
        message: propertyName + ' ' + _errors.xapiValidationErrors.MUST_BE_BOOLEAN,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }
  } else if (isRequired) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, propertyName),
      message: propertyName + ' ' + _errors.xapiValidationErrors.MUST_BE_BOOLEAN_PRESENT,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }
  return localErrors;
}

function validatePropertyIsNumber(parent, propertyName, trace, errors, isRequired) {
  var localErrors, localTrace, propValue;

  localErrors = errors || [];
  localTrace = trace || '';
  propValue = parent[propertyName];

  if (propValue !== undefined) {
    if (propValue === null || !_utils.xapiValidationUtils.isNumber(propValue)) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, propertyName),
        message: propertyName + ' ' + _errors.xapiValidationErrors.MUST_BE_NUMBER,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }
  } else if (isRequired) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, propertyName),
      message: propertyName + ' ' + _errors.xapiValidationErrors.MUST_BE_NUMBER_PRESENT,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }
  return localErrors;
}

function validateIFIProperties(target, trace, errors) {
  var localErrors, localTrace, accountTrace;

  localErrors = errors || [];
  localTrace = trace || '';

  if (target.mbox !== undefined && target.mbox !== null) {
    if (!_utils.xapiValidationUtils.isString(target.mbox)) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.MBOX),
        message: _errors.xapiValidationErrors.MUST_BE_MBOX_URI,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    } else if (!_regex.xapiValidationRegex.MAILTO_URI.test(target.mbox)) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.MBOX),
        message: _errors.xapiValidationErrors.MUST_BE_VALID_MBOX_FORMAT,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }
  }

  validatePropertyIsString(target, _properties.properties.MBOX_SHA_1_SUM, localTrace, localErrors, /*isRequired*/false);
  validatePropertyIsUri(target, _properties.properties.OPEN_ID, localTrace, localErrors, /*isRequired*/false);

  if (target.account !== undefined && target.account !== null) {
    accountTrace = _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.ACCOUNT);
    validatePropertyIsUri(target.account, _properties.properties.HOME_PAGE, accountTrace, localErrors, /*isRequired*/true);
    validatePropertyIsString(target.account, _properties.properties.NAME, accountTrace, localErrors, /*isRequired*/true);
    validateAbsenceOfNonWhitelistedProperties(target.account, _whitelists.xapiWhiteListProperties.IFI, accountTrace, localErrors);
  }

  return localErrors;
}

function getIFIs(target) {
  var ifis, propertiesLength, i, propName, propValue;

  ifis = [];
  propertiesLength = _properties.xapiValidationIfiPropertyNames.length;

  if (target === null || target === undefined) {
    return ifis;
  }

  for (i = 0; i < propertiesLength; i += 1) {
    propName = _properties.xapiValidationIfiPropertyNames[i];
    propValue = target[propName];

    if (propValue !== undefined && propValue !== null) {
      ifis.push({ key: propName, value: propValue });
    }
  }

  return ifis;
}

function getIFICount(target) {
  return getIFIs(target).length;
}

function validateExtensions(extensions, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [], localTrace = trace || _properties.properties.EXTENSIONS;

  if (extensions === undefined) {
    return localErrors;
  }

  if (!_utils.xapiValidationUtils.isNonNullMapObject(extensions)) {
    localErrors.push({
      trace: localTrace,
      message: _errors.xapiValidationErrors.EXTENSIONS_MUST_NOT_BE_NULL,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }
  // TODO - double-check what further enforceable constraints exist on extension object properties
  return localErrors;
}

function validateLanguageMap(languageMap, trace, errors) {
  var localErrors, localTrace, propName, mappedValue;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.LANGUAGE_MAP;

  if (languageMap === undefined) {
    return localErrors;
  }

  if (!_utils.xapiValidationUtils.isNonNullMapObject(languageMap)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.addPropToTrace(localTrace),
      message: _errors.xapiValidationErrors.LANGUAGE_MAPS_MUST_NOT_BE_NULL,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  for (propName in languageMap) {
    if (languageMap.hasOwnProperty(propName)) {
      if (!_utils.xapiValidationUtils.isValidLanguageTag(propName)) {
        localErrors.push({
          trace: _utils.xapiValidationUtils.addPropToTrace(localTrace, propName),
          message: propName + ' ' + _errors.xapiValidationErrors.LANGUAGE_MAP_KEY_INVALID,
          level: _errors.xapiErrorLevels.MUST_VIOLATION
        });
      }

      mappedValue = languageMap[propName];

      if (mappedValue === null || mappedValue === undefined || !_utils.xapiValidationUtils.isString(mappedValue)) {
        localErrors.push({
          trace: _utils.xapiValidationUtils.addLookupToTrace(localTrace, propName),
          message: propName + ' ' + _errors.xapiValidationErrors.LANGUAGE_MAP_KEY_MUST_BE_STRING,
          level: _errors.xapiErrorLevels.MUST_VIOLATION
        });
      }
    }
  }

  return localErrors;
}

function validateVerb(verb, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.VERB;

  if (verb === undefined) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.VERB_MUST_BE_PROVIDED,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  if (!_utils.xapiValidationUtils.isNonNullMapObject(verb)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.VERB_MUST_NOT_BE_NULL,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  validatePropertyIsUri(verb, _properties.properties.ID, localTrace, localErrors, /*isRequired*/true);

  if (verb.display === undefined) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.DISPLAY),
      message: _errors.xapiValidationErrors.DISPLAY_SHOULD_BE_PROVIDED,
      level: _errors.xapiErrorLevels.SHOULD_VIOLATION
    });
  } else {
    validateLanguageMap(verb.display, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.DISPLAY), localErrors);
  }

  validateAbsenceOfNonWhitelistedProperties(verb, _whitelists.xapiWhiteListProperties.URI, localTrace, localErrors);

  return localErrors;
}

function validateInteractionComponentArray(components, interactionType, allowedInteractionTypes, trace, errors) {
  var localErrors, localTrace, isAllowedComponentType, ids, interactionComponent, componentsLength, perComponentTrace, i;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.INTERACTION_COMPONENTS;
  isAllowedComponentType = allowedInteractionTypes.indexOf(interactionType) !== _general.xapiGeneral.NO_INDEX_FOUND;
  ids = [];

  if (isAllowedComponentType && components !== undefined) {
    if (components === null || !_utils.xapiValidationUtils.isArray(components)) {
      localErrors.push({
        trace: localTrace,
        message: _errors.xapiValidationErrors.INTERACTION_COMPONENT_SHOULD_BE_ARRAY,
        level: _errors.xapiErrorLevels.SHOULD_VIOLATION
      });
    } else {
      componentsLength = components.length;

      for (i = 0; i < componentsLength; i += 1) {
        interactionComponent = components[i];
        perComponentTrace = _utils.xapiValidationUtils.addLookupToTrace(localTrace, i);

        if (!_utils.xapiValidationUtils.isNonNullMapObject(interactionComponent)) {
          localErrors.push({
            trace: perComponentTrace,
            message: _errors.xapiValidationErrors.INTERACTION_COMPONENT_MUST_NOT_BE_NULL,
            level: _errors.xapiErrorLevels.MUST_VIOLATION
          });
        } else {
          validatePropertyIsString(interactionComponent, _properties.properties.ID, perComponentTrace, localErrors, /*isRequired*/true, _errors.xapiErrorLevels.MUST_VIOLATION);

          if (ids.indexOf(interactionComponent.id) !== _general.xapiGeneral.NO_INDEX_FOUND) {
            localErrors.push({
              trace: _utils.xapiValidationUtils.addPropToTrace(perComponentTrace, _properties.properties.ID),
              message: _errors.xapiValidationErrors.ID_MUST_BE_UNIQUE,
              level: _errors.xapiErrorLevels.MUST_VIOLATION
            });
          } else {
            ids.push(interactionComponent.id);
          }

          if (interactionComponent.id && _regex.xapiValidationRegex.CONTAINS_WHITESPACE.test(interactionComponent.id)) {
            localErrors.push({
              trace: _utils.xapiValidationUtils.addPropToTrace(perComponentTrace, _properties.properties.ID),
              message: _errors.xapiValidationErrors.ID_SHOULD_NOT_CONTAIN_WHITESPACES,
              level: _errors.xapiErrorLevels.SHOULD_VIOLATION
            });
          }

          validateLanguageMap(interactionComponent.description, _utils.xapiValidationUtils.addPropToTrace(perComponentTrace, _properties.properties.DESCRIPTION), localErrors);
          validateAbsenceOfNonWhitelistedProperties(interactionComponent, _whitelists.xapiWhiteListProperties.COMPONENT_ARRAY, perComponentTrace, localErrors);
        }
      }
    }
  } else if (interactionType && components) {
    localErrors.push({
      trace: localTrace,
      message: _errors.xapiValidationErrors.INTERACTION_TYPE_MUST_BE_VALID + ' ' + interactionType,
      level: _errors.xapiErrorLevels.SHOULD_VIOLATION
    });
  }

  return localErrors;
}

function validateActivityDefintion(definition, trace, errors) {
  var localErrors, localTrace, correctResponsesPatternTrace, correctResponsesPatternLength, crpItem, i;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.DEFINITION;
  correctResponsesPatternTrace = _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.CORRECT_RESPONSES_PATTERN);

  if (!_utils.xapiValidationUtils.isNonNullMapObject(definition)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.addPropToTrace(localTrace),
      message: _errors.xapiValidationErrors.DEFINITIONS_MUST_BE_OBJECTS,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  validateLanguageMap(definition.name, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.NAME), localErrors);
  validateLanguageMap(definition.description, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.DESCRIPTION), localErrors);

  validatePropertyIsUri(definition, _properties.properties.TYPE, localTrace, localErrors, /*isRequired*/false);
  validatePropertyIsUrl(definition, _properties.properties.MORE_INFO, localTrace, localErrors, /*isRequired*/false);
  validateExtensions(definition.extensions, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.EXTENSIONS), localErrors);

  if (definition.interactionType !== undefined) {
    if (definition.type !== _general.xapiGeneral.INTERACTION_DEFINITION_TYPE) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.TYPE),
        message: _errors.xapiValidationErrors.INTERACTION_ACTIVITY_SHOULD_HAVE + ' "' + _general.xapiGeneral.INTERACTION_DEFINITION_TYPE + '"',
        level: _errors.xapiErrorLevels.SHOULD_VIOLATION
      });
    }

    if (_interactionTypes.xapiValidationInteractionTypes.indexOf(definition.interactionType) === _general.xapiGeneral.NO_INDEX_FOUND) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.INTERACTION_TYPE),
        message: _errors.xapiValidationErrors.INTERACTION_TYPE_MUST_BE_CMI,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }
  }

  if (definition.correctResponsesPattern !== undefined) {
    if (!_utils.xapiValidationUtils.isArray(definition.correctResponsesPattern)) {
      localErrors.push({
        trace: correctResponsesPatternTrace,
        message: _errors.xapiValidationErrors.CORRECT_RESPONSES_PATTERN_MUST_BE_ARRAY,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    } else {
      correctResponsesPatternLength = definition.correctResponsesPattern.length;

      for (i = 0; i < correctResponsesPatternLength; i += 1) {
        crpItem = definition.correctResponsesPattern[i];

        if (crpItem === null || crpItem === undefined || !_utils.xapiValidationUtils.isString(crpItem)) {
          localErrors.push({
            trace: _utils.xapiValidationUtils.addLookupToTrace(correctResponsesPatternTrace, i),
            message: _errors.xapiValidationErrors.CORRECT_RESPONSES_PATTERN_MUST_BE_STRINGS,
            level: _errors.xapiErrorLevels.MUST_VIOLATION
          });
        }
      }
    }
  }

  validateInteractionComponentArray(definition.choices, definition.interactionType, [_properties.properties.CHOICE, _properties.properties.SEQUENCING], _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.CHOICES), localErrors);

  validateInteractionComponentArray(definition.scale, definition.interactionType, [_properties.properties.LIKERT], _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.SCALE), localErrors);

  validateInteractionComponentArray(definition.source, definition.interactionType, [_properties.properties.MATCHING], _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.SOURCE), localErrors);

  validateInteractionComponentArray(definition.target, definition.interactionType, [_properties.properties.MATCHING], _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.TARGET), localErrors);

  validateInteractionComponentArray(definition.steps, definition.interactionType, [_properties.properties.PERFORMANCE], _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.STEPS), localErrors);

  validateAbsenceOfNonWhitelistedProperties(definition, _whitelists.xapiWhiteListProperties.ACTIVITY_DEFINITION, localTrace, localErrors);
  return localErrors;
}

function validateActivity(activity, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.ACTIVITY;

  if (!_utils.xapiValidationUtils.isNonNullMapObject(activity)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.ACTIVITIES_MUST_NOT_BE_NULL,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  validatePropertyIsUri(activity, _properties.properties.ID, localTrace, localErrors, /*isRequired*/true);

  if (activity.definition !== undefined) {
    validateActivityDefintion(activity.definition, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.DEFINITION), localErrors);
  }

  validateAbsenceOfNonWhitelistedProperties(activity, _whitelists.xapiWhiteListProperties.ACTIVITY, localTrace, localErrors);

  return localErrors;
}

function validateStatementRef(statementRef, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.STATEMENT_REF;

  if (!_utils.xapiValidationUtils.isNonNullMapObject(statementRef)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.STATEMENT_REF_MUST_NOT_BE_NULL_MAP_OBJECTS,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
    return localErrors;
  }

  if (statementRef.objectType !== _properties.objectTypes.STATEMENT_REF) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.OBJECT_TYPE),
      message: _errors.xapiValidationErrors.OBJECT_TYPE_MUST_BE_STATEMENT_REF,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  if (!statementRef.id || !_regex.xapiValidationRegex.UUID.test(statementRef.id)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.ID),
      message: _errors.xapiValidationErrors.ID_MUST_BE_VALID_UUID_REF,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  validateAbsenceOfNonWhitelistedProperties(statementRef, _whitelists.xapiWhiteListProperties.STATEMENT_REF, localTrace, localErrors);

  return localErrors;
}

function validateScore(score, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.SCORE;

  if (score === undefined) {
    return localErrors;
  }

  validatePropertyIsNumber(score, _properties.properties.SCALED, localTrace, localErrors, /*isRequired*/false);

  if (score.scaled !== undefined) {
    if (score.scaled < _general.xapiGeneral.MIN_SCALED_VALUE || score.scaled > _general.xapiGeneral.MAX_SCALED_VALUE) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.SCALED),
        message: _errors.xapiValidationErrors.SCALED_MUST_BE_BETWEEN_0_1,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }
  }

  if (score.min !== undefined) {
    validatePropertyIsNumber(score, _properties.properties.MIN, localTrace, localErrors, /*isRequired*/false);

    if (score.raw !== undefined && score.raw < score.min) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.RAW),
        message: _errors.xapiValidationErrors.RAW_MUST_BE_GREATER_THAN_MIN,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }

    if (score.max !== undefined && score.max < score.min) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.MAX),
        message: _errors.xapiValidationErrors.MAX_MUST_BE_GREATER_THAN_MIN,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }
  }

  if (score.max !== undefined) {
    validatePropertyIsNumber(score, _properties.properties.MAX, localTrace, localErrors, /*isRequired*/false);

    if (score.raw !== undefined && score.raw > score.max) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.RAW),
        message: _errors.xapiValidationErrors.RAW_MUST_BE_LESS_THAN_MAX,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }
  }

  validatePropertyIsNumber(score, _properties.properties.RAW, localTrace, localErrors, /*isRequired*/false);
  validateAbsenceOfNonWhitelistedProperties(score, _whitelists.xapiWhiteListProperties.SCORE, localTrace, localErrors);

  return localErrors;
}

function validateResult(result, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.RESULT;

  if (result === undefined) {
    return localErrors;
  }

  if (!_utils.xapiValidationUtils.isNonNullMapObject(result)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.addPropToTrace(localTrace),
      message: _errors.xapiValidationErrors.RESULT_MUST_BE_MAP_OBJECT,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  validateScore(result.score, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.SCORE), localErrors);
  validatePropertyIsBoolean(result, _properties.properties.SUCCESS, localTrace, localErrors, /*isRequired*/false);
  validatePropertyIsBoolean(result, _properties.properties.COMPLETION, localTrace, localErrors, /*isRequired*/false);
  validatePropertyIsString(result, _properties.properties.RESPONSE, localTrace, localErrors, /*isRequired*/false);
  validateExtensions(result.extensions, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.EXTENSIONS), localErrors);

  if (result.duration !== undefined && (result.duration === null || !_utils.xapiValidationUtils.isString(result.duration) || !_regex.xapiValidationRegex.ISO_8601_DURATION.test(result.duration))) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.DURATION),
      message: _errors.xapiValidationErrors.DURATION_MUST_BE_VALID,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  validateAbsenceOfNonWhitelistedProperties(result, _whitelists.xapiWhiteListProperties.RESULT, localTrace, localErrors);

  return localErrors;
}

function validatePropertyIsISO8601String(parent, propertyName, trace, errors) {
  var localErrors, localTrace, matched, datetime;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.DATE_TIME;
  datetime = parent[propertyName];

  if (datetime === undefined) {
    return localErrors;
  }

  if (datetime === null || !_utils.xapiValidationUtils.isString(datetime)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, propertyName),
      message: propertyName + ' ' + _errors.xapiValidationErrors.MUST_BE_STRING,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  matched = _regex.xapiValidationRegex.ISO_8601_DATE_TIME.exec(datetime);

  if (matched) {
    if (!dateIncludesZoneInformation(matched)) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, propertyName),
        message: _errors.xapiValidationErrors.DATE_SHOULD_INCLUDE_ZONE_INFORMATION,
        level: _errors.xapiErrorLevels.SHOULD_VIOLATION
      });
    }
  } else {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, propertyName),
      message: _errors.xapiValidationErrors.DATE_MUST_BE_VALID,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  return localErrors;
}

function validateVersion(version, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.VERSION;

  if (version === undefined) {
    return localErrors;
  }

  if (version === null || !_utils.xapiValidationUtils.isString(version) || !_regex.xapiValidationRegex.SEMVER_1_P_0_P_0.test(version)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.VERSION_MUST_COMPLY_SEMANTIC_VERSIONING,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  return localErrors;
}

function validateAttachmentObject(attachment, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.ATTACHMENT;

  if (!_utils.xapiValidationUtils.isNonNullMapObject(attachment)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.ATTACHMENTS_MUST_NOT_BE_NULL_MAP_OBJECTS,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  if (attachment.display === undefined) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.DISPLAY),
      message: _errors.xapiValidationErrors.DISPLAY_SHOULD_BE_PROVIDED,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  } else {
    validateLanguageMap(attachment.display, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.DISPLAY), localErrors);
  }

  validateLanguageMap(attachment.description, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.DESCRIPTION), localErrors);
  validatePropertyIsUri(attachment, _properties.properties.USAGE_TYPE, localTrace, localErrors, /*isRequired*/true, _errors.xapiErrorLevels.MUST_VIOLATION);
  validatePropertyIsUri(attachment, _properties.properties.FILE_URL, localTrace, localErrors, /*isRequired*/false, _errors.xapiErrorLevels.MUST_VIOLATION);

  // TODO - more complete validation for Internet Media Type via RFC 2046
  validatePropertyIsString(attachment, _properties.properties.CONTENT_TYPE, localTrace, localErrors, /*isRequired*/true, _errors.xapiErrorLevels.MUST_VIOLATION);

  if (attachment.length === undefined || attachment.length === null || !_utils.xapiValidationUtils.isNumber(attachment.length) || attachment.length % 1 !== 0) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.LENGTH),
      message: _errors.xapiValidationErrors.LENGTH_MUST_BE_INTEGER,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  if (attachment.sha2 === undefined) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.SHA2),
      message: _errors.xapiValidationErrors.SHA2_MUST_BE_PROVIDED_ON_ATTACHMENT_OBJECTS,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  } else if (attachment.sha2 === null || !_utils.xapiValidationUtils.isString(attachment.sha2) || !_regex.xapiValidationRegex.BASE_64.test(attachment.sha2)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.SHA2),
      message: _errors.xapiValidationErrors.SHA2_MUST_CONTAIN_BASE_64_STRING,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  validateAbsenceOfNonWhitelistedProperties(attachment, _whitelists.xapiWhiteListProperties.ATTACHMENT, localTrace, localErrors);
  return localErrors;
}

function validateAttachments(attachments, trace, errors) {
  var localErrors, localTrace, attachmentsLength, i;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.ATTACHMENTS;

  if (attachments === undefined) {
    return localErrors;
  }

  if (attachments === null || !_utils.xapiValidationUtils.isArray(attachments)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.ATTACHMENTS_MUST_BE_NOT_NULL_ARRAY,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  attachmentsLength = attachments.length;
  for (i = 0; i < attachmentsLength; i += 1) {
    validateAttachmentObject(attachments[i], _utils.xapiValidationUtils.addLookupToTrace(localTrace, i), localErrors);
  }

  return localErrors;
}

function validateAgent(agent, trace, errors) {
  var localErrors, localTrace, ifiCount;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.AGENT;

  if (!_utils.xapiValidationUtils.isNonNullMapObject(agent)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.AGENT_MUST_BE_NON_NULL_MAP_OBJECT,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
    return localErrors;
  }

  ifiCount = getIFICount(agent);

  if (ifiCount !== _general.xapiGeneral.NUMER_OF_SPECIFIED_IFI_PROPERTIES) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.AGENT_IFI_PROPERTIES_MUST_BE_SPECIFIED,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  if (agent.objectType === _properties.objectTypes.GROUP) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.AGENT_MUST_NOT_HAVE_GROUP_CHARACTERISTICS,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  validateIFIProperties(agent, localTrace, localErrors);
  validatePropertyIsString(agent, _properties.properties.NAME, localTrace, localErrors, /*isRequired*/false);

  validateAbsenceOfNonWhitelistedProperties(agent, _whitelists.xapiWhiteListProperties.AGENT, localTrace, localErrors);

  return localErrors;
}

function validateGroup(group, trace, errors) {
  var localErrors, localTrace, memberTrace, ifiCount, numMembers, i;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.GROUP;
  memberTrace = _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.MEMBER);

  if (!_utils.xapiValidationUtils.isNonNullMapObject(group)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.GROUP_MUST_BE_NON_NULL_MAP_OBJECT,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  ifiCount = getIFICount(group);

  if (ifiCount === 0) {
    if (group.member === null || group.member === undefined) {
      localErrors.push({
        trace: memberTrace,
        message: _errors.xapiValidationErrors.MEMBER_MUST_BE_PROVIDED_FOR_ANONYMOUS_GROUPS,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }
  } else if (ifiCount > _general.xapiGeneral.NUMER_OF_SPECIFIED_IFI_PROPERTIES) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.GROUP_IFI_PROPERTIES_MUST_BE_SPECIFIED,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  validateIFIProperties(group, localTrace, localErrors);

  validatePropertyIsString(group, _properties.properties.NAME, localTrace, localErrors, /*isRequired*/false);

  if (group.member !== undefined) {
    if (group.member === null || !_utils.xapiValidationUtils.isArray(group.member)) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.MEMBER),
        message: _errors.xapiValidationErrors.GROUP_MEMBER_MUST_BE_ARRAY,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    } else {
      numMembers = group.member.length;

      for (i = 0; i < numMembers; i += 1) {
        validateAgent(group.member[i], _utils.xapiValidationUtils.addLookupToTrace(memberTrace, i), localErrors);
      }
    }
  }

  validateAbsenceOfNonWhitelistedProperties(group, _whitelists.xapiWhiteListProperties.GROUP, localTrace, localErrors);

  return localErrors;
}

function validateActor(actor, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.ACTOR;

  if (actor === null || actor === undefined) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.ACTOR_MUST_BE_PROVIDED,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  if (_utils.xapiValidationUtils.isGroup(actor)) {
    validateGroup(actor, localTrace, localErrors);
  } else {
    validateAgent(actor, localTrace, localErrors);
  }

  return localErrors;
}

function validateAuthority(authority, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.AUTHORITY;

  if (authority === undefined) {
    return localErrors;
  }

  if (!_utils.xapiValidationUtils.isNonNullMapObject(authority)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.AUTHORITY_MUST_BE_NON_NULL_MAP_OBJECT,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }
  if (_utils.xapiValidationUtils.isGroup(authority)) {
    validateGroup(authority, localTrace, localErrors);
    if (!authority.member || !authority.member.length || authority.member.length !== _general.xapiGeneral.GROUP_AUTHORITY_AGENT_MEMBERS) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.MEMBER),
        message: _errors.xapiValidationErrors.GROUP_AUTHORITY_AGENT_MEMBERS_MUST_BE_TWO,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
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
  localTrace = trace || _properties.properties.SUB_CONTEXT;

  if (subContext === undefined) {
    return localErrors;
  }

  if (subContext === null) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.CONTEXT_ACTIVITIES_MUST_NOT_BE_NULL,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  } else if (_utils.xapiValidationUtils.isArray(subContext)) {
    numActivities = subContext.length;
    for (i = 0; i < numActivities; i += 1) {
      validateActivity(subContext[i], _utils.xapiValidationUtils.addLookupToTrace(localTrace, i), localErrors);
    }
  } else if (_utils.xapiValidationUtils.isObject(subContext)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.CONTEXT_ACTIVITIES_SHOULD_BE_AN_ARRAY,
      level: _errors.xapiErrorLevels.SHOULD_VIOLATION
    });

    validateActivity(subContext, localTrace, localErrors);
  } else {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.CONTEXT_ACTIVITIES_MUST_BE_ARRAY_OR_ACTIVITY_OBJ,
      level: _errors.xapiErrorLevels.MUST_VIOLATION });
  }
  return localErrors;
}

function validateContextActivities(contextActivities, trace, errors) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.CONTEXT_ACTIVITIES;

  if (contextActivities === undefined) {
    return localErrors;
  }

  if (!_utils.xapiValidationUtils.isNonNullMapObject(contextActivities)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.CONTEXT_ACTIVITIES_MUST_BE_NON_NULL_MAP_OBJECT,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
    return localErrors;
  }

  validateContextActivitySubContext(contextActivities.parent, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.PARENT), localErrors);
  validateContextActivitySubContext(contextActivities.grouping, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.GROUPING), localErrors);
  validateContextActivitySubContext(contextActivities.category, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.CATEGORY), localErrors);
  validateContextActivitySubContext(contextActivities.other, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.OTHER), localErrors);

  validateAbsenceOfNonWhitelistedProperties(contextActivities, _whitelists.xapiWhiteListProperties.CONTEXT_ACTIVITIES, localTrace, localErrors);

  return localErrors;
}

function validateContext(context, trace, errors, statementObjectObjectType) {
  var localErrors, localTrace;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.CONTEXT;

  if (context === undefined) {
    return localErrors;
  }

  if (!_utils.xapiValidationUtils.isNonNullMapObject(context)) {
    localErrors.push({
      trace: localTrace,
      message: _errors.xapiValidationErrors.CONTEXT_MUST_BE_NON_NUL_MAP_OBJECT,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  if (context.registration !== undefined && (context.registration === null || !_utils.xapiValidationUtils.isString(context.registration) || !_regex.xapiValidationRegex.UUID.test(context.registration))) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.REGISTRATION),
      message: _errors.xapiValidationErrors.REGISTRATION_MUST_BE_UUID_STRING,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  if ([_properties.objectTypes.GROUP, _properties.objectTypes.AGENT].indexOf(statementObjectObjectType) !== _general.xapiGeneral.NO_INDEX_FOUND) {
    if (context.revision !== undefined) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.REVISION),
        message: _errors.xapiValidationErrors.REVISION_MUST_BE_AGENT_OR_GROUP,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }

    if (context.platform !== undefined) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.PLATFORM),
        message: _errors.xapiValidationErrors.PLATFORM_MUST_NOT_BE_USED_WITH_REVISION_AGENT_OR_GROUP,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }
  }

  validatePropertyIsString(context, _properties.properties.REVISION, localTrace, localErrors, /*isRequired*/false, _errors.xapiErrorLevels.MUST_VIOLATION);
  validatePropertyIsString(context, _properties.properties.PLATFORM, localTrace, localErrors, /*isRequired*/false, _errors.xapiErrorLevels.MUST_VIOLATION);

  if (context.team !== undefined) {
    validateGroup(context.team, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.TEAM), localErrors);
  }

  if (context.contextActivities !== undefined) {
    validateContextActivities(context.contextActivities, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.CONTEXT_ACTIVITIES), localErrors);
  }

  if (context.language !== undefined && !_utils.xapiValidationUtils.isValidLanguageTag(context.language)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.LANGUAGE),
      message: _errors.xapiValidationErrors.LANGUAGE_MUST_BE_STRING,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  if (context.statement !== undefined) {
    validateStatementRef(context.statement, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.STATEMENT), localErrors);
  }

  if (context.instructor !== undefined) {
    if (_utils.xapiValidationUtils.isGroup(context.instructor)) {
      validateGroup(context.instructor, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.INSTRUCTOR), localErrors);
    } else {
      validateAgent(context.instructor, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.INSTRUCTOR), localErrors);
    }
  }

  validateExtensions(context.extensions, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.EXTENSIONS), localErrors);
  validateAbsenceOfNonWhitelistedProperties(context, [_properties.properties.REGISTRATION, _properties.properties.INSTRUCTOR, _properties.properties.TEAM, _properties.properties.CONTEXT_ACTIVITIES, _properties.properties.REVISION, _properties.properties.PLATFORM, _properties.properties.LANGUAGE, _properties.properties.STATEMENT, _properties.properties.EXTENSIONS], localTrace, localErrors);

  return localErrors;
}

function validateObject(object, trace, errors, isWithinSubStatement) {
  var localErrors, localTrace, objectType;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.OBJECT;

  if (object === undefined) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.OBJECT_MUST_BE_DEFINED,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  if (!_utils.xapiValidationUtils.isNonNullMapObject(object)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.OBJECT_MUST_BE_NON_NULL_MAP_OBJECT,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  validatePropertyIsString(object, _properties.properties.OBJECT_TYPE, localTrace, localErrors, /*isRequired*/true, _errors.xapiErrorLevels.SHOULD_VIOLATION);
  objectType = object.objectType || _properties.objectTypes.ACTIVITY;

  // TODO: Switch
  if (objectType === _properties.objectTypes.ACTIVITY) {
    validateActivity(object, localTrace, localErrors);
  } else if (objectType === _properties.objectTypes.AGENT) {
    validateAgent(object, localTrace, localErrors);
  } else if (objectType === _properties.objectTypes.GROUP) {
    validateGroup(object, localTrace, localErrors);
  } else if (objectType === _properties.objectTypes.STATEMENT_REF) {
    validateStatementRef(object, localTrace, localErrors);
  } else if (objectType === _properties.objectTypes.SUB_STATEMENT) {
    if (isWithinSubStatement) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.OBJECT_TYPE),
        message: _errors.xapiValidationErrors.SUB_STATEMENT_MUST_NOT_CONTAIN_SUB_STATEMENT,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }

    validateStatement(object, localTrace, localErrors, /*isSubStatement*/true);
  } else {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.OBJECT_TYPE),
      message: _errors.xapiValidationErrors.OBJECT_TYPE_MUST_BE_VALID_OPTION + ' ' + _properties.xApiValidObjectTypes.toString(),
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }
  return localErrors;
}

function validateStatement(statement, trace, errors, isSubStatement) {
  var localErrors, localTrace, statementObjectObjectType, whitelistedProperties;

  localErrors = errors || [];
  localTrace = trace || _properties.properties.STATEMENT;

  whitelistedProperties = _whitelists.xapiWhiteListProperties.STATEMENT;

  if (!_utils.xapiValidationUtils.isNonNullMapObject(statement)) {
    localErrors.push({
      trace: _utils.xapiValidationUtils.localTraceToString(localTrace),
      message: _errors.xapiValidationErrors.STATEMENT_REF_MUST_NOT_BE_NULL_MAP_OBJECTS,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });

    return localErrors;
  }

  if (!isSubStatement) {
    if (statement.id === null || statement.id === undefined || !_utils.xapiValidationUtils.isString(statement.id)) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.ID),
        message: _errors.xapiValidationErrors.IDS_SHOULD_BE_GENERATED_BY_LRS,
        level: _errors.xapiErrorLevels.SHOULD_VIOLATION
      });
    } else if (!_regex.xapiValidationRegex.UUID.test(statement.id)) {
      localErrors.push({
        trace: _utils.xapiValidationUtils.localTraceToString(localTrace, _properties.properties.ID),
        message: _errors.xapiValidationErrors.ID_MUST_BE_VALID,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }
  } else {
    whitelistedProperties = _whitelists.xapiWhiteListProperties.SUB_STATEMENT;
  }

  validateActor(statement.actor, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.ACTOR), localErrors);
  validateVerb(statement.verb, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.VERB), localErrors);
  validateObject(statement.object, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.OBJECT), localErrors, isSubStatement);
  validateResult(statement.result, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.RESULT), localErrors);

  statementObjectObjectType = statement.object && statement.object.objectType ? statement.object.objectType : _properties.objectTypes.ACTIVITY;

  validateContext(statement.context, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.CONTEXT), localErrors, statementObjectObjectType);
  validatePropertyIsISO8601String(statement, _properties.properties.TIMESTAMP, localTrace, localErrors);
  validatePropertyIsISO8601String(statement, _properties.properties.STORED, localTrace, localErrors);

  validateAuthority(statement.authority, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.AUTHORITY), localErrors);
  validateVersion(statement.version, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.VERSION), localErrors);
  validateAttachments(statement.attachments, _utils.xapiValidationUtils.addPropToTrace(localTrace, _properties.properties.ATTACHMENTS), localErrors);

  validateAbsenceOfNonWhitelistedProperties(statement, whitelistedProperties, localTrace, localErrors);

  return localErrors;
}

function makeStatementReport(statement) {
  var localErrors;

  localErrors = [];
  validateStatement(statement, _properties.properties.STATEMENT, localErrors, /*isRequired*/false);

  return makeV1Report(statement, localErrors);
}

function validateAmbiguousTypeStatement(statement) {
  var statementObject;

  if (statement === undefined) {
    return makeV1SingleErrorReport( /*instance*/null, {
      trace: _properties.properties.STATEMENT,
      message: _errors.xapiValidationErrors.STATEMENT_ARGUMENT_MUST_BE_PROVIDED,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  if (statement === null) {
    return makeV1SingleErrorReport( /*instance*/null, {
      trace: _properties.properties.STATEMENT,
      message: _errors.xapiValidationErrors.STATEMENT_MUST_NOT_BE_NULL,
      level: _errors.xapiErrorLevels.MUST_VIOLATION
    });
  }

  if (_utils.xapiValidationUtils.isString(statement)) {
    try {
      statementObject = JSON.parse(statement);
      if (statementObject === null || !_utils.xapiValidationUtils.isObject(statementObject) || _utils.xapiValidationUtils.isArray(statementObject)) {
        return makeV1SingleErrorReport(statementObject, {
          trace: _properties.properties.STATEMENT,
          message: _errors.xapiValidationErrors.STATEMENT_MUST_BE_PARSED_CORRECTLY,
          level: _errors.xapiErrorLevels.MUST_VIOLATION
        });
      }
    } catch (e) {
      return makeV1SingleErrorReport(statementObject, {
        trace: _properties.properties.STATEMENT,
        message: _errors.xapiValidationErrors.INVALID_JSON + ': ' + e.message,
        level: _errors.xapiErrorLevels.MUST_VIOLATION
      });
    }

    return makeStatementReport(statementObject);
  }

  if (_utils.xapiValidationUtils.isObject(statement) && !_utils.xapiValidationUtils.isArray(statement)) {
    return makeStatementReport(statement);
  }

  return makeV1SingleErrorReport( /*instance*/null, {
    trace: _properties.properties.STATEMENT,
    message: _errors.xapiValidationErrors.STATEMENT_ARGUMENT_IS_NOT_VALID,
    level: _errors.xapiErrorLevels.MUST_VIOLATION
  });
}

function dateIncludesZoneInformation(matched) {
  return matched[_regex.dateFormatRegexPositions.ZONE] || matched[_regex.dateFormatRegexPositions.RELATIVE_TIME] && matched[_regex.dateFormatRegexPositions.TIME_ZONE_HOUR];
}

xapiValidator = {
  validateStatement: validateAmbiguousTypeStatement
};

exports.default = xapiValidator;

window.xapiValidator = xapiValidator;

},{"../constants/errors":1,"../constants/general":2,"../constants/interaction-types":3,"../constants/properties":4,"../constants/regex":5,"../constants/whitelists":6,"../utils/utils":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xapiValidationUtils = undefined;

var _regex = require('../constants/regex');

var _properties = require('../constants/properties');

var IS_STRING = '[object String]',
    IS_ARRAY = '[object Array]',
    IS_BOOLEAN = '[object Boolean]',
    IS_NUMBER = '[object Number]';

var toString = Object.prototype.toString;
var xapiValidationUtils;

exports.xapiValidationUtils = xapiValidationUtils = {
  isString: function isString(obj) {
    return toString.call(obj) === IS_STRING;
  },
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },


  isArray: Array.isArray || function (obj) {
    return toString.call(obj) === IS_ARRAY;
  },

  isBoolean: function isBoolean(obj) {
    return obj === true || obj === false || toString.call(obj) === IS_BOOLEAN;
  },
  isNumber: function isNumber(obj) {
    return toString.call(obj) === IS_NUMBER;
  },
  isDefined: function isDefined(obj) {
    return obj !== null || obj !== undefined;
  },
  isNonNullMapObject: function isNonNullMapObject(target) {
    return this.isDefined(target) && this.isObject(target) && !this.isArray(target);
  },
  isValidLanguageTag: function isValidLanguageTag(target) {
    // TODO - use more precise 5646 handling, rather than this simplified BCP 47 regex, which combines RFC 5646 and RFC 4647.
    return this.isDefined(target) && this.isString(target) && _regex.xapiValidationRegex.BCP_47.test(target);
  },
  addPropToTrace: function addPropToTrace(trace, addendum) {
    return this.isDefined(addendum) ? trace + '.' + addendum : trace;
  },
  addLookupToTrace: function addLookupToTrace(trace, key) {
    return !this.isDefined(key) ? trace : this.isNumber(key) ? trace + '[' + key + ']' : trace + '["' + key + '"]';
  },
  localTraceToString: function localTraceToString(trace, addendum) {
    return this.addPropToTrace(trace, addendum);
  },
  isGroup: function isGroup(actorOrGroup) {
    return actorOrGroup.member !== null && actorOrGroup.member !== undefined || actorOrGroup.objectType === _properties.objectTypes.GROUP;
  }
};

exports.xapiValidationUtils = xapiValidationUtils;

},{"../constants/properties":4,"../constants/regex":5}]},{},[7])(7)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb25zdGFudHMvZXJyb3JzLmpzIiwiY29uc3RhbnRzL2dlbmVyYWwuanMiLCJjb25zdGFudHMvaW50ZXJhY3Rpb24tdHlwZXMuanMiLCJjb25zdGFudHMvcHJvcGVydGllcy5qcyIsImNvbnN0YW50cy9yZWdleC5qcyIsImNvbnN0YW50cy93aGl0ZWxpc3RzLmpzIiwic3JjL3hBUEktdmFsaWRhdG9yLmpzIiwidXRpbHMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7QUFFQSxJQUFNLGtCQUFrQixPQUFPLE1BQVAsQ0FBYztBQUNwQyxpQkFBa0IsZUFEa0I7QUFFcEMsa0JBQWtCLGdCQUZrQjtBQUdwQyxvQkFBa0I7QUFIa0IsQ0FBZCxDQUF4Qjs7QUFNQSxJQUFNLHVCQUF1QixPQUFPLE1BQVAsQ0FBYztBQUN6QyxjQUFrRCxtQ0FEVDtBQUV6QyxrQkFBa0QseUNBRlQ7QUFHekMsbUJBQWtELHNEQUhUO0FBSXpDLHNCQUFrRCw2Q0FKVDtBQUt6Qyx1QkFBa0QsMERBTFQ7QUFNekMsc0JBQWtELHVFQU5UO0FBT3pDLG1CQUFrRCwwQ0FQVDtBQVF6QywyQkFBa0QsdURBUlQ7QUFTekMsa0JBQWtELHlDQVRUO0FBVXpDLDBCQUFrRCxzREFWVDtBQVd6QyxvQkFBa0QsbUZBWFQ7QUFZekMsNkJBQWtELDJGQVpUO0FBYXpDLCtCQUFrRCxvRUFiVDtBQWN6QyxrQ0FBa0QsMkRBZFQ7QUFlekMsNEJBQWtELDRDQWZUO0FBZ0J6QyxtQ0FBa0QseURBaEJUO0FBaUJ6Qyx5QkFBa0QsdUJBakJUO0FBa0J6Qyx5QkFBa0QsaURBbEJUO0FBbUJ6Qyw4QkFBa0Qsd0NBbkJUO0FBb0J6QyxvQ0FBa0QsaUVBcEJUO0FBcUJ6Qyx5Q0FBa0Qsb0VBckJUO0FBc0J6QywwQ0FBa0QsNEVBdEJUO0FBdUJ6QyxnQ0FBa0QsZ0ZBdkJUO0FBd0J6QyxxQkFBa0Qsd0VBeEJUO0FBeUJ6QyxxQ0FBa0QseUVBekJUO0FBMEJ6QyxrQ0FBa0Qsd0dBMUJUO0FBMkJ6QywrQkFBa0Qsa0RBM0JUO0FBNEJ6QywyQ0FBa0QsOEVBNUJUO0FBNkJ6Qyw2Q0FBa0Qsa0RBN0JUO0FBOEJ6QywyQ0FBa0QseUNBOUJUO0FBK0J6Qyw4Q0FBa0QscURBL0JUO0FBZ0N6QyxxQ0FBa0QscUZBaENUO0FBaUN6Qyw2QkFBa0Qsa0ZBakNUO0FBa0N6Qyw4QkFBa0QsK0RBbENUO0FBbUN6QyxnQ0FBa0Qsd0ZBbkNUO0FBb0N6QyxnQ0FBa0Qsd0ZBcENUO0FBcUN6Qyw2QkFBa0QscUZBckNUO0FBc0N6Qyw2QkFBa0QsNkNBdENUO0FBdUN6QywwQkFBa0Qsd0VBdkNUO0FBd0N6Qyx3Q0FBa0QsbUZBeENUO0FBeUN6QyxzQkFBa0QsNEVBekNUO0FBMEN6QywyQ0FBa0Qsa0ZBMUNUO0FBMkN6Qyw0Q0FBa0Qsc0RBM0NUO0FBNEN6QywwQkFBa0QsMERBNUNUO0FBNkN6QywrQ0FBa0Qsd0RBN0NUO0FBOEN6QyxvQ0FBa0QsNERBOUNUO0FBK0N6QyxzQ0FBa0QseUNBL0NUO0FBZ0R6QyxxQ0FBa0QsdUNBaERUO0FBaUR6QywwQ0FBa0Qsc0ZBakRUO0FBa0R6Qyw2Q0FBa0QsNEVBbERUO0FBbUR6QyxxQ0FBa0QsdUNBbkRUO0FBb0R6QyxnREFBa0QsMERBcERUO0FBcUR6QywwQ0FBa0QscUZBckRUO0FBc0R6Qyw4QkFBa0QsNkRBdERUO0FBdUR6QywwQkFBa0QseUJBdkRUO0FBd0R6Qyx5Q0FBa0QscUVBeERUO0FBeUR6Qyw2Q0FBa0Qsc0lBekRUO0FBMER6Qyx1Q0FBa0Qsd0RBMURUO0FBMkR6Qyx5Q0FBa0QscUhBM0RUO0FBNER6QyxvREFBa0Qsc0dBNURUO0FBNkR6QyxrREFBa0QsaUVBN0RUO0FBOER6QyxzQ0FBa0QsbUVBOURUO0FBK0R6QyxvQ0FBa0QsOERBL0RUO0FBZ0V6QyxtQ0FBa0QseUZBaEVUO0FBaUV6QywyQkFBa0QscUZBakVUO0FBa0V6QywwQkFBa0QscUNBbEVUO0FBbUV6QyxzQ0FB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NkJELE1BN0JDLEVBNkJPO0FBQ3pCO0FBQ0EsV0FBTyxLQUFLLFNBQUwsQ0FBZSxNQUFmLEtBQTBCLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBMUIsSUFBbUQsMkJBQW9CLE1BQXBCLENBQTJCLElBQTNCLENBQWdDLE1BQWhDLENBQTFEO0FBQ0QsR0FoQ21CO0FBa0NwQixnQkFsQ29CLDBCQWtDTCxLQWxDSyxFQWtDRSxRQWxDRixFQWtDWTtBQUM5QixXQUFPLEtBQUssU0FBTCxDQUFlLFFBQWYsSUFBOEIsS0FBOUIsU0FBdUMsUUFBdkMsR0FBb0QsS0FBM0Q7QUFDRCxHQXBDbUI7QUFzQ3BCLGtCQXRDb0IsNEJBc0NILEtBdENHLEVBc0NJLEdBdENKLEVBc0NTO0FBQzNCLFdBQVEsQ0FBQyxLQUFLLFNBQUwsQ0FBZSxHQUFmLENBQUYsR0FBeUIsS0FBekIsR0FBa0MsS0FBSyxRQUFMLENBQWMsR0FBZCxJQUF3QixLQUF4QixTQUFpQyxHQUFqQyxTQUE2QyxLQUE3QyxVQUF1RCxHQUF2RCxPQUF6QztBQUNELEdBeENtQjtBQTBDcEIsb0JBMUNvQiw4QkEwQ0QsS0ExQ0MsRUEwQ00sUUExQ04sRUEwQ2dCO0FBQ2xDLFdBQU8sS0FBSyxjQUFMLENBQW9CLEtBQXBCLEVBQTJCLFFBQTNCLENBQVA7QUFDRCxHQTVDbUI7QUE4Q3BCLFNBOUNvQixtQkE4Q1osWUE5Q1ksRUE4Q0U7QUFDcEIsV0FBUSxhQUFhLE1BQWIsS0FBd0IsSUFBeEIsSUFBZ0MsYUFBYSxNQUFiLEtBQXdCLFNBQXpELElBQXVFLGFBQWEsVUFBYixLQUE0Qix3QkFBWSxLQUF0SDtBQUNEO0FBaERtQixDQUF0Qjs7UUFtRFEsbUIsR0FBQSxtQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhhcGlFcnJvckxldmVscyA9IE9iamVjdC5mcmVlemUoe1xuICBNQVlfVklPTEFUSU9OOiAgICAnTUFZX1ZJT0xBVElPTicsXG4gIE1VU1RfVklPTEFUSU9OOiAgICdNVVNUX1ZJT0xBVElPTicsXG4gIFNIT1VMRF9WSU9MQVRJT046ICdTSE9VTERfVklPTEFUSU9OJ1xufSk7XG5cbmNvbnN0IHhhcGlWYWxpZGF0aW9uRXJyb3JzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFVORVhQRUNURUQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VuZXhwZWN0ZWQgcHJvcGVydHkgbm90IHBlcm1pdHRlZCcsXG4gIE1VU1RfQkVfU1RSSU5HOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb3BlcnR5LCBpZiBwcmVzZW50LCBtdXN0IGJlIGEgc3RyaW5nLicsXG4gIE1VU1RfQkVfUFJFU0VOVDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb3BlcnR5IHdhcyByZXF1aXJlZCB0byBiZSBhIHN0cmluZyBidXQgd2FzIGFic2VudC4nLFxuICBNVVNUX0JFX1VSSV9TVFJJTkc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eSwgaWYgcHJlc2VudCwgbXVzdCBiZSBhIFVSSSBzdHJpbmcuJyxcbiAgTVVTVF9CRV9VUklfUFJFU0VOVDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvcGVydHkgd2FzIHJlcXVpcmVkIHRvIGJlIGEgVVJJIHN0cmluZyBidXQgd2FzIGFic2VudC4nLFxuICBNVVNUX0JFX0lSSV9TVFJJTkc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eSwgaWYgcHJlc2VudCwgc2hvdWxkIGJlIGEgSVJJLWxpa2UgYWJzb2x1dGUgVVJJIHBlciBSRkMgMzk4Ny4nLFxuICBNVVNUX0JFX0JPT0xFQU46ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eSwgaWYgcHJlc2VudCwgbXVzdCBiZSBhIEJvb2xlYW4uJyxcbiAgTVVTVF9CRV9CT09MRUFOX1BSRVNFTlQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvcGVydHkgd2FzIHJlcXVpcmVkIHRvIGJlIGEgQm9vbGVhbiBidXQgd2FzIGFic2VudC4nLFxuICBNVVNUX0JFX05VTUJFUjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eSwgaWYgcHJlc2VudCwgbXVzdCBiZSBhIE51bWJlci4nLFxuICBNVVNUX0JFX05VTUJFUl9QUkVTRU5UOiAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eSB3YXMgcmVxdWlyZWQgdG8gYmUgYSBOdW1iZXIgYnV0IHdhcyBhYnNlbnQuJyxcbiAgTVVTVF9CRV9NQk9YX1VSSTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWJveCBwcm9wZXJ0eSB3YXMgcmVxdWlyZWQgdG8gYmUgYSBtYWlsdG8gVVJJIHN0cmluZyBidXQgd2FzIG5vdCBhIHN0cmluZyBhdCBhbGwuJyxcbiAgTVVTVF9CRV9WQUxJRF9NQk9YX0ZPUk1BVDogICAgICAgICAgICAgICAgICAgICAgICAnbWJveCBwcm9wZXJ0eSB3YXMgcmVxdWlyZWQgdG8gYmUgYSBtYWlsdG8gVVJJIHN0cmluZyBidXQgZGlkIG5vdCBtYXRjaCB0aGUgbWFpbHRvIGZvcm1hdC4nLFxuICBFWFRFTlNJT05TX01VU1RfTk9UX0JFX05VTEw6ICAgICAgICAgICAgICAgICAgICAgICdJZiBwcmVzZW50LCB0aGUgZXh0ZW5zaW9ucyBwcm9wZXJ0eSBtdXN0IGJlIGEgbm9uLW51bGwgbWFwIG9iamVjdC4nLFxuICBMQU5HVUFHRV9NQVBTX01VU1RfTk9UX0JFX05VTEw6ICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZSBNYXBzLCB3aGVuIHByZXNlbnQsIG11c3QgYmUgbm9uLW51bGwgbWFwIG9iamVjdHMnLFxuICBMQU5HVUFHRV9NQVBfS0VZX0lOVkFMSUQ6ICAgICAgICAgICAgICAgICAgICAgICAgICdrZXksIExhbmd1YWdlIGRvZXMgbm90IGNvbmZvcm0gdG8gUkZDIDU2NDYnLFxuICBMQU5HVUFHRV9NQVBfS0VZX01VU1RfQkVfU1RSSU5HOiAgICAgICAgICAgICAgICAgICdrZXk6IExhbmd1YWdlIE1hcCB2YWx1ZSBzaG91bGQgYmUgYSBTdHJpbmcsIGJ1dCB3YXMgbm90JyxcbiAgVkVSQl9NVVNUX0JFX1BST1ZJREVEOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVmVyYiBtdXN0IGJlIHByb3ZpZGVkJyxcbiAgVkVSQl9NVVNUX05PVF9CRV9OVUxMOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVmVyYiBwcm9wZXJ0eSB2YWx1ZSBtdXN0IGEgbm9uLW51bGwgbWFwIG9iamVjdC4nLFxuICBESVNQTEFZX1NIT1VMRF9CRV9QUk9WSURFRDogICAgICAgICAgICAgICAgICAgICAgICdcImRpc3BsYXlcIiBwcm9wZXJ0eSBzaG91bGQgYmUgcHJvdmlkZWQuJyxcbiAgSU5URVJBQ1RJT05fQUNUSVZJVFlfU0hPVUxEX0hBVkU6ICAgICAgICAgICAgICAgICAnSW50ZXJhY3Rpb24gQWN0aXZpdHkgRGVmaW5pdGlvbnMgc2hvdWxkIGhhdmUgYSB0eXBlIHByb3BlcnR5IG9mJyxcbiAgSU5URVJBQ1RJT05fQ09NUE9ORU5UX1NIT1VMRF9CRV9BUlJBWTogICAgICAgICAgICAnVGhpcyBpbnRlcmFjdGlvbiBjb21wb25lbnQgY29sbGVjdGlvbiBwcm9wZXJ0eSBzaG91bGQgYmUgYW4gYXJyYXkuJyxcbiAgSU5URVJBQ1RJT05fQ09NUE9ORU5UX01VU1RfTk9UX0JFX05VTEw6ICAgICAgICAgICAnVGhpcyBpbnRlcmFjdGlvbiBjb21wb25lbnQgY29sbGVjdGlvbiBtZW1iZXIgbXVzdCBiZSBhIG5vbi1udWxsIG1hcCBvYmplY3QnLFxuICBJTlRFUkFDVElPTl9UWVBFX01VU1RfQkVfQ01JOiAgICAgICAgICAgICAgICAgICAgICdJZiBwcmVzZW50LCB0aGUgXCJpbnRlcmFjdGlvblR5cGVcIiB2YWx1ZSBtdXN0IGJlIGEgQ01JIGludGVyYWN0aW9uIHR5cGUgb3B0aW9uLicsXG4gIElEX01VU1RfQkVfVU5JUVVFOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiaWRcIiBwcm9wZXJ0aWVzIG11c3QgYmUgdW5pcXVlIHdpdGhpbiBlYWNoIGludGVyYWN0aW9uIGNvbXBvbmVudCBhcnJheScsXG4gIElEX1NIT1VMRF9OT1RfQ09OVEFJTl9XSElURVNQQUNFUzogICAgICAgICAgICAgICAgJ1wiaWRcIiBwcm9wZXJ0aWVzIG9uIGludGVyYWN0aW9uIGNvbXBvbmVudHMgc2hvdWxkIG5vdCBjb250YWluIHdoaXRlc3BhY2UnLFxuICBJTlRFUkFDVElPTl9UWVBFX01VU1RfQkVfVkFMSUQ6ICAgICAgICAgICAgICAgICAgICdUaGlzIGludGVyYWN0aW9uIGNvbXBvbmVudCBjb2xsZWN0aW9uIHByb3BlcnR5IGlzIG5vdCBhc3NvY2lhdGVkIHdpdGggdGhlIHByZXNlbnQgaW50ZXJhY3Rpb25UeXBlIG9mOiAnLFxuICBERUZJTklUSU9OU19NVVNUX0JFX09CSkVDVFM6ICAgICAgICAgICAgICAgICAgICAgICdcImRlZmluaXRpb25zXCIsIHdoZW4gcHJlc2VudCwgbXVzdCBiZSBtYXAgb2JqZWN0cycsXG4gIENPUlJFQ1RfUkVTUE9OU0VTX1BBVFRFUk5fTVVTVF9CRV9BUlJBWTogICAgICAgICAgJ0lmIHByZXNlbnQsIHRoZSBcImNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuXCIgdmFsdWUgbXVzdCBiZSBhbiBBcnJheSBvZiBzdHJpbmdzLicsXG4gIENPUlJFQ1RfUkVTUE9OU0VTX1BBVFRFUk5fTVVTVF9CRV9TVFJJTkdTOiAgICAgICAgJ1wiY29ycmVjdFJlc3BvbnNlc1BhdHRlcm5cIiBpdGVtcyBtdXN0IGJlIHN0cmluZ3MuJyxcbiAgQUNUSVZJVElFU19NVVNUX05PVF9CRV9OVUxMX01BUF9PQkpFQ1RTOiAgICAgICAgICAnQWN0aXZpdGllcyBtdXN0IGJlIG5vbi1udWxsIG1hcCBvYmplY3RzJyxcbiAgU1RBVEVNRU5UX1JFRl9NVVNUX05PVF9CRV9OVUxMX01BUF9PQkpFQ1RTOiAgICAgICAnU3RhdGVtZW50UmVmIGluc3RhbmNlcyBtdXN0IGJlIG5vbi1udWxsIG1hcCBvYmplY3RzJyxcbiAgT0JKRUNUX1RZUEVfTVVTVF9CRV9TVEFURU1FTlRfUkVGOiAgICAgICAgICAgICAgICAnXCJvYmplY3RUeXBlXCIgcHJvcGVydHkgdmFsdWUgbXVzdCBiZSBcIlN0YXRlbWVudFJlZlwiIGZvciBzdGF0ZW1lbnQgcmVmZXJlbmNlIG9iamVjdHMuJyxcbiAgSURfTVVTVF9CRV9WQUxJRF9VVUlEX1JFRjogICAgICAgICAgICAgICAgICAgICAgICAnXCJpZFwiIHByb3BlcnR5IHZhbHVlIG11c3QgYmUgYSB2YWxpZCBVVUlEIHN0cmluZyBmb3Igc3RhdGVtZW50IHJlZmVyZW5jZSBvYmplY3RzLicsXG4gIFNDQUxFRF9NVVNUX0JFX0JFVFdFRU5fMF8xOiAgICAgICAgICAgICAgICAgICAgICAgJ0lmIHByZXNlbnQsIHRoZSBzY2FsZWQgcHJvcGVydHkgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEnLFxuICBSQVdfTVVTVF9CRV9HUkVBVEVSX1RIQU5fTUlOOiAgICAgICAgICAgICAgICAgICAgICdJZiBib3RoIFwicmF3XCIgYW5kIFwibWluXCIgYXJlIHByZXNlbnQsIHRoZSByYXcgcHJvcGVydHkgdmFsdWUgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiBtaW4nLFxuICBNQVhfTVVTVF9CRV9HUkVBVEVSX1RIQU5fTUlOOiAgICAgICAgICAgICAgICAgICAgICdJZiBib3RoIFwibWF4XCIgYW5kIFwibWluXCIgYXJlIHByZXNlbnQsIHRoZSBtYXggcHJvcGVydHkgdmFsdWUgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiBtaW4nLFxuICBSQVdfTVVTVF9CRV9MRVNTX1RIQU5fTUFYOiAgICAgICAgICAgICAgICAgICAgICAgICdJZiBib3RoIFwicmF3XCIgYW5kIFwibWF4XCIgYXJlIHByZXNlbnQsIHRoZSByYXcgcHJvcGVydHkgdmFsdWUgc2hvdWxkIGJlIGxlc3MgdGhhbiBtYXgnLFxuICBSRVNVTFRfTVVTVF9CRV9NQVBfT0JKRUNUOiAgICAgICAgICAgICAgICAgICAgICAgICdJZiBwcmVzZW50LCB0aGUgcmVzdWx0IG11c3QgYmUgYSBtYXAgb2JqZWN0JyxcbiAgRFVSQVRJT05fTVVTVF9CRV9WQUxJRDogICAgICAgICAgICAgICAgICAgICAgICAgICAnSWYgcHJlc2VudCwgdGhlIFwiZHVyYXRpb25cIiBwcm9wZXJ0eSB2YWx1ZSBtdXN0IGJlIGFuIElTTyA4NjAxIGR1cmF0aW9uJyxcbiAgREFURV9TSE9VTERfSU5DTFVERV9aT05FX0lORk9STUFUSU9OOiAgICAgICAgICAgICAnSVNPIDg2MDEgZGF0ZSB0aW1lIHN0cmluZ3MgdXNlZCBpbiB0aGUgeEFQSSBzaG91bGQgaW5jbHVkZSB0aW1lIHpvbmUgaW5mb3JtYXRpb24uJyxcbiAgREFURV9NVVNUX0JFX1ZBTElEOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVGhpcyBwcm9wZXJ0eXMgc3RyaW5nIHZhbHVlIG11c3QgYmUgY29uZm9ybWFudCB0byBJU08gODYwMSBmb3IgRGF0ZSBUaW1lcy4nLFxuICBWRVJTSU9OX01VU1RfQ09NUExZX1NFTUFOVElDX1ZFUlNJT05JTkc6ICAgICAgICAgICdcInZlcnNpb25cIiBtdXN0IGJlIGEgbm9uLW51bGwgc3RyaW5nIHRoYXQgY29tcGxpZXMgd2l0aCBTZW1hbnRpYyBWZXJzaW9uaW5nIDEuMC4wJyxcbiAgQVRUQUNITUVOVFNfTVVTVF9OT1RfQkVfTlVMTF9NQVBfT0JKRUNUUzogICAgICAgICAnXCJhdHRhY2htZW50XCIgaW5zdGFuY2VzIG11c3QgYmUgbm9uLW51bGwgbWFwIG9iamVjdHMuJyxcbiAgTEVOR1RIX01VU1RfQkVfSU5URUdFUjogICAgICAgICAgICAgICAgICAgICAgICAgICAnXCJsZW5ndGhcIiBwcm9wZXJ0eSBtdXN0IGJlIHByb3ZpZGVkIHdpdGggYW4gaW50ZWdlciB2YWx1ZScsXG4gIFNIQTJfTVVTVF9CRV9QUk9WSURFRF9PTl9BVFRBQ0hNRU5UX09CSkVDVFM6ICAgICAgJ1wic2hhMlwiIHByb3BlcnR5IG11c3QgYmUgcHJvdmlkZWQgb24gYXR0YWNobWVudCBvYmplY3RzJyxcbiAgU0hBMl9NVVNUX0NPTlRBSU5fQkFTRV82NF9TVFJJTkc6ICAgICAgICAgICAgICAgICAnXCJzaGEyXCIgcHJvcGVydHkgbXVzdCBjb250YWluIGEgc3RyaW5nIHdpdGggYmFzZTY0IGNvbnRlbnRzJyxcbiAgQVRUQUNITUVOVFNfTVVTVF9CRV9OT1RfTlVMTF9BUlJBWTogICAgICAgICAgICAgICAnXCJhdHRhY2htZW50c1wiIG11c3QgYmUgYSBub24tbnVsbCBBcnJheS4nLFxuICBBR0VOVF9NVVNUX0JFX05PTl9OVUxMX01BUF9PQkpFQ1Q6ICAgICAgICAgICAgICAgICdcImFnZW50XCIgbXVzdCBiZSBhIG5vbi1udWxsIG1hcCBvYmplY3QnLFxuICBBR0VOVF9JRklfUFJPUEVSVElFU19NVVNUX0JFX1NQRUNJRklFRDogICAgICAgICAgICdFeGFjdGx5IG9uZSBJbnZlcnNlIEZ1bmN0aW9uYWwgSWRlbnRpZmllciBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBmb3IgYW4gXCJhZ2VudFwiLicsXG4gIEFHRU5UX01VU1RfTk9UX0hBVkVfR1JPVVBfQ0hBUkFDVEVSSVNUSUNTOiAgICAgICAgJ0ludmFsaWQgb2JqZWN0IHdpdGggY2hhcmFjdGVyaXN0aWNzIG9mIGEgR3JvdXAgd2hlbiBhbiBBZ2VudCB3YXMgZXhwZWN0ZWQuJyxcbiAgR1JPVVBfTVVTVF9CRV9OT05fTlVMTF9NQVBfT0JKRUNUOiAgICAgICAgICAgICAgICAnXCJncm91cFwiIG11c3QgYmUgYSBub24tbnVsbCBtYXAgb2JqZWN0JyxcbiAgTUVNQkVSX01VU1RfQkVfUFJPVklERURfRk9SX0FOT05ZTU9VU19HUk9VUFM6ICAgICAnXCJtZW1iZXJcIiBwcm9wZXJ0eSBtdXN0IGJlIHByb3ZpZGVkIGZvciBBbm9ueW1vdXMgR3JvdXBzLicsXG4gIEdST1VQX0lGSV9QUk9QRVJUSUVTX01VU1RfQkVfU1BFQ0lGSUVEOiAgICAgICAgICAgJ0V4YWN0bHkgb25lIEludmVyc2UgRnVuY3Rpb25hbCBJZGVudGlmaWVyIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGZvciBhIFwiZ3JvdXBcIi4nLFxuICBHUk9VUF9NRU1CRVJfTVVTVF9CRV9BUlJBWTogICAgICAgICAgICAgICAgICAgICAgICdJZiBwcmVzZW50LCB0aGUgbWVtYmVyIHByb3BlcnR5IG9mIGEgR3JvdXAgbXVzdCBiZSBhbiBBcnJheScsXG4gIEFDVE9SX01VU1RfQkVfUFJPVklERUQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjdG9yIG11c3QgYmUgcHJvdmlkZWQuJyxcbiAgQVVUSE9SSVRZX01VU1RfQkVfTk9OX05VTExfTUFQX09CSkVDVDogICAgICAgICAgICAnSWYgcHJlc2VudCwgdGhlIFwiYXV0aG9yaXR5XCIgcHJvcGVydHkgbXVzdCBiZSBhIG5vbi1udWxsIG1hcCBvYmplY3QuJyxcbiAgR1JPVVBfQVVUSE9SSVRZX0FHRU5UX01FTUJFUlNfTVVTVF9CRV9UV086ICAgICAgICAnSWYgdXNlZCBhcyBhIEdyb3VwLCB0aGUgXCJhdXRob3JpdHlcIiBwcm9wZXJ0eSBtdXN0IGNvbnRhaW4gYSBcIm1lbWJlclwiIHByb3BlcnR5IHRoYXQgaXMgYW4gYXJyYXkgY29udGFpbmluZyBleGFjdGx5IHR3byBBZ2VudCBvYmplY3RzLicsXG4gIENPTlRFWFRfQUNUSVZJVElFU19NVVNUX05PVF9CRV9OVUxMOiAgICAgICAgICAgICAgJ1wiQ29udGV4dCBBY3Rpdml0aWVzXCIgcHJvcGVydHkgdmFsdWVzIG11c3Qgbm90IGJlIG51bGwuJyxcbiAgQ09OVEVYVF9BQ1RJVklUSUVTX1NIT1VMRF9CRV9BTl9BUlJBWTogICAgICAgICAgICAnQ29udGV4dCBBY3Rpdml0aWVzIHByb3BlcnR5IHZhbHVlcyBzaG91bGQgcHJlZmVyIHRvIGJlIGFuIGFycmF5IG9mIEFjdGl2aXRpZXMgcmF0aGVyIHRoYW4gYSBzaW5nbGUgQWN0aXZpdHkgb2JqZWN0LicsXG4gIENPTlRFWFRfQUNUSVZJVElFU19NVVNUX0JFX0FSUkFZX09SX0FDVElWSVRZX09CSjogJ0NvbnRleHQgQWN0aXZpdGllcyBwcm9wZXJ0eSB2YWx1ZXMgbXVzdCBiZSBhbiBhcnJheSBvZiBBY3Rpdml0eSBPYmplY3RzIG9yIGEgc2luZ2xlIEFjdGl2aXR5IE9iamVjdC4nLFxuICBDT05URVhUX0FDVElWSVRJRVNfTVVTVF9CRV9OT05fTlVMTF9NQVBfT0JKRUNUOiAgICdUaGUgQ29udGV4dCBBY3Rpdml0aWVzIGluc3RhbmNlcyBtdXN0IGJlIGEgbm9uLW51bGwgbWFwIG9iamVjdC4nLFxuICBDT05URVhUX01VU1RfQkVfTk9OX05VTF9NQVBfT0JKRUNUOiAgICAgICAgICAgICAgICdJZiBwcmVzZW50LCB0aGUgXCJjb250ZXh0XCIgcHJvcGVydHkgbXVzdCBiZSBhIG5vbi1udWxsIG1hcCBvYmplY3QuJyxcbiAgUkVHSVNUUkFUSU9OX01VU1RfQkVfVVVJRF9TVFJJTkc6ICAgICAgICAgICAgICAgICAnSWYgcHJlc2VudCwgdGhlIHJlZ2lzdHJhdGlvbiBwcm9wZXJ0eSBtdXN0IGJlIGEgVVVJRCBzdHJpbmcuJyxcbiAgUkVWSVNJT05fTVVTVF9CRV9BR0VOVF9PUl9HUk9VUDogICAgICAgICAgICAgICAgICAnVGhlIHJldmlzaW9uIHByb3BlcnR5IG11c3Qgbm90IGJlIHVzZWQgaWYgdGhlIFN0YXRlbWVudFxcJ3MgT2JqZWN0IGlzIGFuIEFnZW50IG9yIEdyb3VwLicsXG4gIExBTkdVQUdFX01VU1RfQkVfU1RSSU5HOiAgICAgICAgICAgICAgICAgICAgICAgICAgJ1RoZSBsYW5ndWFnZSBwcm9wZXJ0eSBtdXN0IGJlIGVuY29kZWQgYXMgYW4gUkZDIDU2NDYgY29tcGxpYW50IHN0cmluZywgYnV0IHdhcyBub3QuJyxcbiAgT0JKRUNUX01VU1RfQkVfREVGSU5FRDogICAgICAgICAgICAgICAgICAgICAgICAgICAnXCJvYmplY3RcIiBwcm9wZXJ0eSBtdXN0IGJlIHByb3ZpZGVkLicsXG4gIE9CSkVDVF9NVVNUX0JFX05PTl9OVUxMX01BUF9PQkpFQ1Q6ICAgICAgICAgICAgICAgJ1wib2JqZWN0XCIgcHJvcGVydHkgbXVzdCBiZSBhIG5vbi1udWxsIG1hcCBvYmplY3QuJyxcbiAgU1VCX1NUQVRFTUVOVF9NVVNUX05PVF9DT05UQUlOX1NVQl9TVEFURU1FTlQ6ICAgICAnQSBTdWJTdGF0ZW1lbnQgbXVzdCBub3QgY29udGFpbiBhIFN1YlN0YXRlbWVudCcsXG4gIE9CSkVDVF9UWVBFX01VU1RfQkVfVkFMSURfT1BUSU9OOiAgICAgICAgICAgICAgICAgJ29iamVjdFxcJ3MgXCJvYmplY3RUeXBlXCIgZGlkIG5vdCBtYXRjaCBhIHZhbGlkIG9wdGlvbicsXG4gIElEU19TSE9VTERfQkVfR0VORVJBVEVEX0JZX0xSUzogICAgICAgICAgICAgICAgICAgJ0lkcyBzaG91bGQgYmUgZ2VuZXJhdGVkIGJ5IHRoZSBBY3Rpdml0eSBQcm92aWRlciwgYW5kIG11c3QgYmUgZ2VuZXJhdGVkIGJ5IHRoZSBMUlMnLFxuICBJRF9NVVNUX0JFX1ZBTElEOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdJZCB3YXMgbm90IGEgdmFsaWQgVVVJRCcsXG4gIFNUQVRFTUVOVF9BUkdVTUVOVF9NVVNUX0JFX1BST1ZJREVEOiAgICAgICAgICAgICAgJ05vIHN0YXRlbWVudCBhcmd1bWVudCBwcm92aWRlZC4nLFxuICBTVEFURU1FTlRfTVVTVF9OT1RfQkVfTlVMTDogICAgICAgICAgICAgICAgICAgICAgICdOdWxsIHN0YXRlbWVudCBhcmd1bWVudCBwcm92aWRlZC4nLFxuICBTVEFURU1FTlRfTVVTVF9CRV9QQVJTRURfQ09SUkVDVExZOiAgICAgICAgICAgICAgICdOdWxsIG9yIG5vbi1vYmplY3Qgc3RhdGVtZW50IHZhbHVlIHBhcnNlZCBmcm9tIHByb3ZpZGVkIHN0YXRtZW50IEpTT04uJyxcbiAgSU5WQUxJRF9KU09OOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBKU09OLiBUaGUgc3RhdGVtZW50IGNvdWxkIG5vdCBiZSBwYXJzZWQuJyxcbiAgU1RBVEVNRU5UX0FSR1VNRU5UX0lTX05PVF9WQUxJRDogICAgICAgICAgICAgICAgICAnU3RhdGVtZW50IGFyZ3VtZW50IHByb3ZpZGVkIHdhcyBub3QgYSB2YWxpZCBvYmplY3Qgb3IgYSB2YWxpZCBKU09OIHN0cmluZy4nXG59KTtcblxuZXhwb3J0IHt4YXBpRXJyb3JMZXZlbHN9O1xuZXhwb3J0IHt4YXBpVmFsaWRhdGlvbkVycm9yc307XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhhcGlHZW5lcmFsID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEZJUlNUX1JFUE9SVF9WRVJTVElPTiAgICAgICAgICAgICA6ICcxLjAuMCcsXG4gIEdST1VQX0FVVEhPUklUWV9BR0VOVF9NRU1CRVJTICAgICA6IDIsXG4gIElOVEVSQUNUSU9OX0RFRklOSVRJT05fVFlQRSAgICAgICA6ICdodHRwOi8vYWRsbmV0Lmdvdi9leHBhcGkvYWN0aXZpdGllcy9jbWkuaW50ZXJhY3Rpb24nLFxuICBNQVhfU0NBTEVEX1ZBTFVFICAgICAgICAgICAgICAgICAgOiAxLFxuICBNSU5fU0NBTEVEX1ZBTFVFICAgICAgICAgICAgICAgICAgOiAwLFxuICBOT19JTkRFWF9GT1VORCAgICAgICAgICAgICAgICAgICAgOiAtMSxcbiAgTlVNRVJfT0ZfU1BFQ0lGSUVEX0lGSV9QUk9QRVJUSUVTIDogMVxufSk7XG5cbmV4cG9ydCB7eGFwaUdlbmVyYWx9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25UeXBlcyA9IE9iamVjdC5mcmVlemUoe1xuICBDSE9JQ0U6ICAgICAgICdjaG9pY2UnLFxuICBGSUxMX0lOOiAgICAgICdmaWxsLWluJyxcbiAgTElLRVJUOiAgICAgICAnbGlrZXJ0JyxcbiAgTE9OR19GSUxMX0lOOiAnbG9uZy1maWxsLWluJyxcbiAgTUFUQ0hJTkc6ICAgICAnbWF0Y2hpbmcnLFxuICBOVU1FUklDOiAgICAgICdudW1lcmljJyxcbiAgT1RIRVI6ICAgICAgICAnb3RoZXInLFxuICBQRVJGT1JNQU5DRTogICdwZXJmb3JtYW5jZScsXG4gIFNFUVVFTkNJTkc6ICAgJ3NlcXVlbmNpbmcnLFxuICBUUlVFX0ZBTFNFOiAgICd0cnVlLWZhbHNlJ1xufSk7XG5cbmV4cG9ydCBjb25zdCB4YXBpVmFsaWRhdGlvbkludGVyYWN0aW9uVHlwZXMgPSBPYmplY3QuZnJlZXplKFtcbiAgaW50ZXJhY3Rpb25UeXBlcy5DSE9JQ0UsXG4gIGludGVyYWN0aW9uVHlwZXMuRklMTF9JTixcbiAgaW50ZXJhY3Rpb25UeXBlcy5MSUtFUlQsXG4gIGludGVyYWN0aW9uVHlwZXMuTE9OR19GSUxMX0lOLFxuICBpbnRlcmFjdGlvblR5cGVzLk1BVENISU5HLFxuICBpbnRlcmFjdGlvblR5cGVzLk5VTUVSSUMsXG4gIGludGVyYWN0aW9uVHlwZXMuT1RIRVIsXG4gIGludGVyYWN0aW9uVHlwZXMuUEVSRk9STUFOQ0UsXG4gIGludGVyYWN0aW9uVHlwZXMuU0VRVUVOQ0lORyxcbiAgaW50ZXJhY3Rpb25UeXBlcy5UUlVFX0ZBTFNFXG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcHJvcGVydGllcyA9IE9iamVjdC5mcmVlemUoe1xuICBBQ0NPVU5UOiAgICAgICAgICAgICAgICAgICAnYWNjb3VudCcsXG4gIEFDVElWSVRZOiAgICAgICAgICAgICAgICAgICdhY3Rpdml0eScsXG4gIEFDVE9SOiAgICAgICAgICAgICAgICAgICAgICdhY3RvcicsXG4gIEFHRU5UOiAgICAgICAgICAgICAgICAgICAgICdhZ2VudCcsXG4gIEFUVEFDSE1FTlQ6ICAgICAgICAgICAgICAgICdhdHRhY2htZW50JyxcbiAgQVRUQUNITUVOVFM6ICAgICAgICAgICAgICAgJ2F0dGFjaG1lbnRzJyxcbiAgQVVUSE9SSVRZOiAgICAgICAgICAgICAgICAgJ2F1dGhvcml0eScsXG4gIENBVEVHT1JZOiAgICAgICAgICAgICAgICAgICdjYXRlZ29yeScsXG4gIENIT0lDRTogICAgICAgICAgICAgICAgICAgICdjaG9pY2UnLFxuICBDSE9JQ0VTOiAgICAgICAgICAgICAgICAgICAnY2hvaWNlcycsXG4gIENPTVBMRVRJT046ICAgICAgICAgICAgICAgICdjb21wbGV0aW9uJyxcbiAgQ09OVEVOVF9UWVBFOiAgICAgICAgICAgICAgJ2NvbnRlbnRUeXBlJyxcbiAgQ09OVEVYVF9BQ1RJVklUSUVTOiAgICAgICAgJ2NvbnRleHRBY3Rpdml0aWVzJyxcbiAgQ09OVEVYVDogICAgICAgICAgICAgICAgICAgJ2NvbnRleHQnLFxuICBDT1JSRUNUX1JFU1BPTlNFU19QQVRURVJOOiAnY29ycmVjdFJlc3BvbnNlc1BhdHRlcm4nLFxuICBEQVRFX1RJTUU6ICAgICAgICAgICAgICAgICAnZGF0ZVRpbWUnLFxuICBERUZJTklUSU9OOiAgICAgICAgICAgICAgICAnZGVmaW5pdGlvbicsXG4gIERFU0NSSVBUSU9OOiAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbicsXG4gIERJU1BMQVk6ICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JyxcbiAgRFVSQVRJT046ICAgICAgICAgICAgICAgICAgJ2R1cmF0aW9uJyxcbiAgRVhURU5TSU9OUzogICAgICAgICAgICAgICAgJ2V4dGVuc2lvbnMnLFxuICBGSUxFX1VSTDogICAgICAgICAgICAgICAgICAnZmlsZVVybCcsXG4gIEdST1VQOiAgICAgICAgICAgICAgICAgICAgICdncm91cCcsXG4gIEdST1VQSU5HOiAgICAgICAgICAgICAgICAgICdncm91cGluZycsXG4gIEhPTUVfUEFHRTogICAgICAgICAgICAgICAgICdob21lUGFnZScsXG4gIElEOiAgICAgICAgICAgICAgICAgICAgICAgICdpZCcsXG4gIElOU1RSVUNUT1I6ICAgICAgICAgICAgICAgICdpbnN0cnVjdG9yJyxcbiAgSU5URVJBQ1RJT05fQ09NUE9ORU5UUzogICAgJ2ludGVyYWN0aW9uQ29tcG9uZW50cycsXG4gIElOVEVSQUNUSU9OX1RZUEU6ICAgICAgICAgICdpbnRlcmFjdGlvblR5cGUnLFxuICBMQU5HVUFHRV9NQVA6ICAgICAgICAgICAgICAnbGFuZ3VhZ2VNYXAnLFxuICBMQU5HVUFHRTogICAgICAgICAgICAgICAgICAnbGFuZ3VhZ2UnLFxuICBMRU5HVEg6ICAgICAgICAgICAgICAgICAgICAnbGVuZ3RoJyxcbiAgTElLRVJUOiAgICAgICAgICAgICAgICAgICAgJ2xpa2VydCcsXG4gIE1BVENISU5HOiAgICAgICAgICAgICAgICAgICdtYXRjaGluZycsXG4gIE1BWDogICAgICAgICAgICAgICAgICAgICAgICdtYXgnLFxuICBNQk9YX1NIQV8xX1NVTTogICAgICAgICAgICAnbWJveF9zaGExc3VtJyxcbiAgTUJPWDogICAgICAgICAgICAgICAgICAgICAgJ21ib3gnLFxuICBNRU1CRVI6ICAgICAgICAgICAgICAgICAgICAnbWVtYmVyJyxcbiAgTUlOOiAgICAgICAgICAgICAgICAgICAgICAgJ21pbicsXG4gIE1PUkVfSU5GTzogICAgICAgICAgICAgICAgICdtb3JlSW5mbycsXG4gIE5BTUU6ICAgICAgICAgICAgICAgICAgICAgICduYW1lJyxcbiAgT0JKRUNUX1RZUEU6ICAgICAgICAgICAgICAgJ29iamVjdFR5cGUnLFxuICBPQkpFQ1Q6ICAgICAgICAgICAgICAgICAgICAnb2JqZWN0JyxcbiAgT1BFTl9JRDogICAgICAgICAgICAgICAgICAgJ29wZW5JRCcsXG4gIE9USEVSOiAgICAgICAgICAgICAgICAgICAgICdvdGhlcicsXG4gIFBBUkVOVDogICAgICAgICAgICAgICAgICAgICdwYXJlbnQnLFxuICBQRVJGT1JNQU5DRTogICAgICAgICAgICAgICAncGVyZm9ybWFuY2UnLFxuICBQTEFURk9STTogICAgICAgICAgICAgICAgICAncGxhdGZvcm0nLFxuICBSQVc6ICAgICAgICAgICAgICAgICAgICAgICAncmF3JyxcbiAgUkVHSVNUUkFUSU9OOiAgICAgICAgICAgICAgJ3JlZ2lzdHJhdGlvbicsXG4gIFJFU1BPTlNFOiAgICAgICAgICAgICAgICAgICdyZXNwb25zZScsXG4gIFJFU1VMVDogICAgICAgICAgICAgICAgICAgICdyZXN1bHQnLFxuICBSRVZJU0lPTjogICAgICAgICAgICAgICAgICAncmV2aXNpb24nLFxuICBTQ0FMRTogICAgICAgICAgICAgICAgICAgICAnc2NhbGUnLFxuICBTQ0FMRUQ6ICAgICAgICAgICAgICAgICAgICAnc2NhbGVkJyxcbiAgU0NPUkU6ICAgICAgICAgICAgICAgICAgICAgJ3Njb3JlJyxcbiAgU0VRVUVOQ0lORzogICAgICAgICAgICAgICAgJ3NlcXVlbmNpbmcnLFxuICBTSEEyOiAgICAgICAgICAgICAgICAgICAgICAnc2hhMicsXG4gIFNPVVJDRTogICAgICAgICAgICAgICAgICAgICdzb3VyY2UnLFxuICBTVEFURU1FTlRfUkVGOiAgICAgICAgICAgICAnc3RhdGVtZW50UmVmJyxcbiAgU1RBVEVNRU5UOiAgICAgICAgICAgICAgICAgJ3N0YXRlbWVudCcsXG4gIFNURVBTOiAgICAgICAgICAgICAgICAgICAgICdzdGVwcycsXG4gIFNUT1JFRDogICAgICAgICAgICAgICAgICAgICdzdG9yZWQnLFxuICBTVUJfQ09OVEVYVDogICAgICAgICAgICAgICAnc3ViQ29udGV4dCcsXG4gIFNVQ0NFU1M6ICAgICAgICAgICAgICAgICAgICdzdWNjZXNzJyxcbiAgVEFSR0VUOiAgICAgICAgICAgICAgICAgICAgJ3RhcmdldCcsXG4gIFRFQU06ICAgICAgICAgICAgICAgICAgICAgICd0ZWFtJyxcbiAgVElNRVNUQU1QOiAgICAgICAgICAgICAgICAgJ3RpbWVzdGFtcCcsXG4gIFRZUEU6ICAgICAgICAgICAgICAgICAgICAgICd0eXBlJyxcbiAgVVNBR0VfVFlQRTogICAgICAgICAgICAgICAgJ3VzYWdlVHlwZScsXG4gIFZFUkI6ICAgICAgICAgICAgICAgICAgICAgICd2ZXJiJyxcbiAgVkVSU0lPTjogICAgICAgICAgICAgICAgICAgJ3ZlcnNpb24nXG59KTtcblxuY29uc3Qgb2JqZWN0VHlwZXMgPSBPYmplY3QuZnJlZXplKHtcbiAgR1JPVVA6ICAgICAgICAgJ0dyb3VwJyxcbiAgQUdFTlQ6ICAgICAgICAgJ0FnZW50JyxcbiAgQUNUSVZJVFk6ICAgICAgJ0FjdGl2aXR5JyxcbiAgU1RBVEVNRU5UX1JFRjogJ1N0YXRlbWVudFJlZicsXG4gIFNVQl9TVEFURU1FTlQ6ICdTdWJTdGF0ZW1lbnQnXG59KTtcblxuY29uc3QgeGFwaVZhbGlkYXRpb25JZmlQcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmZyZWV6ZShbXG4gIHByb3BlcnRpZXMuQUNDT1VOVCxcbiAgcHJvcGVydGllcy5NQk9YX1NIQV8xX1NVTSxcbiAgcHJvcGVydGllcy5NQk9YLFxuICBwcm9wZXJ0aWVzLk9QRU5fSURcbl0pO1xuXG5jb25zdCB4QXBpVmFsaWRPYmplY3RUeXBlcyA9IE9iamVjdC5mcmVlemUoW1xuICBvYmplY3RUeXBlcy5HUk9VUCxcbiAgb2JqZWN0VHlwZXMuQUdFTlQsXG4gIG9iamVjdFR5cGVzLkFDVElWSVRZLFxuICBvYmplY3RUeXBlcy5TVEFURU1FTlRfUkVGLFxuICBvYmplY3RUeXBlcy5TVUJfU1RBVEVNRU5UXG5dKTtcblxuZXhwb3J0IHtwcm9wZXJ0aWVzfTtcbmV4cG9ydCB7b2JqZWN0VHlwZXN9O1xuZXhwb3J0IHt4YXBpVmFsaWRhdGlvbklmaVByb3BlcnR5TmFtZXN9O1xuZXhwb3J0IHt4QXBpVmFsaWRPYmplY3RUeXBlc307XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhhcGlWYWxpZGF0aW9uUmVnZXggPSBPYmplY3QuZnJlZXplKHtcbiAgVVVJRDogICAgICAgICAgICAgICAgL15bMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXsxMn0kL2ksXG4gIElTT184NjAxX0RVUkFUSU9OOiAgIC9eUCgoXFxkKyhbXFwuLF1cXGQrKT9ZKT8oXFxkKyhbXFwuLF1cXGQrKT9NKT8oXFxkKyhbXFwuLF1cXGQrKT9XKT8oXFxkKyhbXFwuLF1cXGQrKT9EKT8pPyhUKFxcZCsoW1xcLixdXFxkKyk/SCk/KFxcZCsoW1xcLixdXFxkKyk/TSk/KFxcZCsoW1xcLixdXFxkKyk/Uyk/KT8kLyxcbiAgSVNPXzg2MDFfREFURV9USU1FOiAgL14oXFxkezR9fFsrXFwtXVxcZHs2fSkoPzotKFxcZHsyfSkoPzotKFxcZHsyfSkpPyk/KD86VChcXGR7Mn0pOihcXGR7Mn0pKD86OihcXGR7Mn0pKD86XFwuKFxcZHszfSkpPyk/KD86KFopfChbK1xcLV0pKFxcZHsyfSkoPzo6KFxcZHsyfSkpPyk/KT8kLyxcbiAgTUFJTFRPX1VSSTogICAgICAgICAgL15tYWlsdG86LyxcbiAgQ09OVEFJTlNfV0hJVEVTUEFDRTogL1xccy9nLFxuICBTRU1WRVJfMV9QXzBfUF8wOiAgICAvXigoXFxkKylcXC4oXFxkKylcXC4oXFxkKykpKD86LShbXFxkQS1aYS16XFwtXSspKT8kLyxcbiAgQkFTRV82NDogICAgICAgICAgICAgL14oPzpbQS1aYS16MC05XFwrXFwvXXs0fSkqKD86W0EtWmEtejAtOVxcK1xcL117Mn09PXxbQS1aYS16MC05XFwrXFwvXXszfT18W0EtWmEtejAtOVxcK1xcL117NH0pJC8sXG4gIElSSTogICAgICAgICAgICAgICAgIC9eW2Etel0oPzpbXFwtYS16MC05XFwrXFwuXSkqOig/OlxcL1xcLyg/Oig/OiVbMC05YS1mXVswLTlhLWZdfFtcXC1hLXowLTlcXC5fflxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRlxcdTEwMDAwLVxcdTFGRkZEXFx1MjAwMDAtXFx1MkZGRkRcXHUzMDAwMC1cXHUzRkZGRFxcdTQwMDAwLVxcdTRGRkZEXFx1NTAwMDAtXFx1NUZGRkRcXHU2MDAwMC1cXHU2RkZGRFxcdTcwMDAwLVxcdTdGRkZEXFx1ODAwMDAtXFx1OEZGRkRcXHU5MDAwMC1cXHU5RkZGRFxcdUEwMDAwLVxcdUFGRkZEXFx1QjAwMDAtXFx1QkZGRkRcXHVDMDAwMC1cXHVDRkZGRFxcdUQwMDAwLVxcdURGRkZEXFx1RTEwMDAtXFx1RUZGRkQhXFwkJidcXChcXClcXCpcXCssOz06XSkqQCk/KD86XFxbKD86KD86KD86WzAtOWEtZl17MSw0fTopezZ9KD86WzAtOWEtZl17MSw0fTpbMC05YS1mXXsxLDR9fCg/OlswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSkoPzpcXC4oPzpbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pKXszfSl8OjooPzpbMC05YS1mXXsxLDR9Oil7NX0oPzpbMC05YS1mXXsxLDR9OlswLTlhLWZdezEsNH18KD86WzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKSg/OlxcLig/OlswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSkpezN9KXwoPzpbMC05YS1mXXsxLDR9KT86Oig/OlswLTlhLWZdezEsNH06KXs0fSg/OlswLTlhLWZdezEsNH06WzAtOWEtZl17MSw0fXwoPzpbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pKD86XFwuKD86WzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKSl7M30pfCg/OlswLTlhLWZdezEsNH06WzAtOWEtZl17MSw0fSk/OjooPzpbMC05YS1mXXsxLDR9Oil7M30oPzpbMC05YS1mXXsxLDR9OlswLTlhLWZdezEsNH18KD86WzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKSg/OlxcLig/OlswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSkpezN9KXwoPzooPzpbMC05YS1mXXsxLDR9Oil7MCwyfVswLTlhLWZdezEsNH0pPzo6KD86WzAtOWEtZl17MSw0fTopezJ9KD86WzAtOWEtZl17MSw0fTpbMC05YS1mXXsxLDR9fCg/OlswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSkoPzpcXC4oPzpbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pKXszfSl8KD86KD86WzAtOWEtZl17MSw0fTopezAsM31bMC05YS1mXXsxLDR9KT86OlswLTlhLWZdezEsNH06KD86WzAtOWEtZl17MSw0fTpbMC05YS1mXXsxLDR9fCg/OlswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSkoPzpcXC4oPzpbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pKXszfSl8KD86KD86WzAtOWEtZl17MSw0fTopezAsNH1bMC05YS1mXXsxLDR9KT86Oig/OlswLTlhLWZdezEsNH06WzAtOWEtZl17MSw0fXwoPzpbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pKD86XFwuKD86WzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKSl7M30pfCg/Oig/OlswLTlhLWZdezEsNH06KXswLDV9WzAtOWEtZl17MSw0fSk/OjpbMC05YS1mXXsxLDR9fCg/Oig/OlswLTlhLWZdezEsNH06KXswLDZ9WzAtOWEtZl17MSw0fSk/OjopfHZbMC05YS1mXStbXFwtYS16MC05XFwuX34hXFwkJidcXChcXClcXCpcXCssOz06XSspXFxdfCg/OlswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSkoPzpcXC4oPzpbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pKXszfXwoPzolWzAtOWEtZl1bMC05YS1mXXxbXFwtYS16MC05XFwuX35cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZcXHUxMDAwMC1cXHUxRkZGRFxcdTIwMDAwLVxcdTJGRkZEXFx1MzAwMDAtXFx1M0ZGRkRcXHU0MDAwMC1cXHU0RkZGRFxcdTUwMDAwLVxcdTVGRkZEXFx1NjAwMDAtXFx1NkZGRkRcXHU3MDAwMC1cXHU3RkZGRFxcdTgwMDAwLVxcdThGRkZEXFx1OTAwMDAtXFx1OUZGRkRcXHVBMDAwMC1cXHVBRkZGRFxcdUIwMDAwLVxcdUJGRkZEXFx1QzAwMDAtXFx1Q0ZGRkRcXHVEMDAwMC1cXHVERkZGRFxcdUUxMDAwLVxcdUVGRkZEIVxcJCYnXFwoXFwpXFwqXFwrLDs9QF0pKikoPzo6WzAtOV0qKT8oPzpcXC8oPzooPzolWzAtOWEtZl1bMC05YS1mXXxbXFwtYS16MC05XFwuX35cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZcXHUxMDAwMC1cXHUxRkZGRFxcdTIwMDAwLVxcdTJGRkZEXFx1MzAwMDAtXFx1M0ZGRkRcXHU0MDAwMC1cXHU0RkZGRFxcdTUwMDAwLVxcdTVGRkZEXFx1NjAwMDAtXFx1NkZGRkRcXHU3MDAwMC1cXHU3RkZGRFxcdTgwMDAwLVxcdThGRkZEXFx1OTAwMDAtXFx1OUZGRkRcXHVBMDAwMC1cXHVBRkZGRFxcdUIwMDAwLVxcdUJGRkZEXFx1QzAwMDAtXFx1Q0ZGRkRcXHVEMDAwMC1cXHVERkZGRFxcdUUxMDAwLVxcdUVGRkZEIVxcJCYnXFwoXFwpXFwqXFwrLDs9OkBdKSkqKSp8XFwvKD86KD86KD86KD86JVswLTlhLWZdWzAtOWEtZl18W1xcLWEtejAtOVxcLl9+XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXFx1MTAwMDAtXFx1MUZGRkRcXHUyMDAwMC1cXHUyRkZGRFxcdTMwMDAwLVxcdTNGRkZEXFx1NDAwMDAtXFx1NEZGRkRcXHU1MDAwMC1cXHU1RkZGRFxcdTYwMDAwLVxcdTZGRkZEXFx1NzAwMDAtXFx1N0ZGRkRcXHU4MDAwMC1cXHU4RkZGRFxcdTkwMDAwLVxcdTlGRkZEXFx1QTAwMDAtXFx1QUZGRkRcXHVCMDAwMC1cXHVCRkZGRFxcdUMwMDAwLVxcdUNGRkZEXFx1RDAwMDAtXFx1REZGRkRcXHVFMTAwMC1cXHVFRkZGRCFcXCQmJ1xcKFxcKVxcKlxcKyw7PTpAXSkpKykoPzpcXC8oPzooPzolWzAtOWEtZl1bMC05YS1mXXxbXFwtYS16MC05XFwuX35cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZcXHUxMDAwMC1cXHUxRkZGRFxcdTIwMDAwLVxcdTJGRkZEXFx1MzAwMDAtXFx1M0ZGRkRcXHU0MDAwMC1cXHU0RkZGRFxcdTUwMDAwLVxcdTVGRkZEXFx1NjAwMDAtXFx1NkZGRkRcXHU3MDAwMC1cXHU3RkZGRFxcdTgwMDAwLVxcdThGRkZEXFx1OTAwMDAtXFx1OUZGRkRcXHVBMDAwMC1cXHVBRkZGRFxcdUIwMDAwLVxcdUJGRkZEXFx1QzAwMDAtXFx1Q0ZGRkRcXHVEMDAwMC1cXHVERkZGRFxcdUUxMDAwLVxcdUVGRkZEIVxcJCYnXFwoXFwpXFwqXFwrLDs9OkBdKSkqKSopP3woPzooPzooPzolWzAtOWEtZl1bMC05YS1mXXxbXFwtYS16MC05XFwuX35cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZcXHUxMDAwMC1cXHUxRkZGRFxcdTIwMDAwLVxcdTJGRkZEXFx1MzAwMDAtXFx1M0ZGRkRcXHU0MDAwMC1cXHU0RkZGRFxcdTUwMDAwLVxcdTVGRkZEXFx1NjAwMDAtXFx1NkZGRkRcXHU3MDAwMC1cXHU3RkZGRFxcdTgwMDAwLVxcdThGRkZEXFx1OTAwMDAtXFx1OUZGRkRcXHVBMDAwMC1cXHVBRkZGRFxcdUIwMDAwLVxcdUJGRkZEXFx1QzAwMDAtXFx1Q0ZGRkRcXHVEMDAwMC1cXHVERkZGRFxcdUUxMDAwLVxcdUVGRkZEIVxcJCYnXFwoXFwpXFwqXFwrLDs9OkBdKSkrKSg/OlxcLyg/Oig/OiVbMC05YS1mXVswLTlhLWZdfFtcXC1hLXowLTlcXC5fflxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRlxcdTEwMDAwLVxcdTFGRkZEXFx1MjAwMDAtXFx1MkZGRkRcXHUzMDAwMC1cXHUzRkZGRFxcdTQwMDAwLVxcdTRGRkZEXFx1NTAwMDAtXFx1NUZGRkRcXHU2MDAwMC1cXHU2RkZGRFxcdTcwMDAwLVxcdTdGRkZEXFx1ODAwMDAtXFx1OEZGRkRcXHU5MDAwMC1cXHU5RkZGRFxcdUEwMDAwLVxcdUFGRkZEXFx1QjAwMDAtXFx1QkZGRkRcXHVDMDAwMC1cXHVDRkZGRFxcdUQwMDAwLVxcdURGRkZEXFx1RTEwMDAtXFx1RUZGRkQhXFwkJidcXChcXClcXCpcXCssOz06QF0pKSopKnwoPyEoPzolWzAtOWEtZl1bMC05YS1mXXxbXFwtYS16MC05XFwuX35cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZcXHUxMDAwMC1cXHUxRkZGRFxcdTIwMDAwLVxcdTJGRkZEXFx1MzAwMDAtXFx1M0ZGRkRcXHU0MDAwMC1cXHU0RkZGRFxcdTUwMDAwLVxcdTVGRkZEXFx1NjAwMDAtXFx1NkZGRkRcXHU3MDAwMC1cXHU3RkZGRFxcdTgwMDAwLVxcdThGRkZEXFx1OTAwMDAtXFx1OUZGRkRcXHVBMDAwMC1cXHVBRkZGRFxcdUIwMDAwLVxcdUJGRkZEXFx1QzAwMDAtXFx1Q0ZGRkRcXHVEMDAwMC1cXHVERkZGRFxcdUUxMDAwLVxcdUVGRkZEIVxcJCYnXFwoXFwpXFwqXFwrLDs9OkBdKSkpKD86XFw/KD86KD86JVswLTlhLWZdWzAtOWEtZl18W1xcLWEtejAtOVxcLl9+XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXFx1MTAwMDAtXFx1MUZGRkRcXHUyMDAwMC1cXHUyRkZGRFxcdTMwMDAwLVxcdTNGRkZEXFx1NDAwMDAtXFx1NEZGRkRcXHU1MDAwMC1cXHU1RkZGRFxcdTYwMDAwLVxcdTZGRkZEXFx1NzAwMDAtXFx1N0ZGRkRcXHU4MDAwMC1cXHU4RkZGRFxcdTkwMDAwLVxcdTlGRkZEXFx1QTAwMDAtXFx1QUZGRkRcXHVCMDAwMC1cXHVCRkZGRFxcdUMwMDAwLVxcdUNGRkZEXFx1RDAwMDAtXFx1REZGRkRcXHVFMTAwMC1cXHVFRkZGRCFcXCQmJ1xcKFxcKVxcKlxcKyw7PTpAXSl8W1xcdUUwMDAtXFx1RjhGRlxcdUYwMDAwLVxcdUZGRkZEfFxcdTEwMDAwMC1cXHUxMEZGRkRcXC9cXD9dKSopPyg/OlxcIyg/Oig/OiVbMC05YS1mXVswLTlhLWZdfFtcXC1hLXowLTlcXC5fflxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRlxcdTEwMDAwLVxcdTFGRkZEXFx1MjAwMDAtXFx1MkZGRkRcXHUzMDAwMC1cXHUzRkZGRFxcdTQwMDAwLVxcdTRGRkZEXFx1NTAwMDAtXFx1NUZGRkRcXHU2MDAwMC1cXHU2RkZGRFxcdTcwMDAwLVxcdTdGRkZEXFx1ODAwMDAtXFx1OEZGRkRcXHU5MDAwMC1cXHU5RkZGRFxcdUEwMDAwLVxcdUFGRkZEXFx1QjAwMDAtXFx1QkZGRkRcXHVDMDAwMC1cXHVDRkZGRFxcdUQwMDAwLVxcdURGRkZEXFx1RTEwMDAtXFx1RUZGRkQhXFwkJidcXChcXClcXCpcXCssOz06QF0pfFtcXC9cXD9dKSopPyQvaSxcbiAgQkNQXzQ3OiAgICAgICAgICAgICAgL14oPzooZW4tR0Itb2VkfGktKD86YW1pfGJubnxkZWZhdWx0fGVub2NoaWFufGhha3xrbGluZ29ufGx1eHxtaW5nb3xuYXZham98cHdufHRhb3x0YXl8dHN1KXxzZ24tKD86QkUtRlJ8QkUtTkx8Q0gtREUpKXwoYXJ0LWxvamJhbnxjZWwtZ2F1bGlzaHxuby0oPzpib2t8bnluKXx6aC0oPzpndW95dXxoYWtrYXxtaW58bWluLW5hbnx4aWFuZykpKSR8Xih4KD86LVswLTlhLXpdezEsOH0pKykkfF4oPzooKD86W2Etel17MiwzfSg/Oig/Oi1bYS16XXszfSl7MSwzfSk/KXxbYS16XXs0fXxbYS16XXs1LDh9KSg/Oi0oW2Etel17NH0pKT8oPzotKFthLXpdezJ9fFswLTldezN9KSk/KCg/Oi0oPzpbYS16MC05XXs1LDh9fFswLTldW2EtejAtOV17M30pKSopPygoPzotWzAtOWEtd3ktel0oPzotW2EtejAtOV17Miw4fSl7MSx9KSopPygteCg/Oi1bMC05YS16XXsxLDh9KSspPykkL2lcbn0pO1xuXG5jb25zdCBkYXRlRm9ybWF0UmVnZXhQb3NpdGlvbnMgPSBPYmplY3QuZnJlZXplKHtcbiAgWUVBUjogICAgICAgICAgICAgMSxcbiAgTU9OVEg6ICAgICAgICAgICAgMixcbiAgREFZOiAgICAgICAgICAgICAgMyxcbiAgSE9VUjogICAgICAgICAgICAgNCxcbiAgTUlOVVRFOiAgICAgICAgICAgNSxcbiAgU0VDT05EOiAgICAgICAgICAgNixcbiAgTVNFQ09ORDogICAgICAgICAgNyxcbiAgWk9ORTogICAgICAgICAgICAgOCxcbiAgUkVMQVRJVkVfVElNRTogICAgOSxcbiAgVElNRV9aT05FX0hPVVI6ICAgMTAsXG4gIFRJTUVfWk9ORV9NSU5VVEU6IDExXG59KTtcblxuZXhwb3J0IHt4YXBpVmFsaWRhdGlvblJlZ2V4fTtcbmV4cG9ydCB7ZGF0ZUZvcm1hdFJlZ2V4UG9zaXRpb25zfTtcbiIsIiAndXNlIHN0cmljdCc7XG4gaW1wb3J0IHtwcm9wZXJ0aWVzfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcGVydGllcyc7XG5cbiBjb25zdCB4YXBpV2hpdGVMaXN0UHJvcGVydGllcyA9IE9iamVjdC5mcmVlemUoe1xuICAgSUZJOiBbXG4gICAgIHByb3BlcnRpZXMuSE9NRV9QQUdFLFxuICAgICBwcm9wZXJ0aWVzLk5BTUVcbiAgIF0sXG4gICBVUkk6IFtcbiAgICAgcHJvcGVydGllcy5JRCxcbiAgICAgcHJvcGVydGllcy5ESVNQTEFZXG4gICBdLFxuICAgQ09NUE9ORU5UX0FSUkFZOiBbXG4gICAgIHByb3BlcnRpZXMuSUQsXG4gICAgIHByb3BlcnRpZXMuREVTQ1JJUFRJT05cbiAgIF0sXG4gICBBQ1RJVklUWV9ERUZJTklUSU9OOiBbXG4gICAgIHByb3BlcnRpZXMuTkFNRSxcbiAgICAgcHJvcGVydGllcy5ERVNDUklQVElPTixcbiAgICAgcHJvcGVydGllcy5UWVBFLFxuICAgICBwcm9wZXJ0aWVzLk1PUkVfSU5GTyxcbiAgICAgcHJvcGVydGllcy5FWFRFTlNJT05TLFxuICAgICBwcm9wZXJ0aWVzLklOVEVSQUNUSU9OX1RZUEUsXG4gICAgIHByb3BlcnRpZXMuQ09SUkVDVF9SRVNQT05TRVNfUEFUVEVSTixcbiAgICAgcHJvcGVydGllcy5DSE9JQ0VTLFxuICAgICBwcm9wZXJ0aWVzLlNDQUxFLFxuICAgICBwcm9wZXJ0aWVzLlNPVVJDRSxcbiAgICAgcHJvcGVydGllcy5UQVJHRVQsXG4gICAgIHByb3BlcnRpZXMuU1RFUFNcbiAgIF0sXG4gICBBQ1RJVklUWTogW1xuICAgICBwcm9wZXJ0aWVzLk9CSkVDVF9UWVBFLFxuICAgICBwcm9wZXJ0aWVzLklELFxuICAgICBwcm9wZXJ0aWVzLkRFRklOSVRJT05cbiAgIF0sXG4gICBTVEFURU1FTlRfUkVGOiBbXG4gICAgIHByb3BlcnRpZXMuSUQsXG4gICAgIHByb3BlcnRpZXMuT0JKRUNUX1RZUEVcbiAgIF0sXG4gICBTQ09SRTogW1xuICAgICBwcm9wZXJ0aWVzLlNDQUxFRCxcbiAgICAgcHJvcGVydGllcy5SQVcsXG4gICAgIHByb3BlcnRpZXMuTUlOLFxuICAgICBwcm9wZXJ0aWVzLk1BWFxuICAgXSxcbiAgIFJFU1VMVDogW1xuICAgICBwcm9wZXJ0aWVzLlNDT1JFLFxuICAgICBwcm9wZXJ0aWVzLlNVQ0NFU1MsXG4gICAgIHByb3BlcnRpZXMuQ09NUExFVElPTixcbiAgICAgcHJvcGVydGllcy5SRVNQT05TRSxcbiAgICAgcHJvcGVydGllcy5EVVJBVElPTixcbiAgICAgcHJvcGVydGllcy5FWFRFTlNJT05TXG4gICBdLFxuICAgQVRUQUNITUVOVDogW1xuICAgICBwcm9wZXJ0aWVzLlVTQUdFX1RZUEUsXG4gICAgIHByb3BlcnRpZXMuRElTUExBWSxcbiAgICAgcHJvcGVydGllcy5ERVNDUklQVElPTixcbiAgICAgcHJvcGVydGllcy5DT05URU5UX1RZUEUsXG4gICAgIHByb3BlcnRpZXMuTEVOR1RILFxuICAgICBwcm9wZXJ0aWVzLlNIQTIsXG4gICAgIHByb3BlcnRpZXMuRklMRV9VUkxcbiAgIF0sXG4gIEFHRU5UOiBbXG4gICAgcHJvcGVydGllcy5PQkpFQ1RfVFlQRSxcbiAgICBwcm9wZXJ0aWVzLk5BTUUsXG4gICAgcHJvcGVydGllcy5BQ0NPVU5ULFxuICAgIHByb3BlcnRpZXMuTUJPWF9TSEFfMV9TVU0sXG4gICAgcHJvcGVydGllcy5NQk9YLFxuICAgIHByb3BlcnRpZXMuT1BFTl9JRFxuICBdLFxuICBHUk9VUDogW1xuICAgIHByb3BlcnRpZXMuT0JKRUNUX1RZUEUsXG4gICAgcHJvcGVydGllcy5OQU1FLFxuICAgIHByb3BlcnRpZXMuTUVNQkVSLFxuICAgIHByb3BlcnRpZXMuQUNDT1VOVCxcbiAgICBwcm9wZXJ0aWVzLk1CT1hfU0hBXzFfU1VNLFxuICAgIHByb3BlcnRpZXMuTUJPWCxcbiAgICBwcm9wZXJ0aWVzLk9QRU5fSURcbiAgXSxcbiAgQ09OVEVYVF9BQ1RJVklUSUVTOiBbXG4gICAgcHJvcGVydGllcy5QQVJFTlQsXG4gICAgcHJvcGVydGllcy5HUk9VUElORyxcbiAgICBwcm9wZXJ0aWVzLkNBVEVHT1JZLFxuICAgIHByb3BlcnRpZXMuT1RIRVJcbiAgXSxcbiAgU1RBVEVNRU5UOiBbXG4gICAgcHJvcGVydGllcy5JRCxcbiAgICBwcm9wZXJ0aWVzLkFDVE9SLFxuICAgIHByb3BlcnRpZXMuVkVSQixcbiAgICBwcm9wZXJ0aWVzLk9CSkVDVCxcbiAgICBwcm9wZXJ0aWVzLlJFU1VMVCxcbiAgICBwcm9wZXJ0aWVzLkNPTlRFWFQsXG4gICAgcHJvcGVydGllcy5USU1FU1RBTVAsXG4gICAgcHJvcGVydGllcy5TVE9SRUQsXG4gICAgcHJvcGVydGllcy5BVVRIT1JJVFksXG4gICAgcHJvcGVydGllcy5WRVJTSU9OLFxuICAgIHByb3BlcnRpZXMuQVRUQUNITUVOVFNcbiAgXSxcbiAgU1VCX1NUQVRFTUVOVDogW1xuICAgIHByb3BlcnRpZXMuQUNUT1IsXG4gICAgcHJvcGVydGllcy5WRVJCLFxuICAgIHByb3BlcnRpZXMuT0JKRUNULFxuICAgIHByb3BlcnRpZXMuUkVTVUxULFxuICAgIHByb3BlcnRpZXMuQ09OVEVYVCxcbiAgICBwcm9wZXJ0aWVzLlRJTUVTVEFNUCxcbiAgICBwcm9wZXJ0aWVzLkFUVEFDSE1FTlRTLFxuICAgIHByb3BlcnRpZXMuT0JKRUNUX1RZUEVcbiAgXVxufSk7XG5cbiBleHBvcnQge3hhcGlXaGl0ZUxpc3RQcm9wZXJ0aWVzfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtwcm9wZXJ0aWVzLCBvYmplY3RUeXBlcywgeGFwaVZhbGlkYXRpb25JZmlQcm9wZXJ0eU5hbWVzLCB4QXBpVmFsaWRPYmplY3RUeXBlc30gZnJvbSAnLi4vY29uc3RhbnRzL3Byb3BlcnRpZXMnO1xuaW1wb3J0IHt4YXBpV2hpdGVMaXN0UHJvcGVydGllc30gZnJvbSAnLi4vY29uc3RhbnRzL3doaXRlbGlzdHMnO1xuaW1wb3J0IHt4YXBpRXJyb3JMZXZlbHMsIHhhcGlWYWxpZGF0aW9uRXJyb3JzfSBmcm9tICcuLi9jb25zdGFudHMvZXJyb3JzJztcbmltcG9ydCB7eGFwaVZhbGlkYXRpb25SZWdleCwgZGF0ZUZvcm1hdFJlZ2V4UG9zaXRpb25zfSBmcm9tICcuLi9jb25zdGFudHMvcmVnZXgnO1xuaW1wb3J0IHt4YXBpVmFsaWRhdGlvbkludGVyYWN0aW9uVHlwZXN9IGZyb20gJy4uL2NvbnN0YW50cy9pbnRlcmFjdGlvbi10eXBlcyc7XG5pbXBvcnQge3hhcGlHZW5lcmFsfSBmcm9tICcuLi9jb25zdGFudHMvZ2VuZXJhbCc7XG5pbXBvcnQge3hhcGlWYWxpZGF0aW9uVXRpbHN9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxudmFyIHhhcGlWYWxpZGF0b3I7XG5cbmZ1bmN0aW9uIG1ha2VWMVJlcG9ydChpbnN0YW5jZSwgZXJyb3JzKSB7XG4gIHZhciB2ZXJzaW9uO1xuXG4gIGluc3RhbmNlID0gaW5zdGFuY2UgfHwgbnVsbDtcbiAgZXJyb3JzICAgPSBlcnJvcnMgfHwgbnVsbDtcbiAgdmVyc2lvbiAgPSB4YXBpR2VuZXJhbC5GSVJTVF9SRVBPUlRfVkVSU1RJT047XG4gIHJldHVybiB7aW5zdGFuY2UsIGVycm9ycywgdmVyc2lvbn07XG59XG5cbmZ1bmN0aW9uIG1ha2VWMVNpbmdsZUVycm9yUmVwb3J0KGluc3RhbmNlLCBlcnJvcikge1xuICByZXR1cm4gbWFrZVYxUmVwb3J0KGluc3RhbmNlLCBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdW5kZWZpbmVkID8gW10gOiBbZXJyb3JdKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBYnNlbmNlT2ZOb25XaGl0ZWxpc3RlZFByb3BlcnRpZXModGFyZ2V0LCBhbGxvd2VkUHJvcGVydGllcywgdHJhY2UsIGVycm9ycykge1xuICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2UsIHByb3BlcnR5TmFtZTtcblxuICBsb2NhbEVycm9ycyA9IGVycm9ycyB8fCBbXTtcbiAgbG9jYWxUcmFjZSAgPSB0cmFjZSAgfHwgJyc7XG5cbiAgZm9yIChwcm9wZXJ0eU5hbWUgaW4gdGFyZ2V0KSB7XG4gICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIGFsbG93ZWRQcm9wZXJ0aWVzLmluZGV4T2YocHJvcGVydHlOYW1lKSA9PT0geGFwaUdlbmVyYWwuTk9fSU5ERVhfRk9VTkQpIHtcbiAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnR5TmFtZSksXG4gICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLlVORVhQRUNURUQsXG4gICAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvY2FsRXJyb3JzO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnR5SXNTdHJpbmcocGFyZW50LCBwcm9wZXJ0eU5hbWUsIHRyYWNlLCBlcnJvcnMsIGlzUmVxdWlyZWQsIHZpb2xhdGlvblR5cGUpIHtcbiAgdmFyIGxvY2FsRXJyb3JzLCBsb2NhbFRyYWNlLCBwcm9wVmFsdWUsIGxvY2FsVmlvbGF0aW9uVHlwZTtcblxuICBsb2NhbEVycm9ycyAgICAgICAgPSBlcnJvcnMgfHwgW107XG4gIGxvY2FsVHJhY2UgICAgICAgICA9IHRyYWNlICB8fCAnJztcbiAgcHJvcFZhbHVlICAgICAgICAgID0gcGFyZW50W3Byb3BlcnR5TmFtZV0sXG4gIGxvY2FsVmlvbGF0aW9uVHlwZSA9IHZpb2xhdGlvblR5cGUgfHwgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OO1xuXG4gIGlmIChwcm9wVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNTdHJpbmcocHJvcFZhbHVlKSkge1xuICAgICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UsIHByb3BlcnR5TmFtZSksXG4gICAgICAgIG1lc3NhZ2U6IGAke3Byb3BlcnR5TmFtZX0gJHt4YXBpVmFsaWRhdGlvbkVycm9ycy5NVVNUX0JFX1NUUklOR31gLFxuICAgICAgICBsZXZlbDogICBsb2NhbFZpb2xhdGlvblR5cGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0eU5hbWUpLFxuICAgICAgbWVzc2FnZTogYCR7cHJvcGVydHlOYW1lfSAke3hhcGlWYWxpZGF0aW9uRXJyb3JzLk1VU1RfQkVfUFJFU0VOVH1gLFxuICAgICAgbGV2ZWw6ICAgbG9jYWxWaW9sYXRpb25UeXBlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbG9jYWxFcnJvcnM7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydHlJc1VyaSh0YXJnZXQsIHByb3BlcnR5TmFtZSwgdHJhY2UsIGVycm9ycywgaXNSZXF1aXJlZCkge1xuICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2UsIHByb3BWYWx1ZTtcblxuICBsb2NhbEVycm9ycyA9IGVycm9ycyB8fCBbXTtcbiAgbG9jYWxUcmFjZSAgPSB0cmFjZSAgfHwgJyc7XG4gIHByb3BWYWx1ZSAgID0gdGFyZ2V0W3Byb3BlcnR5TmFtZV07XG5cbiAgaWYgKHByb3BWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCAheGFwaVZhbGlkYXRpb25VdGlscy5pc1N0cmluZyhwcm9wVmFsdWUpKSB7XG4gICAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5sb2NhbFRyYWNlVG9TdHJpbmcobG9jYWxUcmFjZSwgcHJvcGVydHlOYW1lKSxcbiAgICAgICAgbWVzc2FnZTogYCR7cHJvcGVydHlOYW1lfSAke3hhcGlWYWxpZGF0aW9uRXJyb3JzLk1VU1RfQkVfVVJJX1NUUklOR31gLFxuICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXhhcGlWYWxpZGF0aW9uUmVnZXguSVJJLnRlc3QocHJvcFZhbHVlKSkge1xuICAgICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICAgIHRyYWNlOiAgeGFwaVZhbGlkYXRpb25VdGlscy5sb2NhbFRyYWNlVG9TdHJpbmcobG9jYWxUcmFjZSwgcHJvcGVydHlOYW1lKSxcbiAgICAgICAgbWVzc2FnZTogYCR7cHJvcGVydHlOYW1lfSAke3hhcGlWYWxpZGF0aW9uRXJyb3JzLk1VU1RfQkVfSVJJX1NUUklOR31gLFxuICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuU0hPVUxEX1ZJT0xBVElPTlxuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UsIHByb3BlcnR5TmFtZSksXG4gICAgICBtZXNzYWdlOiBgJHtwcm9wZXJ0eU5hbWV9ICR7eGFwaVZhbGlkYXRpb25FcnJvcnMuTVVTVF9CRV9VUklfUFJFU0VOVH1gLFxuICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGxvY2FsRXJyb3JzO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnR5SXNVcmwodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIHRyYWNlLCBlcnJvcnMsIGlzUmVxdWlyZWQpIHtcbiAgLy8gVE9ETyAtIGNoZWNrIHdoZXRoZXIgYSBmb3JtYWwgVVJMIGZvcm1hdCBkZWZpbml0aW9uIGlzIHJlY29tbWVuZGVkL2VuZm9yY2VkIGZvciB4QVBJXG4gIHJldHVybiB2YWxpZGF0ZVByb3BlcnR5SXNTdHJpbmcodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIHRyYWNlLCBlcnJvcnMsIGlzUmVxdWlyZWQpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnR5SXNCb29sZWFuKHBhcmVudCwgcHJvcGVydHlOYW1lLCB0cmFjZSwgZXJyb3JzLCBpc1JlcXVpcmVkKSB7XG4gIHZhciBsb2NhbEVycm9ycywgbG9jYWxUcmFjZSwgcHJvcFZhbHVlO1xuXG4gIGxvY2FsRXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICBsb2NhbFRyYWNlICA9IHRyYWNlICB8fCAnJztcbiAgcHJvcFZhbHVlICAgPSBwYXJlbnRbcHJvcGVydHlOYW1lXTtcblxuICBpZiAocHJvcFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8ICF4YXBpVmFsaWRhdGlvblV0aWxzLmlzQm9vbGVhbihwcm9wVmFsdWUpKSB7XG4gICAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5sb2NhbFRyYWNlVG9TdHJpbmcobG9jYWxUcmFjZSwgcHJvcGVydHlOYW1lKSxcbiAgICAgICAgbWVzc2FnZTogYCR7cHJvcGVydHlOYW1lfSAke3hhcGlWYWxpZGF0aW9uRXJyb3JzLk1VU1RfQkVfQk9PTEVBTn1gLFxuICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0eU5hbWUpLFxuICAgICAgbWVzc2FnZTogYCR7cHJvcGVydHlOYW1lfSAke3hhcGlWYWxpZGF0aW9uRXJyb3JzLk1VU1RfQkVfQk9PTEVBTl9QUkVTRU5UfWAsXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbG9jYWxFcnJvcnM7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydHlJc051bWJlcihwYXJlbnQsIHByb3BlcnR5TmFtZSwgdHJhY2UsIGVycm9ycywgaXNSZXF1aXJlZCkge1xuICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2UsIHByb3BWYWx1ZTtcblxuICBsb2NhbEVycm9ycyA9IGVycm9ycyB8fCBbXTtcbiAgbG9jYWxUcmFjZSAgPSB0cmFjZSAgfHwgJyc7XG4gIHByb3BWYWx1ZSAgID0gcGFyZW50W3Byb3BlcnR5TmFtZV07XG5cbiAgICBpZiAocHJvcFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNOdW1iZXIocHJvcFZhbHVlKSkge1xuICAgICAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0eU5hbWUpLFxuICAgICAgICAgIG1lc3NhZ2U6IGAke3Byb3BlcnR5TmFtZX0gJHt4YXBpVmFsaWRhdGlvbkVycm9ycy5NVVNUX0JFX05VTUJFUn1gLFxuICAgICAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0eU5hbWUpLFxuICAgICAgICBtZXNzYWdlOiBgJHtwcm9wZXJ0eU5hbWV9ICR7eGFwaVZhbGlkYXRpb25FcnJvcnMuTVVTVF9CRV9OVU1CRVJfUFJFU0VOVH1gLFxuICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxFcnJvcnM7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSUZJUHJvcGVydGllcyh0YXJnZXQsIHRyYWNlLCBlcnJvcnMpIHtcbiAgdmFyIGxvY2FsRXJyb3JzLCBsb2NhbFRyYWNlLCBhY2NvdW50VHJhY2U7XG5cbiAgbG9jYWxFcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gIGxvY2FsVHJhY2UgID0gdHJhY2UgIHx8ICcnO1xuXG4gIGlmICh0YXJnZXQubWJveCAhPT0gdW5kZWZpbmVkICYmIHRhcmdldC5tYm94ICE9PSBudWxsKSB7XG4gICAgaWYgKCF4YXBpVmFsaWRhdGlvblV0aWxzLmlzU3RyaW5nKHRhcmdldC5tYm94KSkge1xuICAgICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICAgIHRyYWNlOiB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLk1CT1gpLFxuICAgICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5NVVNUX0JFX01CT1hfVVJJLFxuICAgICAgICBsZXZlbDogeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCF4YXBpVmFsaWRhdGlvblJlZ2V4Lk1BSUxUT19VUkkudGVzdCh0YXJnZXQubWJveCkpIHtcbiAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLk1CT1gpLFxuICAgICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5NVVNUX0JFX1ZBTElEX01CT1hfRk9STUFULFxuICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHlJc1N0cmluZyh0YXJnZXQsIHByb3BlcnRpZXMuTUJPWF9TSEFfMV9TVU0sIGxvY2FsVHJhY2UsIGxvY2FsRXJyb3JzLCAgLyppc1JlcXVpcmVkKi9mYWxzZSk7XG4gIHZhbGlkYXRlUHJvcGVydHlJc1VyaSh0YXJnZXQsIHByb3BlcnRpZXMuT1BFTl9JRCwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMsIC8qaXNSZXF1aXJlZCovZmFsc2UpO1xuXG4gIGlmICh0YXJnZXQuYWNjb3VudCAhPT0gdW5kZWZpbmVkICYmIHRhcmdldC5hY2NvdW50ICE9PSBudWxsKSB7XG4gICAgYWNjb3VudFRyYWNlID0geGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLkFDQ09VTlQpO1xuICAgIHZhbGlkYXRlUHJvcGVydHlJc1VyaSh0YXJnZXQuYWNjb3VudCwgcHJvcGVydGllcy5IT01FX1BBR0UsYWNjb3VudFRyYWNlLCBsb2NhbEVycm9ycywgLyppc1JlcXVpcmVkKi90cnVlKTtcbiAgICB2YWxpZGF0ZVByb3BlcnR5SXNTdHJpbmcodGFyZ2V0LmFjY291bnQsIHByb3BlcnRpZXMuTkFNRSwgYWNjb3VudFRyYWNlLCBsb2NhbEVycm9ycywgLyppc1JlcXVpcmVkKi90cnVlKTtcbiAgICB2YWxpZGF0ZUFic2VuY2VPZk5vbldoaXRlbGlzdGVkUHJvcGVydGllcyh0YXJnZXQuYWNjb3VudCwgeGFwaVdoaXRlTGlzdFByb3BlcnRpZXMuSUZJLCBhY2NvdW50VHJhY2UsIGxvY2FsRXJyb3JzKTtcbiAgfVxuXG4gIHJldHVybiBsb2NhbEVycm9ycztcbn1cblxuZnVuY3Rpb24gZ2V0SUZJcyh0YXJnZXQpIHtcbiAgdmFyIGlmaXMsIHByb3BlcnRpZXNMZW5ndGgsIGksIHByb3BOYW1lLCBwcm9wVmFsdWU7XG5cbiAgaWZpcyA9IFtdO1xuICBwcm9wZXJ0aWVzTGVuZ3RoID0geGFwaVZhbGlkYXRpb25JZmlQcm9wZXJ0eU5hbWVzLmxlbmd0aDtcblxuICBpZiAodGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdW5kZWZpbmVkKSAge1xuICAgIHJldHVybiBpZmlzO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IHByb3BlcnRpZXNMZW5ndGg7IGkgKz0gMSkge1xuICAgIHByb3BOYW1lICA9IHhhcGlWYWxpZGF0aW9uSWZpUHJvcGVydHlOYW1lc1tpXTtcbiAgICBwcm9wVmFsdWUgPSB0YXJnZXRbcHJvcE5hbWVdO1xuXG4gICAgaWYgKHByb3BWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaWZpcy5wdXNoKHtrZXk6IHByb3BOYW1lLCB2YWx1ZTogcHJvcFZhbHVlfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlmaXM7XG59XG5cbmZ1bmN0aW9uIGdldElGSUNvdW50KHRhcmdldCkge1xuICByZXR1cm4gZ2V0SUZJcyh0YXJnZXQpLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHRlbnNpb25zKGV4dGVuc2lvbnMsIHRyYWNlLCBlcnJvcnMpIHtcbiAgdmFyIGxvY2FsRXJyb3JzLCBsb2NhbFRyYWNlO1xuXG4gIGxvY2FsRXJyb3JzID0gZXJyb3JzIHx8IFtdLFxuICBsb2NhbFRyYWNlICA9IHRyYWNlICB8fCBwcm9wZXJ0aWVzLkVYVEVOU0lPTlM7XG5cbiAgaWYgKGV4dGVuc2lvbnMgPT09IHVuZGVmaW5lZCkge3JldHVybiBsb2NhbEVycm9yczt9XG5cbiAgaWYgKCF4YXBpVmFsaWRhdGlvblV0aWxzLmlzTm9uTnVsbE1hcE9iamVjdChleHRlbnNpb25zKSkge1xuICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgdHJhY2U6ICAgbG9jYWxUcmFjZSxcbiAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLkVYVEVOU0lPTlNfTVVTVF9OT1RfQkVfTlVMTCxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuICB9XG4gIC8vIFRPRE8gLSBkb3VibGUtY2hlY2sgd2hhdCBmdXJ0aGVyIGVuZm9yY2VhYmxlIGNvbnN0cmFpbnRzIGV4aXN0IG9uIGV4dGVuc2lvbiBvYmplY3QgcHJvcGVydGllc1xuICByZXR1cm4gbG9jYWxFcnJvcnM7XG59XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVMYW5ndWFnZU1hcChsYW5ndWFnZU1hcCwgdHJhY2UsIGVycm9ycykge1xuICAgIHZhciBsb2NhbEVycm9ycywgbG9jYWxUcmFjZSwgcHJvcE5hbWUsIG1hcHBlZFZhbHVlO1xuXG4gICAgbG9jYWxFcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gICAgbG9jYWxUcmFjZSAgPSB0cmFjZSAgfHwgcHJvcGVydGllcy5MQU5HVUFHRV9NQVA7XG5cbiAgICBpZiAobGFuZ3VhZ2VNYXAgPT09IHVuZGVmaW5lZCkge3JldHVybiBsb2NhbEVycm9yczt9XG5cbiAgICBpZiAoIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNOb25OdWxsTWFwT2JqZWN0KGxhbmd1YWdlTWFwKSkge1xuICAgICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSksXG4gICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLkxBTkdVQUdFX01BUFNfTVVTVF9OT1RfQkVfTlVMTCxcbiAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxvY2FsRXJyb3JzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gbGFuZ3VhZ2VNYXApIHtcbiAgICAgIGlmIChsYW5ndWFnZU1hcC5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKCF4YXBpVmFsaWRhdGlvblV0aWxzLmlzVmFsaWRMYW5ndWFnZVRhZyhwcm9wTmFtZSkpIHtcbiAgICAgICAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcE5hbWUpLFxuICAgICAgICAgICAgbWVzc2FnZTogYCR7cHJvcE5hbWV9ICR7eGFwaVZhbGlkYXRpb25FcnJvcnMuTEFOR1VBR0VfTUFQX0tFWV9JTlZBTElEfWAsXG4gICAgICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcHBlZFZhbHVlID0gbGFuZ3VhZ2VNYXBbcHJvcE5hbWVdO1xuXG4gICAgICAgIGlmIChtYXBwZWRWYWx1ZSA9PT0gbnVsbCB8fCBtYXBwZWRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8ICF4YXBpVmFsaWRhdGlvblV0aWxzLmlzU3RyaW5nKG1hcHBlZFZhbHVlKSkge1xuICAgICAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRMb29rdXBUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BOYW1lKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGAke3Byb3BOYW1lfSAke3hhcGlWYWxpZGF0aW9uRXJyb3JzLkxBTkdVQUdFX01BUF9LRVlfTVVTVF9CRV9TVFJJTkd9YCxcbiAgICAgICAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsRXJyb3JzO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVWZXJiKHZlcmIsIHRyYWNlLCBlcnJvcnMpIHtcbiAgICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2U7XG5cbiAgICBsb2NhbEVycm9ycyA9IGVycm9ycyB8fCBbXTtcbiAgICBsb2NhbFRyYWNlICA9IHRyYWNlICB8fCBwcm9wZXJ0aWVzLlZFUkI7XG5cbiAgICBpZiAodmVyYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5sb2NhbFRyYWNlVG9TdHJpbmcobG9jYWxUcmFjZSksXG4gICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLlZFUkJfTVVTVF9CRV9QUk9WSURFRCxcbiAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxvY2FsRXJyb3JzO1xuICAgIH1cblxuICAgIGlmICgheGFwaVZhbGlkYXRpb25VdGlscy5pc05vbk51bGxNYXBPYmplY3QodmVyYikpIHtcbiAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlKSxcbiAgICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuVkVSQl9NVVNUX05PVF9CRV9OVUxMLFxuICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbG9jYWxFcnJvcnM7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVQcm9wZXJ0eUlzVXJpKHZlcmIsIHByb3BlcnRpZXMuSUQsIGxvY2FsVHJhY2UsIGxvY2FsRXJyb3JzLCAgLyppc1JlcXVpcmVkKi90cnVlKTtcblxuICAgIGlmICh2ZXJiLmRpc3BsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5ESVNQTEFZKSxcbiAgICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuRElTUExBWV9TSE9VTERfQkVfUFJPVklERUQsXG4gICAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5TSE9VTERfVklPTEFUSU9OXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVMYW5ndWFnZU1hcCh2ZXJiLmRpc3BsYXksIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5ESVNQTEFZKSwgbG9jYWxFcnJvcnMpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQWJzZW5jZU9mTm9uV2hpdGVsaXN0ZWRQcm9wZXJ0aWVzKHZlcmIsIHhhcGlXaGl0ZUxpc3RQcm9wZXJ0aWVzLlVSSSwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsRXJyb3JzO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVJbnRlcmFjdGlvbkNvbXBvbmVudEFycmF5KGNvbXBvbmVudHMsIGludGVyYWN0aW9uVHlwZSwgYWxsb3dlZEludGVyYWN0aW9uVHlwZXMsIHRyYWNlLCBlcnJvcnMpIHtcbiAgICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2UsIGlzQWxsb3dlZENvbXBvbmVudFR5cGUsIGlkcywgaW50ZXJhY3Rpb25Db21wb25lbnQsIGNvbXBvbmVudHNMZW5ndGgsIHBlckNvbXBvbmVudFRyYWNlLCBpO1xuXG4gICAgbG9jYWxFcnJvcnMgICAgICAgICAgICA9IGVycm9ycyB8fCBbXTtcbiAgICBsb2NhbFRyYWNlICAgICAgICAgICAgID0gdHJhY2UgIHx8IHByb3BlcnRpZXMuSU5URVJBQ1RJT05fQ09NUE9ORU5UUztcbiAgICBpc0FsbG93ZWRDb21wb25lbnRUeXBlID0gYWxsb3dlZEludGVyYWN0aW9uVHlwZXMuaW5kZXhPZihpbnRlcmFjdGlvblR5cGUpICE9PSB4YXBpR2VuZXJhbC5OT19JTkRFWF9GT1VORDtcbiAgICBpZHMgICAgICAgICAgICAgICAgICAgID0gW107XG5cblxuICAgIGlmIChpc0FsbG93ZWRDb21wb25lbnRUeXBlICYmIGNvbXBvbmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBvbmVudHMgPT09IG51bGwgfHwgIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNBcnJheShjb21wb25lbnRzKSkge1xuICAgICAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgICAgICB0cmFjZTogICBsb2NhbFRyYWNlLFxuICAgICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLklOVEVSQUNUSU9OX0NPTVBPTkVOVF9TSE9VTERfQkVfQVJSQVksXG4gICAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLlNIT1VMRF9WSU9MQVRJT05cbiAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudHNMZW5ndGggPSBjb21wb25lbnRzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29tcG9uZW50c0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaW50ZXJhY3Rpb25Db21wb25lbnQgPSBjb21wb25lbnRzW2ldO1xuICAgICAgICAgIHBlckNvbXBvbmVudFRyYWNlICAgID0geGFwaVZhbGlkYXRpb25VdGlscy5hZGRMb29rdXBUb1RyYWNlKGxvY2FsVHJhY2UsIGkpO1xuXG4gICAgICAgICAgaWYgKCF4YXBpVmFsaWRhdGlvblV0aWxzLmlzTm9uTnVsbE1hcE9iamVjdChpbnRlcmFjdGlvbkNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgICB0cmFjZTogICBwZXJDb21wb25lbnRUcmFjZSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuSU5URVJBQ1RJT05fQ09NUE9ORU5UX01VU1RfTk9UX0JFX05VTEwsXG4gICAgICAgICAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlUHJvcGVydHlJc1N0cmluZyhpbnRlcmFjdGlvbkNvbXBvbmVudCwgcHJvcGVydGllcy5JRCwgcGVyQ29tcG9uZW50VHJhY2UsIGxvY2FsRXJyb3JzLCAvKmlzUmVxdWlyZWQqL3RydWUsIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTik7XG5cbiAgICAgICAgICAgIGlmIChpZHMuaW5kZXhPZihpbnRlcmFjdGlvbkNvbXBvbmVudC5pZCkgIT09IHhhcGlHZW5lcmFsLk5PX0lOREVYX0ZPVU5EKSB7XG4gICAgICAgICAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UocGVyQ29tcG9uZW50VHJhY2UsIHByb3BlcnRpZXMuSUQpLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLklEX01VU1RfQkVfVU5JUVVFLFxuICAgICAgICAgICAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlkcy5wdXNoKGludGVyYWN0aW9uQ29tcG9uZW50LmlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGludGVyYWN0aW9uQ29tcG9uZW50LmlkICYmIHhhcGlWYWxpZGF0aW9uUmVnZXguQ09OVEFJTlNfV0hJVEVTUEFDRS50ZXN0KGludGVyYWN0aW9uQ29tcG9uZW50LmlkKSkge1xuICAgICAgICAgICAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKHBlckNvbXBvbmVudFRyYWNlLCBwcm9wZXJ0aWVzLklEKSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5JRF9TSE9VTERfTk9UX0NPTlRBSU5fV0hJVEVTUEFDRVMsXG4gICAgICAgICAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLlNIT1VMRF9WSU9MQVRJT05cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbGlkYXRlTGFuZ3VhZ2VNYXAoaW50ZXJhY3Rpb25Db21wb25lbnQuZGVzY3JpcHRpb24sIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UocGVyQ29tcG9uZW50VHJhY2UsIHByb3BlcnRpZXMuREVTQ1JJUFRJT04pLCBsb2NhbEVycm9ycyk7XG4gICAgICAgICAgICB2YWxpZGF0ZUFic2VuY2VPZk5vbldoaXRlbGlzdGVkUHJvcGVydGllcyhpbnRlcmFjdGlvbkNvbXBvbmVudCwgeGFwaVdoaXRlTGlzdFByb3BlcnRpZXMuQ09NUE9ORU5UX0FSUkFZLCBwZXJDb21wb25lbnRUcmFjZSwgbG9jYWxFcnJvcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvblR5cGUgJiYgY29tcG9uZW50cykge1xuICAgICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICAgIHRyYWNlOiAgIGxvY2FsVHJhY2UsXG4gICAgICAgIG1lc3NhZ2U6IGAke3hhcGlWYWxpZGF0aW9uRXJyb3JzLklOVEVSQUNUSU9OX1RZUEVfTVVTVF9CRV9WQUxJRH0gJHtpbnRlcmFjdGlvblR5cGV9YCxcbiAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLlNIT1VMRF9WSU9MQVRJT05cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhbEVycm9ycztcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlQWN0aXZpdHlEZWZpbnRpb24oZGVmaW5pdGlvbiwgdHJhY2UsIGVycm9ycykge1xuICAgIHZhciBsb2NhbEVycm9ycywgbG9jYWxUcmFjZSwgY29ycmVjdFJlc3BvbnNlc1BhdHRlcm5UcmFjZSwgY29ycmVjdFJlc3BvbnNlc1BhdHRlcm5MZW5ndGgsIGNycEl0ZW0sIGk7XG5cbiAgICBsb2NhbEVycm9ycyA9IGVycm9ycyB8fCBbXTtcbiAgICBsb2NhbFRyYWNlID0gdHJhY2UgfHwgcHJvcGVydGllcy5ERUZJTklUSU9OO1xuICAgIGNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuVHJhY2UgPSB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuQ09SUkVDVF9SRVNQT05TRVNfUEFUVEVSTik7XG5cbiAgICBpZiAoIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNOb25OdWxsTWFwT2JqZWN0KGRlZmluaXRpb24pKSB7XG4gICAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlKSxcbiAgICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuREVGSU5JVElPTlNfTVVTVF9CRV9PQkpFQ1RTLFxuICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbG9jYWxFcnJvcnM7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVMYW5ndWFnZU1hcChkZWZpbml0aW9uLm5hbWUsIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5OQU1FKSwgbG9jYWxFcnJvcnMpO1xuICAgIHZhbGlkYXRlTGFuZ3VhZ2VNYXAoZGVmaW5pdGlvbi5kZXNjcmlwdGlvbiwgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLkRFU0NSSVBUSU9OKSwgbG9jYWxFcnJvcnMpO1xuXG4gICAgdmFsaWRhdGVQcm9wZXJ0eUlzVXJpKGRlZmluaXRpb24sIHByb3BlcnRpZXMuVFlQRSwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMsICAvKmlzUmVxdWlyZWQqL2ZhbHNlKTtcbiAgICB2YWxpZGF0ZVByb3BlcnR5SXNVcmwoZGVmaW5pdGlvbiwgcHJvcGVydGllcy5NT1JFX0lORk8sIGxvY2FsVHJhY2UsIGxvY2FsRXJyb3JzLCAgLyppc1JlcXVpcmVkKi9mYWxzZSk7XG4gICAgdmFsaWRhdGVFeHRlbnNpb25zKGRlZmluaXRpb24uZXh0ZW5zaW9ucywgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLkVYVEVOU0lPTlMpLCBsb2NhbEVycm9ycyk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbi5pbnRlcmFjdGlvblR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGRlZmluaXRpb24udHlwZSAhPT0geGFwaUdlbmVyYWwuSU5URVJBQ1RJT05fREVGSU5JVElPTl9UWVBFKSB7XG4gICAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuVFlQRSksXG4gICAgICAgICAgbWVzc2FnZTogYCR7eGFwaVZhbGlkYXRpb25FcnJvcnMuSU5URVJBQ1RJT05fQUNUSVZJVFlfU0hPVUxEX0hBVkV9IFwiJHt4YXBpR2VuZXJhbC5JTlRFUkFDVElPTl9ERUZJTklUSU9OX1RZUEV9XCJgLFxuICAgICAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5TSE9VTERfVklPTEFUSU9OXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoeGFwaVZhbGlkYXRpb25JbnRlcmFjdGlvblR5cGVzLmluZGV4T2YoZGVmaW5pdGlvbi5pbnRlcmFjdGlvblR5cGUpID09PSB4YXBpR2VuZXJhbC5OT19JTkRFWF9GT1VORCkge1xuICAgICAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLklOVEVSQUNUSU9OX1RZUEUpLFxuICAgICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLklOVEVSQUNUSU9OX1RZUEVfTVVTVF9CRV9DTUksXG4gICAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZWZpbml0aW9uLmNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICgheGFwaVZhbGlkYXRpb25VdGlscy5pc0FycmF5KGRlZmluaXRpb24uY29ycmVjdFJlc3BvbnNlc1BhdHRlcm4pKSB7XG4gICAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICAgIHRyYWNlOiAgIGNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuVHJhY2UsXG4gICAgICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuQ09SUkVDVF9SRVNQT05TRVNfUEFUVEVSTl9NVVNUX0JFX0FSUkFZLFxuICAgICAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuTGVuZ3RoID0gZGVmaW5pdGlvbi5jb3JyZWN0UmVzcG9uc2VzUGF0dGVybi5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjcnBJdGVtID0gZGVmaW5pdGlvbi5jb3JyZWN0UmVzcG9uc2VzUGF0dGVybltpXTtcblxuICAgICAgICAgIGlmIChjcnBJdGVtID09PSBudWxsIHx8IGNycEl0ZW0gPT09IHVuZGVmaW5lZCB8fCAheGFwaVZhbGlkYXRpb25VdGlscy5pc1N0cmluZyhjcnBJdGVtKSkge1xuICAgICAgICAgICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICAgICAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkTG9va3VwVG9UcmFjZShjb3JyZWN0UmVzcG9uc2VzUGF0dGVyblRyYWNlLCBpKSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuQ09SUkVDVF9SRVNQT05TRVNfUEFUVEVSTl9NVVNUX0JFX1NUUklOR1MsXG4gICAgICAgICAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVJbnRlcmFjdGlvbkNvbXBvbmVudEFycmF5KFxuICAgICAgZGVmaW5pdGlvbi5jaG9pY2VzLFxuICAgICAgZGVmaW5pdGlvbi5pbnRlcmFjdGlvblR5cGUsXG4gICAgICBbcHJvcGVydGllcy5DSE9JQ0UsIHByb3BlcnRpZXMuU0VRVUVOQ0lOR10sXG4gICAgICB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuQ0hPSUNFUyksXG4gICAgICBsb2NhbEVycm9yc1xuICAgICk7XG5cbiAgICB2YWxpZGF0ZUludGVyYWN0aW9uQ29tcG9uZW50QXJyYXkoXG4gICAgICBkZWZpbml0aW9uLnNjYWxlLFxuICAgICAgZGVmaW5pdGlvbi5pbnRlcmFjdGlvblR5cGUsXG4gICAgICBbcHJvcGVydGllcy5MSUtFUlRdLFxuICAgICAgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLlNDQUxFKSxcbiAgICAgIGxvY2FsRXJyb3JzXG4gICAgKTtcblxuICAgIHZhbGlkYXRlSW50ZXJhY3Rpb25Db21wb25lbnRBcnJheShcbiAgICAgIGRlZmluaXRpb24uc291cmNlLFxuICAgICAgZGVmaW5pdGlvbi5pbnRlcmFjdGlvblR5cGUsXG4gICAgICBbcHJvcGVydGllcy5NQVRDSElOR10sXG4gICAgICB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuU09VUkNFKSxcbiAgICAgIGxvY2FsRXJyb3JzXG4gICAgKTtcblxuICAgIHZhbGlkYXRlSW50ZXJhY3Rpb25Db21wb25lbnRBcnJheShcbiAgICAgIGRlZmluaXRpb24udGFyZ2V0LFxuICAgICAgZGVmaW5pdGlvbi5pbnRlcmFjdGlvblR5cGUsXG4gICAgICBbcHJvcGVydGllcy5NQVRDSElOR10sXG4gICAgICB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuVEFSR0VUKSxcbiAgICAgIGxvY2FsRXJyb3JzXG4gICAgKTtcblxuICAgIHZhbGlkYXRlSW50ZXJhY3Rpb25Db21wb25lbnRBcnJheShcbiAgICAgIGRlZmluaXRpb24uc3RlcHMsXG4gICAgICBkZWZpbml0aW9uLmludGVyYWN0aW9uVHlwZSxcbiAgICAgIFtwcm9wZXJ0aWVzLlBFUkZPUk1BTkNFXSxcbiAgICAgIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5TVEVQUyksXG4gICAgICBsb2NhbEVycm9yc1xuICAgICk7XG5cbiAgICB2YWxpZGF0ZUFic2VuY2VPZk5vbldoaXRlbGlzdGVkUHJvcGVydGllcyhkZWZpbml0aW9uLCB4YXBpV2hpdGVMaXN0UHJvcGVydGllcy5BQ1RJVklUWV9ERUZJTklUSU9OLCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycyk7XG4gICAgcmV0dXJuIGxvY2FsRXJyb3JzO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUFjdGl2aXR5KGFjdGl2aXR5LCB0cmFjZSwgZXJyb3JzKSB7XG4gIHZhciBsb2NhbEVycm9ycywgbG9jYWxUcmFjZTtcblxuICBsb2NhbEVycm9ycyA9IGVycm9ycyB8fCBbXTtcbiAgbG9jYWxUcmFjZSAgPSB0cmFjZSAgfHwgcHJvcGVydGllcy5BQ1RJVklUWTtcblxuICBpZiAoIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNOb25OdWxsTWFwT2JqZWN0KGFjdGl2aXR5KSkge1xuICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5sb2NhbFRyYWNlVG9TdHJpbmcobG9jYWxUcmFjZSksXG4gICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5BQ1RJVklUSUVTX01VU1RfTk9UX0JFX05VTEwsXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcblxuICAgIHJldHVybiBsb2NhbEVycm9ycztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHlJc1VyaShhY3Rpdml0eSwgcHJvcGVydGllcy5JRCwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMsICAvKmlzUmVxdWlyZWQqL3RydWUpO1xuXG4gIGlmIChhY3Rpdml0eS5kZWZpbml0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YWxpZGF0ZUFjdGl2aXR5RGVmaW50aW9uKFxuICAgICAgYWN0aXZpdHkuZGVmaW5pdGlvbixcbiAgICAgIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5ERUZJTklUSU9OKSxcbiAgICAgIGxvY2FsRXJyb3JzXG4gICAgKTtcbiAgfVxuXG4gIHZhbGlkYXRlQWJzZW5jZU9mTm9uV2hpdGVsaXN0ZWRQcm9wZXJ0aWVzKGFjdGl2aXR5LCB4YXBpV2hpdGVMaXN0UHJvcGVydGllcy5BQ1RJVklUWSwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMpO1xuXG4gIHJldHVybiBsb2NhbEVycm9ycztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTdGF0ZW1lbnRSZWYoc3RhdGVtZW50UmVmLCB0cmFjZSwgZXJyb3JzKSB7XG4gIHZhciBsb2NhbEVycm9ycywgbG9jYWxUcmFjZTtcblxuICBsb2NhbEVycm9ycyA9IGVycm9ycyB8fCBbXTtcbiAgbG9jYWxUcmFjZSAgPSB0cmFjZSAgfHwgcHJvcGVydGllcy5TVEFURU1FTlRfUkVGO1xuXG4gIGlmICgheGFwaVZhbGlkYXRpb25VdGlscy5pc05vbk51bGxNYXBPYmplY3Qoc3RhdGVtZW50UmVmKSkge1xuICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5sb2NhbFRyYWNlVG9TdHJpbmcobG9jYWxUcmFjZSksXG4gICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5TVEFURU1FTlRfUkVGX01VU1RfTk9UX0JFX05VTExfTUFQX09CSkVDVFMsXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcbiAgICByZXR1cm4gbG9jYWxFcnJvcnM7XG4gIH1cblxuXG4gIGlmIChzdGF0ZW1lbnRSZWYub2JqZWN0VHlwZSAhPT0gb2JqZWN0VHlwZXMuU1RBVEVNRU5UX1JFRikge1xuICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLk9CSkVDVF9UWVBFKSxcbiAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLk9CSkVDVF9UWVBFX01VU1RfQkVfU1RBVEVNRU5UX1JFRixcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRSZWYuaWQgfHwgIXhhcGlWYWxpZGF0aW9uUmVnZXguVVVJRC50ZXN0KHN0YXRlbWVudFJlZi5pZCkpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5JRCksXG4gICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5JRF9NVVNUX0JFX1ZBTElEX1VVSURfUkVGLFxuICAgICAgbGV2ZWw6ICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcbiAgfVxuXG4gIHZhbGlkYXRlQWJzZW5jZU9mTm9uV2hpdGVsaXN0ZWRQcm9wZXJ0aWVzKHN0YXRlbWVudFJlZiwgeGFwaVdoaXRlTGlzdFByb3BlcnRpZXMuU1RBVEVNRU5UX1JFRiwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMpO1xuXG4gIHJldHVybiBsb2NhbEVycm9ycztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTY29yZShzY29yZSwgdHJhY2UsIGVycm9ycykge1xuICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2U7XG5cbiAgbG9jYWxFcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gIGxvY2FsVHJhY2UgID0gdHJhY2UgIHx8IHByb3BlcnRpZXMuU0NPUkU7XG5cbiAgaWYgKHNjb3JlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBsb2NhbEVycm9ycztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHlJc051bWJlcihzY29yZSwgcHJvcGVydGllcy5TQ0FMRUQsIGxvY2FsVHJhY2UsIGxvY2FsRXJyb3JzLCAgLyppc1JlcXVpcmVkKi9mYWxzZSk7XG5cbiAgaWYgKHNjb3JlLnNjYWxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHNjb3JlLnNjYWxlZCA8IHhhcGlHZW5lcmFsLk1JTl9TQ0FMRURfVkFMVUUgfHwgc2NvcmUuc2NhbGVkID4geGFwaUdlbmVyYWwuTUFYX1NDQUxFRF9WQUxVRSkge1xuICAgICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5TQ0FMRUQpLFxuICAgICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5TQ0FMRURfTVVTVF9CRV9CRVRXRUVOXzBfMSxcbiAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAoc2NvcmUubWluICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YWxpZGF0ZVByb3BlcnR5SXNOdW1iZXIoc2NvcmUsIHByb3BlcnRpZXMuTUlOLCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycywgIC8qaXNSZXF1aXJlZCovZmFsc2UpO1xuXG4gICAgICBpZiAoc2NvcmUucmF3ICE9PSB1bmRlZmluZWQgJiYgc2NvcmUucmF3IDwgc2NvcmUubWluKSB7XG4gICAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5SQVcpLFxuICAgICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLlJBV19NVVNUX0JFX0dSRUFURVJfVEhBTl9NSU4sXG4gICAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2NvcmUubWF4ICE9PSB1bmRlZmluZWQgJiYgc2NvcmUubWF4IDwgc2NvcmUubWluKSB7XG4gICAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5NQVgpLFxuICAgICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLk1BWF9NVVNUX0JFX0dSRUFURVJfVEhBTl9NSU4sXG4gICAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgICAgIH0pO1xuICAgICAgfVxuICB9XG5cbiAgaWYgKHNjb3JlLm1heCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsaWRhdGVQcm9wZXJ0eUlzTnVtYmVyKHNjb3JlLCBwcm9wZXJ0aWVzLk1BWCwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMsICAvKmlzUmVxdWlyZWQqL2ZhbHNlKTtcblxuICAgIGlmIChzY29yZS5yYXcgIT09IHVuZGVmaW5lZCAmJiBzY29yZS5yYXcgPiBzY29yZS5tYXgpIHtcbiAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuUkFXKSxcbiAgICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuUkFXX01VU1RfQkVfTEVTU19USEFOX01BWCxcbiAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZVByb3BlcnR5SXNOdW1iZXIoc2NvcmUsIHByb3BlcnRpZXMuUkFXLCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycywgIC8qaXNSZXF1aXJlZCovZmFsc2UpO1xuICB2YWxpZGF0ZUFic2VuY2VPZk5vbldoaXRlbGlzdGVkUHJvcGVydGllcyhzY29yZSwgeGFwaVdoaXRlTGlzdFByb3BlcnRpZXMuU0NPUkUsIGxvY2FsVHJhY2UsIGxvY2FsRXJyb3JzKTtcblxuICByZXR1cm4gbG9jYWxFcnJvcnM7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUmVzdWx0KHJlc3VsdCwgdHJhY2UsIGVycm9ycykge1xuICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2U7XG5cbiAgbG9jYWxFcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gIGxvY2FsVHJhY2UgID0gdHJhY2UgIHx8IHByb3BlcnRpZXMuUkVTVUxUO1xuXG4gIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge3JldHVybiBsb2NhbEVycm9yczt9XG5cbiAgaWYgKCF4YXBpVmFsaWRhdGlvblV0aWxzLmlzTm9uTnVsbE1hcE9iamVjdChyZXN1bHQpKSB7XG4gICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UpLFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuUkVTVUxUX01VU1RfQkVfTUFQX09CSkVDVCxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxvY2FsRXJyb3JzO1xuICB9XG5cbiAgdmFsaWRhdGVTY29yZShyZXN1bHQuc2NvcmUsIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5TQ09SRSksIGxvY2FsRXJyb3JzKTtcbiAgdmFsaWRhdGVQcm9wZXJ0eUlzQm9vbGVhbihyZXN1bHQsIHByb3BlcnRpZXMuU1VDQ0VTUywgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMsICAvKmlzUmVxdWlyZWQqL2ZhbHNlKTtcbiAgdmFsaWRhdGVQcm9wZXJ0eUlzQm9vbGVhbihyZXN1bHQsIHByb3BlcnRpZXMuQ09NUExFVElPTiwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMsICAvKmlzUmVxdWlyZWQqL2ZhbHNlKTtcbiAgdmFsaWRhdGVQcm9wZXJ0eUlzU3RyaW5nKHJlc3VsdCwgcHJvcGVydGllcy5SRVNQT05TRSwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMsICAvKmlzUmVxdWlyZWQqL2ZhbHNlKTtcbiAgdmFsaWRhdGVFeHRlbnNpb25zKHJlc3VsdC5leHRlbnNpb25zLCB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuRVhURU5TSU9OUyksIGxvY2FsRXJyb3JzKTtcblxuICBpZiAocmVzdWx0LmR1cmF0aW9uICE9PSB1bmRlZmluZWQgJiYgKHJlc3VsdC5kdXJhdGlvbiA9PT0gbnVsbCB8fCAheGFwaVZhbGlkYXRpb25VdGlscy5pc1N0cmluZyhyZXN1bHQuZHVyYXRpb24pIHx8ICF4YXBpVmFsaWRhdGlvblJlZ2V4LklTT184NjAxX0RVUkFUSU9OLnRlc3QocmVzdWx0LmR1cmF0aW9uKSkpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5EVVJBVElPTiksXG4gICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5EVVJBVElPTl9NVVNUX0JFX1ZBTElELFxuICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZUFic2VuY2VPZk5vbldoaXRlbGlzdGVkUHJvcGVydGllcyhyZXN1bHQsIHhhcGlXaGl0ZUxpc3RQcm9wZXJ0aWVzLlJFU1VMVCwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMpO1xuXG4gIHJldHVybiBsb2NhbEVycm9ycztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0eUlzSVNPODYwMVN0cmluZyhwYXJlbnQsIHByb3BlcnR5TmFtZSwgdHJhY2UsIGVycm9ycykge1xuICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2UsIG1hdGNoZWQsIGRhdGV0aW1lO1xuXG4gIGxvY2FsRXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICBsb2NhbFRyYWNlICA9IHRyYWNlICB8fCBwcm9wZXJ0aWVzLkRBVEVfVElNRTtcbiAgZGF0ZXRpbWUgICAgPSBwYXJlbnRbcHJvcGVydHlOYW1lXTtcblxuICBpZiAoZGF0ZXRpbWUgPT09IHVuZGVmaW5lZCkge3JldHVybiBsb2NhbEVycm9yczt9XG5cbiAgaWYgKGRhdGV0aW1lID09PSBudWxsIHx8ICF4YXBpVmFsaWRhdGlvblV0aWxzLmlzU3RyaW5nKGRhdGV0aW1lKSkge1xuICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5sb2NhbFRyYWNlVG9TdHJpbmcobG9jYWxUcmFjZSwgcHJvcGVydHlOYW1lKSxcbiAgICAgIG1lc3NhZ2U6IGAke3Byb3BlcnR5TmFtZX0gJHt4YXBpVmFsaWRhdGlvbkVycm9ycy5NVVNUX0JFX1NUUklOR31gLFxuICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbG9jYWxFcnJvcnM7XG4gIH1cblxuICBtYXRjaGVkID0geGFwaVZhbGlkYXRpb25SZWdleC5JU09fODYwMV9EQVRFX1RJTUUuZXhlYyhkYXRldGltZSk7XG5cbiAgaWYgKG1hdGNoZWQpIHtcbiAgICBpZiAoIWRhdGVJbmNsdWRlc1pvbmVJbmZvcm1hdGlvbihtYXRjaGVkKSkge1xuICAgICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UsIHByb3BlcnR5TmFtZSksXG4gICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLkRBVEVfU0hPVUxEX0lOQ0xVREVfWk9ORV9JTkZPUk1BVElPTixcbiAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLlNIT1VMRF9WSU9MQVRJT05cbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UsIHByb3BlcnR5TmFtZSksXG4gICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5EQVRFX01VU1RfQkVfVkFMSUQsXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsb2NhbEVycm9ycztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVWZXJzaW9uKHZlcnNpb24sIHRyYWNlLCBlcnJvcnMpIHtcbiAgdmFyIGxvY2FsRXJyb3JzLCBsb2NhbFRyYWNlO1xuXG4gIGxvY2FsRXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICBsb2NhbFRyYWNlICA9IHRyYWNlICB8fCBwcm9wZXJ0aWVzLlZFUlNJT047XG5cbiAgaWYgKHZlcnNpb24gPT09IHVuZGVmaW5lZCkge3JldHVybiBsb2NhbEVycm9yczt9XG5cbiAgaWYgKHZlcnNpb24gPT09IG51bGwgfHwgIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNTdHJpbmcodmVyc2lvbikgfHwgIXhhcGlWYWxpZGF0aW9uUmVnZXguU0VNVkVSXzFfUF8wX1BfMC50ZXN0KHZlcnNpb24pKSB7XG4gICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlKSxcbiAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLlZFUlNJT05fTVVTVF9DT01QTFlfU0VNQU5USUNfVkVSU0lPTklORyxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxvY2FsRXJyb3JzO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUF0dGFjaG1lbnRPYmplY3QoYXR0YWNobWVudCwgdHJhY2UsIGVycm9ycykge1xuICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2U7XG5cbiAgbG9jYWxFcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gIGxvY2FsVHJhY2UgID0gdHJhY2UgfHwgcHJvcGVydGllcy5BVFRBQ0hNRU5UO1xuXG4gIGlmICgheGFwaVZhbGlkYXRpb25VdGlscy5pc05vbk51bGxNYXBPYmplY3QoYXR0YWNobWVudCkpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UpLFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuQVRUQUNITUVOVFNfTVVTVF9OT1RfQkVfTlVMTF9NQVBfT0JKRUNUUyxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxvY2FsRXJyb3JzO1xuICB9XG5cbiAgaWYgKGF0dGFjaG1lbnQuZGlzcGxheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLkRJU1BMQVkpLFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuRElTUExBWV9TSE9VTERfQkVfUFJPVklERUQsXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcblxuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlTGFuZ3VhZ2VNYXAoYXR0YWNobWVudC5kaXNwbGF5LCB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuRElTUExBWSksIGxvY2FsRXJyb3JzKTtcbiAgfVxuXG4gIHZhbGlkYXRlTGFuZ3VhZ2VNYXAoYXR0YWNobWVudC5kZXNjcmlwdGlvbiwgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLkRFU0NSSVBUSU9OKSwgbG9jYWxFcnJvcnMpO1xuICB2YWxpZGF0ZVByb3BlcnR5SXNVcmkoYXR0YWNobWVudCwgcHJvcGVydGllcy5VU0FHRV9UWVBFLCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycywgLyppc1JlcXVpcmVkKi90cnVlLCB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT04pO1xuICB2YWxpZGF0ZVByb3BlcnR5SXNVcmkoYXR0YWNobWVudCwgcHJvcGVydGllcy5GSUxFX1VSTCwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMsICAvKmlzUmVxdWlyZWQqL2ZhbHNlLCB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT04pO1xuXG4gIC8vIFRPRE8gLSBtb3JlIGNvbXBsZXRlIHZhbGlkYXRpb24gZm9yIEludGVybmV0IE1lZGlhIFR5cGUgdmlhIFJGQyAyMDQ2XG4gIHZhbGlkYXRlUHJvcGVydHlJc1N0cmluZyhhdHRhY2htZW50LCBwcm9wZXJ0aWVzLkNPTlRFTlRfVFlQRSwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMsIC8qaXNSZXF1aXJlZCovdHJ1ZSwgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OKTtcblxuICBpZiAoYXR0YWNobWVudC5sZW5ndGggPT09IHVuZGVmaW5lZCB8fCBhdHRhY2htZW50Lmxlbmd0aCA9PT0gbnVsbCB8fCAheGFwaVZhbGlkYXRpb25VdGlscy5pc051bWJlcihhdHRhY2htZW50Lmxlbmd0aCkgfHwgKGF0dGFjaG1lbnQubGVuZ3RoICUgMSAhPT0gMCkpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuTEVOR1RIKSxcbiAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLkxFTkdUSF9NVVNUX0JFX0lOVEVHRVIsXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChhdHRhY2htZW50LnNoYTIgPT09IHVuZGVmaW5lZCkge1xuICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5sb2NhbFRyYWNlVG9TdHJpbmcobG9jYWxUcmFjZSwgcHJvcGVydGllcy5TSEEyKSxcbiAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLlNIQTJfTVVTVF9CRV9QUk9WSURFRF9PTl9BVFRBQ0hNRU5UX09CSkVDVFMsXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChhdHRhY2htZW50LnNoYTIgPT09IG51bGwgfHwgIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNTdHJpbmcoYXR0YWNobWVudC5zaGEyKSB8fCAheGFwaVZhbGlkYXRpb25SZWdleC5CQVNFXzY0LnRlc3QoYXR0YWNobWVudC5zaGEyKSkge1xuICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5sb2NhbFRyYWNlVG9TdHJpbmcobG9jYWxUcmFjZSwgcHJvcGVydGllcy5TSEEyKSxcbiAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLlNIQTJfTVVTVF9DT05UQUlOX0JBU0VfNjRfU1RSSU5HLFxuICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZUFic2VuY2VPZk5vbldoaXRlbGlzdGVkUHJvcGVydGllcyhhdHRhY2htZW50LCB4YXBpV2hpdGVMaXN0UHJvcGVydGllcy5BVFRBQ0hNRU5ULCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycyk7XG4gIHJldHVybiBsb2NhbEVycm9ycztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBdHRhY2htZW50cyhhdHRhY2htZW50cywgdHJhY2UsIGVycm9ycykge1xuICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2UsIGF0dGFjaG1lbnRzTGVuZ3RoLCBpO1xuXG4gIGxvY2FsRXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICBsb2NhbFRyYWNlICA9IHRyYWNlICB8fCBwcm9wZXJ0aWVzLkFUVEFDSE1FTlRTO1xuXG4gIGlmIChhdHRhY2htZW50cyA9PT0gdW5kZWZpbmVkKSB7cmV0dXJuIGxvY2FsRXJyb3JzO31cblxuICBpZiAoYXR0YWNobWVudHMgPT09IG51bGwgfHwgIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNBcnJheShhdHRhY2htZW50cykpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UpLFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuQVRUQUNITUVOVFNfTVVTVF9CRV9OT1RfTlVMTF9BUlJBWSxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxvY2FsRXJyb3JzO1xuICB9XG5cbiAgYXR0YWNobWVudHNMZW5ndGggPSBhdHRhY2htZW50cy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBhdHRhY2htZW50c0xlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFsaWRhdGVBdHRhY2htZW50T2JqZWN0KGF0dGFjaG1lbnRzW2ldLCB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZExvb2t1cFRvVHJhY2UobG9jYWxUcmFjZSwgaSksIGxvY2FsRXJyb3JzKTtcbiAgfVxuXG4gIHJldHVybiBsb2NhbEVycm9ycztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBZ2VudChhZ2VudCwgdHJhY2UsIGVycm9ycykge1xuICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2UsIGlmaUNvdW50O1xuXG4gIGxvY2FsRXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICBsb2NhbFRyYWNlICA9IHRyYWNlICB8fCBwcm9wZXJ0aWVzLkFHRU5UO1xuXG4gIGlmICgheGFwaVZhbGlkYXRpb25VdGlscy5pc05vbk51bGxNYXBPYmplY3QoYWdlbnQpKSB7XG4gICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlKSxcbiAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLkFHRU5UX01VU1RfQkVfTk9OX05VTExfTUFQX09CSkVDVCxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuICAgIHJldHVybiBsb2NhbEVycm9ycztcbiAgfVxuXG4gIGlmaUNvdW50ID0gZ2V0SUZJQ291bnQoYWdlbnQpO1xuXG4gIGlmIChpZmlDb3VudCAhPT0geGFwaUdlbmVyYWwuTlVNRVJfT0ZfU1BFQ0lGSUVEX0lGSV9QUk9QRVJUSUVTKSB7XG4gICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlKSxcbiAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLkFHRU5UX0lGSV9QUk9QRVJUSUVTX01VU1RfQkVfU1BFQ0lGSUVELFxuICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgfSk7XG4gIH1cblxuICBpZiAoYWdlbnQub2JqZWN0VHlwZSA9PT0gb2JqZWN0VHlwZXMuR1JPVVApIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UpLFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuQUdFTlRfTVVTVF9OT1RfSEFWRV9HUk9VUF9DSEFSQUNURVJJU1RJQ1MsXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcbiAgfVxuXG4gIHZhbGlkYXRlSUZJUHJvcGVydGllcyhhZ2VudCwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMpO1xuICB2YWxpZGF0ZVByb3BlcnR5SXNTdHJpbmcoYWdlbnQsIHByb3BlcnRpZXMuTkFNRSwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMsICAvKmlzUmVxdWlyZWQqL2ZhbHNlKTtcblxuICB2YWxpZGF0ZUFic2VuY2VPZk5vbldoaXRlbGlzdGVkUHJvcGVydGllcyhhZ2VudCwgeGFwaVdoaXRlTGlzdFByb3BlcnRpZXMuQUdFTlQsIGxvY2FsVHJhY2UsIGxvY2FsRXJyb3JzKTtcblxuICByZXR1cm4gbG9jYWxFcnJvcnM7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlR3JvdXAoZ3JvdXAsIHRyYWNlLCBlcnJvcnMpIHtcbiAgdmFyIGxvY2FsRXJyb3JzLCBsb2NhbFRyYWNlLCBtZW1iZXJUcmFjZSwgaWZpQ291bnQsIG51bU1lbWJlcnMsIGk7XG5cbiAgbG9jYWxFcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gIGxvY2FsVHJhY2UgID0gdHJhY2UgIHx8IHByb3BlcnRpZXMuR1JPVVA7XG4gIG1lbWJlclRyYWNlID0geGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLk1FTUJFUik7XG5cbiAgaWYgKCF4YXBpVmFsaWRhdGlvblV0aWxzLmlzTm9uTnVsbE1hcE9iamVjdChncm91cCkpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UpLFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuR1JPVVBfTVVTVF9CRV9OT05fTlVMTF9NQVBfT0JKRUNULFxuICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbG9jYWxFcnJvcnM7XG4gIH1cblxuICBpZmlDb3VudCA9IGdldElGSUNvdW50KGdyb3VwKTtcblxuICBpZiAoaWZpQ291bnQgPT09IDApIHtcbiAgICBpZiAoZ3JvdXAubWVtYmVyID09PSBudWxsIHx8IGdyb3VwLm1lbWJlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgICAgdHJhY2U6ICAgbWVtYmVyVHJhY2UsXG4gICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLk1FTUJFUl9NVVNUX0JFX1BST1ZJREVEX0ZPUl9BTk9OWU1PVVNfR1JPVVBTLFxuICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpZmlDb3VudCA+IHhhcGlHZW5lcmFsLk5VTUVSX09GX1NQRUNJRklFRF9JRklfUFJPUEVSVElFUykge1xuICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5sb2NhbFRyYWNlVG9TdHJpbmcobG9jYWxUcmFjZSksXG4gICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5HUk9VUF9JRklfUFJPUEVSVElFU19NVVNUX0JFX1NQRUNJRklFRCxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuICB9XG5cbiAgdmFsaWRhdGVJRklQcm9wZXJ0aWVzKGdyb3VwLCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycyk7XG5cbiAgdmFsaWRhdGVQcm9wZXJ0eUlzU3RyaW5nKGdyb3VwLCBwcm9wZXJ0aWVzLk5BTUUsIGxvY2FsVHJhY2UsIGxvY2FsRXJyb3JzLCAgLyppc1JlcXVpcmVkKi9mYWxzZSk7XG5cbiAgaWYgKGdyb3VwLm1lbWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGdyb3VwLm1lbWJlciA9PT0gbnVsbCB8fCAheGFwaVZhbGlkYXRpb25VdGlscy5pc0FycmF5KGdyb3VwLm1lbWJlcikpIHtcbiAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLk1FTUJFUiksXG4gICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLkdST1VQX01FTUJFUl9NVVNUX0JFX0FSUkFZLFxuICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBudW1NZW1iZXJzID0gZ3JvdXAubWVtYmVyLmxlbmd0aDtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IG51bU1lbWJlcnM7IGkgKz0gMSkge1xuICAgICAgICB2YWxpZGF0ZUFnZW50KGdyb3VwLm1lbWJlcltpXSwgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRMb29rdXBUb1RyYWNlKG1lbWJlclRyYWNlLCBpKSwgbG9jYWxFcnJvcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlQWJzZW5jZU9mTm9uV2hpdGVsaXN0ZWRQcm9wZXJ0aWVzKGdyb3VwLCB4YXBpV2hpdGVMaXN0UHJvcGVydGllcy5HUk9VUCwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMpO1xuXG4gIHJldHVybiBsb2NhbEVycm9ycztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBY3RvcihhY3RvciwgdHJhY2UsIGVycm9ycykge1xuICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2U7XG5cbiAgbG9jYWxFcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gIGxvY2FsVHJhY2UgID0gdHJhY2UgIHx8IHByb3BlcnRpZXMuQUNUT1I7XG5cbiAgaWYgKGFjdG9yID09PSBudWxsIHx8IGFjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UpLFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuQUNUT1JfTVVTVF9CRV9QUk9WSURFRCxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxvY2FsRXJyb3JzO1xuICB9XG5cbiAgaWYgKHhhcGlWYWxpZGF0aW9uVXRpbHMuaXNHcm91cChhY3RvcikpIHtcbiAgICB2YWxpZGF0ZUdyb3VwKGFjdG9yLCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycyk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVBZ2VudChhY3RvciwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMpO1xuICB9XG5cbiAgcmV0dXJuIGxvY2FsRXJyb3JzO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUF1dGhvcml0eShhdXRob3JpdHksIHRyYWNlLCBlcnJvcnMpIHtcbiAgdmFyIGxvY2FsRXJyb3JzLCBsb2NhbFRyYWNlO1xuXG4gIGxvY2FsRXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICBsb2NhbFRyYWNlICA9IHRyYWNlICB8fCBwcm9wZXJ0aWVzLkFVVEhPUklUWTtcblxuICBpZiAoYXV0aG9yaXR5ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbG9jYWxFcnJvcnM7XG4gIH1cblxuICBpZiAoIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNOb25OdWxsTWFwT2JqZWN0KGF1dGhvcml0eSkpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UpLFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuQVVUSE9SSVRZX01VU1RfQkVfTk9OX05VTExfTUFQX09CSkVDVCxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxvY2FsRXJyb3JzO1xuICB9XG4gIGlmICh4YXBpVmFsaWRhdGlvblV0aWxzLmlzR3JvdXAoYXV0aG9yaXR5KSkge1xuICAgIHZhbGlkYXRlR3JvdXAoYXV0aG9yaXR5LCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycyk7XG4gICAgaWYgKCFhdXRob3JpdHkubWVtYmVyIHx8ICFhdXRob3JpdHkubWVtYmVyLmxlbmd0aCB8fCBhdXRob3JpdHkubWVtYmVyLmxlbmd0aCAhPT0geGFwaUdlbmVyYWwuR1JPVVBfQVVUSE9SSVRZX0FHRU5UX01FTUJFUlMpIHtcbiAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLk1FTUJFUiksXG4gICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLkdST1VQX0FVVEhPUklUWV9BR0VOVF9NRU1CRVJTX01VU1RfQkVfVFdPLFxuICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZUFnZW50KGF1dGhvcml0eSwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMpO1xuICB9XG5cbiAgcmV0dXJuIGxvY2FsRXJyb3JzO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbnRleHRBY3Rpdml0eVN1YkNvbnRleHQoc3ViQ29udGV4dCwgdHJhY2UsIGVycm9ycykge1xuICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2UsIG51bUFjdGl2aXRpZXMsIGk7XG5cbiAgbG9jYWxFcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gIGxvY2FsVHJhY2UgID0gdHJhY2UgIHx8IHByb3BlcnRpZXMuU1VCX0NPTlRFWFQ7XG5cbiAgaWYgKHN1YkNvbnRleHQgPT09IHVuZGVmaW5lZCkge3JldHVybiBsb2NhbEVycm9yczt9XG5cbiAgaWYgKHN1YkNvbnRleHQgPT09IG51bGwpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UpLFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuQ09OVEVYVF9BQ1RJVklUSUVTX01VU1RfTk9UX0JFX05VTEwsXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcbiAgfSBlbHNlIGlmICh4YXBpVmFsaWRhdGlvblV0aWxzLmlzQXJyYXkoc3ViQ29udGV4dCkpIHtcbiAgICAgIG51bUFjdGl2aXRpZXMgPSBzdWJDb250ZXh0Lmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1BY3Rpdml0aWVzOyBpICs9IDEpIHtcbiAgICAgICAgdmFsaWRhdGVBY3Rpdml0eShzdWJDb250ZXh0W2ldLCB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZExvb2t1cFRvVHJhY2UobG9jYWxUcmFjZSwgaSksIGxvY2FsRXJyb3JzKTtcbiAgICAgIH1cbiAgfSBlbHNlIGlmICh4YXBpVmFsaWRhdGlvblV0aWxzLmlzT2JqZWN0KHN1YkNvbnRleHQpKSB7XG4gICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlKSxcbiAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLkNPTlRFWFRfQUNUSVZJVElFU19TSE9VTERfQkVfQU5fQVJSQVksXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuU0hPVUxEX1ZJT0xBVElPTlxuICAgIH0pO1xuXG4gICAgdmFsaWRhdGVBY3Rpdml0eShzdWJDb250ZXh0LCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycyk7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlKSxcbiAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLkNPTlRFWFRfQUNUSVZJVElFU19NVVNUX0JFX0FSUkFZX09SX0FDVElWSVRZX09CSixcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTn0pO1xuICB9XG4gIHJldHVybiBsb2NhbEVycm9ycztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb250ZXh0QWN0aXZpdGllcyhjb250ZXh0QWN0aXZpdGllcywgdHJhY2UsIGVycm9ycykge1xuICB2YXIgbG9jYWxFcnJvcnMsIGxvY2FsVHJhY2U7XG5cbiAgbG9jYWxFcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gIGxvY2FsVHJhY2UgID0gdHJhY2UgIHx8IHByb3BlcnRpZXMuQ09OVEVYVF9BQ1RJVklUSUVTO1xuXG4gIGlmIChjb250ZXh0QWN0aXZpdGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGxvY2FsRXJyb3JzO1xuICB9XG5cbiAgaWYgKCF4YXBpVmFsaWRhdGlvblV0aWxzLmlzTm9uTnVsbE1hcE9iamVjdChjb250ZXh0QWN0aXZpdGllcykpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UpLFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuQ09OVEVYVF9BQ1RJVklUSUVTX01VU1RfQkVfTk9OX05VTExfTUFQX09CSkVDVCxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuICAgIHJldHVybiBsb2NhbEVycm9ycztcbiAgfVxuXG4gIHZhbGlkYXRlQ29udGV4dEFjdGl2aXR5U3ViQ29udGV4dChjb250ZXh0QWN0aXZpdGllcy5wYXJlbnQsIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5QQVJFTlQpLCBsb2NhbEVycm9ycyk7XG4gIHZhbGlkYXRlQ29udGV4dEFjdGl2aXR5U3ViQ29udGV4dChjb250ZXh0QWN0aXZpdGllcy5ncm91cGluZywgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLkdST1VQSU5HKSwgbG9jYWxFcnJvcnMpO1xuICB2YWxpZGF0ZUNvbnRleHRBY3Rpdml0eVN1YkNvbnRleHQoY29udGV4dEFjdGl2aXRpZXMuY2F0ZWdvcnksIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5DQVRFR09SWSksIGxvY2FsRXJyb3JzKTtcbiAgdmFsaWRhdGVDb250ZXh0QWN0aXZpdHlTdWJDb250ZXh0KGNvbnRleHRBY3Rpdml0aWVzLm90aGVyLCB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuT1RIRVIpLCBsb2NhbEVycm9ycyk7XG5cbiAgdmFsaWRhdGVBYnNlbmNlT2ZOb25XaGl0ZWxpc3RlZFByb3BlcnRpZXMoY29udGV4dEFjdGl2aXRpZXMsIHhhcGlXaGl0ZUxpc3RQcm9wZXJ0aWVzLkNPTlRFWFRfQUNUSVZJVElFUywgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMpO1xuXG4gIHJldHVybiBsb2NhbEVycm9ycztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb250ZXh0KGNvbnRleHQsIHRyYWNlLCBlcnJvcnMsIHN0YXRlbWVudE9iamVjdE9iamVjdFR5cGUpIHtcbiAgdmFyIGxvY2FsRXJyb3JzLCBsb2NhbFRyYWNlO1xuXG4gIGxvY2FsRXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICBsb2NhbFRyYWNlID0gdHJhY2UgfHwgcHJvcGVydGllcy5DT05URVhUO1xuXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtyZXR1cm4gbG9jYWxFcnJvcnM7fVxuXG4gIGlmICgheGFwaVZhbGlkYXRpb25VdGlscy5pc05vbk51bGxNYXBPYmplY3QoY29udGV4dCkpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIGxvY2FsVHJhY2UsXG4gICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5DT05URVhUX01VU1RfQkVfTk9OX05VTF9NQVBfT0JKRUNULFxuICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbG9jYWxFcnJvcnM7XG4gIH1cblxuICBpZiAoY29udGV4dC5yZWdpc3RyYXRpb24gIT09IHVuZGVmaW5lZCAmJiAoY29udGV4dC5yZWdpc3RyYXRpb24gPT09IG51bGwgfHwgIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNTdHJpbmcoY29udGV4dC5yZWdpc3RyYXRpb24pIHx8ICF4YXBpVmFsaWRhdGlvblJlZ2V4LlVVSUQudGVzdChjb250ZXh0LnJlZ2lzdHJhdGlvbikpKSB7XG4gICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLlJFR0lTVFJBVElPTiksXG4gICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5SRUdJU1RSQVRJT05fTVVTVF9CRV9VVUlEX1NUUklORyxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuICB9XG5cbiAgaWYgKFtvYmplY3RUeXBlcy5HUk9VUCwgb2JqZWN0VHlwZXMuQUdFTlRdLmluZGV4T2Yoc3RhdGVtZW50T2JqZWN0T2JqZWN0VHlwZSkgIT09IHhhcGlHZW5lcmFsLk5PX0lOREVYX0ZPVU5EKSB7XG4gICAgaWYgKGNvbnRleHQucmV2aXNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuUkVWSVNJT04pLFxuICAgICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5SRVZJU0lPTl9NVVNUX0JFX0FHRU5UX09SX0dST1VQLFxuICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0LnBsYXRmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLlBMQVRGT1JNKSxcbiAgICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuUExBVEZPUk1fTVVTVF9OT1RfQkVfVVNFRF9XSVRIX1JFVklTSU9OX0FHRU5UX09SX0dST1VQLFxuICAgICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHlJc1N0cmluZyhjb250ZXh0LCBwcm9wZXJ0aWVzLlJFVklTSU9OLCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycywgLyppc1JlcXVpcmVkKi9mYWxzZSwgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OKTtcbiAgdmFsaWRhdGVQcm9wZXJ0eUlzU3RyaW5nKGNvbnRleHQsIHByb3BlcnRpZXMuUExBVEZPUk0sIGxvY2FsVHJhY2UsIGxvY2FsRXJyb3JzLCAvKmlzUmVxdWlyZWQqL2ZhbHNlLCB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT04pO1xuXG4gIGlmIChjb250ZXh0LnRlYW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsaWRhdGVHcm91cChjb250ZXh0LnRlYW0sIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5URUFNKSwgbG9jYWxFcnJvcnMpO1xuICB9XG5cbiAgaWYgKGNvbnRleHQuY29udGV4dEFjdGl2aXRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhbGlkYXRlQ29udGV4dEFjdGl2aXRpZXMoY29udGV4dC5jb250ZXh0QWN0aXZpdGllcywgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLkNPTlRFWFRfQUNUSVZJVElFUyksIGxvY2FsRXJyb3JzKTtcbiAgfVxuXG4gIGlmIChjb250ZXh0Lmxhbmd1YWdlICE9PSB1bmRlZmluZWQgJiYgIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNWYWxpZExhbmd1YWdlVGFnKGNvbnRleHQubGFuZ3VhZ2UpKSB7XG4gICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLkxBTkdVQUdFKSxcbiAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLkxBTkdVQUdFX01VU1RfQkVfU1RSSU5HLFxuICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgfSk7XG4gIH1cblxuICBpZiAoY29udGV4dC5zdGF0ZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhbGlkYXRlU3RhdGVtZW50UmVmKGNvbnRleHQuc3RhdGVtZW50LCB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuU1RBVEVNRU5UKSwgbG9jYWxFcnJvcnMpO1xuICB9XG5cbiAgaWYgKGNvbnRleHQuaW5zdHJ1Y3RvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHhhcGlWYWxpZGF0aW9uVXRpbHMuaXNHcm91cChjb250ZXh0Lmluc3RydWN0b3IpKSB7XG4gICAgICB2YWxpZGF0ZUdyb3VwKGNvbnRleHQuaW5zdHJ1Y3RvciwgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLklOU1RSVUNUT1IpLCBsb2NhbEVycm9ycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlQWdlbnQoY29udGV4dC5pbnN0cnVjdG9yLCB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuSU5TVFJVQ1RPUiksIGxvY2FsRXJyb3JzKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUV4dGVuc2lvbnMoY29udGV4dC5leHRlbnNpb25zLCB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuRVhURU5TSU9OUyksIGxvY2FsRXJyb3JzKTtcbiAgdmFsaWRhdGVBYnNlbmNlT2ZOb25XaGl0ZWxpc3RlZFByb3BlcnRpZXMoXG4gICAgY29udGV4dCxcbiAgICBbXG4gICAgICBwcm9wZXJ0aWVzLlJFR0lTVFJBVElPTixcbiAgICAgIHByb3BlcnRpZXMuSU5TVFJVQ1RPUixcbiAgICAgIHByb3BlcnRpZXMuVEVBTSxcbiAgICAgIHByb3BlcnRpZXMuQ09OVEVYVF9BQ1RJVklUSUVTLFxuICAgICAgcHJvcGVydGllcy5SRVZJU0lPTixcbiAgICAgIHByb3BlcnRpZXMuUExBVEZPUk0sXG4gICAgICBwcm9wZXJ0aWVzLkxBTkdVQUdFLFxuICAgICAgcHJvcGVydGllcy5TVEFURU1FTlQsXG4gICAgICBwcm9wZXJ0aWVzLkVYVEVOU0lPTlNcbiAgICBdLFxuICAgIGxvY2FsVHJhY2UsXG4gICAgbG9jYWxFcnJvcnNcbiAgKTtcblxuICByZXR1cm4gbG9jYWxFcnJvcnM7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0KG9iamVjdCwgdHJhY2UsIGVycm9ycywgaXNXaXRoaW5TdWJTdGF0ZW1lbnQpIHtcbiAgdmFyIGxvY2FsRXJyb3JzLCBsb2NhbFRyYWNlLCBvYmplY3RUeXBlO1xuXG4gIGxvY2FsRXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICBsb2NhbFRyYWNlICA9IHRyYWNlICB8fCBwcm9wZXJ0aWVzLk9CSkVDVDtcblxuICBpZiAob2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UpLFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuT0JKRUNUX01VU1RfQkVfREVGSU5FRCxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxvY2FsRXJyb3JzO1xuICB9XG5cbiAgaWYgKCF4YXBpVmFsaWRhdGlvblV0aWxzLmlzTm9uTnVsbE1hcE9iamVjdChvYmplY3QpKSB7XG4gICAgbG9jYWxFcnJvcnMucHVzaCh7XG4gICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlKSxcbiAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLk9CSkVDVF9NVVNUX0JFX05PTl9OVUxMX01BUF9PQkpFQ1QsXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcblxuICAgIHJldHVybiBsb2NhbEVycm9ycztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHlJc1N0cmluZyhvYmplY3QsIHByb3BlcnRpZXMuT0JKRUNUX1RZUEUsIGxvY2FsVHJhY2UsIGxvY2FsRXJyb3JzLCAvKmlzUmVxdWlyZWQqL3RydWUsIHhhcGlFcnJvckxldmVscy5TSE9VTERfVklPTEFUSU9OKTtcbiAgb2JqZWN0VHlwZSA9IG9iamVjdC5vYmplY3RUeXBlIHx8IG9iamVjdFR5cGVzLkFDVElWSVRZO1xuXG4gIC8vIFRPRE86IFN3aXRjaFxuICBpZiAob2JqZWN0VHlwZSA9PT0gb2JqZWN0VHlwZXMuQUNUSVZJVFkpIHtcbiAgICB2YWxpZGF0ZUFjdGl2aXR5KG9iamVjdCwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMpO1xuICB9IGVsc2UgaWYgKG9iamVjdFR5cGUgPT09IG9iamVjdFR5cGVzLkFHRU5UKSB7XG4gICAgdmFsaWRhdGVBZ2VudChvYmplY3QsIGxvY2FsVHJhY2UsIGxvY2FsRXJyb3JzKTtcbiAgfSBlbHNlIGlmIChvYmplY3RUeXBlID09PSBvYmplY3RUeXBlcy5HUk9VUCkge1xuICAgIHZhbGlkYXRlR3JvdXAob2JqZWN0LCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycyk7XG4gIH0gZWxzZSBpZiAob2JqZWN0VHlwZSA9PT0gb2JqZWN0VHlwZXMuU1RBVEVNRU5UX1JFRikge1xuICAgIHZhbGlkYXRlU3RhdGVtZW50UmVmKG9iamVjdCwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMpO1xuICB9IGVsc2UgaWYgKG9iamVjdFR5cGUgPT09IG9iamVjdFR5cGVzLlNVQl9TVEFURU1FTlQpIHtcbiAgICBpZiAoaXNXaXRoaW5TdWJTdGF0ZW1lbnQpIHtcbiAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLk9CSkVDVF9UWVBFKSxcbiAgICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuU1VCX1NUQVRFTUVOVF9NVVNUX05PVF9DT05UQUlOX1NVQl9TVEFURU1FTlQsXG4gICAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVTdGF0ZW1lbnQob2JqZWN0LCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycywgIC8qaXNTdWJTdGF0ZW1lbnQqL3RydWUpO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5sb2NhbFRyYWNlVG9TdHJpbmcobG9jYWxUcmFjZSwgcHJvcGVydGllcy5PQkpFQ1RfVFlQRSksXG4gICAgICBtZXNzYWdlOiBgJHt4YXBpVmFsaWRhdGlvbkVycm9ycy5PQkpFQ1RfVFlQRV9NVVNUX0JFX1ZBTElEX09QVElPTn0gJHt4QXBpVmFsaWRPYmplY3RUeXBlcy50b1N0cmluZygpfWAsXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbG9jYWxFcnJvcnM7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU3RhdGVtZW50KHN0YXRlbWVudCwgdHJhY2UsIGVycm9ycywgaXNTdWJTdGF0ZW1lbnQpIHtcbiAgdmFyIGxvY2FsRXJyb3JzLCBsb2NhbFRyYWNlLCBzdGF0ZW1lbnRPYmplY3RPYmplY3RUeXBlLCB3aGl0ZWxpc3RlZFByb3BlcnRpZXM7XG5cbiAgbG9jYWxFcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gIGxvY2FsVHJhY2UgID0gdHJhY2UgIHx8IHByb3BlcnRpZXMuU1RBVEVNRU5UO1xuXG4gIHdoaXRlbGlzdGVkUHJvcGVydGllcyA9IHhhcGlXaGl0ZUxpc3RQcm9wZXJ0aWVzLlNUQVRFTUVOVDtcblxuICBpZiAoIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNOb25OdWxsTWFwT2JqZWN0KHN0YXRlbWVudCkpIHtcbiAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgIHRyYWNlOiAgIHhhcGlWYWxpZGF0aW9uVXRpbHMubG9jYWxUcmFjZVRvU3RyaW5nKGxvY2FsVHJhY2UpLFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuU1RBVEVNRU5UX1JFRl9NVVNUX05PVF9CRV9OVUxMX01BUF9PQkpFQ1RTLFxuICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbG9jYWxFcnJvcnM7XG4gIH1cblxuICBpZiAoIWlzU3ViU3RhdGVtZW50KSB7XG4gICAgaWYgKHN0YXRlbWVudC5pZCA9PT0gbnVsbCB8fCBzdGF0ZW1lbnQuaWQgPT09IHVuZGVmaW5lZCB8fCAheGFwaVZhbGlkYXRpb25VdGlscy5pc1N0cmluZyhzdGF0ZW1lbnQuaWQpKSB7XG4gICAgICBsb2NhbEVycm9ycy5wdXNoKHtcbiAgICAgICAgdHJhY2U6ICAgeGFwaVZhbGlkYXRpb25VdGlscy5sb2NhbFRyYWNlVG9TdHJpbmcobG9jYWxUcmFjZSwgcHJvcGVydGllcy5JRCksXG4gICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLklEU19TSE9VTERfQkVfR0VORVJBVEVEX0JZX0xSUyxcbiAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLlNIT1VMRF9WSU9MQVRJT05cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXhhcGlWYWxpZGF0aW9uUmVnZXguVVVJRC50ZXN0KHN0YXRlbWVudC5pZCkpIHtcbiAgICAgIGxvY2FsRXJyb3JzLnB1c2goe1xuICAgICAgICB0cmFjZTogICB4YXBpVmFsaWRhdGlvblV0aWxzLmxvY2FsVHJhY2VUb1N0cmluZyhsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLklEKSxcbiAgICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuSURfTVVTVF9CRV9WQUxJRCxcbiAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd2hpdGVsaXN0ZWRQcm9wZXJ0aWVzID0geGFwaVdoaXRlTGlzdFByb3BlcnRpZXMuU1VCX1NUQVRFTUVOVDtcbiAgfVxuXG4gIHZhbGlkYXRlQWN0b3Ioc3RhdGVtZW50LmFjdG9yLCB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuQUNUT1IpLCBsb2NhbEVycm9ycyk7XG4gIHZhbGlkYXRlVmVyYihzdGF0ZW1lbnQudmVyYiwgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLlZFUkIpLCBsb2NhbEVycm9ycyk7XG4gIHZhbGlkYXRlT2JqZWN0KHN0YXRlbWVudC5vYmplY3QsIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5PQkpFQ1QpLCBsb2NhbEVycm9ycywgaXNTdWJTdGF0ZW1lbnQpO1xuICB2YWxpZGF0ZVJlc3VsdChzdGF0ZW1lbnQucmVzdWx0LCB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuUkVTVUxUKSwgbG9jYWxFcnJvcnMpO1xuXG4gIHN0YXRlbWVudE9iamVjdE9iamVjdFR5cGUgPSBzdGF0ZW1lbnQub2JqZWN0ICYmIHN0YXRlbWVudC5vYmplY3Qub2JqZWN0VHlwZSA/IHN0YXRlbWVudC5vYmplY3Qub2JqZWN0VHlwZSA6IG9iamVjdFR5cGVzLkFDVElWSVRZO1xuXG4gIHZhbGlkYXRlQ29udGV4dChzdGF0ZW1lbnQuY29udGV4dCwgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLkNPTlRFWFQpLCBsb2NhbEVycm9ycywgc3RhdGVtZW50T2JqZWN0T2JqZWN0VHlwZSk7XG4gIHZhbGlkYXRlUHJvcGVydHlJc0lTTzg2MDFTdHJpbmcoc3RhdGVtZW50LCBwcm9wZXJ0aWVzLlRJTUVTVEFNUCwgbG9jYWxUcmFjZSwgbG9jYWxFcnJvcnMpO1xuICB2YWxpZGF0ZVByb3BlcnR5SXNJU084NjAxU3RyaW5nKHN0YXRlbWVudCwgcHJvcGVydGllcy5TVE9SRUQsIGxvY2FsVHJhY2UsIGxvY2FsRXJyb3JzKTtcblxuICB2YWxpZGF0ZUF1dGhvcml0eShzdGF0ZW1lbnQuYXV0aG9yaXR5LCB4YXBpVmFsaWRhdGlvblV0aWxzLmFkZFByb3BUb1RyYWNlKGxvY2FsVHJhY2UsIHByb3BlcnRpZXMuQVVUSE9SSVRZKSwgbG9jYWxFcnJvcnMpO1xuICB2YWxpZGF0ZVZlcnNpb24oc3RhdGVtZW50LnZlcnNpb24sIHhhcGlWYWxpZGF0aW9uVXRpbHMuYWRkUHJvcFRvVHJhY2UobG9jYWxUcmFjZSwgcHJvcGVydGllcy5WRVJTSU9OKSwgbG9jYWxFcnJvcnMpO1xuICB2YWxpZGF0ZUF0dGFjaG1lbnRzKHN0YXRlbWVudC5hdHRhY2htZW50cywgeGFwaVZhbGlkYXRpb25VdGlscy5hZGRQcm9wVG9UcmFjZShsb2NhbFRyYWNlLCBwcm9wZXJ0aWVzLkFUVEFDSE1FTlRTKSwgbG9jYWxFcnJvcnMpO1xuXG4gIHZhbGlkYXRlQWJzZW5jZU9mTm9uV2hpdGVsaXN0ZWRQcm9wZXJ0aWVzKHN0YXRlbWVudCwgd2hpdGVsaXN0ZWRQcm9wZXJ0aWVzLCBsb2NhbFRyYWNlLCBsb2NhbEVycm9ycyk7XG5cbiAgcmV0dXJuIGxvY2FsRXJyb3JzO1xufVxuXG5mdW5jdGlvbiBtYWtlU3RhdGVtZW50UmVwb3J0KHN0YXRlbWVudCkge1xuICB2YXIgbG9jYWxFcnJvcnM7XG5cbiAgbG9jYWxFcnJvcnMgPSBbXTtcbiAgdmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVtZW50LCBwcm9wZXJ0aWVzLlNUQVRFTUVOVCwgbG9jYWxFcnJvcnMsICAvKmlzUmVxdWlyZWQqL2ZhbHNlKTtcblxuICByZXR1cm4gbWFrZVYxUmVwb3J0KHN0YXRlbWVudCwgbG9jYWxFcnJvcnMpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUFtYmlndW91c1R5cGVTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gIHZhciBzdGF0ZW1lbnRPYmplY3Q7XG5cbiAgaWYgKHN0YXRlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG1ha2VWMVNpbmdsZUVycm9yUmVwb3J0KC8qaW5zdGFuY2UqL251bGwsIHtcbiAgICAgIHRyYWNlOiAgIHByb3BlcnRpZXMuU1RBVEVNRU5ULFxuICAgICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuU1RBVEVNRU5UX0FSR1VNRU5UX01VU1RfQkVfUFJPVklERUQsXG4gICAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChzdGF0ZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbWFrZVYxU2luZ2xlRXJyb3JSZXBvcnQoLyppbnN0YW5jZSovbnVsbCwge1xuICAgICAgdHJhY2U6ICAgcHJvcGVydGllcy5TVEFURU1FTlQsXG4gICAgICBtZXNzYWdlOiB4YXBpVmFsaWRhdGlvbkVycm9ycy5TVEFURU1FTlRfTVVTVF9OT1RfQkVfTlVMTCxcbiAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHhhcGlWYWxpZGF0aW9uVXRpbHMuaXNTdHJpbmcoc3RhdGVtZW50KSkge1xuICAgIHRyeSB7XG4gICAgICBzdGF0ZW1lbnRPYmplY3QgPSBKU09OLnBhcnNlKHN0YXRlbWVudCk7XG4gICAgICBpZiAoc3RhdGVtZW50T2JqZWN0ID09PSBudWxsIHx8ICF4YXBpVmFsaWRhdGlvblV0aWxzLmlzT2JqZWN0KHN0YXRlbWVudE9iamVjdCkgfHwgeGFwaVZhbGlkYXRpb25VdGlscy5pc0FycmF5KHN0YXRlbWVudE9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VWMVNpbmdsZUVycm9yUmVwb3J0KHN0YXRlbWVudE9iamVjdCwge1xuICAgICAgICAgIHRyYWNlOiAgIHByb3BlcnRpZXMuU1RBVEVNRU5ULFxuICAgICAgICAgIG1lc3NhZ2U6IHhhcGlWYWxpZGF0aW9uRXJyb3JzLlNUQVRFTUVOVF9NVVNUX0JFX1BBUlNFRF9DT1JSRUNUTFksXG4gICAgICAgICAgbGV2ZWw6ICAgeGFwaUVycm9yTGV2ZWxzLk1VU1RfVklPTEFUSU9OXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBtYWtlVjFTaW5nbGVFcnJvclJlcG9ydChzdGF0ZW1lbnRPYmplY3QsIHtcbiAgICAgICAgdHJhY2U6ICAgcHJvcGVydGllcy5TVEFURU1FTlQsXG4gICAgICAgIG1lc3NhZ2U6IGAke3hhcGlWYWxpZGF0aW9uRXJyb3JzLklOVkFMSURfSlNPTn06ICR7ZS5tZXNzYWdlfWAsXG4gICAgICAgIGxldmVsOiAgIHhhcGlFcnJvckxldmVscy5NVVNUX1ZJT0xBVElPTlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VTdGF0ZW1lbnRSZXBvcnQoc3RhdGVtZW50T2JqZWN0KTtcbiAgfVxuXG4gIGlmICh4YXBpVmFsaWRhdGlvblV0aWxzLmlzT2JqZWN0KHN0YXRlbWVudCkgJiYgIXhhcGlWYWxpZGF0aW9uVXRpbHMuaXNBcnJheShzdGF0ZW1lbnQpKSB7XG4gICAgcmV0dXJuIG1ha2VTdGF0ZW1lbnRSZXBvcnQoc3RhdGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBtYWtlVjFTaW5nbGVFcnJvclJlcG9ydCgvKmluc3RhbmNlKi9udWxsLCB7XG4gICAgdHJhY2U6ICAgcHJvcGVydGllcy5TVEFURU1FTlQsXG4gICAgbWVzc2FnZTogeGFwaVZhbGlkYXRpb25FcnJvcnMuU1RBVEVNRU5UX0FSR1VNRU5UX0lTX05PVF9WQUxJRCxcbiAgICBsZXZlbDogICB4YXBpRXJyb3JMZXZlbHMuTVVTVF9WSU9MQVRJT05cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRhdGVJbmNsdWRlc1pvbmVJbmZvcm1hdGlvbihtYXRjaGVkKSB7XG4gIHJldHVybiBtYXRjaGVkW2RhdGVGb3JtYXRSZWdleFBvc2l0aW9ucy5aT05FXSB8fFxuICAgICAgICAgIChtYXRjaGVkW2RhdGVGb3JtYXRSZWdleFBvc2l0aW9ucy5SRUxBVElWRV9USU1FXSAmJiBtYXRjaGVkW2RhdGVGb3JtYXRSZWdleFBvc2l0aW9ucy5USU1FX1pPTkVfSE9VUl0pO1xufVxuXG54YXBpVmFsaWRhdG9yID0ge1xuICB2YWxpZGF0ZVN0YXRlbWVudDogdmFsaWRhdGVBbWJpZ3VvdXNUeXBlU3RhdGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCB4YXBpVmFsaWRhdG9yO1xud2luZG93LnhhcGlWYWxpZGF0b3IgPSB4YXBpVmFsaWRhdG9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge3hhcGlWYWxpZGF0aW9uUmVnZXh9IGZyb20gJy4uL2NvbnN0YW50cy9yZWdleCc7XG5pbXBvcnQge29iamVjdFR5cGVzfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcGVydGllcyc7XG5cbmNvbnN0XG4gIElTX1NUUklORyAgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgSVNfQVJSQVkgICA9ICdbb2JqZWN0IEFycmF5XScsXG4gIElTX0JPT0xFQU4gPSAnW29iamVjdCBCb29sZWFuXScsXG4gIElTX05VTUJFUiAgPSAnW29iamVjdCBOdW1iZXJdJztcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciB4YXBpVmFsaWRhdGlvblV0aWxzO1xuXG54YXBpVmFsaWRhdGlvblV0aWxzID0ge1xuICBpc1N0cmluZyhvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBJU19TVFJJTkc7XG4gIH0sXG5cbiAgaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG4gIH0sXG5cbiAgaXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBJU19BUlJBWTtcbiAgfSxcblxuICBpc0Jvb2xlYW4ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gSVNfQk9PTEVBTjtcbiAgfSxcblxuICBpc051bWJlcihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBJU19OVU1CRVI7XG4gIH0sXG5cbiAgaXNEZWZpbmVkKG9iaikge1xuICAgIHJldHVybiAob2JqICE9PSBudWxsIHx8IG9iaiAhPT0gdW5kZWZpbmVkKTtcbiAgfSxcblxuICBpc05vbk51bGxNYXBPYmplY3QodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0RlZmluZWQodGFyZ2V0KSAmJiB0aGlzLmlzT2JqZWN0KHRhcmdldCkgJiYgIXRoaXMuaXNBcnJheSh0YXJnZXQpO1xuICB9LFxuXG4gIGlzVmFsaWRMYW5ndWFnZVRhZyh0YXJnZXQpIHtcbiAgICAvLyBUT0RPIC0gdXNlIG1vcmUgcHJlY2lzZSA1NjQ2IGhhbmRsaW5nLCByYXRoZXIgdGhhbiB0aGlzIHNpbXBsaWZpZWQgQkNQIDQ3IHJlZ2V4LCB3aGljaCBjb21iaW5lcyBSRkMgNTY0NiBhbmQgUkZDIDQ2NDcuXG4gICAgcmV0dXJuIHRoaXMuaXNEZWZpbmVkKHRhcmdldCkgJiYgdGhpcy5pc1N0cmluZyh0YXJnZXQpICYmIHhhcGlWYWxpZGF0aW9uUmVnZXguQkNQXzQ3LnRlc3QodGFyZ2V0KTtcbiAgfSxcblxuICBhZGRQcm9wVG9UcmFjZSh0cmFjZSwgYWRkZW5kdW0pIHtcbiAgICByZXR1cm4gdGhpcy5pc0RlZmluZWQoYWRkZW5kdW0pID8gYCR7dHJhY2V9LiR7YWRkZW5kdW19YCA6IHRyYWNlO1xuICB9LFxuXG4gIGFkZExvb2t1cFRvVHJhY2UodHJhY2UsIGtleSkge1xuICAgIHJldHVybiAoIXRoaXMuaXNEZWZpbmVkKGtleSkpID8gdHJhY2UgOiAodGhpcy5pc051bWJlcihrZXkpID8gYCR7dHJhY2V9WyR7a2V5fV1gIDogYCR7dHJhY2V9W1wiJHtrZXl9XCJdYCk7XG4gIH0sXG5cbiAgbG9jYWxUcmFjZVRvU3RyaW5nKHRyYWNlLCBhZGRlbmR1bSkge1xuICAgIHJldHVybiB0aGlzLmFkZFByb3BUb1RyYWNlKHRyYWNlLCBhZGRlbmR1bSk7XG4gIH0sXG5cbiAgaXNHcm91cChhY3Rvck9yR3JvdXApIHtcbiAgICByZXR1cm4gKGFjdG9yT3JHcm91cC5tZW1iZXIgIT09IG51bGwgJiYgYWN0b3JPckdyb3VwLm1lbWJlciAhPT0gdW5kZWZpbmVkKSB8fCBhY3Rvck9yR3JvdXAub2JqZWN0VHlwZSA9PT0gb2JqZWN0VHlwZXMuR1JPVVA7XG4gIH1cbn07XG5cbmV4cG9ydCB7eGFwaVZhbGlkYXRpb25VdGlsc307XG4iXX0=
