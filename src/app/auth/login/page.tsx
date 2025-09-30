import LoginForm from '@/component/auth/LoginForm';
import { getCurrentUser } from '../actions';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const user = await getCurrentUser();
  
  if (user) {
    redirect('/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <LoginForm />
      </div>
    </div>
  );
}