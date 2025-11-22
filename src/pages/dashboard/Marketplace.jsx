import React from 'react';
import { Search, Filter, MapPin, Tag } from 'lucide-react';

const Marketplace = () => {
    const products = [
        { id: 1, name: 'Areia Reciclada', price: 'R$ 45/m³', location: 'Palmas - Centro', seller: 'Construtora Beta', image: 'https://images.unsplash.com/photo-1621266989738-486c52358b0d?q=80&w=400&auto=format&fit=crop' },
        { id: 2, name: 'Brita Ecológica', price: 'R$ 60/m³', location: 'Taquaralto', seller: 'EcoBrita', image: 'https://images.unsplash.com/photo-1533628635777-112b2239b1c7?q=80&w=400&auto=format&fit=crop' },
        { id: 3, name: 'Tijolo Ecológico', price: 'R$ 1.200/milheiro', location: 'Luzimangues', seller: 'Tijolos Verdes', image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?q=80&w=400&auto=format&fit=crop' },
        { id: 4, name: 'Madeira de Demolição', price: 'R$ 150/m²', location: 'Palmas - Norte', seller: 'Demolidora Silva', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop' },
        { id: 5, name: 'Telhas Cerâmicas', price: 'R$ 2,50/un', location: 'Aureny III', seller: 'Obra Residencial', image: 'https://images.unsplash.com/photo-1628624747186-a941c725611b?q=80&w=400&auto=format&fit=crop' },
        { id: 6, name: 'Tubos PVC (Sobras)', price: 'R$ 80/lote', location: 'Palmas - Sul', seller: 'Engenharia Total', image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=400&auto=format&fit=crop' },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Marketplace Circular</h1>
                <p className="text-gray-600">Compre e venda materiais reciclados e sobras de obra.</p>
            </div>

            {/* Search & Filter Bar */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-8 sticky top-0 z-10">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="O que você está procurando?"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-green-500/20 focus:border-eco-green-500"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 whitespace-nowrap">
                            <MapPin size={18} />
                            Localização
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 whitespace-nowrap">
                            <Tag size={18} />
                            Categoria
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 whitespace-nowrap">
                            <Filter size={18} />
                            Preço
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-900 shadow-sm">
                                {product.price}
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                            <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                                <MapPin size={14} />
                                {product.location}
                            </div>
                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <span className="text-xs text-gray-500">Vendido por <span className="font-medium text-gray-700">{product.seller}</span></span>
                                <button className="bg-eco-green-500 hover:bg-eco-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
