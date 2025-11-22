import React from 'react';
import { Building2, Factory, Truck, Users, Landmark, Award } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: <Building2 size={40} className="text-blue-500" />,
            title: "Para Construtoras",
            items: ["Menos desperdício", "Redução de custos", "Compliance ambiental"],
            gradient: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50"
        },
        {
            icon: <Factory size={40} className="text-orange-500" />,
            title: "Para Indústrias",
            items: ["Matéria-prima reciclada", "Novos produtos", "Certificação verde"],
            gradient: "from-orange-500 to-amber-500",
            bgColor: "bg-orange-50"
        },
        {
            icon: <Truck size={40} className="text-yellow-500" />,
            title: "Para Transportadores",
            items: ["Mais corridas", "Roteamento otimizado", "Pagamento rápido"],
            gradient: "from-yellow-500 to-orange-500",
            bgColor: "bg-yellow-50"
        },
        {
            icon: <Users size={40} className="text-green-500" />,
            title: "Para Cooperativas",
            items: ["Formalização", "Aumento de demanda", "Inclusão social"],
            gradient: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50"
        },
        {
            icon: <Landmark size={40} className="text-purple-500" />,
            title: "Para o Governo",
            items: ["Indicadores ESG", "Economia circular local", "Gestão de resíduos"],
            gradient: "from-purple-500 to-violet-500",
            bgColor: "bg-purple-50"
        }
    ];

    return (
        <section id="benefits" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
                        <Award size={20} className="text-purple-600" />
                        <span className="text-sm font-semibold text-purple-700">Impacto Positivo</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight">
                        Benefícios para Todos
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Impacto positivo em toda a cadeia produtiva
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative p-8 lg:p-10 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-transparent shadow-[8px_8px_24px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl`}></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-5 mb-6">
                                    {/* Icon Container */}
                                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl"></div>
                                        {benefit.icon}
                                    </div>

                                    {/* Title with Gradient */}
                                    <h3 className={`text-2xl lg:text-3xl font-extrabold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent leading-tight flex-1`}>
                                        {benefit.title}
                                    </h3>
                                </div>

                                {/* Benefits List */}
                                <ul className="space-y-3">
                                    {benefit.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-base lg:text-lg font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Decorative Corner */}
                            <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${benefit.gradient} opacity-5 rounded-tl-full transition-opacity duration-500 group-hover:opacity-10`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
