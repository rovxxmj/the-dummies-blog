import React, { FC } from "react";

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: FC<IAppLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default AppLayout;
