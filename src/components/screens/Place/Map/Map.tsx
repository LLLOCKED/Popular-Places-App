import GoogleMapReact from "google-map-react";
import { ImLocation2 } from "react-icons/im";

type MapParams = {
  lat?: number;
  lng?: number;
};

const Marker = ({ text }: { lat: number; lng: number; text: string }) => (
  <div style={{ position: "absolute", transform: "translate(-50%, -50%)", color: "red", fontSize: "20px" }}>
    <ImLocation2 />
    {/* {text} */}
  </div>
);

const Map = ({ lat, lng }: MapParams) => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: String(process.env.MAP_KEY) }}
        defaultCenter={{
          lat: 50.450001,
          lng: 30.523333,
        }}
        defaultZoom={17}
        options={{
          keyboardShortcuts: false,
        }}
        center={
          lat && lng
            ? {
                lat: lat,
                lng: lng,
              }
            : undefined
        }
      >
        {lat && lng ? <Marker lat={lat} lng={lng} text="This" /> : ""}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
