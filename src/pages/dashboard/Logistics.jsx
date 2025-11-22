import React from 'react';
import { Map, Truck, Clock, CheckCircle } from 'lucide-react';

const Logistics = () => {
    return (
        <div className="h-full flex flex-col">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Logística Inteligente</h1>
                    <p className="text-gray-600">Acompanhe coletas e entregas em tempo real.</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Truck size={20} />
                    Solicitar Nova Coleta
                </button>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
                {/* Map Placeholder */}
                <div className="lg:col-span-2 bg-gray-200 rounded-xl border border-gray-300 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl text-center shadow-lg relative z-10">
                        <Map size={48} className="mx-auto text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Mapa de Rotas</h3>
                        <p className="text-gray-600">Integração com Google Maps API em breve.</p>
                        <button className="mt-4 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                            Simular Rota
                        </button>
                    </div>
                </div>

                {/* Active Deliveries */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
                    <div className="p-4 border-b border-gray-200">
                        <h3 className="font-bold text-gray-900">Coletas em Andamento</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Em Trânsito</span>
                                    <span className="text-xs text-gray-500">Chegada: 14:30</span>
                                </div>
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200 text-gray-600">
                                        <Truck size={16} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Caminhão #402</p>
                                        <p className="text-xs text-gray-500">Motorista: João Silva</p>
                                    </div>
                                </div>
                                <div className="relative pl-4 border-l-2 border-gray-200 space-y-4">
                                    <div className="relative">
                                        <div className="absolute -left-[21px] top-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        <p className="text-xs font-medium text-gray-900">Coleta: Obra Alpha</p>
                                        <p className="text-[10px] text-gray-500">Rua das Flores, 123</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[21px] top-1 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></div>
                                        <p className="text-xs font-medium text-gray-900">Destino: Usina de Reciclagem</p>
                                        <p className="text-[10px] text-gray-500">Distrito Industrial</p>
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
