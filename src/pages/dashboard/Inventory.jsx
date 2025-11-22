import React from 'react';
import { Plus, Search, Filter, MoreVertical, AlertCircle } from 'lucide-react';

const Inventory = () => {
    const items = [
        { id: 1, name: 'Resíduo de Concreto', type: 'Classe A', quantity: '5.2 t', status: 'Disponível', date: '22/11/2025', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=200&auto=format&fit=crop' },
        { id: 2, name: 'Restos de Madeira', type: 'Classe B', quantity: '1.8 t', status: 'Vendido', date: '21/11/2025', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=200&auto=format&fit=crop' },
        { id: 3, name: 'Tijolos Quebrados', type: 'Classe A', quantity: '3.5 t', status: 'Aguardando Coleta', date: '20/11/2025', image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?q=80&w=200&auto=format&fit=crop' },
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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Inventário de Resíduos</h1>
                    <p className="text-gray-600">Gerencie os materiais disponíveis em suas obras.</p>
                </div>
                <button className="bg-eco-green-500 hover:bg-eco-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                    <Plus size={20} />
                    Novo Registro
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Buscar por nome, tipo ou ID..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-green-500/20 focus:border-eco-green-500"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
                    <Filter size={20} />
                    Filtros
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
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
        </div>
    );
};

export default Inventory;
