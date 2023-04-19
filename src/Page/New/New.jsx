import React, {useEffect, useState} from "react";
import Cover from "./Cover/Cover";
import Category from "./Category/Category";
import NewForm from "./NewForm/NewForm";


function New(props) {
  const { load, setLoad } = props;
  
  useEffect(() => {
    setLoad(true);
    return () => {
      setLoad(false);
    };
  }, []);
  

  return (
    <div className="new">
        <Cover/>
        <Category/>
        <NewForm/>
    </div>
  );
}

export default New;
