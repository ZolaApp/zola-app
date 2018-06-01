// @flow
import React from 'react'
import { Mutation, Query } from 'react-apollo'
import { toast } from 'react-toastify'
import serializeForm from 'form-serialize'
import { type Project } from '@types/Project'
import projectQuery from '@containers/LocalesPageContainer/query.graphql'
import Loader from '@components/Loader'
import Wrapper from '@components/Wrapper'
import View from '@components/NewLocaleModal'
import mutation from './mutation.graphql'
import query from './query.graphql'

type Props = {
  getDialog: any,
  project: Project
}

const NewLocaleModalContainer = ({ getDialog, project }: Props) => (
  <Wrapper>
    <Mutation
      mutation={mutation}
      // $FlowFixMe
      refetchQueries={[
        { query: projectQuery, variables: { projectSlug: project.slug } },
        { query: query }
      ]}
    >
      {(addLocaleToProject, mutationData) => (
        <Query query={query}>
          {(queryData: any) => {
            if (queryData.loading) {
              return <Loader isCentered withText isDark />
            }

            return (
              <View
                isLoading={mutationData.loading}
                projectId={project.id}
                onSubmit={async (event: any) => {
                  event.preventDefault()
                  const form = event.target
                  const variables = serializeForm(form, { hash: true })
                  // $FlowFixMe
                  const response = await addLocaleToProject({ variables })

                  if (response.data.addLocaleToProject.status === 'SUCCESS') {
                    const dialog = getDialog()
                    dialog.hide()
                    form.reset()
                    toast.success('✅ Success! The locale has been added.')
                  }
                }}
                locales={queryData.data.locales.filter(
                  // Remove locales already used by the project
                  queryLocale =>
                    !project.locales.find(
                      projectLocale => projectLocale.code === queryLocale.code
                    )
                )}
              />
            )
          }}
        </Query>
      )}
    </Mutation>
  </Wrapper>
)

export default NewLocaleModalContainer
