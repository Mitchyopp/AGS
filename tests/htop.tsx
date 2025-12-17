#!/usr/bin/env -S ags run
import app from "ags/gtk4/app"
import { Astal } from "ags/gtk4"
import { createPoll } from "ags/time"
import Gtk from "gi://Gtk"

function DisplayPwd() {
  const pwd = createPoll("", 1000, `bash -c "htop"`)
  return (
    <box>
      <label label={pwd} />
    </box>
  )
}

function MyBar() {
  return (
    <window visible>
      <box>
        <DisplayPwd />
      </box>
    </window>
  )
}

app.start({
  main() {
    MyBar()
  },
})
