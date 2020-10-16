import React, { useContext } from 'react';
import RestContext from '../../../Components/context/restaurant/restContext';
import PropTypes from 'prop-types';

import styles from './Alert.module.scss';

const Alert = () => {
  const restContext = useContext(RestContext);
  const { alert } = restContext;
  return alert === null ? (
    <p className={styles.alert__text}></p>
  ) : (
    <p className={styles.alert__text}>{alert.msg}</p>
  );
};

Alert.propTypes = {
  alert: PropTypes.object,
};

export default Alert;
