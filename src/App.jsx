import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import Inventory from './pages/dashboard/Inventory';
import Marketplace from './pages/dashboard/Marketplace';
import Logistics from './pages/dashboard/Logistics';
import Upcycling from './pages/dashboard/Upcycling';
import ESGReports from './pages/dashboard/ESGReports';
import DemoPage from './pages/DemoPage';

// Placeholders for other pages
const SettingsPlaceholder = () => <div className="p-4">Configurações (Em breve)</div>;

// Placeholder for Login/Register
const LoginPlaceholder = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Login</h1>
      <p className="text-gray-600">Em construção...</p>
    </div>
  </div>
);

const RegisterPlaceholder = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Criar Conta</h1>
      <p className="text-gray-600">Em construção...</p>
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/demo" element={<DemoPage />} />

      <Route path="/app" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="logistics" element={<Logistics />} />
        <Route path="upcycling" element={<Upcycling />} />
        <Route path="reports" element={<ESGReports />} />
        <Route path="settings" element={<SettingsPlaceholder />} />
      </Route>

      <Route path="/login" element={<LoginPlaceholder />} />
      <Route path="/register" element={<RegisterPlaceholder />} />
    </Routes>
  );
}

export default App;
