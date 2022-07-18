import { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Link from 'next/link';

interface IArticle {
  data: { id: number; title: string; summary: string; name: string; createdAt: string; [key: string]: any };
}

export const Base = styled.div<{ [key: string]: any }>`
  background-color: ${({ theme }) => theme.colors.purple[200]};
  height: 300px;

  & .inner {
    height: 100%;
    display: flex;
    align-items: center;

    & .poster {
      min-width: 400px;
      height: 240px;
      transition: 0.2s;
    }

    > .content {
      height: 230px;
      margin-left: 30px;

      > .title {
        font-size: 24px;
      }

      > .summary {
        font-size: 24px;
        font-weight: 400;
        margin: 20px 0;
        text-decoration: underline;
      }

      > .created-at {
        opacity: 0.5;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }

  &:hover {
    & .poster {
      transform: scale(1.02);
    }

    & .summary {
      opacity: 1;
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
              {/*<h2 className={'title'}>{data.title}</h2>*/}
              <p className={'summary'} style={{ textDecorationColor: data.underlineColor }}>
                {data.summary}
              </p>
              <span className={'created-at'}>{data.createdAt}</span>
            </div>
          </div>
        </Base>
      </a>
    </Link>
  );
};

export default Article;
