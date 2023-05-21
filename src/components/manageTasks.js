import { useState } from 'react';
import Nav from '../utils/nav';
import ExistingCategories from './existingCategories'

const ManageTasks = () => {
  const [categories, setCategories] = useState(["Family", "Work", "Study"]);

  return (
    <>
        <Nav>Manage Tasks In Existing Categories...</Nav>
        <ExistingCategories categories={categories}/>
    </>
  )
}

export default ManageTasks