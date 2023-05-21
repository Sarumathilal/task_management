import { useNavigate } from "react-router-dom";

import Nav from "../utils/nav";
import Card from "../utils/card";
import styles from "./home.module.css";

const Home = (props) => {
  const homePageOptions = ["Manage Categories", "Manage Tasks"];

  const renderHomePageOptions = () => {
    const opertaions = homePageOptions.map((option) => {
      return (
        <Card>
          <button onClick={onClickHandler} className={styles["op-btns"]} value={option}>
            {option}
          </button>
        </Card>
      );
    });
    return opertaions;
  };

  const navigate = useNavigate();

  const onClickHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value === homePageOptions[0]) {
      navigate("/manage-categories");
    }
    if (event.target.value === homePageOptions[1]) {
      navigate("/manage-tasks");
    }
  };

  return (
    <>
      <Nav loginInfo={props.loginInfo}>Welcome {props.userName} To Manage Task</Nav>
      {renderHomePageOptions()}
    </>
  );
};

export default Home;
