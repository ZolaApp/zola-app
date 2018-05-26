// @flow
import type { TranslationKey } from '@types/TranslationKey'
import type { Locale } from '@types/Locale'

export type TranslationValue = {
  id: string,
  value: string,
  translationKey: TranslationKey,
  locale: Locale
}
