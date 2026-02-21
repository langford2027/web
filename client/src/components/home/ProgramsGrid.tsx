import { trpc } from "@/lib/trpc";
import { motion } from "framer-motion";
import { BookOpen, Calendar, DollarSign } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function ProgramsGrid() {
    const { data: programs, isLoading, error } = trpc.programs.list.useQuery();

    if (isLoading) {
        return (
            <section id="programs" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl text-black mb-4">
                            Our Programs
                        </h2>
                        <Skeleton className="h-4 w-64 mx-auto" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <Skeleton key={i} className="h-96 w-full rounded-lg" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return <div className="py-20 text-center text-red-500">Failed to load programs</div>;
    }

    // Fallback if no programs are returned (e.g., empty DB)
    // In a real scenario, you might want to show a "No programs found" message or seed data.
    const displayPrograms = programs || [];

    return (
        <section id="programs" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-5xl text-black mb-4"
                    >
                        Our Programs
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-body text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Comprehensive courses designed to empower learners across languages, business, and technology
                    </motion.p>
                </div>

                {/* Programs Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {displayPrograms.length > 0 ? (
                        displayPrograms.map((program, index) => (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                            >
                                {/* Image Placeholder */}
                                <div
                                    className="h-48 bg-cover bg-center relative overflow-hidden group"
                                    style={{
                                        backgroundImage: `url(https://images.unsplash.com/photo-${program.category === 'business' ? '1556761175-5973dc0f32e7' :
                                                program.category === 'technology' ? '1531482615713-2afd69097998' :
                                                    '1523240795612-9a054b0db644'
                                            }?q=80&w=800&auto=format&fit=crop)`,
                                        backgroundColor: '#eee'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <span className="text-white font-heading font-bold px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors">View Details</span>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold text-[#E21E26] bg-red-50 px-2 py-1 rounded uppercase tracking-wider">
                                            {program.category}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-2xl text-black mb-3">{program.name}</h3>
                                    <p className="font-body text-gray-600 mb-6 flex-1 line-clamp-3">
                                        {program.description}
                                    </p>

                                    <div className="border-t pt-4 space-y-2">
                                        <div className="flex items-center text-sm text-gray-500 gap-2">
                                            <DollarSign size={16} className="text-[#E21E26]" />
                                            <span>{parseFloat(program.price as string).toFixed(2)} KWD</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 gap-2">
                                            <Calendar size={16} className="text-[#E21E26]" />
                                            <span>{program.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-3 text-center text-gray-500">
                            No programs currently available. Check back soon!
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
