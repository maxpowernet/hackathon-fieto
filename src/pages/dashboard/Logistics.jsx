import React from 'react';
import { Map, Truck, Clock, CheckCircle } from 'lucide-react';

const Logistics = () => {
    return (
        <div className="h-full flex flex-col">
            <div className="mb-4 md:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">Logística Inteligente</h1>
                    <p className="text-sm md:text-base text-gray-600">Acompanhe coletas e entregas em tempo real.</p>
                </div>
                <button className="bg-blue-600 text-white px-3 md:px-4 py-2 text-sm md:text-base rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                    <Truck size={18} />
                    <span className="hidden sm:inline">Solicitar Nova Coleta</span>
                    <span className="sm:hidden">Nova Coleta</span>
                </button>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 min-h-0">
                {/* Map Placeholder */}
                <div className="lg:col-span-2 bg-gray-200 rounded-xl border border-gray-300 flex items-center justify-center relative overflow-hidden group min-h-[300px] md:min-h-[400px]">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                    <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center shadow-lg relative z-10 mx-4">
                        <Map size={40} className="mx-auto text-blue-500 mb-3 md:mb-4 md:w-12 md:h-12" />
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Mapa de Rotas</h3>
                        <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Integração com Google Maps API em breve.</p>
                        <button className="px-3 md:px-4 py-1.5 md:py-2 bg-white border border-gray-300 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-50">
                            Simular Rota
                        </button>
                    </div>
                </div>

                {/* Active Deliveries */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col min-h-[300px] md:min-h-0">
                    <div className="p-3 md:p-4 border-b border-gray-200">
                        <h3 className="text-sm md:text-base font-bold text-gray-900">Coletas em Andamento</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="p-3 md:p-4 border border-gray-100 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                                <div className="flex items-center justify-between mb-2 md:mb-3">
                                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Em Trânsito</span>
                                    <span className="text-xs text-gray-500">Chegada: 14:30</span>
                                </div>
                                <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                                    <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center border border-gray-200 text-gray-600 flex-shrink-0">
                                        <Truck size={14} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-bold text-gray-900 truncate">Caminhão #402</p>
                                        <p className="text-xs text-gray-500 truncate">Motorista: João Silva</p>
                                    </div>
                                </div>
                                <div className="relative pl-3 md:pl-4 border-l-2 border-gray-200 space-y-3 md:space-y-4">
                                    <div className="relative">
                                        <div className="absolute -left-[17px] md:-left-[21px] top-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        <p className="text-xs font-medium text-gray-900 truncate">Coleta: Obra Alpha</p>
                                        <p className="text-[10px] text-gray-500 truncate">Rua das Flores, 123</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[17px] md:-left-[21px] top-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-300 rounded-full border-2 border-white"></div>
                                        <p className="text-xs font-medium text-gray-900 truncate">Destino: Usina de Reciclagem</p>
                                        <p className="text-[10px] text-gray-500 truncate">Distrito Industrial</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logistics;
