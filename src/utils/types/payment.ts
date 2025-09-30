export interface PaymentIntentData {
    amount: number;
    currency: string;
    courseId: string;
    courseTitle: string;
    userId: string;
    userEmail: string;
  }
  
  export interface PaymentResponse {
    clientSecret: string;
    paymentIntentId: string;
    amount: number;
    currency: string;
  }
  
  export interface CourseCheckoutData {
    courseId: string;
    title: string;
    price: number;
    image: string;
    instructor: string;
    duration: string;
  }