import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { HiOutlineSearch } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { useTheme } from '@emotion/react';
import { useCallback, useState } from 'react';
import MenuModal from '../components/MenuModal';
import SearchModal from '../components/SearchModal';
import Navigation from '../components/Navigation';
import Article from '../components/Article';

export const Base = styled.div<{ [key: string]: any }>``;

const Home: NextPage = () => {
  const theme = useTheme();
  const dummies = [
    {
      title: 'Docker',
      subTitle: '도커 정리하기',
    },
  ];

  return (
    <Base theme={theme}>
      <Navigation />
      <main>
        {dummies.map((v) => (
          <Article data={v} />
        ))}
      </main>
    </Base>
  );
};

export default Home;
