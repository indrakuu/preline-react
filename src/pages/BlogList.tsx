import Widget from '../components/layouts/Widget';
import Pagination from '../components/Pagination';
import Blog from '../components/Blog';
import Breadcumb from '../components/Breadcumb';

const BlogList = () => {
    const list = [
        { id: 1, title: 'The Best Way To LOREM', date: 'June 10, 2020', time: '10 min read', category: 'Technology', image:'https://img.freepik.com/free-vector/book-with-lighbulb-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4009.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...'},
        {id: 2, title: 'How To Lose Money With LOREM', date: 'June 9, 2020', time: '8 min read', category: 'Lorem', image:'https://img.freepik.com/free-vector/cute-cat-playing-yarn-ball-cartoon-illustration_138676-3256.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...'},
        {id: 3, title: 'Where Can You Find Free LOREM Resource', date: 'June 3, 2020', time: '5 min read', category: 'Ipsum', image:'https://img.freepik.com/free-vector/cute-astronaut-riding-rocket-waving-hand-cartoon-icon-illustration-science-technology-icon-concept_138676-2130.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...'},
        {id: 4, title: 'How To Quit LOREM In 5 Day', date: 'April 18, 2020', time: '15 min read', category: 'Example', image:'https://img.freepik.com/free-vector/cute-chef-girl-hijab-holding-spatula-cartoon-vector-icon-illustration-people-food-icon-isolated_138676-5977.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...'},
        {id: 5, title: 'Revolutionize Your LOREM With These Easy-peasy Tips', date: 'April 15, 2020', time: '11 min read', category: 'Nature', image:'https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...'},
        {id: 6, title: 'Interesting Facts I Bet You Never Knew About LOREM', date: 'April 8, 2020', time: '18 min read', category: 'Experimental', image:'https://img.freepik.com/free-vector/cute-male-courier-delivery-package-with-motorcycle-cartoon-vector-icon-illustration-people-job_138676-5708.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...'},
        {id: 7, title: '7 Rules About LOREM Meant To Be Broken', date: 'April 6, 2020', time: '7 min read', category: 'Film', image:'https://img.freepik.com/free-vector/peanut-vegetable-cartoon-illustration-premium-cartoon-vector-icon-illustration-food-object-icon_138676-6550.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...'},
        {id: 8, title: 'How To Win Friends And Influence People', date: 'March 10, 2020', time: '16 min read', category: 'Travel', image:'https://img.freepik.com/free-vector/cute-fox-kitsune-warrior-holding-katana-sword-cartoon-vector-icon-illustration-animal-holiday-flat_138676-9848.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...'},
        {id: 9, title: 'What Alberto Savoia Can Teach You About LOREM', date: 'March 6, 2020', time: '10 min read', category: 'Animals', image:'https://img.freepik.com/free-vector/cute-boy-moslem-prayer-cartoon-vector-icon-illustration-people-religion-icon-concept-isolated-flat_138676-7943.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...'},
        {id: 10, title: '2 Ways You Can Use LOREM To Become Irresistible To Customers', date: 'February 2, 2020', time: '13 min read', category: 'People', image:'https://img.freepik.com/free-vector/cute-rabbit-with-carrot-bag-cartoon-vector-icon-illustration-animal-education-icon-concept-isolated_138676-5813.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...'},
    ];

    const breadcumb = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Blog', link: '/list-blog' },
    ];

    return (
        <div>
            <div className="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <Breadcumb data={breadcumb}/>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {list.map((item) => (
                                <Blog key={item.id} category={item.category} date={item.date} time={item.time} image={item.image} title={item.title} description={item.description}/>
                            ))}
                        </div>
                        <Pagination />
                    </div>
                    <div className="md:col-span-1">
                        <Widget/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogList;