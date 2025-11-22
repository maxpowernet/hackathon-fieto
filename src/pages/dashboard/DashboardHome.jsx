import React from 'react';
import { TrendingUp, Package, DollarSign, Leaf } from 'lucide-react';

const DashboardHome = () => {
    const stats = [
        {
            title: "Resíduos Inventariados",
            value: "12.5 t",
            change: "+2.1 t",
            icon: <Package className="text-blue-500" />,
            bg: "bg-blue-50"
        },
        {
            title: "Economia Gerada",
            value: "R$ 4.250",
            change: "+15%",
            icon: <DollarSign className="text-green-500" />,
            bg: "bg-green-50"
        },
        {
            title: "CO₂ Evitado",
            value: "850 kg",
            change: "+120 kg",
            icon: <Leaf className="text-teal-500" />,
            bg: "bg-teal-50"
        },
        {
            title: "Vendas no Mês",
            value: "24",
            change: "+5",
            icon: <TrendingUp className="text-purple-500" />,
            bg: "bg-purple-50"
        },
    ];

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.bg}`}>
                                {stat.icon}
                            </div>
                            <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Recent Activity & Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Atividade Recente</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                                    OB
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">Resíduo de Concreto cadastrado</p>
                                    <p className="text-xs text-gray-500">Obra Residencial Alpha • Há 2 horas</p>
                                </div>
                                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Novo</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Alerts */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Alertas de Desperdício</h3>
                    <div className="space-y-3">
                        <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <p className="text-sm font-bold text-red-700">Excesso de Entulho</p>
                            </div>
                            <p className="text-xs text-red-600">Obra Centro: Volume 20% acima do previsto.</p>
                        </div>
                        <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <p className="text-sm font-bold text-yellow-700">Coleta Pendente</p>
                            </div>
                            <p className="text-xs text-yellow-600">Lote #452 aguardando retirada há 2 dias.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
