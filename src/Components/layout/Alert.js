import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import RestContext from "../../Components/context/restaurant/restContext";

const Alert = () => {
  const restContext = useContext(RestContext);
  const { alert } = restContext;

  return (
    alert !== null && (
      <Fade>
        <article className="alert-empty">
          <i className="fas fa-info-circle" />
          {alert.msg}
        </article>
      </Fade>
    )
  );
};

export default Alert;
