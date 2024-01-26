import { FiChevronsLeft, FiChevronsRight} from 'react-icons/fi';

const Pagination = () => {
    return (
        <div className='mt-20 mx-auto flex items-center justify-center space-x-4'>
            <nav className="flex items-center -space-x-px">
                <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center bg-gray-200 gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                    <FiChevronsLeft className='w-4 h-4' />
                    <span className="hidden sm:block">Previous</span>
                </button>
                <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-300 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none" aria-current="page">
                    1
                </button>
                <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-300 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                    2
                </button>
                <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-300 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                    3
                </button>
                <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                    <span className="hidden sm:block">Next</span>
                    <FiChevronsRight className='w-4 h-4' />
                </button>
            </nav>
        </div>
    );
};

export default Pagination;