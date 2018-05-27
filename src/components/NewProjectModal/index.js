// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import InputWithLabel from '@components/InputWithLabel'
import SelectDropdown from '@components/SelectDropdown'
import Button from '@components/Button'
import { Label } from './styles'

type Props = {}

const NewProjectModal = (props: Props) => {
  return (
    <div>
      <Wrapper padding="regular">
        <Text>Create a new projet and import your keys</Text>
      </Wrapper>
      <Wrapper padding="regular">
        <Wrapper>
          <InputWithLabel
            label="Project name"
            name="name"
            placeholder="MyAppName"
          />
        </Wrapper>
        <Wrapper mTop="regular">
          <Label htmlFor="locale">Default locale</Label>
          <SelectDropdown
            onApply={options => {
              // TODO: handle apply
              console.log('apply...', options)
            }}
            isMultiple={false}
            placeholder="Please select a locale"
            options={[
              { text: 'Missing translations', value: 'missing' },
              { text: 'Unused keys', value: 'unused' },
              { text: 'New keys', value: 'new' },
              { text: 'Live env', value: 'live-env' },
              { text: 'To translate', value: 'to-translate' }
            ]}
          />
        </Wrapper>
        <Wrapper mTop="large">
          <Button>Add project</Button>
        </Wrapper>
      </Wrapper>
    </div>
  )
}

export default NewProjectModal
