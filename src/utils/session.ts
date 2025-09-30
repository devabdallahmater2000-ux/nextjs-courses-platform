import 'server-only';
import { cookies } from 'next/headers';
import { User } from './types/auth';

const SESSION_KEY = 'auth-session';

export async function createSession(user: User) {
  const cookieStore = await cookies();
  const sessionData = {
    user,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  };

  cookieStore.set(SESSION_KEY, JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: sessionData.expires,
  });
}

export async function getSession(): Promise<{ user: User | null }> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_KEY);

  if (!sessionCookie?.value) {
    return { user: null };
  }

  try {
    const sessionData = JSON.parse(sessionCookie.value);
    
    // Check if session is expired
    if (new Date(sessionData.expires) < new Date()) {
      await deleteSession();
      return { user: null };
    }

    return { user: sessionData.user };
  } catch {
    await deleteSession();
    return { user: null };
  }
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_KEY);
}