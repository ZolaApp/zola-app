// @flow
import type { TranslationKey } from '@types/TranslationKey'

export type Project = {
  name: string,
  locales: Array<string>,
  translationKeys: Array<TranslationKey>
}
