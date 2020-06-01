import React from 'react';
import './Home.css';
import SideNav from '../components/SideNav';
import Header from '../components/Header';
import DataBar from '../components/DataBar';
import MapSection from '../components/MapSection';


const Home = () => {
    return (
        <div className="container">
            <SideNav />
            <div className="main">
                <Header />
                <DataBar />
                <MapSection />
            </div>
        </div>
    );
}

export default Home;