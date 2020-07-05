import React, { useContext } from "react";
import RestContext from "../../Components/context/restaurant/restContext";

const Alert = () => {
  const restContext = useContext(RestContext);
  const { alert } = restContext;

  return (
    alert !== null && (
      <article className="alert-empty">
        <i className="fas fa-info-circle" />
        {alert.msg}
      </article>
    )
  );
};

export default Alert;
