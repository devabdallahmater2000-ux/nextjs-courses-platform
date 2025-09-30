export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">تم إلغاء الدفع</h1>
        <p className="text-lg text-gray-700 mb-6">لم تكتمل عملية الدفع. يمكنك المحاولة مرة أخرى أو التواصل معنا إذا واجهت مشكلة.</p>
        <a href="/" className="text-blue-600 underline">العودة للصفحة الرئيسية</a>
      </div>
    </div>
  );
}
