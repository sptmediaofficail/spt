import { BsExclamation } from 'react-icons/bs';

export default function SellJunkCarPage() {
  return (
    <div className="text-center p-6 bg-white rounded-lg">
      <BsExclamation className="mx-auto h-12 w-12 text-yellow-500 rounded-full bg-yellow-100 p-2" />
      <h1 className="mt-4 text-2xl font-semibold text-gray-800">
        الصفحة قيد الإنشاء
      </h1>
      <p className="mt-2 text-gray-600">
        نحن نعمل بجد لإحضار هذه الصفحة لك. يرجى التحقق مرة أخرى قريبًا للحصول
        على التحديثات.
      </p>
    </div>
  );
}
