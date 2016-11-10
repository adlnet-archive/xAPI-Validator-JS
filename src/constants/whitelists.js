 'use strict';
 import {properties} from '../constants/properties';

 const xapiWhiteListProperties = Object.freeze({
   IFI: [
     properties.HOME_PAGE,
     properties.NAME
   ],
   URI: [
     properties.ID,
     properties.DISPLAY
   ],
   COMPONENT_ARRAY: [
     properties.ID,
     properties.DESCRIPTION
   ],
   ACTIVITY_DEFINITION: [
     properties.NAME,
     properties.DESCRIPTION,
     properties.TYPE,
     properties.MORE_INFO,
     properties.EXTENSIONS,
     properties.INTERACTION_TYPE,
     properties.CORRECT_RESPONSES_PATTERN,
     properties.CHOICES,
     properties.SCALE,
     properties.SOURCE,
     properties.TARGET,
     properties.STEPS
   ],
   ACTIVITY: [
     properties.OBJECT_TYPE,
     properties.ID,
     properties.DEFINITION
   ],
   STATEMENT_REF: [
     properties.ID,
     properties.OBJECT_TYPE
   ],
   SCORE: [
     properties.SCALED,
     properties.RAW,
     properties.MIN,
     properties.MAX
   ],
   RESULT: [
     properties.SCORE,
     properties.SUCCESS,
     properties.COMPLETION,
     properties.RESPONSE,
     properties.DURATION,
     properties.EXTENSIONS
   ],
   ATTACHMENT: [
     properties.USAGE_TYPE,
     properties.DISPLAY,
     properties.DESCRIPTION,
     properties.CONTENT_TYPE,
     properties.LENGTH,
     properties.SHA2,
     properties.FILE_URL
   ],
  AGENT: [
    properties.OBJECT_TYPE,
    properties.NAME,
    properties.ACCOUNT,
    properties.MBOX_SHA_1_SUM,
    properties.MBOX,
    properties.OPEN_ID
  ],
  GROUP: [
    properties.OBJECT_TYPE,
    properties.NAME,
    properties.MEMBER,
    properties.ACCOUNT,
    properties.MBOX_SHA_1_SUM,
    properties.MBOX,
    properties.OPEN_ID
  ],
  CONTEXT_ACTIVITIES: [
    properties.PARENT,
    properties.GROUPING,
    properties.CATEGORY,
    properties.OTHER
  ],
  STATEMENT: [
    properties.ID,
    properties.ACTOR,
    properties.VERB,
    properties.OBJECT,
    properties.RESULT,
    properties.CONTEXT,
    properties.TIMESTAMP,
    properties.STORED,
    properties.AUTHORITY,
    properties.VERSION,
    properties.ATTACHMENTS
  ],
  SUB_STATEMENT: [
    properties.ACTOR,
    properties.VERB,
    properties.OBJECT,
    properties.RESULT,
    properties.CONTEXT,
    properties.TIMESTAMP,
    properties.ATTACHMENTS,
    properties.OBJECT_TYPE
  ],
  EXTENSIONS: [
    properties.REGISTRATION,
    properties.INSTRUCTOR,
    properties.TEAM,
    properties.CONTEXT_ACTIVITIES,
    properties.REVISION,
    properties.PLATFORM,
    properties.LANGUAGE,
    properties.STATEMENT,
    properties.EXTENSIONS
  ]
});

 export {xapiWhiteListProperties};
