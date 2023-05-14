import React, { FC } from 'react'
import styles from "./spinner.module.css"

interface ISpinner{
    loadingMessege:string
}

export const Spinner:FC<ISpinner> = ({loadingMessege}) => {
    return (
        <div className={styles.loader}>
          <h1>{loadingMessege}</h1>
        <div className={styles.spinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        </div>
      );
}
