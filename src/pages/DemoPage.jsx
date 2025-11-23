import React, { useState, useEffect } from 'react';
import {
    Camera, CheckCircle, Truck, Factory, ShoppingBag,
    ArrowRight, RefreshCw, MapPin, BarChart3, ChevronRight,
    Package, DollarSign, Leaf, AlertCircle, Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DemoPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const steps = [
        { id: 0, title: "Captura", icon: <Camera size={20} /> },
        { id: 1, title: "Inventário", icon: <Package size={20} /> },
        { id: 2, title: "Marketplace", icon: <ShoppingBag size={20} /> },
        { id: 3, title: "Logística", icon: <Truck size={20} /> },
        { id: 4, title: "Transformação", icon: <Factory size={20} /> }
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setIsProcessing(true);
            setTimeout(() => {
                setIsProcessing(false);
                setCurrentStep(prev => prev + 1);
                setShowSuccess(false);
            }, 750);
        }
    };

    const simulateCapture = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setCapturedImage("https://images.unsplash.com/photo-1590059390047-58e601af72d4?q=80&w=1000&auto=format&fit=crop");
            setIsProcessing(false);
            setShowSuccess(true);
        }, 1000);
    };

    // Render Step Content
    const renderStepContent = () => {
        switch (currentStep) {
            case 0: // Captura
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Identificação de Resíduo</h2>
                            <p className="text-gray-600">Tire uma foto do resíduo para identificação automática via IA.</p>
                        </div>

                        <div className="relative aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center group cursor-pointer hover:border-eco-green-500 transition-colors" onClick={!capturedImage ? simulateCapture : undefined}>
                            {isProcessing ? (
                                <div className="flex flex-col items-center gap-3">
                                    <Loader2 className="w-12 h-12 text-eco-green-500 animate-spin" />
                                    <span className="text-eco-green-600 font-medium">Analisando imagem...</span>
                                </div>
                            ) : capturedImage ? (
                                <>
                                    <img src={capturedImage} alt="Resíduo Capturado" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6 backdrop-blur-sm">
                                        <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">Identificado!</h3>
                                        <div className="bg-white/20 rounded-xl p-4 w-full max-w-xs backdrop-blur-md">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-200">Material:</span>
                                                <span className="font-bold">Concreto (Classe A)</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-200">Volume Est.:</span>
                                                <span className="font-bold">2.5 m³</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-200">Confiança:</span>
                                                <span className="font-bold text-green-400">98%</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col items-center gap-4 text-gray-400 group-hover:text-eco-green-500 transition-colors">
                                    <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center">
                                        <Camera size={40} />
                                    </div>
                                    <span className="font-medium">Toque para capturar</span>
                                </div>
                            )}
                        </div>

                        {capturedImage && (
                            <button
                                onClick={handleNext}
                                className="w-full bg-eco-green-500 hover:bg-eco-green-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-eco-green-500/30 flex items-center justify-center gap-2 transition-all"
                            >
                                Adicionar ao Inventário <ArrowRight size={20} />
                            </button>
                        )}
                    </div>
                );

            case 1: // Inventário
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">Meu Inventário</h2>
                            <span className="bg-eco-green-100 text-eco-green-700 px-3 py-1 rounded-full text-sm font-bold">3 Itens</span>
                        </div>

                        <div className="space-y-4">
                            {/* Item Recém Adicionado */}
                            <div className="bg-white border-l-4 border-eco-green-500 rounded-xl p-4 shadow-sm flex items-center gap-4 ring-2 ring-eco-green-100">
                                <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrt3zE2Bfe6dUXtqZoY7Epczz3RgBzhCVVw&s" alt="Concreto" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-gray-900">Resíduo de Concreto</h3>
                                        <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">NOVO</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Obra: Residencial Parque</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm">
                                        <span className="flex items-center gap-1 text-gray-600"><Package size={14} /> 2.5 m³</span>
                                        <span className="flex items-center gap-1 text-gray-600"><MapPin size={14} /> Palmas, TO</span>
                                    </div>
                                </div>
                            </div>

                            {/* Outros Itens */}
                            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 opacity-60">
                                <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden">
                                    <img src="https://bosiomadeiras.com.br/wp-content/uploads/2023/07/83.png" alt="Madeira Mista" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900">Madeira Mista</h3>
                                    <p className="text-sm text-gray-500">Obra: Comercial Centro</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm">
                                        <span className="flex items-center gap-1 text-gray-600"><Package size={14} /> 5.0 m³</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start">
                            <AlertCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                            <div>
                                <h4 className="font-bold text-blue-700 text-sm">Oportunidade Detectada</h4>
                                <p className="text-blue-600 text-sm mt-1">Há 2 compradores interessados em Concreto na sua região.</p>
                            </div>
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
                        >
                            Anunciar no Marketplace <ShoppingBag size={20} />
                        </button>
                    </div>
                );

            case 2: // Marketplace
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Ofertas Recebidas</h2>
                            <p className="text-gray-600">Selecione a melhor proposta para seu material</p>
                        </div>

                        <div className="space-y-4">
                            {/* Oferta 1 */}
                            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-eco-green-500 hover:shadow-md transition-all cursor-pointer group" onClick={handleNext}>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                                            IB
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Indústria de Blocos TO</h3>
                                            <div className="flex items-center gap-1 text-xs text-yellow-500">
                                                ★★★★★ <span className="text-gray-400">(4.9)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-2xl font-bold text-eco-green-600">R$ 150,00</span>
                                        <span className="text-xs text-gray-500">pelo lote</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4">
                                    <span className="flex items-center gap-1 text-gray-600"><Truck size={14} /> Coleta em 24h</span>
                                    <span className="text-eco-green-600 font-bold group-hover:underline">Aceitar Oferta →</span>
                                </div>
                            </div>

                            {/* Oferta 2 */}
                            <div className="bg-white border border-gray-200 rounded-xl p-5 opacity-75">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                            CR
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Coop. Recicla Mais</h3>
                                            <div className="flex items-center gap-1 text-xs text-yellow-500">
                                                ★★★★☆ <span className="text-gray-400">(4.5)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-2xl font-bold text-gray-900">R$ 120,00</span>
                                        <span className="text-xs text-gray-500">pelo lote</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4">
                                    <span className="flex items-center gap-1 text-gray-600"><Truck size={14} /> Coleta em 48h</span>
                                    <span className="text-gray-400 font-medium">Aceitar Oferta</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 3: // Logística
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Motoristas Disponíveis</h2>
                            <p className="text-gray-600">Selecione um motorista para solicitar o frete</p>
                        </div>

                        <div className="space-y-4">
                            {/* Motorista 1 - Destaque */}
                            <div className="bg-white border-2 border-eco-green-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full bg-eco-green-100 flex items-center justify-center flex-shrink-0">
                                        <Truck className="text-eco-green-600" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-bold text-gray-900 text-sm">Carlos Silva</h3>
                                            <span className="bg-eco-green-100 text-eco-green-700 px-2 py-0.5 rounded text-xs font-bold">RECOMENDADO</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-yellow-500 mb-1">
                                            ★★★★★ <span className="text-gray-400">(4.9)</span>
                                        </div>
                                        <p className="flex items-center gap-2 text-sm text-gray-600">
                                            <Truck size={14} className="text-gray-400" />
                                            <span className="font-medium">Caminhão Caçamba 8m³</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <div>
                                        <p className="text-xs text-gray-500">Valor do Frete</p>
                                        <p className="text-xl font-bold text-eco-green-600">R$ 180,00</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500">Contato</p>
                                        <p className="text-sm font-medium text-gray-900">(63) 99123-4567</p>
                                    </div>
                                </div>
                            </div>

                            {/* Motorista 2 */}
                            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:shadow-md transition-all">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <Truck className="text-blue-600" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-900 mb-1 text-sm">João Pereira</h3>
                                        <div className="flex items-center gap-1 text-xs text-yellow-500 mb-1">
                                            ★★★★☆ <span className="text-gray-400">(4.6)</span>
                                        </div>
                                        <p className="flex items-center gap-2 text-sm text-gray-600">
                                            <Truck size={14} className="text-gray-400" />
                                            <span className="font-medium">Carreta Basculante 12m³</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <div>
                                        <p className="text-xs text-gray-500">Valor do Frete</p>
                                        <p className="text-xl font-bold text-gray-900">R$ 220,00</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500">Contato</p>
                                        <p className="text-sm font-medium text-gray-900">(63) 99234-5678</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                        >
                            Simular Entrega <CheckCircle size={20} />
                        </button>
                    </div>
                );

            case 4: // Transformação
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                <Leaf className="text-green-600 w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Ciclo Fechado!</h2>
                            <p className="text-gray-600">Seu resíduo foi transformado com sucesso.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
                                <div className="text-3xl font-bold text-eco-green-600 mb-1">2.5 m³</div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Resíduo Evitado</div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-1">150 kg</div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">CO2 Poupado</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-eco-green-50 to-teal-50 p-6 rounded-2xl border border-eco-green-100">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <RefreshCw size={18} className="text-eco-green-600" />
                                Novo Destino
                            </h3>
                            <div className="flex items-center gap-4">
                                <img src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=200" alt="Tijolo Ecológico" className="w-20 h-20 rounded-lg object-cover shadow-md" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Blocos de Concreto Reciclado</h4>
                                    <p className="text-sm text-gray-600 mt-1">Seu resíduo virou matéria-prima para construção de casas populares.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Link to="/" className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-bold text-center transition-colors">
                                Voltar ao Início
                            </Link>
                            <Link to="/app/inventory" className="flex-1 bg-eco-green-500 hover:bg-eco-green-600 text-white py-4 rounded-xl font-bold text-center transition-colors flex items-center justify-center">
                                Marketplace
                            </Link>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header Simplificado */}
            <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
                <div className="max-w-md mx-auto flex items-center justify-between">
                    <Link to="/" className="text-gray-500 hover:text-gray-900">
                        <ChevronRight className="rotate-180" />
                    </Link>
                    <h1 className="font-bold text-gray-900">Demonstração Interativa</h1>
                    <div className="w-6"></div> {/* Spacer */}
                </div>
            </header>

            {/* Progress Bar */}
            <div className="bg-white pt-4 pb-2 px-6">
                <div className="max-w-md mx-auto">
                    <div className="flex justify-between mb-2 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
                        <div
                            className="absolute top-1/2 left-0 h-1 bg-eco-green-500 -translate-y-1/2 z-0 transition-all duration-500"
                            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                        ></div>

                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${index <= currentStep
                                    ? 'bg-eco-green-500 text-white scale-110 shadow-lg shadow-eco-green-500/30'
                                    : 'bg-gray-200 text-gray-400'
                                    }`}
                            >
                                {index < currentStep ? <CheckCircle size={14} /> : index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-2">
                        <span className="text-sm font-bold text-gray-900">{steps[currentStep].title}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 p-6 flex flex-col max-w-md mx-auto w-full">
                <div className="flex-1 flex flex-col justify-center">
                    {renderStepContent()}
                </div>
            </main>
        </div>
    );
};

export default DemoPage;
