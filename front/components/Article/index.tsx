import { FC } from 'react';

interface IArticle {
  data: { title: string; subTitle: string };
}

const Article: FC<IArticle> = ({ data }) => {
  return <div>{data.title}</div>;
};

export default Article;
