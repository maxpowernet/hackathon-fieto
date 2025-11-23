import React from 'react';
import { FileBarChart, Download, Share2, Leaf, Droplets, Zap } from 'lucide-react';

const ESGReports = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">Relatórios ESG (Ambiental, Social e Governança)</h1>
                    <p className="text-sm md:text-base text-gray-600">Métricas de impacto ambiental e social.</p>
                </div>
                <div className="flex gap-2 md:gap-3">
                    <button className="px-3 md:px-4 py-2 text-sm md:text-base border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2 flex-1 sm:flex-initial">
                        <Share2 size={16} />
                        <span className="hidden sm:inline">Compartilhar</span>
                    </button>
                    <button className="bg-eco-green-500 text-white px-3 md:px-4 py-2 text-sm md:text-base rounded-lg hover:bg-eco-green-600 transition-colors flex items-center justify-center gap-2 flex-1 sm:flex-initial">
                        <Download size={16} />
                        <span className="hidden sm:inline">Exportar PDF</span>
                        <span className="sm:hidden">PDF</span>
                    </button>
                </div>
            </div>

            {/* Impact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 md:p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                        <div className="p-1.5 md:p-2 bg-white/20 rounded-lg">
                            <Leaf size={20} />
                        </div>
                        <span className="text-xs md:text-sm font-medium bg-white/20 px-2 py-1 rounded-full whitespace-nowrap">+15% vs mês anterior</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">125.4 t</h3>
                    <p className="text-xs md:text-base text-green-100">Resíduos Desviados do Aterro</p>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 md:p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                        <div className="p-1.5 md:p-2 bg-white/20 rounded-lg">
                            <Droplets size={20} />
                        </div>
                        <span className="text-xs md:text-sm font-medium bg-white/20 px-2 py-1 rounded-full whitespace-nowrap">+8% vs mês anterior</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">45.2 t</h3>
                    <p className="text-xs md:text-base text-blue-100">CO₂ Evitado na Atmosfera</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-4 md:p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                        <div className="p-1.5 md:p-2 bg-white/20 rounded-lg">
                            <Zap size={20} />
                        </div>
                        <span className="text-xs md:text-sm font-medium bg-white/20 px-2 py-1 rounded-full whitespace-nowrap">+22% vs mês anterior</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">R$ 12.5k</h3>
                    <p className="text-xs md:text-base text-yellow-100">Economia em Materiais</p>
                </div>
            </div>

            {/* Certificates - Desktop Table */}
            <div className="hidden md:block bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Certificados de Destinação</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Documento</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Data</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tipo de Resíduo</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Destino</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Download</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {[1, 2, 3, 4].map((_, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-red-50 text-red-500 rounded-lg">
                                                <FileBarChart size={16} />
                                            </div>
                                            <span className="font-medium text-gray-900">CDF-2025-{100 + i}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">2{i}/11/2025</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Resíduo Classe A</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Usina de Reciclagem Norte</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Baixar PDF</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Certificates - Mobile Cards */}
            <div className="md:hidden space-y-3">
                <h3 className="text-base font-bold text-gray-900 mb-3">Certificados de Destinação</h3>
                {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                        <div className="flex items-start gap-3 mb-3">
                            <div className="p-2 bg-red-50 text-red-500 rounded-lg flex-shrink-0">
                                <FileBarChart size={16} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-gray-900 mb-1">CDF-2025-{100 + i}</h4>
                                <p className="text-xs text-gray-500">2{i}/11/2025</p>
                            </div>
                        </div>
                        <div className="space-y-2 mb-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Tipo:</span>
                                <span className="text-gray-900 font-medium">Resíduo Classe A</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Destino:</span>
                                <span className="text-gray-900 font-medium truncate ml-2">Usina de Reciclagem Norte</span>
                            </div>
                        </div>
                        <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors">
                            Baixar PDF
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ESGReports;
