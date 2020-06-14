import React from "react";
import PropTypes from "prop-types";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className="alert-empty">
        <i className="fas fa-info-circle" />
        {alert.msg}
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.object,
};

export default Alert;
