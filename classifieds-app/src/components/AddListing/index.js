import React from 'react'
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';

import { CREATE_LISTING } from '../../graphql/mutations/createListing';
import { TextArea } from '../shared/TextArea';
import { TextInput } from '../shared/TextInput';

const Button = styled.button`
  margin-top: 0.5rem;
`;

const Form = styled.form`
  background-color: ${props => props.theme.whiteSmoke};
  margin-top: 1rem;
  padding: 1rem;
`;

const Label = styled.label`
  display: block;
  :not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const LabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const AddListing = ({ onAddListing: pushAddListing }) => {
  const [createListing] = useMutation(CREATE_LISTING)
  const { formState: { isSubmitting }, handleSubmit, register, reset } = useForm()
  const session = useSelector(state => state.session)

  if (!session) return <p>Login to add listings.</p>

  const onSubmit = handleSubmit(async ({ description, title }) => {
    await createListing({ variables: { description, title } })
    reset()
    pushAddListing()
  })

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        <LabelText>Title</LabelText>
        <TextInput disabled={isSubmitting} {...register("title")} type="text" />
      </Label>
      <Label>
        <LabelText>Description</LabelText>
        <TextArea disabled={isSubmitting} {...register("description")} />
      </Label>
      <Button disabled={isSubmitting} type="submit">
        Add Listing
      </Button>
    </Form>
  )
}
