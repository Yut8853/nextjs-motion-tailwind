import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="max-w-screen-2xl mx-auto px-2 py-10">{children}</div>;
}

export default Container;
