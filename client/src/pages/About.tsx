import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-20 bg-white"
        >
            <div className="container mx-auto px-4 py-12">
                <h1 className="font-display text-5xl md:text-6xl text-black mb-8 text-center">
                    Our Legacy
                </h1>

                <div className="max-w-4xl mx-auto space-y-12">
                    <section>
                        <h2 className="font-heading text-3xl mb-4 text-[#E21E26]">Our Story</h2>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Founded over 15 years ago, Langford International Institute began with a single mission: to bridge the gap between academic theory and professional practice in Kuwait. What started as a small language center has grown into a premier institution offering a wide array of accredited programs.
                        </p>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-heading text-2xl mb-3">Our Mission</h3>
                            <p className="text-gray-600">To empower individuals with the skills and knowledge necessary to excel in the global marketplace through innovative, high-quality education.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-heading text-2xl mb-3">Our Vision</h3>
                            <p className="text-gray-600">To be the leading provider of professional and academic training in the region, recognized for excellence, integrity, and student success.</p>
                        </div>
                    </section>
                </div>
            </div>
        </motion.div>
    );
}
