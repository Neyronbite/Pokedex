import React, { useMemo } from "react";
import styles from "./column.module.scss";

const Column = ({ count, name }) => {
  const itemList = useMemo(() => {
    const list = [];
    for (let i = 0; i < 15; i++) {
      list.push(
        <div
          className={`${styles.item} ${i < count && styles.item__active}`}
          key={i}
        ></div>
      );
    }
    return list;
  }, [count]);

  return (
    <div className={styles.container}>
      {count} {itemList} <span className={styles.stat_name}>{name}</span>
    </div>
  );
};

export default Column;
