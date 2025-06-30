'use client';

import { useEffect, useState } from 'react';
import DashSidebar from '@/component/DashboardSidebar';
import { useSearchParams } from 'next/navigation';

export default function Dashboard() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [searchParams]);

  return (
    <div className='h-screen flex'>
      {/* Sidebar */}
      <DashSidebar />

      <div className='flex-1 overflow-y-auto p-4'>
        {/* {tab === 'profile' && <DashProfile />} */}
        <div className="text-xl font-semibold">Dashboard Content for "{tab}"</div>
      </div>
    </div>
  );
}
