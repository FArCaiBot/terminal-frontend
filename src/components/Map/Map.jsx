import React from "react";
import provincias from "./provincias";
import { SvgIcon } from "@mui/material";
import "./Map.css";

export const Map = ({ provinciasActivo = [] }) => {
  return (
    <SvgIcon
      sx={{
        height:{xs:'300px', sm:'400px'},
        width: {xs:'300px', sm:'400px'},
        stroke: "white",
        strokeWidth: 0.5,
      }}
      baseProfile="tiny"
      strokeLinecap="round"
      strokeLinejoin="round"
      version="1.2"
      height="400"
      width="400"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="features">
        {provincias.map((prov) => (
          <path
            key={prov.id}
            {...prov}
            className={provinciasActivo.includes(prov.id) ? "active" : ""}
          >
            <title>{prov.name}</title>
          </path>
        ))}
      </g>
    </SvgIcon>
  );
};
