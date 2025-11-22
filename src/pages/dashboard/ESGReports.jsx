import React from 'react';
import { FileBarChart, Download, Share2, Leaf, Droplets, Zap } from 'lucide-react';

const ESGReports = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Relatórios ESG</h1>
                    <p className="text-gray-600">Métricas de impacto ambiental e social.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                        <Share2 size={18} />
                        Compartilhar
                    </button>
                    <button className="bg-eco-green-500 text-white px-4 py-2 rounded-lg hover:bg-eco-green-600 transition-colors flex items-center gap-2">
                        <Download size={18} />
                        Exportar PDF
                    </button>
                </div>
            </div>

            {/* Impact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <Leaf size={24} />
                        </div>
                        <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">+15% vs mês anterior</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1">125.4 t</h3>
                    <p className="text-green-100">Resíduos Desviados do Aterro</p>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <Droplets size={24} />
                        </div>
                        <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">+8% vs mês anterior</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1">45.2 t</h3>
                    <p className="text-blue-100">CO₂ Evitado na Atmosfera</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <Zap size={24} />
                        </div>
                        <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">+22% vs mês anterior</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1">R$ 12.5k</h3>
                    <p className="text-yellow-100">Economia em Materiais</p>
                </div>
            </div>

            {/* Certificates */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
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
        </div>
    );
};

export default ESGReports;
