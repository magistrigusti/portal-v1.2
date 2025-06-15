import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>

        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Lioyd Fleming</span>

          <span className="text-sm">jonathan</span>
        </div>

        <p>
          🧭 Explorer of the Astral Isles <br />
          ✍️ Writing tales, forging alliances <br />
          🌌 On a quest for wonder, wisdom, and war
        </p>

        <div className="flex items-center gap-2">
          <Image src="/img/map.png" alt=""
            width={16} height={16}
          />

          <span>Living in <b>Denver</b></span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/img/school.png" alt=""
            width={16} height={16}
          />

          <span>Went to Edgar High School</span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/img/work.png" alt=""
            width={16} height={16}
          />

          <span>Works at <b>Allodium Inc</b>.</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/img/link.png" alt="" width={16} height={16} />

            <Link className="text-blue-500 font-medium"
              href="https://allodium.netlify.app/"
            >
              Allodium Fondation
            </Link>
          </div>

          <div className="flex gap-1 items-center">
            <Image src="/img/date.png" alt="" width={16} height={16} />

            <span>Joined November 2024</span>
          </div>
        </div>

        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>

        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  )
}

export default UserInfoCard;