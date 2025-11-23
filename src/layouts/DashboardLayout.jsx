import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    ClipboardList,
    ShoppingBag,
    Truck,
    Factory,
    FileBarChart,
    Settings,
    LogOut,
    Menu,
    Bell,
    User,
    Recycle,
    Sun,
    Moon,
    X
} from 'lucide-react';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    // Detect mobile screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsSidebarOpen(true);
            } else {
                setIsSidebarOpen(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Close sidebar when clicking a link on mobile
    const handleLinkClick = () => {
        if (isMobile) {
            setIsSidebarOpen(false);
        }
    };

    const menuItems = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/app' },
        { name: 'Inventário', icon: <ClipboardList size={20} />, path: '/app/inventory' },
        { name: 'Marketplace', icon: <ShoppingBag size={20} />, path: '/app/marketplace' },
        { name: 'Logística', icon: <Truck size={20} />, path: '/app/logistics' },
        { name: 'Reciclagem', icon: <Factory size={20} />, path: '/app/upcycling' },
        { name: 'Relatórios ESG', icon: <FileBarChart size={20} />, path: '/app/reports' },
        { name: 'Configurações', icon: <Settings size={20} />, path: '/app/settings' },
    ];

    return (
        <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            {/* Mobile Overlay */}
            {isMobile && isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
                    border-r transition-all duration-300 flex flex-col
                    ${isMobile ? 'fixed inset-y-0 left-0 z-50 w-64' : 'relative'}
                    ${isMobile && !isSidebarOpen ? '-translate-x-full' : 'translate-x-0'}
                    ${!isMobile && isSidebarOpen ? 'w-64' : ''}
                    ${!isMobile && !isSidebarOpen ? 'w-20' : ''}`}
            >
                <div className={`p-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} border-b flex items-center justify-between`}>
                    {(isSidebarOpen || isMobile) ? (
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-eco-green-500 p-1.5 rounded-lg text-white group-hover:bg-eco-green-600 transition-colors">
                                <Recycle size={20} />
                            </div>
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                TEC-CICLO <span className="text-eco-green-500">360°</span>
                            </span>
                        </Link>
                    ) : (
                        <Link to="/" className="flex justify-center w-full">
                            <div className="bg-eco-green-500 p-1.5 rounded-lg text-white hover:bg-eco-green-600 transition-colors">
                                <Recycle size={20} />
                            </div>
                        </Link>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className={`p-1 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg ${!isMobile && !isSidebarOpen ? 'hidden' : ''}`}
                    >
                        {isMobile && isSidebarOpen ? (
                            <X size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                        ) : (
                            <Menu size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                        )}
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-1 px-2">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={handleLinkClick}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${location.pathname === item.path
                                        ? 'bg-eco-green-50 text-eco-green-600'
                                        : isDarkMode
                                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    {item.icon}
                                    {(isSidebarOpen || isMobile) && <span className="font-medium">{item.name}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={`p-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} border-t`}>
                    <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
                        <LogOut size={20} />
                        {(isSidebarOpen || isMobile) && <span className="font-medium">Sair</span>}
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b h-16 flex items-center justify-between px-4 md:px-6`}>
                    <div className="flex items-center gap-3">
                        {/* Mobile Menu Button */}
                        {isMobile && (
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className={`p-2 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg md:hidden`}
                            >
                                <Menu size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                            </button>
                        )}
                        {/* Desktop Toggle Button */}
                        {!isMobile && !isSidebarOpen && (
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className={`p-2 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg`}
                            >
                                <Menu size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                            </button>
                        )}
                        <h2 className={`text-base md:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} truncate`}>
                            {menuItems.find(item => item.path === location.pathname)?.name || 'Dashboard'}
                        </h2>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`p-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} rounded-full transition-colors`}
                            title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
                        >
                            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button className={`p-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} rounded-full relative`}>
                            <Bell size={18} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className={`flex items-center gap-2 md:gap-3 pl-2 md:pl-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} border-l`}>
                            <div className="text-right hidden lg:block">
                                <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>ADMakers</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Construtora Alpha</p>
                            </div>
                            <div className={`w-8 h-8 md:w-10 md:h-10 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-500'} rounded-full flex items-center justify-center`}>
                                <User size={18} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
