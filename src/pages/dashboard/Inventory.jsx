import React from 'react';
import { Plus, Search, Filter, MoreVertical, AlertCircle } from 'lucide-react';

const Inventory = () => {
    const items = [
        { id: 1, name: 'Resíduo de Concreto', type: 'Classe A', quantity: '5.2 t', status: 'Disponível', date: '22/11/2025', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrt3zE2Bfe6dUXtqZoY7Epczz3RgBzhCVVw&s' },
        { id: 2, name: 'Madeira Mista', type: 'Classe B', quantity: '1.8 t', status: 'Vendido', date: '21/11/2025', image: 'https://bosiomadeiras.com.br/wp-content/uploads/2023/07/83.png' },
        { id: 3, name: 'Tijolos Quebrados', type: 'Classe A', quantity: '3.5 t', status: 'Aguardando Coleta', date: '20/11/2025', image: 'https://media.istockphoto.com/id/1127858879/pt/foto/red-broken-bricks-industrial-background-construction-site-detail-orange-bricks-messy-pile.jpg?s=1024x1024&w=is&k=20&c=VqcMddKTsPOIuZTizxlIMDjWz1iVcEEiERsFL9Pv3Rk=' },
        { id: 4, name: 'Sobras de Tubulação', type: 'Classe B', quantity: '0.5 t', status: 'Disponível', date: '19/11/2025', image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=200&auto=format&fit=crop' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Disponível': return 'bg-green-100 text-green-700';
            case 'Vendido': return 'bg-blue-100 text-blue-700';
            case 'Aguardando Coleta': return 'bg-yellow-100 text-yellow-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 md:mb-8">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">Inventário de Resíduos</h1>
                    <p className="text-sm md:text-base text-gray-600">Gerencie os materiais disponíveis em suas obras.</p>
                </div>

                <div className="flex flex-col gap-3 lg:flex-1 lg:max-w-2xl lg:ml-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar por nome, tipo ou ID..."
                            className="w-full pl-10 pr-4 py-2 md:py-2.5 text-sm md:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-green-500/20 focus:border-eco-green-500"
                        />
                    </div>
                    <div className="flex gap-2 md:gap-3">
                        <button className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 whitespace-nowrap flex-1 sm:flex-initial">
                            <Filter size={18} />
                            <span className="hidden sm:inline">Filtros</span>
                        </button>
                        <button className="bg-eco-green-500 hover:bg-eco-green-600 text-white px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm whitespace-nowrap flex-1 sm:flex-initial">
                            <Plus size={18} />
                            <span className="hidden sm:inline">Novo Registro</span>
                            <span className="sm:hidden">Novo</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Table - Desktop */}
            <div className="hidden md:block bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Material</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tipo</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Quantidade</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Data</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {items.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                                            <span className="font-medium text-gray-900">{item.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{item.type}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{item.quantity}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreVertical size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-gray-200 bg-gray-50 flex items-center justify-center text-sm text-gray-500 gap-2">
                    <AlertCircle size={16} />
                    Mostrando 4 de 12 registros
                </div>
            </div>

            {/* Cards - Mobile */}
            <div className="md:hidden space-y-3">
                {items.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="p-4">
                            <div className="flex items-start gap-3 mb-3">
                                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-gray-900 mb-1 truncate">{item.name}</h3>
                                    <p className="text-sm text-gray-600">{item.type}</p>
                                    <span className={`inline-block mt-2 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                                        {item.status}
                                    </span>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                                    <MoreVertical size={20} />
                                </button>
                            </div>
                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-sm">
                                <div>
                                    <span className="text-gray-500">Quantidade:</span>
                                    <span className="ml-2 font-medium text-gray-900">{item.quantity}</span>
                                </div>
                                <div className="text-gray-500">{item.date}</div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="p-4 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-sm text-gray-500 gap-2">
                    <AlertCircle size={16} />
                    Mostrando 4 de 12 registros
                </div>
            </div>
        </div>
    );
};

export default Inventory;
