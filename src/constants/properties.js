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

export {properties};
export {objectTypes};
export {xapiValidationIfiPropertyNames};
export {xApiValidObjectTypes};
