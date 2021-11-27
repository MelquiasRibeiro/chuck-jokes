import React from 'react';
import {useParams} from "react-router-dom"

function Categories() {

  const {category} =useParams()
  console.log("params",category)

  return(
    <div>
      <p>{category}</p>
    </div>
  );
}

export default Categories;