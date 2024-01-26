import { FiActivity } from 'react-icons/fi';

const Page500 = () => {
    return (
        <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
            <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
                <FiActivity className="block text-2xl font-bold w-28 h-28 text-gray-800 mx-auto" />
                <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl">
                    500
                </h1>
                <p className="mt-3 text-gray-600">
                    The server encountered an internal error.
                </p>
                <p className="text-gray-600">
                    this page is currently unavailable.
                </p>
                <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                    <a href="/" className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                        Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Page500;