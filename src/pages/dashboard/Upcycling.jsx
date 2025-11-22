import React from 'react';
import { Factory, ArrowRight, Box, CheckCircle2 } from 'lucide-react';

const Upcycling = () => {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Indústria & Upcycling</h1>
                <p className="text-gray-600">Transformação de resíduos em novos produtos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Production Line */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Factory className="text-orange-500" />
                        Linha de Produção
                    </h3>

                    <div className="space-y-6">
                        <div className="relative">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Lote #882 - Trituração de Concreto</span>
                                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">Em Processamento</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5">
                                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Estimativa: 45 min restantes</p>
                        </div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Lote #883 - Triagem de Madeira</span>
                                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Aguardando</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5">
                                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <h4 className="text-sm font-bold text-gray-900 mb-4">Entrada de Matéria-Prima</h4>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="min-w-[120px] p-3 bg-gray-50 rounded-lg border border-gray-100 text-center">
                                    <Box className="mx-auto text-gray-400 mb-2" />
                                    <p className="text-xs font-bold text-gray-900">Entulho Misto</p>
                                    <p className="text-xs text-gray-500">5 Toneladas</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Output Products */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <CheckCircle2 className="text-green-500" />
                        Produtos Gerados
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 border border-green-100 bg-green-50/30 rounded-xl">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-3">
                                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=100&auto=format&fit=crop" alt="" className="w-8 h-8 object-cover rounded" />
                            </div>
                            <h4 className="font-bold text-gray-900">Ecocimento</h4>
                            <p className="text-sm text-gray-600 mb-3">Estoque: 500 sacos</p>
                            <button className="w-full py-2 bg-white border border-green-200 text-green-700 text-sm font-bold rounded-lg hover:bg-green-50 transition-colors">
                                Ver Lote
                            </button>
                        </div>

                        <div className="p-4 border border-orange-100 bg-orange-50/30 rounded-xl">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-3">
                                <img src="https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?q=80&w=100&auto=format&fit=crop" alt="" className="w-8 h-8 object-cover rounded" />
                            </div>
                            <h4 className="font-bold text-gray-900">Tijolo Ecológico</h4>
                            <p className="text-sm text-gray-600 mb-3">Estoque: 2.000 un</p>
                            <button className="w-full py-2 bg-white border border-orange-200 text-orange-700 text-sm font-bold rounded-lg hover:bg-orange-50 transition-colors">
                                Ver Lote
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-gray-900 rounded-xl text-white">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-400">Impacto Total</span>
                            <span className="text-eco-green-400 font-bold">+12%</span>
                        </div>
                        <p className="text-2xl font-bold">1.250 Toneladas</p>
                        <p className="text-xs text-gray-400">de material reintroduzido no mercado este mês.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upcycling;
