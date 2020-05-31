import React from 'react';
import './App.css';
import SideNav from './components/SideNav';
import Header from './components/Header';
import DataBar from './components/DataBar';
import MapSection from './components/MapSection';


const App = () => {
    return (
        <div className="container">
            <div className="sidenav">
                <SideNav />
            </div>
            <div className="main">
                <Header />
                <DataBar />
                <MapSection />
            </div>
        </div>
    );
}

export default App;