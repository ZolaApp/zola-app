import React from 'react'
import { Query, Mutation } from 'react-apollo'
import Router from 'next/router'
import { toast } from 'react-toastify'
import serializeForm from 'form-serialize'
import ErrorPage from 'next/error'
import View from '@components/NewProjectModal'
import Wrapper from '@components/Wrapper'
import Loader from '@components/Loader'
import query from './query.graphql'
import mutation from './mutation.graphql'

const NewProjectModalContainer = () => (
  <Wrapper>
    <Mutation mutation={mutation}>
      {(
        createProject,
        { error: mutationError, loading: mutationIsLoading, data: mutationData }
      ) => {
        return (
          <Query query={query}>
            {({
              error: queryError,
              loading: queryIsLoading,
              data: queryData
            }) => {
              if (queryError) {
                return <ErrorPage statusCode={404} />
              }

              if (queryIsLoading) {
                return <Loader isCentered withText isDark />
              }

              return (
                <View
                  locales={queryData.locales}
                  errors={mutationData ? mutationData.createProject.errors : []}
                  onSubmit={async e => {
                    e.preventDefault()
                    const variables = serializeForm(e.target, { hash: true })
                    const response = await createProject({ variables })

                    if (response.data.createProject.status === 'SUCCESS') {
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
