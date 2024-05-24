// src/queries.ts
import { useQuery } from 'react-query';
import axios from 'axios';

// Define TypeScript interfaces for the data
interface WorldwideData {
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
}

interface CountryInfo {
    _id: number;
    lat: number;
    long: number;
}

interface CountryData {
    country: string;
    countryInfo: CountryInfo;
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
}

interface HistoricalData {
    cases: { [date: string]: number };
    deaths: { [date: string]: number };
    recovered: { [date: string]: number };
}

// Fetching functions
const fetchWorldwideData = async (): Promise<WorldwideData> => {
    const { data } = await axios.get('https://disease.sh/v3/covid-19/all');
    return data;
};

const fetchCountriesData = async (): Promise<CountryData[]> => {
    const { data } = await axios.get('https://disease.sh/v3/covid-19/countries');
    return data;
};

const fetchHistoricalData = async (): Promise<HistoricalData> => {
    const { data } = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return data;
};

// Custom hooks using react-query
export const useWorldwideData = () => useQuery<WorldwideData, Error>('worldwideData', fetchWorldwideData);
export const useCountriesData = () => useQuery<CountryData[], Error>('countriesData', fetchCountriesData);
export const useHistoricalData = () => useQuery<HistoricalData, Error>('historicalData', fetchHistoricalData);
