import { Component } from 'react';
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiRss, FiSearch, FiYoutube, FiChevronRight } from 'react-icons/fi';
import PopularPost from '../PopularPost';
import Card from '../Card';

class Widget extends Component {
    render() {
        const popularPost = [
            { id: 1, title: 'The Best Way To LOREM', date: 'June 10, 2020', time: '10 min read', image: 'https://img.freepik.com/free-vector/book-with-lighbulb-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4009.jpg' },
            { id: 2, title: 'How To Lose Money With LOREM', date: 'July 20, 2021', time: '6 min read', image: 'https://img.freepik.com/free-vector/cute-cat-playing-yarn-ball-cartoon-illustration_138676-3256.jpg' },
            { id: 3, title: 'Where Can You Find Free LOREM Resources', date: 'March 8, 2020', time: '5 min read', image: 'https://img.freepik.com/free-vector/cute-astronaut-riding-rocket-waving-hand-cartoon-icon-illustration-science-technology-icon-concept_138676-2130.jpg' },
            { id: 4, title: 'How To Quit LOREM In 5 Days', date: 'December 21, 2022', time: '9 min read', image: 'https://img.freepik.com/free-vector/cute-chef-girl-hijab-holding-spatula-cartoon-vector-icon-illustration-people-food-icon-isolated_138676-5977.jpg' },
            { id: 5, title: 'Revolutionize Your LOREM With These Easy-peasy Tips', date: 'November 6, 2023', time: '12 min read', image: 'https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg' }
        ];
        return (
            <div>
                <Card className={`mb-4`}>
                    <div className="p-4 md:p-5">
                        <div className="mt-4 grid grid-cols-1 gap-3">
                            <div className="flex flex-col items-center">
                                <img src="https://img.freepik.com/free-vector/cute-cow-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-7823.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">
                                </img>
                                <h3 className="text-xl font-semibold text-gray-800">Indra Kurniawan</h3>
                                <p className="text-sm text-gray-500">Web Developer Enthusiast</p>
                                <div className="inline-block bg-white border shadow-sm rounded-full text-center mt-4">
                                    <div className="py-3 px-4 flex items-center gap-x-2">
                                        <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="https://www.infobangindra.my.id/">
                                        More <FiChevronRight size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </div>
                </Card>
                <Card className={`mb-4`}>
                    <div className="p-4 md:p-5">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-800">
                            Follow Us
                            </h3>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-3">
                            <a href='https://www.facebook.com/'
                                className="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                <FiFacebook className='w-4 h-4' />
                            </a>
                            <a href='https://www.instagram.com/'
                                className="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-pink-500 text-white hover:bg-pink-600 disabled:opacity-50 disabled:pointer-events-none">
                                <FiInstagram className='w-4 h-4' />
                            </a>
                            <a href='https://www.youtube.com/'
                                className="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none">
                                <FiYoutube className='w-4 h-4' />
                            </a>
                            <a href='https://www.linkedin.com/'
                                className="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-800 text-white hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none">
                                <FiLinkedin className='w-4 h-4' />
                            </a>
                            <a href='https://github.com/indrakuu'
                                className="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none">
                                <FiGithub className='w-4 h-4' />
                            </a>
                            <a href='https://www.rss.com/'
                                className="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 disabled:pointer-events-none">
                                <FiRss className='w-4 h-4' />
                            </a>
                        </div>      
                    </div>
                </Card>
                <Card className={`mb-4`}>
                    <div className="p-4 md:p-5">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-800">
                                Search
                            </h3>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="hs-trailing-button-add-on-with-icon" className="sr-only">
                                Label
                            </label>
                            <div className="flex rounded-lg shadow-sm">
                                <input type="text" id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon"
                                className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"/>
                                <button type="button" className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    <FiSearch className='w-4 h-4' />
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className={`mb-4`}>
                    <div className="p-4 md:p-5">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-800">
                                Popular Post
                            </h3>
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-3">
                            {popularPost.map((item) => (
                                <PopularPost key={item.id} title={item.title} date={item.date} time={item.time} image={item.image} />
                            ))}
                        </div>      
                    </div>
                </Card>
                <Card className={`mb-4`}>
                    <div className="p-4 md:p-5">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-800">
                            Advertisement
                            </h3>
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-3">
                            <img src="https://img.freepik.com/free-vector/cute-astronaut-holding-laptop-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-5958.jpg" alt="" className='lg:h-96 w-full rounded-xl object-cover' />
                        </div>      
                    </div>
                </Card>  
            </div>
        );
    }
}

export default Widget;