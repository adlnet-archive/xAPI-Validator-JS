'use strict';

import {xapiValidationRegex} from '../constants/regex';
import {objectTypes} from '../constants/properties';

const
  IS_STRING  = '[object String]',
  IS_ARRAY   = '[object Array]',
  IS_BOOLEAN = '[object Boolean]',
  IS_NUMBER  = '[object Number]';

var toString = Object.prototype.toString;
var xapiValidationUtils;

xapiValidationUtils = {
  isString(obj) {
    return toString.call(obj) === IS_STRING;
  },

  isObject(obj) {
    return obj === Object(obj);
  },

  isArray: Array.isArray || function(obj) {
    return toString.call(obj) === IS_ARRAY;
  },

  isBoolean(obj) {
    return obj === true || obj === false || toString.call(obj) === IS_BOOLEAN;
  },

  isNumber(obj) {
    return toString.call(obj) === IS_NUMBER;
  },

  isDefined(obj) {
    return (obj !== null || obj !== undefined);
  },

  isNonNullMapObject(target) {
      return this.isDefined(target) && this.isObject(target) && !this.isArray(target);
  },

  isValidLanguageTag(target) {
    // TODO - use more precise 5646 handling, rather than this simplified BCP 47 regex, which combines RFC 5646 and RFC 4647.
    return this.isDefined(target) && this.isString(target) && xapiValidationRegex.BCP_47.test(target);
  },

  addPropToTrace(trace, addendum) {
    return this.isDefined(addendum) ? `${trace}.${addendum}` : trace;
  },

  addLookupToTrace(trace, key) {
    return (!this.isDefined(key)) ? trace : (this.isNumber(key) ? `${trace}[${key}]` : `${trace}["${key}"]`);
  },

  localTraceToString(trace, addendum) {
    return this.addPropToTrace(trace, addendum);
  },

  isGroup(actorOrGroup) {
    return (actorOrGroup.member !== null && actorOrGroup.member !== undefined) || actorOrGroup.objectType === objectTypes.GROUP;
  }
};

export {xapiValidationUtils};
