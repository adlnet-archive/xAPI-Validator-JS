'use strict';

export const interactionTypes = Object.freeze({
  CHOICE:       'choice',
  FILL_IN:      'fill-in',
  LIKERT:       'likert',
  LONG_FILL_IN: 'long-fill-in',
  MATCHING:     'matching',
  NUMERIC:      'numeric',
  OTHER:        'other',
  PERFORMANCE:  'performance',
  SEQUENCING:   'sequencing',
  TRUE_FALSE:   'true-false'
});

export const xapiValidationInteractionTypes = Object.freeze([
  interactionTypes.CHOICE,
  interactionTypes.FILL_IN,
  interactionTypes.LIKERT,
  interactionTypes.LONG_FILL_IN,
  interactionTypes.MATCHING,
  interactionTypes.NUMERIC,
  interactionTypes.OTHER,
  interactionTypes.PERFORMANCE,
  interactionTypes.SEQUENCING,
  interactionTypes.TRUE_FALSE
]);
