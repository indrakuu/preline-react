const PopularPost = ({ title, image, date, time } : any) => {
    return (
        <div>
            <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition" href="/detail-blog">
                <div className="p-4 md:p-5">
                    <div className="flex">
                        <img className="h-[2.375rem] w-[2.375rem] rounded-lg"
                            src={image}
                                alt="Image Description" />
                        <div className="grow ms-5">
                            <h3 className="hover:text-blue-600 font-semibold text-gray-800">
                                {title}
                            </h3>
                            <div className="flex items-center gap-x-3">
                                <div className="flex items-center gap-x-1 text-gray-500">
                                    <span className="text-xs font-medium">{date}</span>
                                </div>
                                <div className="flex items-center gap-x-1 text-gray-500">
                                    <span className="text-xs font-medium">|</span>
                                </div>
                                <div className="flex items-center gap-x-1 text-gray-500">
                                    <span className="text-xs font-medium">{time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        
    );
};

export default PopularPost;