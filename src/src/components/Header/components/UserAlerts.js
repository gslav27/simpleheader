import React from 'react';
import styled from 'styled-components';

import IconButton from '_Ui_/IconButton';
import LocalPostOffice from '_Ui_/Icons/LocalPostOffice';
import NotificationsNone from '_Ui_/Icons/NotificationsNone';


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.widthXsMediaMixin(`
    width: 100%;
    justify-content: space-around;
  `)};
`;

const UserImg = styled.img`
  border-radius: 100;
`;

const IconButtonStyled = styled(IconButton)`
  position: relative;
`;

const Alert = styled.div`
  position: absolute;
  bottom: 25px;
  left: 25px;
  width: 13px;
  height: 13px;
  border-radius: 1px;
  box-shadow: 1.5px 2.598px 3px rgba(0,0,0,0.37);
  background-color: #b71826;
  font-size: 10px;
  color: #fff;
`;


// mock data
const alerts = {
  messages: 0,
  notifications: 18,
};


const UserAlerts = props => (
  <Wrapper>
    <IconButtonStyled
      type='button'
      title={alerts.messages ? 'показать сообщения' : 'нет новых сообщений'}
      onClick={() => console.log('CLICK Messages')}
    >
      <LocalPostOffice />
      {!!alerts.messages && <Alert>{alerts.messages}</Alert>}
    </IconButtonStyled>
    <IconButtonStyled
      type='button'
      title={alerts.notifications ? 'показать уведомления' : 'нет новых уведомлений'}
      onClick={() => console.log('CLICK Notifications')}
    >
      <NotificationsNone />
      {!!alerts.notifications && <Alert>{alerts.notifications}</Alert>}
    </IconButtonStyled>
    <IconButton
      type='button'
      title='открыть меню пользователя'
      onClick={() => console.log('CLICK User')}
    >
      <UserImg
        src='https://img.icons8.com/color/48/000000/user-male-circle.png'
        alt='user'
        width='40px'
        height='40px'
      />
    </IconButton>
  </Wrapper>
);


export default UserAlerts;
