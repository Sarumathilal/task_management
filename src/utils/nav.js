import "./nav.css";
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
  console.log(props)
  const navigate = useNavigate();
  return (
    <div className="nav">
      {props.loginInfo && <button
        className="btn"
        onClick={() => {
          navigate(-1);
        }}>
        Back
      </button>}
      
      <p>
      {props.children}
      </p>
      {props.loginInfo &&
      <button className="btn">Log-Out</button>}
    </div>
  );
};

export default Nav;
