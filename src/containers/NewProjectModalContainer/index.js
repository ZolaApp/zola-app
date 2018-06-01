// @flow
import React from 'react'
import { Query, Mutation } from 'react-apollo'
import Router from 'next/router'
import { toast } from 'react-toastify'
import serializeForm from 'form-serialize'
import View from '@components/NewProjectModal'
import Wrapper from '@components/Wrapper'
import Loader from '@components/Loader'
import projectListQuery from '@containers/HomePageContainer/query.graphql'
import query from './query.graphql'
import mutation from './mutation.graphql'

type Props = {
  getDialog: any
}

const NewProjectModalContainer = ({ getDialog }: Props) => (
  <Wrapper>
    <Mutation
      mutation={mutation}
      // $FlowFixMe
      refetchQueries={[{ query: projectListQuery }]}
    >
      {(createProject, mutationData) => {
        return (
          <Query query={query}>
            {(queryData: any) => {
              if (queryData.loading) {
                return <Loader isCentered withText isDark />
              }

              return (
                <View
                  locales={queryData.data.locales}
                  errors={
                    mutationData.data
                      ? mutationData.data.createProject.errors
                      : []
                  }
                  isLoading={mutationData.loading}
                  onSubmit={async (e: any) => {
                    e.preventDefault()
                    const formNode = e.target
                    const variables = serializeForm(formNode, { hash: true })
                    // $FlowFixMe
                    const response = await createProject({ variables })

                    if (response.data.createProject.status === 'SUCCESS') {
                      const dialog = getDialog()
                      dialog.hide()
                      formNode.reset()
                      Router.push('/')
                      toast.success('✅ Success! The project has been created.')
                    }
                  }}
                />
              )
            }}
          </Query>
        )
      }}
    </Mutation>
  </Wrapper>
)

export default NewProjectModalContainer
