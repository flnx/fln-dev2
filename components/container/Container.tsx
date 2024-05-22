import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className="lg:container mx-auto px-5">{children}</div>;
};
