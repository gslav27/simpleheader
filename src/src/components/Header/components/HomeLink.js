import React, { memo } from 'react';
import styled from 'styled-components';

import Logo from '_Ui_/Logo';


const StyledLink = styled.a`
  cursor: pointer;
  ${({ theme }) => theme.widthXsMediaMixin(`
    flex: 1;
  `)};
  ${({ theme }) => theme.widthMdMediaMixin(`
    margin-right: 20px;
  `)};
  ${({ theme }) => theme.widthLgMediaMixin(`
    margin-right: 60px;
  `)};
  ${({ theme }) => theme.widthXlMediaMixin(`
    margin-right: 90px;
  `)};
`;

const StyledLogo = styled(Logo)`
  position: relative;
  top: 7px;
  width: 193px;
  ${({ theme }) => theme.widthMdMediaMixin(`
    width: 144px;
  `)};
  ${({ theme }) => theme.widthXsMediaMixin(`
    width: 176px;
  `)};
`;


const HomeLink = () => (
  <StyledLink href={`${process.env.PUBLIC_URL}/`} title='перейти на главную страницу'>
    <StyledLogo />
  </StyledLink>
);

export default memo(HomeLink);
