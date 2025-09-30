import SignupForm from '@/component/auth/SignupForm';
import { getCurrentUser } from '../actions';
import { redirect } from 'next/navigation';

export default async function SignupPage() {
  const user = await getCurrentUser();
  
  if (user) {
    redirect('/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">LearnAcademy</h2>
        </div>

        <SignupForm />

       
      </div>
    </div>
  );
}