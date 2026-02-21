import { motion } from "framer-motion";
import { ProgramsGrid } from "@/components/home/ProgramsGrid"; // Reusing the grid component logic

export default function Programs() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-20 bg-gray-50"
        >
            <div className="container mx-auto px-4 py-12">
                <h1 className="font-display text-5xl md:text-6xl text-black mb-8 text-center">
                    Explore Our Programs
                </h1>
                <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto mb-16">
                    Find the perfect course to advance your career or education.
                </p>

                {/* We can add search/filter inputs here later */}

                <ProgramsGrid />
            </div>
        </motion.div>
    );
}
