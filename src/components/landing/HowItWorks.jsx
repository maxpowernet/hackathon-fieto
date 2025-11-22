import React from 'react';
import { Camera, ClipboardCheck, Truck, Factory, RefreshCw, Zap } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Camera size={36} />,
            title: "Captura",
            desc: "Identificação via App",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: <ClipboardCheck size={36} />,
            title: "Inventário",
            desc: "Catalogação automática",
            gradient: "from-cyan-500 to-teal-500"
        },
        {
            icon: <RefreshCw size={36} />,
            title: "Marketplace",
            desc: "Venda ou troca",
            gradient: "from-teal-500 to-green-500"
        },
        {
            icon: <Truck size={36} />,
            title: "Coleta",
            desc: "Logística inteligente",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: <Factory size={36} />,
            title: "Transformação",
            desc: "Geração de novos materiais",
            gradient: "from-emerald-500 to-eco-green-500"
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-100 to-green-100 rounded-full mb-6">
                        <Zap size={20} className="text-teal-600" />
                        <span className="text-sm font-semibold text-teal-700">Processo Simplificado</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-teal-700 to-green-700 bg-clip-text text-transparent leading-tight">
                        Como Funciona
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Do canteiro de obras até o retorno como novo material
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[80px] left-[80px] right-[80px] h-2 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 rounded-full z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 rounded-full animate-pulse opacity-50"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center group"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Large Circular Element */}
                                <div className="relative mb-8">
                                    {/* Outer Glow Ring */}
                                    <div className={`absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-br ${step.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>

                                    {/* Main Circle */}
                                    <div className={`relative w-40 h-40 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                                        {/* Inner Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>

                                        {/* Icon */}
                                        <div className="relative z-10 group-hover:rotate-12 transition-transform duration-500">
                                            {step.icon}
                                        </div>

                                        {/* Step Number Badge */}
                                        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-500">
                                            <span className="text-white text-lg font-extrabold">{index + 1}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Title with Gradient */}
                                <h3 className={`text-2xl font-extrabold mb-3 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-base text-gray-600 font-medium max-w-[200px]">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
