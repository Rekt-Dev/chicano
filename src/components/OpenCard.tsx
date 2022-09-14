/* import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"; */




export function OpenCard(props: any) {
  
  return (
    <div>
      <h1>Open Card page</h1>
      <div>
        <img
          alt="fihk me "
          src={props.state.src}
       / >
      </div>
    </div>
  );
}
