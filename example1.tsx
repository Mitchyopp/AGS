#!/usr/bin/env -S ags run
import app from "ags/gtk4/app"
import { Astal } from "ags/gtk4"
import { createPoll } from "ags/time"
import Gtk from "gi://Gtk"

function Bar(monitor = 0) {
  return (
    <window visible class="Bar" monitor={monitor}>
      <box>Content!</box>
    </window>
  )
}

function MyButton() {
  const message = "Clicked"
  return (
    <button onClicked={(self) => console.log(self, message)}>
      <label label="Click me!" />
    </button>
  )
}

function RenderLists() {
  const lists = ["text1", "text2", "text3"]
  return (
    <box>
      {lists.map((list) => (
        <label label={list} />
      ))}
    </box>
  )
}

function MyButton1() {
  function onClicked(self: Gtk.Button) {
    console.log(self, "was clicked")
  }
  return <button onClicked={onClicked} />
}

function DisplayDate() {
  const date = createPoll("", 1000, `bash -c "date +%H:%M"`)
  return (
    <box>
      <label label={date} />
    </box>
  )
}

function MyBar() {
  return (
    <window visible>
      <box>
        Click the button
        <MyButton />
        <RenderLists />
        <MyButton1 />
        <DisplayDate />
      </box>
    </window>
  )
}

app.start({
  main() {
    Bar(0)
    Bar(1)
    MyBar()
  },
})
