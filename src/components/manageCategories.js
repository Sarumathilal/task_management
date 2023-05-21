import Nav from "../utils/nav";
import styles from "./manageCategories.module.css";
import ExistingCategories from "./existingCategories";
import { useState } from "react";

const ManageCategories = (props) => {

  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState(["Family", "Work", "Study"]);

  const inputChangeHandler = (event) => {
    setNewCategory(event.target.value);
  };

  const createCategoryHandler = () => {
    setCategories([...categories, newCategory]);
    setNewCategory('');
  }

  return (
    <>
      <Nav loginInfo={props.loginInfo}>Manage Categories</Nav>
      <div className={styles["cat-op"]}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter New-Category-Name to create new Category"
          onChange={inputChangeHandler}
          value={newCategory}
        />
        <button onClick={createCategoryHandler} className={styles.btns}>
          Create New Category
        </button>
      </div>
      <ExistingCategories categories={categories} />
    </>
  );
};

export default ManageCategories;
