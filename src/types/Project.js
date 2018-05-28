// @flow
import type { TranslationKey } from '@types/TranslationKey'

export type Project = {
  updatedAt: Date,

  name: string,
  slug: string,
  description: string,

  missingTranslations: number,
  newKeys: number,
  translationKeys: Array<TranslationKey>,

  locales: Array<string>
}
