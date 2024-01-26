import Breadcumb from '../components/Breadcumb';
import Widget from '../components/layouts/Widget';
import Card from '../components/Card';

const About = () => {
    const breadcumb = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About', link: '/about' },
    ];

    return (
        <div>
            <div className="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <Breadcumb data={breadcumb}/>
                        <Card className={'mt-0'}>
                            <div className="p-4 md:p-5">
                                <div className="mt-8 prose prose-slate mx-auto lg:prose-lg">
                                    <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
                                        About
                                    </h1>
                                    <p>
                                        Preline is a Professional Component Tailwind Platform. Here we will only provide you with interesting content that you will enjoy very much. We are committed to providing you the best of Component Tailwind, with a focus on reliability and Technology, programming. we strive to turn our passion for Component Tailwind into a thriving website. We hope you enjoy our Component Tailwind as much as we enjoy giving them to you.
                                    </p>
                                    <p>
                                        I will keep on posting such valuable anf knowledgeable information on my Website for all of you. Your love and support matters a lot.
                                    </p>
                                    <p className='text-center text-gray-800 text-2xl font-bold'>
                                        Thank you For Visiting Our Site
                                    </p>
                                    <p className="text-center text-gray-800"> Have a great day !</p>
                                </div>
                            </div>
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

export default About;