import { Spinner } from '@nextui-org/react';

const Loading = () => {
  return (
    <div className="max-w-screen-md mt-10 flex items-center">
      <Spinner size="sm" className="m-auto"/>
    </div>
  );
};

export default Loading;
