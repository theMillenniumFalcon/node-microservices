import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { gql } from '@apollo/client';
import { useDispatch } from 'react-redux';

import { AccountDetails } from '../AccountDetails';
import { client } from '../../api/graphqlClient';
import { setSession } from '../../actions/session';

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 80rem;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Sidebar = styled.div`
  flex: 0 auto;
  width: 10rem;
`;

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        email
        id
      }
    }
  }
`;

export const Landing = () => {
  const dispatch = useDispatch()
  const [initialised, setInitialised] = useState(false)

  useEffect(() => {
    client.query({ query }).then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession))
      }
      setInitialised(true)
    })
  }, [dispatch])

  if (!initialised) return (
    <>Loading...</>
  )

  return (
    <Wrapper>
      <Container>
        <Content>
          Hello
        </Content>
        <Sidebar>
          <AccountDetails />
        </Sidebar>
      </Container>
    </Wrapper>
  )
}
