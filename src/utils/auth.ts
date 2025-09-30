import 'server-only';
import { hash, compare } from 'bcryptjs';
import { LoginFormData, SignupFormData, User } from './types/auth';
// import { User, LoginFormData, SignupFormData } from '../types/auth';

// Mock database - replace with your actual database
// const users: User[] = [];
const users: (User & { password: string })[] = [];

// export async function registerUser(formData: SignupFormData): Promise<{ user: User; success: boolean; errors?: Record<string, string> }> {
//   // Validate input
//   const errors: Record<string, string> = {};

//   if (!formData.name?.trim()) {
//     errors.name = 'Name is required';
//   }

//   if (!formData.email?.trim()) {
//     errors.email = 'Email is required';
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//     errors.email = 'Invalid email address';
//   }

//   if (!formData.password) {
//     errors.password = 'Password is required';
//   } else if (formData.password.length < 6) {
//     errors.password = 'Password must be at least 6 characters';
//   }

//   if (formData.password !== formData.confirmPassword) {
//     errors.confirmPassword = 'Passwords do not match';
//   }

//   if (Object.keys(errors).length > 0) {
//     return { user: null as any, success: false, errors };
//   }

//   // Check if user already exists
//   const existingUser = users.find(u => u.email === formData.email);
//   if (existingUser) {
//     errors.email = 'User with this email already exists';
//     return { user: null as any, success: false, errors };
//   }

//   // Create new user
//   const hashedPassword = await hash(formData.password, 12);
//   const user: User = {
//     id: Date.now().toString(),
//     name: formData.name.trim(),
//     email: formData.email.toLowerCase(),
//     role: 'user',
//     createdAt: new Date(),
//   };

//   users.push({ ...user, password: hashedPassword });
//   return { user, success: true };
// }

export async function loginUser(formData: LoginFormData): Promise<{ user: User; success: boolean; errors?: Record<string, string> }> {
  const errors: Record<string, string> = {};

  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  }

  if (Object.keys(errors).length > 0) {
    return { user: null as any, success: false, errors };
  }

  // Find user
  const userData = users.find(u => u.email === formData.email.toLowerCase());
  if (!userData) {
    errors.email = 'Invalid email or password';
    return { user: null as any, success: false, errors };
  }

  // Verify password
  const isValidPassword = await compare(formData.password, (userData as any).password);
  if (!isValidPassword) {
    errors.email = 'Invalid email or password';
    return { user: null as any, success: false, errors };
  }

  const { password, ...user } = userData as any;
  return { user, success: true };
}

export async function getUserById(id: string): Promise<User | null> {
  const userData = users.find(u => u.id === id);
  if (!userData) return null;
  
  const { password, ...user } = userData as any;
  return user;
}

export async function registerUser(formData: SignupFormData): Promise<{ user: User; success: boolean; errors?: Record<string, string> }> {
  // التحقق من البيانات المدخلة
  const errors: Record<string, string> = {};

  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Invalid email address';
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
    errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
  }

  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  if (Object.keys(errors).length > 0) {
    return { user: null as any, success: false, errors };
  }

  // التحقق من وجود المستخدم مسبقاً
  const existingUser = users.find(u => u.email === formData.email.toLowerCase());
  if (existingUser) {
    errors.email = 'User with this email already exists';
    return { user: null as any, success: false, errors };
  }

  try {
    // إنشاء مستخدم جديد
    const hashedPassword = await hash(formData.password, 12);
    const user: User = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      email: formData.email.toLowerCase(),
      role: 'user',
      createdAt: new Date(),
    };

    // حفظ المستخدم في قاعدة البيانات
    users.push({ ...user, password: hashedPassword });
    
    return { user, success: true };
  } catch (error) {
    console.error('Registration error:', error);
    return { 
      user: null as any, 
      success: false, 
      errors: { general: 'Registration failed. Please try again.' } 
    };
  }
}
