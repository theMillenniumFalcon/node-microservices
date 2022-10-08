import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { clearSession } from '../../actions/session';

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
                }}
            >
                (Logout)
            </LogoutLink>
        </Wrapper>
    )
}
