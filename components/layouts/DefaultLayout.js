import * as React from "react"

export function DefaultLayout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
