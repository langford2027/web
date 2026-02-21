import { motion } from "framer-motion";

export function Accreditations() {
    const partners = [
        { code: "BC", name: "British Council", desc: "IELTS Exam Provider" },
        { code: "PAAET", name: "PAAET Kuwait", desc: "National Standards" },
        { code: "AIAE", name: "American Institute", desc: "Applied Education" },
        { code: "ACTD", name: "ACTD", desc: "Training & Development" },
        { code: "TU", name: "Tulane University", desc: "Official Partner" },
    ];

    return (
        <section id="accreditations" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-4xl md:text-5xl text-center mb-16"
                >
                    International Accreditations
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center gap-4 p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all cursor-default"
                        >
                            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                                <span className="text-2xl font-bold">{partner.code}</span>
                            </div>
                            <h3 className="font-heading text-center">{partner.name}</h3>
                            <p className="font-body text-sm text-gray-300 text-center">{partner.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
