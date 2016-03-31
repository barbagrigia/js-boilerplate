/* @flow */

import React, { Element } from "react"
import styles from "./index.css"

type Props = {
  param: string,
}

const ReactFunctionalComponent = (props: Props): Element => {
  return (
    <div className={ styles.container }>
      { props.param }
    </div>
  )
}

export default ReactFunctionalComponent
