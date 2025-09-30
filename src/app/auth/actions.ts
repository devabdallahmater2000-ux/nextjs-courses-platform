'use server';

import { loginUser, registerUser } from '@/utils/auth';
import { createSession, deleteSession, getSession } from '@/utils/session';
import { AuthResponse, LoginFormData, SignupFormData } from '@/utils/types/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData): Promise<AuthResponse> {
  const rawFormData: LoginFormData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const result = await loginUser(rawFormData);

  if (result.success && result.user) {
    await createSession(result.user);
    revalidatePath('/');
    return {
      success: true,
      message: 'Login successful!',
      user: result.user,
    };
  }

  return {
    success: false,
    message: 'Login failed',
    errors: result.errors,
  };
}

// export async function signupAction(formData: FormData): Promise<AuthResponse> {
//   const rawFormData: SignupFormData = {
//     name: formData.get('name') as string,
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//     confirmPassword: formData.get('confirmPassword') as string,
//   };

//   const result = await registerUser(rawFormData);

//   if (result.success && result.user) {
//     await createSession(result.user);
//     revalidatePath('/');
//     return {
//       success: true,
//       message: 'Account created successfully!',
//       user: result.user,
//     };
//   }

//   return {
//     success: false,
//     message: 'Signup failed',
//     errors: result.errors,
//   };
// }

export async function logoutAction(): Promise<void> {
  await deleteSession();
  revalidatePath('/');
  redirect('/');
}

export async function getCurrentUser() {
  const session = await getSession();
  return session.user;
}

// ... الكود السابق ...

export async function signupAction(formData: FormData): Promise<AuthResponse> {
  const rawFormData: SignupFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  };


  if (!rawFormData.name?.trim()) {
    return {
      success: false,
      message: 'Name is required',
      errors: { name: 'Name is required' }
    };
  }

  if (!rawFormData.email?.trim()) {
    return {
      success: false,
      message: 'Email is required',
      errors: { email: 'Email is required' }
    };
  }

  if (!rawFormData.password) {
    return {
      success: false,
      message: 'Password is required',
      errors: { password: 'Password is required' }
    };
  }

  if (rawFormData.password.length < 6) {
    return {
      success: false,
      message: 'Password must be at least 6 characters',
      errors: { password: 'Password must be at least 6 characters' }
    };
  }

  if (rawFormData.password !== rawFormData.confirmPassword) {
    return {
      success: false,
      message: 'Passwords do not match',
      errors: { confirmPassword: 'Passwords do not match' }
    };
  }

  try {
    const result = await registerUser(rawFormData);

    if (result.success && result.user) {
      await createSession(result.user);
      revalidatePath('/');
      return {
        success: true,
        message: 'Account created successfully! Welcome to LearnAcademy!',
        user: result.user,
      };
    }

    return {
      success: false,
      message: result.errors?.email || 'Signup failed',
      errors: result.errors,
    };
  } catch (error) {
    console.error('Signup error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
      errors: { general: 'Server error' }
    };
  }
}
