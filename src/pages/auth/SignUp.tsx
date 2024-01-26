import { FiAlertCircle } from "react-icons/fi";
import Card from "../../components/Card";

const SignUp = () => {
    return (
        <div className="w-full max-w-md mx-auto p-6 py-10 lg:py-16">
            <Card className={`mt-7`}>
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800">
                            Sign up
                        </h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Already have an account?{" "}
                            <a className="text-blue-600 decoration-2 hover:underline font-medium" href="/sign-in">
                                Sign in here
                            </a>
                        </p>
                    </div>
                    <div className="mt-5">
                        <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                            <img src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-512.png" className="w-4 h-auto"/>
                            Sign up with Google
                        </button>
                        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
                            Or
                        </div>
                        <form>
                            <div className="grid gap-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2">
                                        Email address
                                    </label>
                                    <div className="relative">
                                        <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" aria-describedby="email-error"/>
                                        <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                        <FiAlertCircle className="h-5 w-5 text-red-500" />
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                        Please include a valid email address so we can get back to you
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" aria-describedby="password-error"/>
                                        <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                            <FiAlertCircle className="h-5 w-5 text-red-500" />
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                                        8+ characters required
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block text-sm mb-2">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input type="password" id="confirm-password" name="confirm-password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" aria-describedby="confirm-password-error"/>
                                        <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                        <FiAlertCircle className="h-5 w-5 text-red-500" />
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">
                                        Password does not match the password
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500"/>
                                    </div>
                                    <div className="ms-3">
                                        <label htmlFor="remember-me" className="text-sm">
                                            I accept the{" "}
                                            <a className="text-blue-600 decoration-2 hover:underline font-medium" href="/term-and-conditions">
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default SignUp;