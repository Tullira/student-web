'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const session = useSession();

  if (session.status === 'unauthenticated') {
    redirect('/login');
  }

  return (
    <div className="flex flex-1 flex-col h-full justify-around items-center bg-black">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold">NextJS Boilerplate</h1>
      </div>
    </div>
  );
}
