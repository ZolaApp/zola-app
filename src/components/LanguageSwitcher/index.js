import React from 'react'
import { Wrapper, Button } from './styles'

class LanguageSwitcher extends React.Component {
  onLanguageClick = locale => {
    localStorage.setItem('dashboard-language', locale)
    location.reload()
  }

  render() {
    const active = localStorage.getItem('dashboard-language') || 'en'

    return (
      <Wrapper>
        <Button
          onClick={() => this.onLanguageClick('fr')}
          transparent
          active={active === 'fr'}
        >
          FR
        </Button>
        <Button
          onClick={() => this.onLanguageClick('en')}
          transparent
          active={active === 'en'}
        >
          EN
        </Button>
      </Wrapper>
    )
  }
}

export default LanguageSwitcher
