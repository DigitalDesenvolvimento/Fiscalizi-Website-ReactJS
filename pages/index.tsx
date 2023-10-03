import { authToken } from '@/utils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '@/public/global.css'

export default () => {
  const router = useRouter();

  useEffect(() => {
    router.push(authToken.get() ? '/menu' : '/signin');
  }, []);
};