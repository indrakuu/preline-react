import { Component } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import PrimaryButton from '../buttons/PrimaryButton';
import { Link } from 'react-router-dom';
import SecondaryButton from '../buttons/SecondaryButton';

class Header extends Component {
    render() {
        return (
            <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                <div className="max-w-2xl text-center mx-auto">
                    <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">Preline - React Tailwind CSS Template</p>
                    <div className="mt-5 max-w-2xl">
                        <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                        The Intuitive Web Solutions
                        </h1>
                    </div>
                    <div className="mt-5 max-w-3xl">
                        <p className="text-lg text-gray-600">
                        Preline UI is an open-source set of prebuilt UI components,
                        ready-to-use examples and Figma design system based on the
                        utility-first Tailwind CSS framework.
                        </p>
                    </div>
                    <div className="mt-8 gap-3 flex justify-center">
                        <PrimaryButton as={Link} to='https://www.google.co.id/?hl=id' className='w-full sm:w-auto'>
                            Get started <FiChevronRight className="w-4 h-4" />
                        </PrimaryButton>
                        <SecondaryButton as={Link} to='https://www.figma.com/' className='w-full sm:w-auto'>
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" className="flex-shrink-0 w-4 h-4"/>
                            Preline Figma
                        </SecondaryButton>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Header;