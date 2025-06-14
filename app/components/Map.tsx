'use client';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { ListingCardItem, SearchResultData } from '../types/app';
import { getCenter } from 'geolib';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const Map = ({ searchResultData }: { searchResultData: SearchResultData }) => {
  const [selectedLocation, setSelectedLocation] = useState<ListingCardItem | null>(null);

  const coordinates = searchResultData.map((listing) => ({
    longitude: listing.long,
    latitude: listing.lat,
  }));

  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };

  return (
    <div className="w-full h-full">
      <MapContainer
        center={[center.latitude, center.longitude]}
        zoom={11}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {searchResultData.map((listing) => (
          <Marker
            key={listing.long}
            position={[listing.lat, listing.long]}
            eventHandlers={{
              click: () => setSelectedLocation(listing),
            }}
          >
            {selectedLocation?.long === listing.long && (
            
            <Popup>
            {listing.location}
            </Popup>
            )}
          </Marker>








        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
