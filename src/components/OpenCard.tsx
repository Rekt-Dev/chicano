/* import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"; */




export function OpenCard(state: any) {
  return (
    <div>
      <h1>Open Card page</h1>
      <div>
        <img
          alt="love"
          src={`${state}`}
       / >
      </div>
    </div>
  );
}
