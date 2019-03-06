import React from 'react';
import styled from 'styled-components';

import { navBarLinks } from '_Utils_/constants/constants';

import ArrowDropDown from '_Ui_/Icons/ArrowDropDown';


const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: 0;
  padding: 0;
  list-style: none;
  ${({ theme }) => theme.widthXsMediaMixin(`
    display: none;
  `)};
`;

const ListItem = styled.li`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  margin-right: 15px;
  padding: 5px;
  color: #fff;
  &:hover {
    text-decoration: underline;
  };
  ${({ theme }) => theme.widthMdMediaMixin(`
    margin-right: 5px;
  `)};
`;

const Text = styled.span`
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  ${({ theme }) => theme.widthMdMediaMixin(`
    font-size: 14px;
  `)};
`;

const Link = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  border: none;
  background: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const StyledArrowDropDown = styled(ArrowDropDown)`
  ${({ theme }) => theme.widthMdMediaMixin(`
    width: 18px;
    height: 18px;
  `)};
`;



const NavBarMenuItems = () => (
  <List>
    {
      navBarLinks.map(navBarLink => (
        <ListItem key={navBarLink.title}>
          {
            navBarLink.dropDownList.length
              ? (
                <Input
                  type='button'
                  title='показать список'
                  onClick={() => console.log('CLICK', navBarLink.title)}
                />
              )
              : (
                <Link
                  href={navBarLink.href}
                  title={`открыть ${navBarLink.title}`}
                />
              )
          }
          <Text>{navBarLink.title}</Text>
          {!!navBarLink.dropDownList.length && <StyledArrowDropDown />}
        </ListItem>
      ))
    }
  </List>
);


export default NavBarMenuItems;
