import React from "react";

const Domain = () => {
  return (
    <>
      <div className="domain_container">
      <div className="container">
        <h1>Find the perfect domain name</h1>
        <h4>
          Enter domain name of your choice and pick any extension name on the
          next step (choose between .in, .com, .online, .live, .store, .info and
          many more)
        </h4>

        <div className="search">
          <input type="search" placeholder="Type in that perfect domain name"/>
          <button className="btn search_btn"> Search</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Domain;
