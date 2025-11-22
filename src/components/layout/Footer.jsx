import React from 'react';
import { Recycle, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <Recycle className="text-eco-green-500" size={24} />
                            <span className="text-xl font-bold">TEC-CICLO 360°</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Transformando resíduos em oportunidades para um futuro mais sustentável.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-eco-green-500 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-eco-green-500 transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-eco-green-500 transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Plataforma</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-eco-green-500 transition-colors">Sobre</a></li>
                            <li><a href="#" className="hover:text-eco-green-500 transition-colors">Soluções</a></li>
                            <li><a href="#" className="hover:text-eco-green-500 transition-colors">Marketplace</a></li>
                            <li><a href="#" className="hover:text-eco-green-500 transition-colors">Planos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-eco-green-500 transition-colors">Termos de Uso</a></li>
                            <li><a href="#" className="hover:text-eco-green-500 transition-colors">Privacidade</a></li>
                            <li><a href="#" className="hover:text-eco-green-500 transition-colors">Compliance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Contato</h4>
                        <ul className="space-y-2 text-sm">
                            <li>contato@tecciclo360.com.br</li>
                            <li>Palmas - TO</li>
                            <li>Hackathon Fieto 2025</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-xs">
                    <p>&copy; 2025 TEC-CICLO 360°. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
