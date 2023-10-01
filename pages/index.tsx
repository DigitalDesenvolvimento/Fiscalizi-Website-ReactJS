import { authToken } from '@/utils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default () => {
  const router = useRouter();

  useEffect(() => {
    router.push(authToken.get() ? '/menu' : '/signin');
  }, []);
};