// @flow
import React from 'react'
import { Mutation, Query } from 'react-apollo'
import { toast } from 'react-toastify'
import serializeForm from 'form-serialize'
import { withRouter } from 'next/router'
import { type Project } from '@types/Project'
import { KEYS_PER_PAGE } from '@constants/pagination'
import projectQuery from '@containers/LocalesPageContainer/query.graphql'
import Loader from '@components/Loader'
import Wrapper from '@components/Wrapper'
import View from '@components/NewLocaleModal'
import mutation from './mutation.graphql'
import query from './query.graphql'

type Props = {
  getDialog: any,
  project: Project,
  router: any
}

const NewLocaleModalContainer = ({ getDialog, project, router }: Props) => {
  const page = Number(router.query.page) - 1 || 0
  const filters = router.query.filters ? router.query.filters.split(',') : []
  const search = router.query.search || null

  return (
    <Wrapper>
      <Mutation
        mutation={mutation}
        // $FlowFixMe
        refetchQueries={[
          {
            query: projectQuery,
            variables: {
              projectSlug: project.slug,
              page,
              pageSize: KEYS_PER_PAGE,
              filters,
              search
            }
          },
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
                    variables.shouldPrefillTranslations = Boolean(
                      variables.shouldPrefillTranslations
                    )
                    // $FlowFixMe
                    const response = await addLocaleToProject({ variables })

                    if (response.data.addLocaleToProject.status === 'SUCCESS') {
                      const dialog = getDialog()
                      dialog.hide()
                      form.reset()
                      toast.success('Success! The locale has been added.')
                    } else {
                      toast.error(
                        response.data.addLocaleToProject.errors[0].message
                      )
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
}

export default withRouter(NewLocaleModalContainer)
