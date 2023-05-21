import Login from "./components/login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";
import LoadCategory from "./components/loadCategory";
import ManageCategories from "./components/manageCategories";
import ManageTasks from "./components/manageTasks";
function App() {
  const [userName, setUserName] = useState("");
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  const userLoginInfo = (info) => {
    setUserLoggedIn(info);
  }

  const getUserName = (uName) => {
    setUserName(uName);
    userLoginInfo(true);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setUserName={getUserName} loginInfo={isUserLoggedIn}/>} />
        <Route path="/home" element={<Home userName={userName} loginInfo={userLoginInfo}/>} />
        <Route path="/manage-categories" element={<ManageCategories loginInfo={userLoginInfo}/>} />
        <Route path="/load-category" element={<LoadCategory loginInfo={userLoginInfo}/>} />
        <Route path="/manage-tasks" element={<ManageTasks loginInfo={userLoginInfo}/>} />
      </Routes>
    </div>
  );
}

export default App;
