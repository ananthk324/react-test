import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './doughnutchart.css'

export default function DoughnutChart() {

    const [doughnut, setdoughnut] = useState('')

    const chart = () => {
        setdoughnut({
            labels: ['Order delivered', 'Order booked', 'Order cancelled'],
            datasets: [
                {
                    data: [50, 40, 30],
                    backgroundColor: ['#095D31', '#F3CFCF', '#EC3D3D']
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])


    return (
        <div>
            ORDERS
            <Doughnut data={doughnut}
                width={200} height={250}
                options={{
                    responsive: true,
                    legend: {
                        display: true,
                        position: "bottom",
                        align: 'start',
                        labels: {
                            boxWidth: 15,
                            fontSize: 15,
                            fontColor: 'black',
                            fontStyle: 'normal',
                            fontColor: 'black'
                        }
                    }
                }}
            />
        </div>
    )
}
