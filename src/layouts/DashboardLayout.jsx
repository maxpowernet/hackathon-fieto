import React, { useState } from 'react';
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
    User
} from 'lucide-react';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/app' },
        { name: 'Inventário', icon: <ClipboardList size={20} />, path: '/app/inventory' },
        { name: 'Marketplace', icon: <ShoppingBag size={20} />, path: '/app/marketplace' },
        { name: 'Logística', icon: <Truck size={20} />, path: '/app/logistics' },
        { name: 'Upcycling', icon: <Factory size={20} />, path: '/app/upcycling' },
        { name: 'Relatórios ESG', icon: <FileBarChart size={20} />, path: '/app/reports' },
        { name: 'Configurações', icon: <Settings size={20} />, path: '/app/settings' },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'
                    }`}
            >
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    {isSidebarOpen ? (
                        <span className="text-xl font-bold text-gray-900">TEC-CICLO</span>
                    ) : (
                        <span className="text-xl font-bold text-eco-green-500 mx-auto">TC</span>
                    )}
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-gray-100 rounded-lg">
                        <Menu size={20} className="text-gray-500" />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-1 px-2">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${location.pathname === item.path
                                            ? 'bg-eco-green-50 text-eco-green-600'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    {item.icon}
                                    {isSidebarOpen && <span className="font-medium">{item.name}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
                        <LogOut size={20} />
                        {isSidebarOpen && <span className="font-medium">Sair</span>}
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {menuItems.find(item => item.path === location.pathname)?.name || 'Dashboard'}
                    </h2>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-medium text-gray-900">Max Eldon</p>
                                <p className="text-xs text-gray-500">Construtora Alpha</p>
                            </div>
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                                <User size={20} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
