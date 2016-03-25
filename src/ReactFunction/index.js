/* @flow */

import React, { Element } from "react"

type Props = {
  param: string,
}

const ReactFunctionalComponent = (props: Props): Element => {
  return (
    <div>
      { props.param }
    </div>
  )
}

export default ReactFunctionalComponent
