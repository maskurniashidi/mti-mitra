import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    history.replace("/login");
  });

  return <div>{/* <h1>Home</h1> */}</div>;
};

export default Home;
