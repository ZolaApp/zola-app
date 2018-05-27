// @flow
import type { TranslationKey } from '@types/TranslationKey'

export type Project = {
  name: string,
  slug: string,
  description: string,
  locales: Array<string>,
  translationKeys: Array<TranslationKey>,
  updatedAt: Date
}
