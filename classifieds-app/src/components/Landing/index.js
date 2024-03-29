import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { AccountDetails } from '../AccountDetails';
import { client } from '../../api/graphqlClient';
import { setSession } from '../../actions/session';
import { USERSESSION_QUERY } from '../../graphql/queries/userSession';
import { Listings } from '../Listings';

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

export const Landing = () => {
  const dispatch = useDispatch()
  const [initialised, setInitialised] = useState(false)

  useEffect(() => {
    client.query({ USERSESSION_QUERY }).then(({ data }) => {
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
          <Listings />
        </Content>
        <Sidebar>
          <AccountDetails />
        </Sidebar>
      </Container>
    </Wrapper>
  )
}
