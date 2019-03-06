import React from 'react';
import styled from 'styled-components';

import NavBar from './components/NavBar';
import UserAlerts from './components/UserAlerts';


const Header = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 56px;
  padding: 0px 16px 0px 20px;
  box-shadow: 1px 1.732px 4px rgba(0,0,0,0.25);
  background-color: #4876c3;
  ${({ theme }) => theme.widthXsMediaMixin(`
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px 10px 5px;
    box-shadow: none;
  `)};
`;


const HeaderLayout = () => (
  <Header>
    <NavBar />
    <UserAlerts />
  </Header>
);


export default HeaderLayout;
