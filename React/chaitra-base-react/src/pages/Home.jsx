import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="bg-gradient-to-b from-slate-50 to-white py-24 px-6 md:py-32">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-8 sm:text-7xl">
                        Welcome to<Link
                            to='/'
                            className="text-indigo-600"
                        >MyWebsite</Link>
                    </h1>
                    <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed md:text-2xl">
                        The ultimate starting point for your next digital idea. Built with lightning speed, minimal design guidelines, and clean code principles.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">

                        <Link
                            className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-xl shadow-lg hover:bg-indigo-500 hover:shadow-xl transition-all duration-200 text-lg"
                            to='/about'
                        >Get Started</Link>
                        <Link
                            to='/contact'
                            className="px-8 py-4 bg-white text-slate-700 font-medium rounded-xl border border-slate-200 shadow-sm hover:bg-slate-500 hover:text-white transition-all duration-200 text-lg"
                        >Contact Us</Link>
                    </div>
                </div>
            </section>

            {/* 2. Features Grid Section */}
            <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
                            Why Choose Our Platform
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            Everything you need to build and scale your web applications without the architectural headaches.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-2xl mb-6 font-bold">⚡</div>
                            <h3 className="text-xl font-bold mb-3">Blazing Fast Speed</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Optimized compilation structures ensure your product loads instantly for clients anywhere on the planet.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-2xl mb-6 font-bold">🎨</div>
                            <h3 className="text-xl font-bold mb-3">Minimal Design</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Clean visual layouts that focus entirely on your content and clear target conversion points.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-2xl mb-6 font-bold">🛠️</div>
                            <h3 className="text-xl font-bold mb-3">Clean Code Architecture</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Stateless design parameters built to safely scale with massive, custom application modifications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Detail Split Feature Section */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Engineered for developer productivity
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Stop fighting configuration scripts. Our layout comes standardized with the ultimate component primitives, giving you total stylistic layout freedom while optimizing operational efficiency.
                        </p>
                        <ul className="space-y-3 font-medium text-slate-700">
                            <li className="flex items-center gap-3">✅ Pre-configured Tailwind CSS utility setups</li>
                            <li className="flex items-center gap-3">✅ Completely fluid, responsive breakpoint rules</li>
                            <li className="flex items-center gap-3">✅ Semantic layouts ready for production deployment</li>
                        </ul>
                    </div>
                    <div className="bg-slate-100 rounded-2xl aspect-video w-full border border-slate-200 shadow-inner flex items-center justify-center text-slate-400 font-medium">
                        [ Application Preview Placeholder Block ]
                    </div>
                </div>
            </section>

            {/* 4. Bottom CTA Section */}
            <section className="bg-slate-900 text-white py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                        Ready to launch your enterprise platform?
                    </h2>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of developers using our templates to deploy high-velocity static interfaces.
                    </p>
                    <Link
                        to='/contact'
                        className="inline-block bg-white text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors duration-200 shadow-lg text-lg"
                    >
                        Get Started Now</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
