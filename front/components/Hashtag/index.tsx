import { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

interface IHashtag {
  content: string;
}

export const HashtagCreator = styled.span<{ [key: string]: any }>`
  // background-color: ${({ theme }) => theme.colors.gray[100]};
  display: inline-block;
  margin-right: 6px;
  margin-bottom: 10px;
  padding: 9px 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: #333;
  background-color: #f3f5f8;
  border-radius: 25px;
}
`;

const Hashtag: FC<IHashtag> = ({ content }) => {
  const theme = useTheme();
  return <HashtagCreator>{content}</HashtagCreator>;
};

export default Hashtag;
