import React from 'react'

const Pricing = () => {
    return (
        <section id='pricing'><div className="py-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white">Choose Your Plan</h2>
                <p className="mt-4 text-lg text-gray-100">
                    Get started for free and unlock premium features when you are ready.
                </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                {/* Free Plan */}
                <div className=" flex flex-col justify-between bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800">Free Plan</h3>
                    <p className="mt-2 text-gray-600">Perfect for individuals starting out.</p>
                    <p className="mt-4 text-3xl font-extrabold text-gray-900">Free</p>
                    <ul className="mt-6 space-y-4 text-gray-600">
                        <li>✔️ Access to core features</li>
                        <li>✔️ Basic analytics</li>
                        <li>✔️ Community support</li>
                    </ul>

                    <button className="mt-6 w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600">
                        Get Started for Free
                    </button>
                </div>

                {/* Pro Plan */}
                <div className=" flex flex-col justify-between bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800">Pro Plan</h3>
                    <p className="mt-2 text-gray-600">For professionals who need more power.</p>
                    <p className="mt-4 text-3xl font-extrabold text-gray-900">Coming Soon</p>
                    <ul className="mt-6 space-y-4 text-gray-600">
                        <li>✔️ Everything in Free Plan</li>
                        <li>✔️ Advanced analytics</li>
                        <li>✔️ Priority support</li>
                    </ul>
                    <button disabled className="mt-6 w-full bg-cyan-600 text-white py-2 px-4 rounded-lg ">
                        Upgrade to Pro
                    </button>
                </div>

                {/* Premium Plan */}
                <div className=" flex flex-col justify-between bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800">Premium Plan</h3>
                    <p className="mt-2 text-gray-600">For enterprises with advanced needs.</p>
                    <p className="mt-4 text-3xl font-extrabold text-gray-900">Coming Soon</p>
                    <ul className="mt-6 space-y-4 text-gray-600">
                        <li>✔️ Everything in Pro Plan</li>
                        <li>✔️ Dedicated account manager</li>
                        <li>✔️ Custom integrations</li>
                    </ul>
                    <button disabled className="mt-6 w-full bg-cyan-600 text-white py-2 px-4 rounded-lg ">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Pricing