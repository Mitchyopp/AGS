#!/usr/bin/env -S ags run
import app from "ags/gtk4/app"
import { Astal } from "ags/gtk4"
import { createPoll } from "ags/time"
import Gtk from "gi://Gtk"

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
        <DisplayDate />
      </box>
    </window>
  )
}

app.start({
  main() {
    MyBar()
  },
})
