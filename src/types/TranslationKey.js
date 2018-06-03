// @flow
import type { TranslationValue } from '@types/TranslationValue'

export type TranslationKey = {
  id: string,
  key: string,
  translationValues: Array<TranslationValue>,
  hasMissingTranslations: boolean,
  isNew: boolean
}
