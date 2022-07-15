import { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Link from 'next/link';

interface IArticle {
  data: { id: number; title: string; summary: string; name: string; bgColor: string; [key: string]: any };
}

export const Base = styled.div<{ [key: string]: any }>`
  background-color: ${({ theme }) => theme.colors.purple[200]};
  height: 300px;

  & .inner {
    height: 100%;
    display: flex;
    align-items: center;

    & .poster {
      width: 400px;
      height: 240px;
      transition: 0.2s;
    }

    > .content {
      height: 240px;
      margin-left: 30px;

      > .title {
        font-size: 24px;
      }

      > .summary {
        font-size: 24px;
      }
    }
  }

  &:hover {
    & .poster {
      transform: scale(1.02);
    }
  }
`;

const Article: FC<IArticle> = ({ data }) => {
  const theme = useTheme();

  return (
    <Link href={data.name}>
      <a>
        <Base theme={theme} style={{ backgroundColor: data.bgColor }}>
          <div className={'inner'}>
            <div className={'poster'} style={{ backgroundColor: data.posterColor }}></div>
            <div className={'content'}>
              <h2 className={'title'}>{data.title}</h2>
              <p className={'summary'}>{data.summary}</p>
            </div>
          </div>
        </Base>
      </a>
    </Link>
  );
};

export default Article;
