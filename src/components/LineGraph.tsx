// src/components/LineGraph.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { useHistoricalData } from '../queries';
import "./maps.css"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineGraph: React.FC = () => {
    const { data, isLoading, error } = useHistoricalData();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    const chartData = {
        labels: Object.keys(data?.cases || {}),
        datasets: [
            {
                label: 'Cases',
                data: Object.values(data?.cases || {}),
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
            {
                label: 'Deaths',
                data: Object.values(data?.deaths || {}),
                borderColor: 'rgba(255,99,132,1)',
                fill: false,
            },
            {
                label: 'Recovered',
                data: Object.values(data?.recovered || {}),
                borderColor: 'rgba(153,102,255,1)',
                fill: false,
            },
        ],
    };

    return (
        <div className="chart-container">
            <Line data={chartData} />
        </div>
    );
};

export default LineGraph;
