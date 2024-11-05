import React, { useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { TowTruck } from "@/types";

window.Pusher = Pusher;

const LiveMap = ({
    towTruckId,
    evacuator,
}: {
    towTruckId: number;
    evacuator: TowTruck;
}) => {
    const [location, setLocation] = useState({
        lat: evacuator.latitude,
        lng: evacuator.longitude,
    });

    useEffect(() => {
        const echo = new Echo({
            broadcaster: "pusher",
            key: "ffcc8330184e830c65a1",
            cluster: "eu",
            forceTLS: true,
            encrypted: true,
        });

        const channel = echo.channel("tow-truck-location");
        channel.listen(
            "LocationUpdated",
            (e: {
                towTruckId: number;
                latitude: number;
                longitude: number;
            }) => {
                if (e.towTruckId === towTruckId) {
                    setLocation({ lat: e.latitude, lng: e.longitude });
                }
            }
        );

        return () => {
            channel.stopListening("LocationUpdated");
            echo.disconnect();
        };
    }, [towTruckId]);

    return (
        <MapContainer
            center={[location.lat, location.lng]}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
            whenCreated={(map: { locate: () => void }) => {
                map.locate();
            }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[location.lat, location.lng]}>
                <Popup>Tow Truck's Current Location</Popup>
            </Marker>
        </MapContainer>
    );
};

export default LiveMap;
