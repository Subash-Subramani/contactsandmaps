import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapContainerProps } from 'react-leaflet'; // Import MapContainerProps
import { useCountriesData } from '../queries'; // useCountriesData fetches country data
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./maps.css"

// Fix for leaflet's default icon not showing in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const CovidMap: React.FC = () => {
    const { data, isLoading, error } = useCountriesData();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;


    const mapContainerProps: MapContainerProps = {
        center: [20, 0],
        zoom: 2,
        style: { height: "45%", width: "100%" },
    };

    return (
        
            <MapContainer {...mapContainerProps}
                
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data?.map((country) => (
                    <Marker key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]}>
                        <Popup>
                            <div>
                                <h3>{country.country}</h3>
                                <p>Active: {country.active}</p>
                                <p>Recovered: {country.recovered}</p>
                                <p>Deaths: {country.deaths}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        
        
    );
    
};

export default CovidMap;
