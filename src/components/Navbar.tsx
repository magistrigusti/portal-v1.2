import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div>
      {/* LEFT */}
      <div>
        <Link href="/">PORTAL</Link>
      </div>

      {/* CENTER */}
      <div className="hidden">

      </div>

      {/* RIGHT */}
      <div>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar;