import test from "ava"

import expect from "expect"
import expectJSX from "expect-jsx"
expect.extend(expectJSX)

import React from "react"
import { createRenderer } from "react-addons-test-utils"

import SomeReactClass from "../index"

function noop() {}

test("SomeReactClass works", () => {
  const renderer = createRenderer()

  renderer.render(
    <SomeReactClass />
  )

  expect(renderer.getRenderOutput()).toEqualJSX(
    <div onClick={ noop }>
      { "Hi" }
    </div>
  )
})

test("SomeReactClass can be clicked", () => {
  const renderer = createRenderer()

  renderer.render(
    <SomeReactClass />
  )
  // clicked !
  .props.onClick({ preventDefault: noop })

  expect(renderer.getRenderOutput()).toEqualJSX(
    <div onClick={ noop }>
      { "Hey" }
    </div>
  )
})
