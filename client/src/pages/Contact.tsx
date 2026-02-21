import { motion } from "framer-motion";
import { ContactSection } from "@/components/home/ContactSection";

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-20 bg-white"
        >
            <div className="container mx-auto px-4 py-12">
                <h1 className="font-display text-5xl md:text-6xl text-black mb-12 text-center">
                    Connect With Us
                </h1>
            </div>

            <ContactSection />

            {/* Map Placeholder */}
            <div className="h-96 w-full bg-gray-200 mt-12 relative flex items-center justify-center">
                <span className="text-gray-500 font-heading text-xl">Interactive Map Loading...</span>
                {/* Integration with Google Maps or similar would go here */}
            </div>
        </motion.div>
    );
}
