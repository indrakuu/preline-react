import { Component } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';

class Subscribe extends Component {
    render() {
        return (
            <div className='bg-gray-100'>
                <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                    <div className="max-w-xl text-center mx-auto">
                        <div className="mb-5">
                            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight">
                            Sign up to our newsletter
                            </h2>
                            <p className="mt-2 text-gray-600">
                            Get the latest news and articles to your inbox every month.
                            </p>
                        </div>
                        <form>
                            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                                <div className="w-full">
                                    <label htmlFor="hero-input" className="sr-only">
                                        Search
                                    </label>
                                    <input type="text" id="hero-input" name="hero-input"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter your email"/>
                                </div>
                                <PrimaryButton as='button' type='submit' className='w-full sm:w-auto'>
                                    Subscribe
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subscribe;