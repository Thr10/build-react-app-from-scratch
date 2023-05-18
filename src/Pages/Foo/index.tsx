import React, { useMemo } from 'react';
import TransverseLayout from '../../components/layout/TransverseLayout';

const Foo = () => {
  return (
    <TransverseLayout
      content={new Array(100).fill('Place_holder').map((str, idx) => {
        return <div key={`${idx}-str`}>{str}</div>;
      })}
      rightContent={456}
    />
  );
};

export default Foo;
