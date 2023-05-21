import { MdDelete } from "react-icons/md";
import Card from "../utils/card";
import { useNavigate } from "react-router-dom";
import styles from "./existingCategories.module.css";
import { useEffect, useState } from "react";

const ExistingCategories = (props) => {
  const existingCategories = props.categories;
const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    renderCatrgories();
  }, [isDeleted]);

  const navigate = useNavigate();

  const categoryOnLoadHandler = (event) => {
    navigate("/load-category", {
      state: {
        selectedCategoryIndex: event.target.value,
        selectedCategoryName: event.target.name,
      },
    });
  };

  const renderCatrgories = () => {
    if(existingCategories.length > 0){
      const categories = existingCategories.map((category, index) => {
        return (
            <li className={styles["list-item"]}>
              <button
                onClick={categoryOnLoadHandler}
                className={styles.category}
                key={index}
                value={index}
                name={category}>
                {category}
              </button>
              <MdDelete id={index} onClick={onDeleteHandler} className={styles["del-icon"]} />
            </li>
        );
      });
      return categories;
    }else{
      return(<p>No Categories Exists Yet... Please Create A Category</p>)
    }
    
  };

  const onDeleteHandler = (event) => {
    existingCategories.splice(event.currentTarget.id,1);
    setIsDeleted(!isDeleted);
  };

  return (
    <Card>
      <p>Existing Categories</p>
      {/* <ul className={styles["cat-list"]}>{renderCatrgories()}</ul> */}
      {renderCatrgories()}
    </Card>
  );
};

export default ExistingCategories;
