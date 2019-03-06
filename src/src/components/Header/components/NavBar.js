import React from 'react';
import styled from 'styled-components';

import IconButton from '_Ui_/IconButton';
import Menu from '_Ui_/Icons/Menu';
import AddCircle from '_Ui_/Icons/AddCircle';

import HomeLink from './HomeLink';
import NavBarMenuItems from './NavBarMenuItems';
import Search from './Search/Search';

const NavBarStyled = styled.nav`
  flex: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  ${({ theme }) => theme.widthXsMediaMixin(`
    justify-content: space-between;
    width: 100%;
    flex: none;
  `)};
`;

const MenuIconButton = styled(IconButton)`
  display: none;
  ${({ theme }) => theme.widthXsMediaMixin(`
    display: block;
  `)};
`;

const AddIconButton = styled(IconButton)`
  ${({ theme }) => theme.widthXsMediaMixin(`
    display: none;
  `)};
`;

const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;



const NavBar = () => (
  <NavBarStyled>
    <MenuIconButton
      type='button'
      onClick={() => console.log('CLICK MENU')}
    >
      <Menu />
    </MenuIconButton>
    <HomeLink />
    <ButtonsGroup>
      <NavBarMenuItems />
      <Search />
      <AddIconButton
        type='button'
        title='добавить...'
        onClick={() => console.log('CLICK ADD')}
      >
        <AddCircle />
      </AddIconButton>
    </ButtonsGroup>
  </NavBarStyled>
);


export default NavBar;
