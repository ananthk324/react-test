import React from 'react';
import './DataBar.css';

const DataBar = () => {
    return (
        <>
            <div className="databar-title">
            TODAY'S DATA
            </div>
            <div className="databar-container">
                <div className="data-rectangle">
                    <div className="value">
                        $1425
                    </div>
                    <div className="text-content">
                        Revenue
                    </div>
                </div>
                <div className="data-rectangle">
                    <div className="value">
                        102
                    </div>
                    <div className="text-content">
                        New Chef
                    </div>
                </div>
                <div className="data-rectangle">
                    <div className="value">
                        125
                    </div>
                    <div className="text-content">
                        New Foodie
                    </div>
                </div>
                <div className="data-rectangle">
                    <div className="value">
                        21
                    </div>
                    <div className="text-content">
                        New Menu
                    </div>
                </div>
                <div className="data-rectangle">
                    <div className="value">
                        156
                    </div>
                    <div className="text-content">
                        New Dish
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataBar;