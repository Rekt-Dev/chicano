/* import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"; */
import React from "react";



export function OpenCard({imageId}) {

  return (
    <div>
      <h1>Open Card page</h1>
      <div>
        <img
          alt="fihk me "
          src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
       / >
      </div>
    </div>
  );
}
