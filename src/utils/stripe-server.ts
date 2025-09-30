import 'server-only';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-08-27.basil',
  typescript: true,
});

export async function createPaymentIntent(data: {
  amount: number;
  currency: string;
  courseId: string;
  userId: string;
  userEmail: string;
}) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: data.amount,
      currency: data.currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        courseId: data.courseId,
        userId: data.userId,
        userEmail: data.userEmail,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw new Error('Failed to create payment intent');
  }
}

export async function retrievePaymentIntent(paymentIntentId: string) {
  try {
    return await stripe.paymentIntents.retrieve(paymentIntentId);
  } catch (error) {
    console.error('Error retrieving payment intent:', error);
    throw new Error('Failed to retrieve payment intent');
  }
}