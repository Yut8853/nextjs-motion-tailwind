import React, { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode; // children プロパティに ReactNode 型を指定
};

function Title({ children }: TitleProps) {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
}

export default Title;
