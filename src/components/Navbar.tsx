import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          PORTAL
        </Link>
      </div>

      {/* CENTER */}
      <div className="hidden md:flex text-sm w-[50%]">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2">
            <Image className="flex items-center gap-2"
              src="/home.png"
              alt="Home"
              width={24}
              height={16}
            />

            <span>HomePage</span>
          </Link>

          <Link href="/" className="flex gap-2">
            <Image className="flex items-center gap-2"
              src="/friends.png"
              alt="Friends Page"
              width={24}
              height={16}
            />

            <span>Friends</span>
          </Link>

          <Link href="/" className="flex gap-2">
            <Image className="flex items-center gap-2"
              src="/stories.png"
              alt="Stories Page"
              width={24}
              height={16}
            />

            <span>Stories</span>
          </Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 xl:gap-8 justify-end w-[30%]">
        <ClerkLoading>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="people" width={20} height={20} />
            </div>

            <div className="cursor-pointer">
              <Image src="/messages.png" alt="messages" width={20} height={20} />
            </div>

            <div className="cursor-pointer">
              <Image src="/notifications.png" alt="notifications" width={20} height={20} />
            </div>

            <UserButton />
          </SignedIn>

          <SignedOut>
            <div className="flex items-center gap-2">
              <Image src="/login.png" alt="" width={20} height={20} />

              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>

        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar;