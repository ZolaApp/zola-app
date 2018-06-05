// @flow
import React from 'react'
import { Mutation } from 'react-apollo'
import { toast } from 'react-toastify'
import { withRouter } from 'next/router'
import serializeForm from 'form-serialize'
import { KEYS_PER_PAGE } from '@constants/pagination'
import View from '@components/NewKeyModal'
import Wrapper from '@components/Wrapper'
import projectQuery from '@containers/SingleProjectPageContainer/query.graphql'
import { type Project } from '@types/Project'
import mutation from './mutation.graphql'

type Props = {
  getDialog: any,
  project: Project,
  router: any
}

const NewKeyModalContainer = ({ getDialog, project, router }: Props) => {
  const page = Number(router.query.page - 1) || 0
  const filters = router.query.filters ? router.query.filters.split(',') : []

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
              filters
            }
          }
        ]}
      >
        {(addTranslationKeyToProject, mutationData) => {
          return (
            <View
              errors={
                mutationData.data
                  ? mutationData.data.addTranslationKeyToProject.errors
                  : []
              }
              isLoading={mutationData.loading}
              projectId={project.id}
              onSubmit={async (e: any) => {
                e.preventDefault()
                const formNode = e.target
                const variables = serializeForm(formNode, { hash: true })
                // $FlowFixMe
                const response = await addTranslationKeyToProject({ variables })

                if (
                  response.data.addTranslationKeyToProject.status === 'SUCCESS'
                ) {
                  const dialog = getDialog()
                  dialog.hide()
                  formNode.reset()
                  toast.success('✅ Success! The key has been created.')
                } else {
                  response.data.addTranslationKeyToProject.errors.forEach(
                    error => {
                      toast.error(error.message)
                    }
                  )
                }
              }}
            />
          )
        }}
      </Mutation>
    </Wrapper>
  )
}

export default withRouter(NewKeyModalContainer)
