'use client';

import { Logo } from 'assets';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function Login() {
  const session = useSession();

  if (session.status === 'authenticated') {
    redirect('/');
  }

  return (
    <div className="flex flex-1 flex-col h-full justify-around items-center bg-black">
      <div>
        <Image src={Logo} alt="Logo citi" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold">NextJS Boilerplate</h1>
        <p className="text-white text-xl">
          Made with <strong>&lt; &#x0002F; &gt;</strong> and{' '}
          <strong>&hearts;</strong> by CITi
        </p>
      </div>
    </div>
  );
}
