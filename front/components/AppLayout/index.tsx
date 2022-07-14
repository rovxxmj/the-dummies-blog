import React, { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../themes/themes';
interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: FC<IAppLayout> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default AppLayout;
