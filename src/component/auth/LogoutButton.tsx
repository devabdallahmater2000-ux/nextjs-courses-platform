'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { logoutAction } from '@/app/auth/actions';
import Button from '../ui/Button';

interface LogoutButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function LogoutButton({ className, variant = 'outline' }: LogoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    setLoading(true);
    try {
      await logoutAction();
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleLogout}
      loading={loading}
      variant={variant}
      className={className}
    >
      Sign out
    </Button>
  );
}