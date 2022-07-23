import React, { FC, useCallback } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

interface IModal {
  children: React.ReactNode;
  show: boolean;
  onCloseModal: () => void;
  [key: string]: any;
}

export const Base = styled.div<{ [key: string]: any }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
  background-color: #fff;
`;

const Modal: FC<IModal> = ({ children, show, onCloseModal, rest }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <Base onClick={onCloseModal} {...rest}>
      <div onClick={stopPropagation}>{children}</div>
    </Base>
  );
};

export default Modal;
