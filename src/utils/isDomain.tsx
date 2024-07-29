import React, { useEffect, useState } from 'react';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prisma';


interface Props {
  domain: string;
}

const IsDomain: React.FC<Props> = ({ domain }) => {
  const [exists, setExists] = useState<boolean | null>(null);

  useEffect(() => {
    const checkDomain = async () => {
      const response = await fetch(`/`);
      const data = await response.json();
      setExists(data.exists);
    };

    if (domain) {
      checkDomain();
    }
  }, [domain]);


  

  return (
    <div>
      {exists === null ? (
        <p>Loading...</p>
      ) : exists ? (
        <p>The domain exists!</p>
      ) : (
        <p>The domain does not exist.</p>
      )}
    </div>
  );
};

export default IsDomain;
