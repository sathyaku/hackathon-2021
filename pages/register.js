import React from 'react';
import useSWR from 'swr';
import { fetcher } from 'utils/httpService';
import { WithLabels } from 'contexts/LabelContext';

const Register = () => {
  const { data, error } = useSWR('/api/config', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <h1>Please Sign In</h1>;
};

export default WithLabels(Register);
