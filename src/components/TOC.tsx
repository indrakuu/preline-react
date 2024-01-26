import { FiMenu, FiX } from 'react-icons/fi';

const TOC = () => {
    return (
        <div>
            <div className="hs-accordion-group mb-4 shadow-md">
                <div className="hs-accordion border rounded-lg"id="hs-bordered-heading">
                    <button
                        className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none border-b border-gray-200 focus:outline-none bg-gray-50" aria-controls="hs-basic-bordered-collapse">
                        <FiMenu className='hs-accordion-active:hidden block w-4 h-4' />
                        <FiX className='hs-accordion-active:block hidden w-4 h-4' />
                        Table of Contents
                    </button>
                    <div id="hs-basic-bordered-collapse" className="hs-accordion-content hidden overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading">
                        <div className="px-5">
                            <ol className="nested-counter-list leading-none text-md ">
                                <li>
                                    <a href="#1" className="hover:text-blue-500 no-underline">
                                        one
                                    </a>
                                </li>
                                <li>
                                    <a href="#2" className="hover:text-blue-500 no-underline">
                                        two
                                    </a>
                                    <ol className='pl-4'>
                                        <li>
                                            <a href="#2.1" className="hover:text-blue-500 no-underline">
                                                two.one
                                            </a>
                                        </li>
                                        <li>
                                            <a href="2.2" className="hover:text-blue-500 no-underline">
                                                two.two
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-blue-500 no-underline">
                                                two.three
                                            </a>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500 no-underline">three</a>
                                    <ol className='pl-4'>
                                        <li>
                                            <a href="#" className="hover:text-blue-500 no-underline">
                                                three.one
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-blue-500 no-underline">
                                                three.two
                                            </a>
                                            <ol>
                                                <li>
                                                    <a href="#" className="hover:text-blue-500 no-underline">
                                                        three.two.one
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hover:text-blue-500 no-underline">
                                                        three.two.two
                                                    </a>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TOC;