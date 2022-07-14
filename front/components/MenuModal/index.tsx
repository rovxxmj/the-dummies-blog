import Modal from '../Modal';
import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { MdOutlineClose } from 'react-icons/md';
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

    & .close-button {
      font-size: 22px;
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.gray[700]};
      background-color: #fff;
      border: none;
      &:hover {
        color: ${({ theme }) => theme.colors.purple[500]};
      }

      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.purple[500]};
      }
    }
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
          <button className={'close-button'} onClick={onCloseModal}>
            <MdOutlineClose />
          </button>
        </div>
        <div className={'section'}>
          <span className={'section-header'}>About Me</span>
        </div>
      </Menu>
    </Modal>
  );
};

export default MenuModal;
