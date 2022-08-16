import React from 'react';
import { Button } from '../pages/Friends';
import {  UserProfileModalHeaderButton, UserProfileModalFooter, UserProfileModalHeader, UserProfileModalMain, UserProfileModalSection, UserProfileModalOpenModal } from './Styled/Modal';

const UserProfileModal = (props) => {
  const { open, close, header } = props;

  return (
    <div style=
    {{  padding: '16px',
        display: 'flex',
        alignItems: 'center',
        animation: 'modal-bg-show 0.3s'}}>
      {open ? (
        <UserProfileModalSection>
          <UserProfileModalHeader>
            {header}님의 프로필
            <UserProfileModalHeaderButton  onClick={close}>
              &times;
            </UserProfileModalHeaderButton>
          </UserProfileModalHeader>
          <UserProfileModalMain>{props.children}</UserProfileModalMain>
          <UserProfileModalFooter>
            <Button className="close" onClick={close}>
              close
            </Button>
          </UserProfileModalFooter>
        </UserProfileModalSection>
      ) : null}
    </div>
  );
};

export default UserProfileModal;