import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container max-w-7xl px-6 flex-grow">
      {children}
    </div>
  );
};