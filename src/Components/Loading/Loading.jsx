import React from "react";

import styles from "./loading.module.scss";
import loading from "../../img/loading.gif";

const Loading = () => {
  return <img src={loading} className={styles.image} alt="" />;
};

export default Loading;
