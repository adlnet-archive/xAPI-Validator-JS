'use strict';

const properties = Object.freeze({
  ACCOUNT:                   'account',
  ACTIVITY:                  'activity',
  ACTOR:                     'actor',
  AGENT:                     'agent',
  ATTACHMENT:                'attachment',
  ATTACHMENTS:               'attachments',
  AUTHORITY:                 'authority',
  CATEGORY:                  'category',
  CHOICE:                    'choice',
  CHOICES:                   'choices',
  COMPLETION:                'completion',
  CONTENT_TYPE:              'contentType',
  CONTEXT_ACTIVITIES:        'contextActivities',
  CONTEXT:                   'context',
  CORRECT_RESPONSES_PATTERN: 'correctResponsesPattern',
  DATE_TIME:                 'dateTime',
  DEFINITION:                'definition',
  DESCRIPTION:               'description',
  DISPLAY:                   'display',
  DURATION:                  'duration',
  EXTENSIONS:                'extensions',
  FILE_URL:                  'fileUrl',
  GROUP:                     'group',
  GROUPING:                  'grouping',
  HOME_PAGE:                 'homePage',
  ID:                        'id',
  INSTRUCTOR:                'instructor',
  INTERACTION_COMPONENTS:    'interactionComponents',
  INTERACTION_TYPE:          'interactionType',
  LANGUAGE_MAP:              'languageMap',
  LANGUAGE:                  'language',
  LENGTH:                    'length',
  LIKERT:                    'likert',
  MATCHING:                  'matching',
  MAX:                       'max',
  MBOX_SHA_1_SUM:            'mbox_sha1sum',
  MBOX:                      'mbox',
  MEMBER:                    'member',
  MIN:                       'min',
  MORE_INFO:                 'moreInfo',
  NAME:                      'name',
  OBJECT_TYPE:               'objectType',
  OBJECT:                    'object',
  OPEN_ID:                   'openID',
  OTHER:                     'other',
  PARENT:                    'parent',
  PERFORMANCE:               'performance',
  PLATFORM:                  'platform',
  RAW:                       'raw',
  REGISTRATION:              'registration',
  RESPONSE:                  'response',
  RESULT:                    'result',
  REVISION:                  'revision',
  SCALE:                     'scale',
  SCALED:                    'scaled',
  SCORE:                     'score',
  SEQUENCING:                'sequencing',
  SHA2:                      'sha2',
  SOURCE:                    'source',
  STATEMENT_REF:             'statementRef',
  STATEMENT:                 'statement',
  STEPS:                     'steps',
  STORED:                    'stored',
  SUB_CONTEXT:               'subContext',
  SUCCESS:                   'success',
  TARGET:                    'target',
  TEAM:                      'team',
  TIMESTAMP:                 'timestamp',
  TYPE:                      'type',
  USAGE_TYPE:                'usageType',
  VERB:                      'verb',
  VERSION:                   'version'
});

const objectTypes = Object.freeze({
  GROUP:         'Group',
  AGENT:         'Agent',
  ACTIVITY:      'Activity',
  STATEMENT_REF: 'StatementRef',
  SUB_STATEMENT: 'SubStatement'
});

const xapiValidationIfiPropertyNames = Object.freeze([
  properties.ACCOUNT,
  properties.MBOX_SHA_1_SUM,
  properties.MBOX,
  properties.OPEN_ID
]);

const xApiValidObjectTypes = Object.freeze([
  objectTypes.GROUP,
  objectTypes.AGENT,
  objectTypes.ACTIVITY,
  objectTypes.STATEMENT_REF,
  objectTypes.SUB_STATEMENT
]);

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

export {properties};
export {objectTypes};
export {xapiValidationIfiPropertyNames};
export {xApiValidObjectTypes};
export {xapiWhiteListProperties};
