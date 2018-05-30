import React from 'react'
import SelectDropdown from '@components/SelectDropdown'
import { Wrapper } from './styles'

const KeysFilters = () => {
  return (
    <Wrapper>
      <SelectDropdown
        placeholder="Tags"
        onApply={options => {
          // TODO: handle filtering
          console.log('apply...', options)
        }}
        options={[
          { text: 'Missing translations', value: 'missing' },
          { text: 'Unused keys', value: 'unused' },
          { text: 'New keys', value: 'new' },
          { text: 'Live env', value: 'live-env' },
          { text: 'To translate', value: 'to-translate' }
        ]}
      />
    </Wrapper>
  )
}

export default KeysFilters
