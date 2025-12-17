#!/usr/bin/env -S ags run
import app from "ags/gtk4/app"
import { Astal } from "ags/gtk4"
import { createPoll } from "ags/time"
import Gtk from "gi://Gtk"
import css from "./warning.css"

function Warning() {
  // const pwd = createPoll("", 1000, `bash -c "cat cat.tsx"`)
  return (
    <box>
      <label label="⚠ Please change to a different application!" />
    </box>
  )
}

function MyBar() {
  return (
    <window visible>
      <box>
        <Warning />
      </box>
    </window>
  )
}

app.start({
  main() {
    css: css,
    MyBar()
  },
})
