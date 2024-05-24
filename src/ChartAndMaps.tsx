import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CovidMap from './components/CovidMap';
import LineGraph from './components/LineGraph';
import "./ChartsandMaps.css";

const queryClient = new QueryClient();

const ChartAndMaps: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient} >
            <div className='chartsandmaps'>
                
                <LineGraph  />
                <CovidMap />
            </div>
        </QueryClientProvider>
    );
};

export default ChartAndMaps;

