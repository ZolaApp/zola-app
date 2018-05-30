// @flow
import React from 'react'
import { Mutation } from 'react-apollo'
import { toast } from 'react-toastify'
import serializeForm from 'form-serialize'
import View from '@components/NewKeyModal'
import Wrapper from '@components/Wrapper'
import projectQuery from '@containers/SingleProjectPageContainer/query.graphql'
import { type Project } from '@types/Project'
import mutation from './mutation.graphql'

type Props = {
  dialog: any,
  project: Project
}

const NewKeyModalContainer = ({ dialog, project }: Props) => (
  <Wrapper>
    <Mutation
      mutation={mutation}
      // $FlowFixMe
      refetchQueries={[
        { query: projectQuery, variables: { projectSlug: project.slug } }
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
                dialog.hide()
                formNode.reset()
                toast.success('✅ Success! The key has been created.')
              }
            }}
          />
        )
      }}
    </Mutation>
  </Wrapper>
)

export default NewKeyModalContainer
