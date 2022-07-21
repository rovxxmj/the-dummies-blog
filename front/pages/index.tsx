import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useTheme } from '@emotion/react';
import Navigation from '../components/Navigation';
import Article from '../components/Article';

export const Base = styled.div<{ [key: string]: any }>`
  & main {
    & .inner {
      max-width: 1250px;
      padding: 0 30px;
      margin: auto;

      & .section-title {
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
      title: '실행 함수 정리하기',
      summary: '실행 함수 정리하기',
      name: '2022/08/executive-function',
      createdAt: '2022-08-02',
      Hashtags: [
        { id: 4, content: 'Javascript' },
        { id: 5, content: '실행 함수' },
      ],
      bgColor: theme.colors.orange[100],
      posterColor: theme.colors.orange[300],
      underlineColor: theme.colors.yellow[400],
    },
    {
      id: Number(new Date()),
      title: 'Docker',
      summary: 'Linux와 Docker 함께 정리하기',
      name: '2022/07/docker',
      createdAt: '2022-07-10',
      Hashtags: [
        { id: 1, content: 'Docker' },
        { id: 2, content: 'Linux' },
      ],
      bgColor: theme.colors.blue[200],
      posterColor: theme.colors.blue[900],
      underlineColor: theme.colors.blue[400],
    },
    {
      id: Number(new Date()),
      title: 'Javascript vs JAVA',
      summary: '자바스크립트와 자바를 비교하며 프로그래밍 언어 접근하기',
      name: '2022/07/javascript_java',
      createdAt: '2022-07-23',
      Hashtags: [
        { id: 2, content: 'Javascript' },
        { id: 3, content: 'Java' },
      ],
      bgColor: theme.colors.yellow[100],
      posterColor: theme.colors.black,
      underlineColor: theme.colors.yellow[400],
    },
  ];

  return (
    <Base theme={theme}>
      <Navigation />
      <main>
        <div className={'inner'}>
          <section>
            <h1 className={'section-title'}>Stories</h1>
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
