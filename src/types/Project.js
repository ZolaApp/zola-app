// @flow
import { type TranslationKey } from '@types/TranslationKey'
import { type Locale } from '@types/Locale'

export type Project = {
  updatedAt: Date,

  name: string,
  slug: string,
  description: string,

  missingTranslations: number,
  newKeys: number,
  translationKeys: Array<TranslationKey>,

  locales: Array<Locale>
}
