'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signupAction } from '@/app/auth/actions';

import Link from 'next/link';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setErrors({});
    setMessage('');

    try {
      const result = await signupAction(formData);
      
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
        <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
        <p className="text-gray-600 mt-2">Join thousands of learners today</p>
      </div>

      <form action={handleSubmit} className="space-y-6">
        {message && (
          <div className={`p-3 rounded-lg text-sm ${
            Object.keys(errors).length > 0 ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
          }`}>
            {message}
          </div>
        )}

        <Input
          label="Full Name"
          name="name"
          type="text"
          autoComplete="name"
          required
          error={errors.name}
          placeholder="Enter your full name"
        />

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
          autoComplete="new-password"
          required
          error={errors.password}
          placeholder="Create a password (min. 6 characters)"
        />

        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          required
          error={errors.confirmPassword}
          placeholder="Confirm your password"
        />

        <div className="space-y-4">
          <Button
            type="submit"
            loading={loading}
            className="w-full"
            size="lg"
          >
            Create Account
          </Button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-blue-600 hover:text-blue-500 font-medium">
              Sign in
            </Link>
          </div>
        </div>

        <div className="text-xs text-gray-500 text-center">
          By creating an account, you agree to our{' '}
          <Link href="/terms" className="text-blue-600 hover:text-blue-500">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </form>
    </Card>
  );
}