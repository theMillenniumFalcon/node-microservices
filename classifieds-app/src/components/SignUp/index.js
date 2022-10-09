import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/client';

import { TextInput } from '../shared/TextInput';
import { SIGNUP_MUTATION } from '../../graphql/mutations/signUp';
import { validationSchema } from '../../utils/validationSchema';

const Label = styled.label`
  display: block;
  :not(:first-child) {
    margin-top: 0.75rem;
  }
`;

const LabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const SignUpButton = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
`;

const OrLogin = styled.span`
  font-size: 0.9rem;
`;

export const SignUp = ({ onChangeToSignUp: pushChangeToLogin }) => {
    const { formState: {
        isSubmitting,
        isValid
    }, handleSubmit, register, reset } = useForm({
        mode: "onChange",
        validationSchema
    })

    const [createUser] = useMutation(SIGNUP_MUTATION)

    const onSubmit = handleSubmit(async ({ email, password }) => {
        await createUser({ variables: { email, password } })
        reset()
        pushChangeToLogin()
    })

    return (
        <form onSubmit={onSubmit}>
            <Label>
                <LabelText>Email</LabelText>
                <TextInput disabled={isSubmitting} {...register("email")} />
            </Label>
            <Label>
                <LabelText>Password</LabelText>
                <TextInput disabled={isSubmitting} type="password" {...register("password")} />
            </Label>
            <Label>
                <LabelText>Confirm Password</LabelText>
                <TextInput disabled={isSubmitting} type="password" {...register("confirmPassword")} />
            </Label>
            <SignUpButton disabled={isSubmitting || !isValid} type="submit">
                Sign Up
            </SignUpButton>{" "}
            <OrLogin>
                or{" "}
                <div
                    href="#"
                    onClick={e => {
                        e.preventDefault()
                        pushChangeToLogin()
                    }}
                >
                    Login
                </div>
            </OrLogin>
        </form>
    )
}