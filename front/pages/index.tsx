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

export const Base = styled.div<{ [key: string]: any }>`
  & main {
    & .inner {
      max-width: 1250px;
      padding: 0 30px;
      margin: auto;

      & h1 {
        font-size: 3rem;
        line-height: 34px;
      }
    }
  }
`;

const Home: NextPage = () => {
  const theme = useTheme();
  const dummies = [
    {
      id: Number(new Date()),
      title: 'Docker',
      summary: '도커 완벽 정리하기.....',
      name: '2022/07/docker',
      bgColor: '#9bd6fb',
      posterColor: '#1f0c5e',
    },
  ];

  return (
    <Base theme={theme}>
      <Navigation />
      <main>
        <div className={'inner'}>
          <section>
            <h1>Stories</h1>
          </section>
        </div>
        {dummies.map((v) => (
          <Article key={v.id} data={v} />
        ))}
      </main>
    </Base>
  );
};

export default Home;
