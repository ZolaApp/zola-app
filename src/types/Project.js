// @flow
import { type TranslationKey } from '@types/TranslationKey'
import { type Locale } from '@types/Locale'
import { type Stats } from '@types/Stats'

export type Project = {
  id: string,
  updatedAt: Date,

  name: string,
  slug: string,
  cdnToken: string,
  description: string,

  missingTranslations: number,
  newKeys: number,
  translationKeyPage: {
    translationKeys: Array<TranslationKey>
  },

  locales: Array<Locale>,

  stats: Stats
}
