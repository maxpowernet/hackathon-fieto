import React from 'react';
import { ShoppingBag, Recycle, BarChart3, Sparkles } from 'lucide-react';

const Solution = () => {
    const solutions = [
        {
            icon: <ShoppingBag size={56} className="text-eco-green-500" />,
            title: "Marketplace Circular",
            description: "Conexão direta entre quem possui resíduo e quem precisa de insumo, com logística otimizada e valoração automática.",
            gradient: "from-eco-green-500 to-teal-500",
            bgGradient: "from-eco-green-50 to-teal-50"
        },
        {
            icon: <Recycle size={56} className="text-teal-500" />,
            title: "Upcycling e Novos Materiais",
            description: "Transformação dos resíduos em Ecocimento, areia reciclada, tijolos ecológicos e outros materiais regionais.",
            gradient: "from-teal-500 to-blue-500",
            bgGradient: "from-teal-50 to-blue-50"
        },
        {
            icon: <BarChart3 size={56} className="text-blue-500" />,
            title: "Gestão Preditiva no Canteiro",
            description: "Captura rápida via foto, identificação do resíduo por IA e alertas automáticos de desperdício.",
            gradient: "from-blue-500 to-purple-500",
            bgGradient: "from-blue-50 to-purple-50"
        }
    ];

    return (
        <section id="solutions" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-eco-green-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-eco-green-100 to-teal-100 rounded-full mb-6">
                        <Sparkles size={20} className="text-eco-green-600" />
                        <span className="text-sm font-semibold text-eco-green-700">Solução Completa</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-eco-green-700 to-teal-700 bg-clip-text text-transparent leading-tight">
                        Solução 360°
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Uma abordagem completa para fechar o ciclo da construção civil
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="group relative p-8 lg:p-10 rounded-3xl bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Gradient Border on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10`}></div>
                            <div className="absolute inset-[2px] bg-white rounded-3xl -z-10"></div>

                            {/* Icon Container */}
                            <div className={`relative w-28 h-28 rounded-2xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl"></div>
                                {item.icon}
                            </div>

                            {/* Title with Gradient */}
                            <h3 className={`text-2xl lg:text-3xl font-extrabold mb-5 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent leading-tight`}>
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                {item.description}
                            </p>

                            {/* Decorative Corner */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-5 rounded-bl-full transition-opacity duration-500 group-hover:opacity-10`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
