import React from 'react';
import { TrendingUp, Package, DollarSign, Leaf, Clock, AlertTriangle } from 'lucide-react';

const DashboardHome = () => {
    const stats = [
        {
            title: "Resíduos Inventariados",
            value: "12.5 t",
            change: "+2.1 t",
            icon: <Package className="text-white" />,
            gradient: "from-blue-500 to-blue-600",
            lightBg: "bg-blue-50",
            changeColor: "text-blue-600 bg-blue-50"
        },
        {
            title: "Economia Gerada",
            value: "R$ 4.250",
            change: "+15%",
            icon: <DollarSign className="text-white" />,
            gradient: "from-green-500 to-green-600",
            lightBg: "bg-green-50",
            changeColor: "text-green-600 bg-green-50"
        },
        {
            title: "CO₂ Evitado",
            value: "850 kg",
            change: "+120 kg",
            icon: <Leaf className="text-white" />,
            gradient: "from-teal-500 to-teal-600",
            lightBg: "bg-teal-50",
            changeColor: "text-teal-600 bg-teal-50"
        },
        {
            title: "Vendas no Mês",
            value: "24",
            change: "+5",
            icon: <TrendingUp className="text-white" />,
            gradient: "from-purple-500 to-purple-600",
            lightBg: "bg-purple-50",
            changeColor: "text-purple-600 bg-purple-50"
        },
    ];

    return (
        <div className="space-y-4 md:space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="group bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-3 md:mb-4">
                            <div className={`p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                                {stat.icon}
                            </div>
                            <span className={`text-xs font-bold ${stat.changeColor} px-2.5 md:px-3 py-1 md:py-1.5 rounded-full`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1 md:mb-2">{stat.title}</h3>
                        <p className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Recent Activity & Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                        <Clock size={18} className="text-blue-500" />
                        Atividade Recente
                    </h3>
                    <div className="space-y-2 md:space-y-3">
                        {/* Item 1 - Resíduo de Concreto */}
                        <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border border-blue-100 hover:shadow-md transition-all">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                                <Package size={18} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-900 truncate">Resíduo de Concreto cadastrado</p>
                                <p className="text-xs text-gray-500 mt-0.5 truncate">Obra Residencial Parque • 5.2 t • Há 2 horas</p>
                            </div>
                            <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 md:px-3 py-1 md:py-1.5 rounded-full whitespace-nowrap flex-shrink-0">Novo</span>
                        </div>

                        {/* Item 2 - Madeira Mista */}
                        <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-amber-50 to-transparent rounded-xl border border-amber-100 hover:shadow-md transition-all">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                                <Package size={18} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-900 truncate">Madeira Mista vendida</p>
                                <p className="text-xs text-gray-500 mt-0.5 truncate">Marketplace • 1.8 t • Há 5 horas</p>
                            </div>
                            <span className="text-xs font-bold text-green-600 bg-green-100 px-2 md:px-3 py-1 md:py-1.5 rounded-full whitespace-nowrap flex-shrink-0">Vendido</span>
                        </div>

                        {/* Item 3 - Tijolos Quebrados */}
                        <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border border-orange-100 hover:shadow-md transition-all">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                                <Package size={18} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-900 truncate">Tijolos Quebrados em coleta</p>
                                <p className="text-xs text-gray-500 mt-0.5 truncate">Logística • 3.5 t • Há 1 dia</p>
                            </div>
                            <span className="text-xs font-bold text-yellow-600 bg-yellow-100 px-2 md:px-3 py-1 md:py-1.5 rounded-full whitespace-nowrap flex-shrink-0">Coleta</span>
                        </div>
                    </div>
                </div>

                {/* Alerts */}
                <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                        <AlertTriangle size={18} className="text-red-500" />
                        Alertas de Desperdício
                    </h3>
                    <div className="space-y-2 md:space-y-3">
                        <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                                <p className="text-sm font-bold text-red-700">Excesso de Entulho</p>
                            </div>
                            <p className="text-xs text-red-600">Obra Centro: Volume 20% acima do previsto.</p>
                        </div>
                        <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
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
