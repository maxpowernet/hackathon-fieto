import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                    alt="Construction Site"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-eco-green-500/20 text-eco-green-400 text-sm font-semibold mb-6 border border-eco-green-500/30">
                            Inovação em Economia Circular
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Transformamos o resíduo da construção em <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-green-400 to-teal-400">riqueza para o Tocantins</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Plataforma integrada que conecta obras, indústrias, cooperativas e transportadores, transformando resíduos em novos materiais sustentáveis.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            to="/demo"
                            className="w-full sm:w-auto bg-eco-green-500 hover:bg-eco-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-eco-green-500/40 flex items-center justify-center gap-2 group"
                        >
                            Começar Agora
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/app/inventory"
                            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                        >
                            <PlayCircle size={20} />
                            Conhecer a Solução
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Abstract Shapes */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
        </section>
    );
};

export default Hero;
