import GoogleMapReact from 'google-map-react';
import { ImLocation2 } from 'react-icons/im';

interface MapParams {
  lat?: number;
  lng?: number;
}

// eslint-disable-next-line no-empty-pattern, react/no-unused-prop-types
function Marker({}: { lat: number; lng: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        color: 'red',
        fontSize: '20px'
      }}
    >
      <ImLocation2 />
    </div>
  );
}

function Map({ lat, lng }: MapParams) {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: String(process.env.MAP_KEY) }}
        defaultCenter={{
          lat: 50.450001,
          lng: 30.523333
        }}
        defaultZoom={17}
        options={{
          keyboardShortcuts: false
        }}
        center={lat && lng ? { lat, lng } : undefined}
      >
        {lat && lng ? <Marker lat={lat} lng={lng} /> : ''}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
