import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { HiOutlineSearch } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { useTheme } from '@emotion/react';
import { useCallback, useState } from 'react';
import MenuModal from '../MenuModal';
import SearchModal from '../SearchModal';
import Button from '../Button';

export const Base = styled.nav<{ [key: string]: any }>`
  width: 100vw;
  height: 70px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & #logo {
    font-size: 28px;
    font-weight: 800;
  }

  & .right-container {
    display: flex;
    align-items: center;

    & .social-links {
      display: flex;
      & .social-link {
        font-size: 24px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 2px;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          color: ${({ theme }) => theme.colors.purple[500]};
        }
      }
    }

    & .action-items {
      display: flex;
      align-items: center;
      & .action-item {
        height: 40px;
        padding: 0 20px;
        background-color: #111;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        margin: 0 10px;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.purple[500]};
        }
      }
    }
  }
`;

const Navigation: NextPage = () => {
  const theme = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const onClickMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);
  const onClickSearch = useCallback(() => {
    setShowSearch((prev) => !prev);
  }, []);
  const onCloseModal = useCallback(() => {
    setShowMenu(false);
    setShowSearch(false);
  }, []);
  return (
    <Base theme={theme}>
      <div id={'logo'}>The Dummies</div>
      <div className={'right-container'}>
        <div className={'social-links'}>
          <span className={'social-link'}>
            <AiOutlineTwitter />
          </span>
          <span className={'social-link'}>
            <AiOutlineInstagram />
          </span>
          <span className={'social-link'}>
            <GrFacebookOption />
          </span>
        </div>
        <div className={'action-items'}>
          <div className={'action-item'}>Support Me</div>
          <div className={'action-item'}>Join the newsletter</div>
        </div>
        <Button value={<FiMenu />} onClick={onClickMenu} />
        <Button value={<HiOutlineSearch />} onClick={onClickMenu} />
        <MenuModal show={showMenu} onCloseModal={onCloseModal} />
        <SearchModal show={showSearch} onCloseModal={onCloseModal} />
      </div>
    </Base>
  );
};

export default Navigation;
