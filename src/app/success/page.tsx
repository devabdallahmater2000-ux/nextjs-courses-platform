export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">تم الدفع بنجاح!</h1>
        <p className="text-lg text-gray-700 mb-6">شكراً لشرائك الدورة. تم إتمام عملية الدفع بنجاح.</p>
        <a href="/" className="text-blue-600 underline">العودة للصفحة الرئيسية</a>
      </div>
    </div>
  );
}
