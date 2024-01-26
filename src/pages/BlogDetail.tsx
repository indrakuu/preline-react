import { FiCheckCircle, FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import Widget from '../components/layouts/Widget';
import Breadcumb from '../components/Breadcumb';
import Article from '../components/Article';
import TOC from '../components/TOC';
import ShareButton from '../components/ShareButton';
import Card from '../components/Card';
import Comment from '../components/Comment';

const BlogDetail = () => {
    const comment = [
        {
            id: 1, name: 'Michael Gough', date: 'Feb. 8, 2022', comment: 'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.',
            image: 'https://img.freepik.com/free-vector/cute-robot-holding-phone-with-laptop-cartoon-vector-icon-illustration-science-technology-isolated_138676-4870.jpg',
            reply: [
                { id: 1, name: 'Indra Kurniawan', date: 'Feb. 8, 2022', comment: 'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.',
                image: 'https://img.freepik.com/free-vector/cute-cow-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-7823.jpg'},
            ]
        },
        {
            id: 2, name: 'Jese Leos', date: 'Feb. 12, 2022', comment: 'Much appreciated! Glad you liked it ☺️',
            image: 'https://img.freepik.com/free-vector/cute-angry-red-dinosaur-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-6013.jpg',
            reply: [
                { id: 1, name: 'Indra Kurniawan', date: 'Feb. 8, 2022', comment: 'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.',
                image: 'https://img.freepik.com/free-vector/cute-cow-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-7823.jpg'},
            ]
        },
        {
            id: 3, name: 'Bonnie Green', date: 'Mar. 12, 2022', comment: 'The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.',
            image: 'https://img.freepik.com/free-vector/cute-elephant-sitting-waving-hand-cartoon-vector-icon-illustration_138676-2220.jpg',
            reply: [
                {
                    id: 1, name: 'Indra Kurniawan', date: 'Feb. 8, 2022', comment: 'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.',
                    image: 'https://img.freepik.com/free-vector/cute-cow-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-7823.jpg'
                },
            ]
        },
        {
            id: 4, name: 'Helene Engels', date: 'Jun. 23, 2022', comment: 'Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.',
            image: 'https://img.freepik.com/free-vector/cute-crocodile-waving-hand-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-6015.jpg',
           
        },
    ];

    const breadcumb = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Blog', link: '/list-blog' },
        { id: 3, name: 'Blog Detail', link: '/blog-detail' }
    ];

    return (
        <div>
            <div className="max-w-[75rem] px-4 py-14 sm:px-6 lg:px-8 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                       <Breadcumb data={breadcumb}/>
                        <Card className={'mt-0'}>
                            <div className="px-4 pb-6 sm:px-6">
                                <div className="mt-8 prose prose-slate mx-auto lg:prose-lg">
                                    <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit Magni eum qui atque sapiente?
                                    </h1>
                                    <div className="mb-4 flex items-center gap-x-3 mt-4">
                                        <div className="flex items-center gap-x-1 text-gray-500">
                                            <span className="text-xs font-medium">June 10, 2021</span>
                                        </div>
                                        <div className="flex items-center gap-x-1 text-gray-500">
                                            <span className="text-xs font-medium">|</span>
                                        </div>
                                        <div className="flex items-center gap-x-1 text-gray-500">
                                            <span className="text-xs font-medium">5 min read</span>
                                        </div>
                                    </div>
                                    <div className="mb-5 flex flex-wrap gap-2">
                                        <a href='#' className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-blue-600 text-blue-600 decoration-transparent">Technology</a>
                                    </div>
                                    <img src="https://img.freepik.com/free-vector/cute-astronaut-hug-watermelon-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-4940.jpg" alt="image" className='rounded-lg'/>
                                    <TOC/>
                                    <Article/>
                                    <ShareButton/>
                                </div>  
                            </div>
                        </Card>
                        <Card className={'my-4'}>
                            <div className="p-6 md:p-8">
                                <div className="flex">
                                    <img src="https://img.freepik.com/free-vector/cute-cow-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-7823.jpg" className="h-[2.375rem] w-[2.375rem] rounded-full">
                                    </img>  
                                    <div className="grow ms-5">
                                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">
                                            Indra Kurniawan <FiCheckCircle className='inline-block w-4 h-4 text-blue-600'/>
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <div className="grid sm:grid-cols-2 gap-6 my-4">
                            <a href="/detail-blog">
                                <Card className={'mt-0'}>
                                    <div className="p-4 md:p-5">
                                        <div className="flex justify-between items-center">
                                            <div className="ps-3">
                                                <FiChevronLeft className='flex-shrink-0 w-5 h-5'/>
                                            </div>                                    
                                            <div>
                                                <h3 className=" font-semibold text-gray-800 text-end">
                                                    Next
                                                </h3>
                                                <p className="text-sm text-gray-500">Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </a>
                            <a href="/detail-blog">
                                <Card className={'mt-0'}>
                                    <div className="p-4 md:p-5">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="font-semibold text-gray-800">
                                                    Pervious
                                                </h3>
                                                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur...</p>
                                            </div>
                                            <div className="ps-3">
                                                <FiChevronRight className='flex-shrink-0 w-5 h-5'/>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </a>
                        </div>
                        <Card className={'mt-5 p-4 md:p-10'}>
                            <div className="mb-6">
                                <h2 className="text-xl text-gray-800 font-bold sm:text-2xl">
                                    Post a comment
                                </h2>
                            </div>
                            <form>
                                <div>
                                    <label htmlFor="hs-feedback-post-comment-textarea-1" className="block mb-2 text-sm font-medium">
                                        Comment
                                    </label>
                                    <div className="mt-1">
                                    <textarea id="hs-feedback-post-comment-textarea-1"
                                        name="hs-feedback-post-comment-textarea-1"
                                        rows={5} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Leave your comment here..." defaultValue={""}/>
                                    </div>
                                </div>
                                <div className='grid lg:grid-cols-2 gap-6 my-4'>
                                    <div className="mb-4">
                                        <label htmlFor="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium">
                                            Full name
                                        </label>
                                        <input type="text" id="hs-feedback-post-comment-name-1"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Full name"/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium">
                                            Email address
                                        </label>
                                        <input type="email" id="hs-feedback-post-comment-email-1" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email address"/>
                                    </div>
                                </div>
                                <div className="mt-6 grid">
                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </Card>
                        <Card className={'mt-5 p-4 md:p-10'}>
                            <div className="mb-4">
                                <h2 className="text-xl text-gray-800 font-bold sm:text-2xl">
                                    Comment ({comment.length + comment.reduce((acc, item) => acc + (item.reply ? item.reply.length : 0), 0)})
                                </h2>
                            </div>
                            {comment.map((item) => (
                                <div key={item.id} className="py-6 text-base">
                                    <Comment name={item.name} date={item.date} comment={item.comment} image={item.image}/>
                                    {item.reply && item.reply.length > 0 && (
                                        <div>
                                            {item.reply.map((item) => (
                                                <div key={item.id} className="py-5 text-base ml-6 lg:ml-12">
                                                    <Comment name={item.name} date={item.date} comment={item.comment} image={item.image}/>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Card>
                    </div>
                    <div className="md:col-span-1">
                        <Widget/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;