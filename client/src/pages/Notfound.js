import React, { useState, useEffect } from "react";
import "../App.css";

const NotFoundPage = () => {

  setTimeout(() => {
    window.location.href = '/'
  }, 5000);


  const [counter, setCounter] = useState(5);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="notFound">

      <h3> 404 Error - This Page Doesnt Exist</h3>
      <h4>You will be redirected to homepage in {counter}</h4>

    </div>
  );
};

export default NotFoundPage;