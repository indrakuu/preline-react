
const Blog = ({category, image, title, description, date, time}) => {
    return (
        <div>
            <a href='/detail-blog' className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition duration-200">
                <img className="w-full h-48 object-cover rounded-t-xl" src={image} alt="Image Description"/>
                <div className="p-4 md:p-5">
                    <div className="mb-2">
                        <span className="inline-flex items-center gap-x-1 py-1 px-3 rounded-full text-xs border border-blue-600 text-blue-600">
                            {category}
                        </span>
                    </div>
                    <h3 className="text-md font-bold text-gray-800">
                        {title}
                    </h3>
                    <div className="my-2 flex items-center gap-x-3">
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
                    <p className="mt-1 text-gray-500">
                        {description}
                    </p>
                </div>   
            </a>
        </div>
    );
};

export default Blog;