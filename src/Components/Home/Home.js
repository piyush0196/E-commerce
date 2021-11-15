import React from "react";
import Search from "../Search/Search";
import AllProducts from "../AllProducts/AllProducts";

const Home = () => {
  return (
    <>
      <div>
        <Search />
      </div>
      <div>
        <AllProducts />
      </div>
    </>
  );
};

export default Home;
