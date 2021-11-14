import React, { useEffect } from 'react';
import mainStyle from 'static/styles/main.style';
import Router, { useRouter } from 'next/router';
import compose from 'utils/compose';
import { getApplicationContext, auth } from '@/ssrUtils';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/dashboard');
  }, []);
  return (
    <div className="container">
      <h1>Boilerplate</h1>
      <h2>Next.Js</h2>

      <button type="button" onClick={() => Router.push('/login')}>
        Log In
      </button>
      <style jsx>{mainStyle}</style>
    </div>
  );
}

export const getServerSideProps = compose(auth, getApplicationContext);
