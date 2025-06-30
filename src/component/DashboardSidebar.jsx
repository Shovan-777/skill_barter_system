'use client';

import {
  HiUser,
  HiArrowSmRight,
  HiUserAdd 
} from 'react-icons/hi';
import { MdOutlineMessage } from "react-icons/md";
import { TbChartBarPopular } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Link from 'next/link';

export default function DashSidebar() {
  
  const [tab, setTab] = useState('');
  const searchParams = useSearchParams();
  

  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [searchParams]);


  const menuItems = [
    {
      tab: 'profile',
      icon: HiUser,
      label: "Profile",
    },
     {
      tab: 'Messages',
      icon: MdOutlineMessage,
      label: "Messages",
    },
    {
      tab: 'Popular Skills',
      icon: TbChartBarPopular,
      label: "Popular Skills",
    },
    {
      tab: 'requests',
      icon: HiUserAdd,
      label: "Requests",
    }
    
  ].filter(Boolean);

  return (
   <aside className="w-full md:w-56 bg-transparent backdrop-blur-sm border-r h-screen sticky top-0 shadow-md">
  <nav className="flex flex-col gap-1 p-4">
    {menuItems.map(({ tab: tabName, icon: Icon, label }) => (
      <Link key={tabName} href={`/dashboard?tab=${tabName}`}>
        <div
          className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors 
            ${tab === tabName || (!tab && tabName === 'dash')
              ? 'bg-blue-100 text-blue-600 font-semibold'
              : 'hover:bg-gray-100 text-gray-500'}`}
        >
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </div>
        </div>
      </Link>
    ))}

    <div className="flex items-center gap-2 px-3 py-2 mt-4 rounded-md text-gray-500 hover:bg-red-100 transition-colors">
      <HiArrowSmRight className="w-5 h-5" />
      <span className="cursor-pointer">Sign Out</span>
    </div>
  </nav>
</aside>

  );
}
