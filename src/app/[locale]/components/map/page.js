'use client'
import React from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from '../../../../../utils/apiKeys';

const center = {
  lat: 31.91625355541401,
  lng: 131.42272899976493,
};

const Map = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-4 md:pr-32 sm:pr-8 pr-8 ml-4 sm:ml-0">
      <div className="relative w-full h-72 sm:h-52 md:h-52 lg:h-[300px] rounded-xl overflow-hidden shadow-lg">
        <LoadScript googleMapsApiKey= {GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={10}
          >
            {/* Add markers or children here */}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;
