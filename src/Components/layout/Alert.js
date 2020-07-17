import React, { useContext } from 'react';
import RestContext from '../../Components/context/restaurant/restContext';

const Alert = () => {
  const restContext = useContext(RestContext);
  const { alert } = restContext;
  return alert !== null && <p className="alert-text">{alert.msg}</p>;
};

export default Alert;
