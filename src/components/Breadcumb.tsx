import { FiChevronRight } from 'react-icons/fi';
import React from 'react';
import Card from './Card';

const Breadcumb = ({data}) => {
    return (
        <Card className={`mb-4`}>
            <div className="p-4">
                <div className="flex items-center gap-x-2">
                    {data.map((item, index) => (
                        <React.Fragment key={item.id}>
                        {index > 0 && <FiChevronRight className="text-gray-400" />}
                        {index === data.length - 1 ? (
                            <span className="text-gray-400">{item.name}</span>
                        ) : (
                            <a
                            href={item.link}
                            className="text-blue-600 hover:underline hover:text-blue-500"
                            >
                            {item.name}
                            </a>
                        )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default Breadcumb;