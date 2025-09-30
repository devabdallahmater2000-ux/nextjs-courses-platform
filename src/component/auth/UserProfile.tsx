'use client';

import { useAuth } from './AuthProvider';
import LogoutButton from './LogoutButton';

export default function UserProfile() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
        <span className="text-white font-medium text-sm">
          {user.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">
          {user.name}
        </p>
        <p className="text-sm text-gray-500 truncate">
          {user.email}
        </p>
      </div>
      
      <LogoutButton variant="outline"  />
    </div>
  );
}