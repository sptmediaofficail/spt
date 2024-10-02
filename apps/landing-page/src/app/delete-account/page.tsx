import screen from '../../../public/screen.jpg';
import Image from 'next/image';

export default function DeleteAccountPage() {
  return (
    <div
      dir="ltr"
      className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-4">Delete Account</h1>
        <div className="text-sm">
          <p className="text-gray-600">
            Note: Account data will be deleted after 30 days.
          </p>
          <p className="mt-4 text-gray-500">
            To delete your account, click "Delete Account" on the My Services
            screen.
          </p>
        </div>

        <Image
          src={screen}
          alt="Screenshot of Delete Account screen"
          width={400}
          height={400}
          className="rounded-md shadow-md object-cover w-full"
        />
      </div>
    </div>
  );
}
