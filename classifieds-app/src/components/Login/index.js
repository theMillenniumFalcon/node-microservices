import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';

import { TextInput } from '../shared/TextInput';
import { LOGIN_MUTATION } from '../../graphql/mutations/login';
import { setSession } from '../../actions/session';

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

const LoginButton = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
`;

const OrSignUp = styled.span`
  font-size: 0.9rem;
`;

export const Login = ({ onChangeToSignUp: pushChangeToSignUp }) => {
    const { formState: { isSubmitting }, handleSubmit, register } = useForm()
    const dispatch = useDispatch()

    const [createUserSession] = useMutation(LOGIN_MUTATION)

    const onSubmit = handleSubmit(async ({ email, password }) => {
        const {
            data: {
                createUserSession: createdSession
            }
        } = await createUserSession({ variables: { email, password } })
        dispatch(setSession(createdSession))
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
            <LoginButton disabled={isSubmitting} type="submit">
                Login
            </LoginButton>{" "}
            <OrSignUp>
                or{" "}
                <div
                    href="#"
                    onClick={e => {
                        e.preventDefault()
                        pushChangeToSignUp()
                    }}
                >
                    Sign Up
                </div>
            </OrSignUp>
        </form>
    )
}