import { FiCpu } from 'react-icons/fi';

const Maintenance = () => {
    return (
        <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
            <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
                <FiCpu className="block text-2xl font-bold w-28 h-28 text-gray-800 mx-auto mb-5" fill="#14B8A6" />
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-5xl">
                    We'll be back soon!
                </h1>
                <p className="mt-3 text-gray-600">
                    Sorry for the inconvenience but we're performing some maintenance at the moment.
                </p>
                <p className="text-gray-600">
                    We'll be back online shortly!
                </p>
            </div>
        </div>
    );
};

export default Maintenance;