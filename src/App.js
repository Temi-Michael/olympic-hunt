import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import DataExplorer from './components/DataExplorer';

const App = () => {
    const [selectedItem, setSelectedItem] = useState('Dashboard');
    const sidebarItems = ['Dashboard', 'Data Explorer', 'Settings'];

    const renderContent = () => {
        switch (selectedItem) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Data Explorer':
                return <DataExplorer />;
            case 'Settings':
                return <div>Settings</div>;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div>
            <Header />
            <Sidebar items={sidebarItems} onItemSelect={setSelectedItem} />
            <MainContent>
                {renderContent()}
            </MainContent>
            <Footer />
        </div>
    );
};

export default App;