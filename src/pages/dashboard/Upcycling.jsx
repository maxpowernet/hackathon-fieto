import React from 'react';
import { Factory, ArrowRight, Box, CheckCircle2 } from 'lucide-react';

const Upcycling = () => {
    return (
        <div>
            <div className="mb-6 md:mb-8">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Indústria & Reciclagem</h1>
                <p className="text-sm md:text-base text-gray-600">Transformação de resíduos em novos produtos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* Production Line */}
                <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                        <Factory className="text-orange-500" size={20} />
                        Linha de Produção
                    </h3>

                    <div className="space-y-4 md:space-y-6">
                        <div className="relative">
                            <div className="flex items-center justify-between mb-2 gap-2">
                                <span className="text-xs md:text-sm font-medium text-gray-700 truncate">Lote #882 - Trituração de Concreto</span>
                                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">Em Processamento</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5">
                                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Estimativa: 45 min restantes</p>
                        </div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-2 gap-2">
                                <span className="text-xs md:text-sm font-medium text-gray-700 truncate">Lote #883 - Triagem de Madeira</span>
                                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">Aguardando</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5">
                                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                        <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                            <ArrowRight className="text-blue-500" size={16} />
                            Entrada de Matéria-Prima
                        </h4>
                        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2">
                            <div className="min-w-[120px] md:min-w-[140px] p-3 md:p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 text-center hover:shadow-md transition-all hover:-translate-y-0.5">
                                <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
                                    <Box className="text-white" size={16} />
                                </div>
                                <p className="text-xs font-bold text-gray-900 mb-1">Resíduo de Concreto</p>
                                <p className="text-xs text-blue-700 font-semibold">5.2 Toneladas</p>
                            </div>
                            <div className="min-w-[120px] md:min-w-[140px] p-3 md:p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200 text-center hover:shadow-md transition-all hover:-translate-y-0.5">
                                <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 bg-amber-500 rounded-lg flex items-center justify-center shadow-sm">
                                    <Box className="text-white" size={16} />
                                </div>
                                <p className="text-xs font-bold text-gray-900 mb-1">Madeira Mista</p>
                                <p className="text-xs text-amber-700 font-semibold">1.8 Toneladas</p>
                            </div>
                            <div className="min-w-[120px] md:min-w-[140px] p-3 md:p-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border-2 border-red-200 text-center hover:shadow-md transition-all hover:-translate-y-0.5">
                                <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 bg-red-500 rounded-lg flex items-center justify-center shadow-sm">
                                    <Box className="text-white" size={16} />
                                </div>
                                <p className="text-xs font-bold text-gray-900 mb-1">Tijolos Quebrados</p>
                                <p className="text-xs text-red-700 font-semibold">3.5 Toneladas</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Output Products */}
                <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                        <CheckCircle2 className="text-green-500" size={20} />
                        Produtos Gerados
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {/* Ecocimento */}
                        <div className="group relative overflow-hidden p-4 md:p-5 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="relative w-full h-24 md:h-32 bg-white rounded-xl flex items-center justify-center shadow-md mb-3 md:mb-4 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop"
                                    alt="Ecocimento"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1">Ecocimento</h4>
                            <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 flex items-center gap-1">
                                <Box size={14} className="text-green-600 flex-shrink-0" />
                                Estoque: <span className="font-bold text-green-700">500 sacos</span>
                            </p>
                            <button className="w-full py-2 md:py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs md:text-sm font-bold rounded-xl hover:from-green-700 hover:to-green-800 transition-all shadow-md hover:shadow-lg">
                                Ver Lote
                            </button>
                        </div>

                        {/* Tijolo Ecológico */}
                        <div className="group relative overflow-hidden p-4 md:p-5 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="relative w-full h-24 md:h-32 bg-white rounded-xl flex items-center justify-center shadow-md mb-3 md:mb-4 overflow-hidden">
                                <img
                                    src="https://img.olx.com.br/images/27/278101095576703.jpg"
                                    alt="Tijolo Ecológico"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1">Tijolo Ecológico</h4>
                            <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 flex items-center gap-1">
                                <Box size={14} className="text-orange-600 flex-shrink-0" />
                                Estoque: <span className="font-bold text-orange-700">2.000 un</span>
                            </p>
                            <button className="w-full py-2 md:py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-xs md:text-sm font-bold rounded-xl hover:from-orange-700 hover:to-orange-800 transition-all shadow-md hover:shadow-lg">
                                Ver Lote
                            </button>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-900 rounded-xl text-white">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs md:text-sm font-medium text-gray-400">Impacto Total</span>
                            <span className="text-eco-green-400 font-bold text-sm md:text-base">+12%</span>
                        </div>
                        <p className="text-xl md:text-2xl font-bold">1.250 Toneladas</p>
                        <p className="text-xs text-gray-400">de material reintroduzido no mercado este mês.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upcycling;
