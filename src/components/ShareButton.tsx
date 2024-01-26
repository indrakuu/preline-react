import {  FiLink, FiTwitch, FiTwitter, FiFacebook, FiLinkedin, FiYoutube  } from 'react-icons/fi';

const ShareButton = () => {
    return (
        <div className="mt-4 grid grid-cols-3 lg:grid-cols-6 gap-3">
            <button type="button"
                className="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                <FiFacebook className='w-4 h-4' />
            </button>
            <button type="button"
                className="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-400 text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                <FiTwitter className='w-4 h-4' />
            </button>            
            <button type="button"
                className="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none">
                <FiYoutube className='w-4 h-4' />
            </button>
            <button type="button"
                className="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-800 text-white hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none">
                <FiLinkedin className='w-4 h-4' />
            </button>
            <button type="button"
                className="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none">
                <FiTwitch className='w-4 h-4' />
            </button>
            <button type="button"
                className="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-400 text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                <FiLink className='w-4 h-4' />
            </button>
        </div>
    );
};

export default ShareButton;