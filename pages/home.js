import { Button } from "@/components/ui/button";
import { ChangeThemeButton } from "@/components/utils/ChangeThemeButton";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center mt-20">
        <h1 className="text-4xl max-w-2xl text-center tracking-wider">Best LMS - layanan manajemen sistem belajar terbaik</h1>
      </div>
      <div className="flex items-center justify-center mt-4">
        <h1 className="text-md max-w-2xl text-center tracking-wider">mengatur materi pelajaran, pembayaran, manajemen guru dan murid, ujian dan banyak fitur lainnya hanya di best lms</h1>
      </div>
      <div className="flex items-center justify-center mt-4 gap-4">
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
      </div>
    </div>
  );
}
