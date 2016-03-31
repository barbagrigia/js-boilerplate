import test from "ava"

import expect from "expect"
import expectJSX from "expect-jsx"
expect.extend(expectJSX)

import React from "react"
import { createRenderer } from "react-addons-test-utils"

import ReactFunction from "../index"

test("ReactFunction works", () => {
  const renderer = createRenderer()

  renderer.render(
    <ReactFunction param={ "Hi" } />
  )

  expect(renderer.getRenderOutput()).toEqualJSX(
    <div className={ "_-index--container" }>
      { "Hi" }
    </div>
  )
})
