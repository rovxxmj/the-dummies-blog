import Modal from '../Modal';
import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { MdOutlineClose } from 'react-icons/md';
import Button from '../Button';
interface IModal {
  show: boolean;
  onCloseModal: () => void;
  [key: string]: any;
}

export const Menu = styled.div<{ [key: string]: any }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  min-width: 460px;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  color: #fff;
  padding: 30px;

  & .top {
    min-height: 100px;
  }

  & .section {
    width: 200px;
    display: flex;
    flex-direction: column;
    > .section-header {
      font-size: 16px;
      font-weight: 700;
      border-bottom: 0.7px solid #fff;
    }
  }
`;
const MenuModal: FC<IModal> = ({ show, onCloseModal }) => {
  const theme = useTheme();
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <Menu theme={theme}>
        <div className={'top'}>
          <Button value={<MdOutlineClose />} onClick={onCloseModal} style={{ backgroundColor: '#fff' }} />
        </div>
        <div className={'section'}>
          <span className={'section-header'}>About Me</span>
        </div>
      </Menu>
    </Modal>
  );
};

export default MenuModal;
