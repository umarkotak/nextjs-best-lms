import * as React from "react"
import { ChangeThemeButton } from "../utils/ChangeThemeButton"
import { GraduationCap, HomeIcon, LogIn, Megaphone } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import { toast } from "react-toastify"

export function DefaultLayout({ children }) {
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <div>
          <Link href="/">
            <Button variant="outline">
              <GraduationCap className="size-4" />
              Best LMS
            </Button>
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/home">
            <Button variant="outline">
              <HomeIcon className="size-4" />
              Home
            </Button>
          </Link>
          <Link href="/home">
            <Button variant="outline">
              <HomeIcon className="size-4" />
              Home
            </Button>
          </Link>
          <Button variant="outline" onClick={() => {toast.info("info, success, error")}}>
            <Megaphone className="size-4" />
            Toast
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/sign_in">
            <Button variant="outline">
              <LogIn className="size-4" />
              Sign In
            </Button>
          </Link>
          <ChangeThemeButton />
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}

function CustomComponent({ isPaused, closeToast }) {
  return (
    <div>
      <span>Hello</span>
    </div>
  );
}