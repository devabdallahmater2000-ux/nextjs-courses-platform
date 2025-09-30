'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginAction } from '@/app/auth/actions';

import Link from 'next/link';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setErrors({});
    setMessage('');

    try {
      const result = await loginAction(formData);
      
      if (result.success) {
        setMessage(result.message);
        router.push('/');
        router.refresh();
      } else {
        setErrors(result.errors || {});
        setMessage(result.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-gray-600 mt-2">Sign in to your account</p>
      </div>

      <form action={handleSubmit} className="space-y-6">
        {message && (
          <div className={`p-3 rounded-lg text-sm ${
            errors.email ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
          }`}>
            {message}
          </div>
        )}

        <Input
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
          error={errors.email}
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          error={errors.password}
          placeholder="Enter your password"
        />

        <Button
          type="submit"
          loading={loading}
          className="w-full"
          size="lg"
        >
          Sign in
        </Button>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-blue-600 hover:text-blue-500 font-medium">
            Sign up
          </Link>
        </div>
      </form>
    </Card>
  );
}