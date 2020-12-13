import React, {useEffect, useRef} from "react";


const GoogleMap = ({ placeName }) => {
    const googleMapRef = useRef();
    let googleMap;
    useEffect(() => {
        const googleMapScript = document.createElement("script");
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
        googleMapScript.async = true;
        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener("load", () => {
            getLatLng();
        });
    }, []);

    const createGoogleMap = () => {
        googleMap = new window.google.maps.Map(googleMapRef.current, {
            zoom: 6,
            center: {
                lat: 47.367099,
                lng: 102.369976,
            },
            disableDefaultUI: true,
        });
    };
    const getLatLng = () => {
        let lat, lng, placeId;

        createGoogleMap();

    };
    return (
        <div
            id="google-map"
            ref={googleMapRef}
            style={{ width: "100%", height: "95vh", borderRadius: 16 }}
        />
    );
};

export default GoogleMap;