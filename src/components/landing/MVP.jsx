import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

const MVP = () => {
    const features = [
        { name: "App com Quick Capture", status: "ready" },
        { name: "Painel web administrativo", status: "ready" },
        { name: "IA de classificação inicial", status: "progress" },
        { name: "Logística estilo Uber", status: "progress" },
        { name: "Certificação digital", status: "planned" }
    ];

    return (
        <section id="mvp" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <span className="text-eco-green-400 font-bold tracking-wider text-sm uppercase mb-2 block">Roadmap</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">MVP – Em 90 dias</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Estamos construindo o futuro da construção civil. Nossa primeira versão já entrega valor real para os primeiros parceiros.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <CheckCircle2 className="text-eco-green-500" size={16} /> Pronto
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Clock className="text-yellow-500" size={16} /> Em desenvolvimento
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-700/50">
                                        <span className="font-medium">{feature.name}</span>
                                        {feature.status === 'ready' && <CheckCircle2 className="text-eco-green-500" />}
                                        {feature.status === 'progress' && <Clock className="text-yellow-500 animate-pulse" />}
                                        {feature.status === 'planned' && <div className="w-5 h-5 rounded-full border-2 border-gray-600"></div>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MVP;
