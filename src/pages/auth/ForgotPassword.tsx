import { FiAlertCircle } from 'react-icons/fi';
import Card from '../../components/Card';

const ForgotPassword = () => {
    return (
        <div className="w-full max-w-md mx-auto py-10 lg:py-16">
            <Card className={`mt-7`}>
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800">
                            Forgot password?
                        </h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Remember your password? {" "}
                            <a href='/sign-in' className="text-blue-600 decoration-2 hover:underline font-medium">
                                Sign in here
                            </a>
                        </p>
                    </div>
                    <div className="mt-5">
                        <form>
                            <div className="grid gap-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2">
                                        Email address
                                    </label>
                                    <div className="relative">
                                        <input type="email" id="email"  name="email"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" aria-describedby="email-error"/>
                                        <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                            <FiAlertCircle className="h-5 w-5 text-red-500" />
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                        Please include a valid email address so we can get back to you
                                    </p>
                                </div>
                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Reset password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ForgotPassword;