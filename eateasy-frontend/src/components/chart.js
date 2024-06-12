import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.label),
                    datasets: [{
                        label: 'Data',
                        data: data.map(item => item.value),
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }, [data]);

    return (
        <div>
            <h2>Dashboard</h2>
            <canvas id="myChart" width="400" height="400"></canvas>
        </div>
    );
}

export default Dashboard;
