import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
    onExploreClick: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center relative overflow-hidden bg-black"
        >
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 opacity-60"
                style={{
                    y,
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="glass-dark p-8 md:p-12 rounded-2xl inline-block max-w-4xl backdrop-blur-sm border border-white/10"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-display text-5xl md:text-8xl text-white mb-6 leading-tight tracking-tight"
                    >
                        Empowering <br />
                        <span className="text-[#E21E26]">Global Careers</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-body text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Kuwait's premier destination for high-impact training and language education.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        onClick={onExploreClick}
                        className="bg-[#E21E26] hover:bg-[#D01820] text-white px-10 py-5 rounded-full font-heading font-bold text-lg transition-all shadow-[0_0_20px_rgba(226,30,38,0.5)] flex items-center gap-2 mx-auto"
                    >
                        Start Your Journey
                        <ChevronDown size={20} />
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
