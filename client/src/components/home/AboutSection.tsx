import { motion } from "framer-motion";

export function AboutSection() {
    const values = [
        {
            title: "Excellence",
            description: "Commit to delivering premium education",
        },
        {
            title: "Integrity",
            description: "Transparent, honest communication and ethical practices",
        },
        {
            title: "Innovation",
            description: "Integrate the latest teaching methods and technologies",
        },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl text-black mb-6">
                            15+ Years of Excellence
                        </h2>
                        <p className="font-body text-gray-700 text-lg mb-4 leading-relaxed">
                            Langford International Institute is Kuwait's leading educational institution dedicated to delivering world-class academic programs and professional development opportunities. We empower students with the knowledge, skills, and global perspective needed to thrive in a fast-evolving world.
                        </p>
                        <p className="font-body text-gray-700 text-lg mb-6 leading-relaxed">
                            Located in the prestigious Sabah Al-Salem area, we provide internationally accredited courses tailored to students, professionals, and corporate teams. Our mission is simple: deliver real results in a short period through expert-led programs, authentic academic content, and a commitment to excellence.
                        </p>

                        {/* Values */}
                        <div className="space-y-4">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex gap-4 group p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div className="w-12 h-12 bg-[#E21E26] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="text-white font-bold text-xl">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-lg text-black mb-1">{value.title}</h3>
                                        <p className="font-body text-gray-600">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop"
                            alt="Langford Institute Campus"
                            className="rounded-lg shadow-2xl w-full h-auto object-cover relative z-10"
                        />
                        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#E21E26] rounded-lg opacity-20 blur-3xl z-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
