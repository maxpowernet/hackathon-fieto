import React from 'react';
import { Search, Filter, MapPin, Tag } from 'lucide-react';

const Marketplace = () => {
    const products = [
        { id: 1, name: 'Areia Reciclada', price: 'R$ 45/m³', location: 'Palmas - Centro', seller: 'Construtora Beta', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpsQFrBIG4ML8O47xNwRdn9GLxBwWntNxiHSHXfSAtsYmYkvEoTaX592YUyME1YD6s_M&usqp=CAU' },
        { id: 2, name: 'Brita Ecológica', price: 'R$ 60/m³', location: 'Taquaralto', seller: 'EcoBrita', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohI3YyeMTCYFEyasK7_m613Ph2PiV5KCd_g&s' },
        { id: 3, name: 'Tijolo Ecológico', price: 'R$ 1.200/milheiro', location: 'Luzimangues', seller: 'Tijolos Verdes', image: 'https://img.olx.com.br/images/27/278101095576703.jpg' },
        { id: 4, name: 'Madeira de Demolição', price: 'R$ 150/m²', location: 'Palmas - Norte', seller: 'Demolidora Silva', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop' },
        { id: 5, name: 'Telhas Cerâmicas', price: 'R$ 2,50/un', location: 'Aureny III', seller: 'Obra Residencial', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSQpGIcQanbX6oAyAzRxDBPog6lgR7cktNg&s' },
        { id: 6, name: 'Tubos PVC (Sobras)', price: 'R$ 80/lote', location: 'Palmas - Sul', seller: 'Engenharia Total', image: 'https://sucatasbim.com.br/site/midia/?im=site/catalogo/281/tubo2.jpg' },
    ];

    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 md:mb-8">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">Marketplace Circular</h1>
                    <p className="text-sm md:text-base text-gray-600">Compre e venda materiais reciclados e sobras de obra.</p>
                </div>

                <div className="flex flex-col gap-3 lg:flex-1 lg:max-w-3xl lg:ml-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="O que você está procurando?"
                            className="w-full pl-10 pr-4 py-2 md:py-2.5 text-sm md:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-green-500/20 focus:border-eco-green-500"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <button className="flex items-center justify-center gap-1.5 md:gap-2 px-2 md:px-4 py-2 md:py-2.5 text-xs md:text-base border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 whitespace-nowrap">
                            <MapPin size={16} className="flex-shrink-0" />
                            <span className="hidden sm:inline">Localização</span>
                            <span className="sm:hidden">Local</span>
                        </button>
                        <button className="flex items-center justify-center gap-1.5 md:gap-2 px-2 md:px-4 py-2 md:py-2.5 text-xs md:text-base border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 whitespace-nowrap">
                            <Tag size={16} className="flex-shrink-0" />
                            <span className="hidden sm:inline">Categoria</span>
                            <span className="sm:hidden">Cat.</span>
                        </button>
                        <button className="flex items-center justify-center gap-1.5 md:gap-2 px-2 md:px-4 py-2 md:py-2.5 text-xs md:text-base border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 whitespace-nowrap">
                            <Filter size={16} className="flex-shrink-0" />
                            Preço
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                    <div key={product.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="relative h-40 md:h-48 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-900 shadow-sm">
                                {product.price}
                            </div>
                        </div>
                        <div className="p-3 md:p-4">
                            <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base truncate">{product.name}</h3>
                            <div className="flex items-center gap-1 text-xs md:text-sm text-gray-500 mb-3">
                                <MapPin size={14} className="flex-shrink-0" />
                                <span className="truncate">{product.location}</span>
                            </div>
                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <span className="text-xs text-gray-500 truncate mr-2">
                                    <span className="hidden sm:inline">Vendido por </span>
                                    <span className="font-medium text-gray-700">{product.seller}</span>
                                </span>
                                <button className="bg-eco-green-500 hover:bg-eco-green-600 text-white px-2.5 md:px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0">
                                    <span className="hidden sm:inline">Ver Detalhes</span>
                                    <span className="sm:hidden">Ver</span>
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
