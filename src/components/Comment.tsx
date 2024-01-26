import { FiMessageSquare, FiMoreHorizontal } from 'react-icons/fi';

const Comment = ({name, image, date, comment} : any) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                        <img className="mr-2 w-6 h-6 rounded-full" src={image} alt={name}/>
                        {name}
                    </p>
                    <p className="text-sm text-gray-600">
                        <time dateTime="2022-06-23" title="June 23rd, 2022">
                        {date}
                        </time>
                    </p>
                </div>
                <div className="hs-dropdown relative inline-flex">
                    <button id="hs-dropdown-default" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                        <FiMoreHorizontal className='w-4 h-4'/>
                    </button>
                    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[8rem] bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full z-20" aria-labelledby="hs-dropdown-default">
                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Edit
                        </a>
                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Remove
                        </a>
                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Report
                        </a>
                    </div>
                </div>
            </div>
            <p className="text-gray-500">
                {comment}
            </p>
            <div className="flex items-center mt-4 space-x-4">
                <button type="button" className="flex items-center text-sm text-gray-500 hover:underline font-medium">
                    <FiMessageSquare className='mr-1.5 w-3.5 h-3.5'/>
                    Reply
                </button>
            </div>
        </div>
    );
};

export default Comment;