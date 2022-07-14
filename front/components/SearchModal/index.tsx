import { FC } from 'react';
import styled from '@emotion/styled';
import { MdOutlineClose } from 'react-icons/md';

interface IModal {
  show: boolean;
  onCloseModal: () => void;
  [key: string]: any;
}

export const Base = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  margin: auto;

  & .container {
    width: 1200px;
    padding: 0 20px;
    margin: auto;

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
`;

const SearchModal: FC<IModal> = ({ show, onCloseModal, rest }) => {
  if (!show) return null;
  return (
    <Base {...rest}>
      <div className={'container'}>
        <button className={'close-button'} onClick={onCloseModal}>
          <MdOutlineClose />
        </button>
      </div>
    </Base>
  );
};

export default SearchModal;
