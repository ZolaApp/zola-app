import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import { flattenMessages } from '../helpers/localesFlattenMessages'
import messages from './messages'

addLocaleData([...en, ...fr])

export const getMessages = locale => flattenMessages(messages[locale])
