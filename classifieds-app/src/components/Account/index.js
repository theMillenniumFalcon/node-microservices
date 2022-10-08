import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';

import { clearSession } from '../../actions/session';
import { DELETE_USERSESSION_MUTATION } from '../../graphql/mutations/DeleteUserSession';

const Email = styled.div`
  color: ${props => props.theme.nero};
  font-size: 1rem;
  margin-top: 0.25rem;
`;

const LogoutLink = styled.a.attrs({ href: "#" })`
  color: blue;
  display: block;
  margin-top: 0.25rem;
`;

const Wrapper = styled.div`
  color: ${props => props.theme.mortar};
  font-size: 0.9rem;
`;

export const Account = () => {
  const [deleteUserSession] = useMutation(DELETE_USERSESSION_MUTATION)
  const dispatch = useDispatch()
  const session = useSelector(state => state.session)

  return (
    <Wrapper>
      Logged in as
      <Email>{session.user.email}</Email>
      <LogoutLink
        onClick={e => {
          e.preventDefault()
          dispatch(clearSession())
          deleteUserSession({ variables: { sessionId: session.id } })
        }}
      >
        (Logout)
      </LogoutLink>
    </Wrapper>
  )
}
