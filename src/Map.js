import React from "react";
import Mongolia from "./map";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
const GoogleMap = ({ classes, onClick }) => {
    return (
        <div className={classes.mapS}><SVGMap map={Mongolia} onLocationClick={onClick}/></div> )
};

export default GoogleMap;