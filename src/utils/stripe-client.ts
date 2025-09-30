import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  // const key = 'pk_test_51QvHNARUEzpKt7zRTMGZo9Va9f4JhAiU7uAuFUEMwGNeRR4yq4RvptFZ4LnYFuAY2uG0SHXm0VpC8BkjN8e4Mi9w00bbzCBsuqpk_test_xxxxxxxxxxxxxxxxxxxxxxxx';
  if (!key) {
    throw new Error('Stripe publishable key is missing. Please set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in your environment variables.');
  }
  if (!stripePromise) {
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};