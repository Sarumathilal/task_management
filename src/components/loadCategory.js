import { useState, useEffect } from "react";
import Card from "../utils/card";
import styles from "./loadCategory.module.css";
import { useLocation } from "react-router-dom";
import Nav from "../utils/nav";
import { MdDelete } from "react-icons/md";


const LoadCategory = (props) => {
  // useLocation() hook is used to fetch the data that is sent 
  // when navigating using useNavigate() Hook
  const location = useLocation();

  const categoryTasks = [
    { Family: ["task1", "task2", "task3"] },
    { Work: ["task4", "task5", "task6"] },
    { Study: ["task7", "task8", "task9"] },
  ];

  const [tasks, setTasks] = useState([]);
  const cat = categoryTasks[location.state.selectedCategoryIndex];
  const catTasks = cat[location.state.selectedCategoryName];
  useEffect(() => {
    setTasks(
      catTasks.map((task, index) => {
        return (
          <li>
            <button className={styles["op-bttn"]} value={index} name={task}>
              {task}
            </button>
            <MdDelete id={index} className={styles["del-icon"]} />
          </li>
        );
      })
    );
  }, catTasks);

  return (
    <>
      <Nav loginInfo={props.loginInfo}>Selected Category : {location.state.selectedCategoryName}</Nav>
      <Card>{tasks}</Card>
    </>
  );
};

export default LoadCategory;
