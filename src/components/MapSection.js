import React from 'react';
import './MapSection.css';
import ChoroplethMap from './ChoroplethMap';
import PieChart from './PieChart';

const MapSection = () => {
    return (
        <div className="mapsection">
            <div className="mapsection-title">
                GLOBAL DISTRIBUTION
            </div>
            <div className="mapsection-wrapper">
                <div className="global-distribution">
                    <div className="global-chef-data">
                        <div className="global-text-content">Total No of Chef</div>
                        <div className="global-value-content">124</div>
                    </div>
                    <div className="global-foodie-data">
                        <div className="global-text-content">Total No of Foodie</div>
                        <div className="global-value-content">1850</div>
                    </div>
                    <div className="global-menu-data">
                        <div className="global-text-content">Total No of Menu</div>
                        <div className="global-value-content">94</div>
                    </div>
                    <div className="global-dish-data">
                        <div className="global-text-content">Total No of Dish</div>
                        <div className="global-value-content">85554</div>
                    </div>
                </div>
                <div className="choropleth-map">
                    <ChoroplethMap />
                </div>
                <div className="orders-pie-chart">
                    <PieChart />
                </div>
            </div>
        </div>
    );
}

export default MapSection;