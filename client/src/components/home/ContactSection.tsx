import { motion } from "framer-motion";

export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-4xl md:text-5xl text-center text-black mb-16"
                >
                    Get in Touch
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="font-heading text-2xl text-black mb-2">Location</h3>
                            <p className="font-body text-gray-600 text-lg">
                                Sabah Al-Salem, Block 1<br />
                                Kuwait City, Kuwait
                            </p>
                        </div>

                        <div>
                            <h3 className="font-heading text-2xl text-black mb-2">Contact Info</h3>
                            <p className="font-body text-gray-600 text-lg">
                                Email: info@langford.kw<br />
                                Phone: +965 XXXX XXXX
                            </p>
                        </div>

                        <div>
                            <h3 className="font-heading text-2xl text-black mb-2">Hours</h3>
                            <p className="font-body text-gray-600 text-lg">
                                Saturday - Thursday: 8:00 AM - 6:00 PM<br />
                                Friday: Closed<br />
                                Online Support: 24/7
                            </p>
                        </div>

                        <div>
                            <h3 className="font-heading text-2xl text-black mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 bg-[#E21E26] rounded-lg flex items-center justify-center text-white hover:bg-[#D01820] transition-colors">
                                    f
                                </a>
                                <a href="#" className="w-12 h-12 bg-[#E21E26] rounded-lg flex items-center justify-center text-white hover:bg-[#D01820] transition-colors">
                                    in
                                </a>
                                <a href="#" className="w-12 h-12 bg-[#E21E26] rounded-lg flex items-center justify-center text-white hover:bg-[#D01820] transition-colors">
                                    ig
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E21E26] focus:ring-2 focus:ring-[#E21E26]/20 font-body"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E21E26] focus:ring-2 focus:ring-[#E21E26]/20 font-body"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E21E26] focus:ring-2 focus:ring-[#E21E26]/20 font-body"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E21E26] focus:ring-2 focus:ring-[#E21E26]/20 font-body"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E21E26] focus:ring-2 focus:ring-[#E21E26]/20 font-body resize-none"
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#E21E26] hover:bg-[#D01820] text-white px-8 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
