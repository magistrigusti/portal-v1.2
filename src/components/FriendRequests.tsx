import Image from "next/image"
import Link from "next/link"

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">
          Friend Requests
        </span>

        <Link className="text-blue-500 text-xs" href="/">
          See all
        </Link>
      </div>

      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image className="w-10 h-10 rounded-full object-cover"
            src="/images/avatar-hero.jpg" alt=""
            width={40} height={40}
          />

          <span className="font-semibold">Wayne Burton</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image className="cursor-pointer"
            src="/img/accept.png" alt=""
            width={20} height={20}
          />

          <Image className="cursor-pointer"
            src="/img/reject.png" alt=""
            width={20} height={20}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image className="w-10 h-10 rounded-full object-cover"
            src="/images/avatar-pirat.jpg" alt=""
            width={40} height={40}
          />

          <span className="font-semibold">Djack Sanderc</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image className="cursor-pointer"
            src="/img/accept.png" alt=""
            width={20} height={20}
          />

          <Image className="cursor-pointer"
            src="/img/reject.png" alt=""
            width={20} height={20}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image className="w-10 h-10 rounded-full object-cover"
            src="/images/avatar-varvar.jpg" alt=""
            width={40} height={40}
          />

          <span className="font-semibold">Grognag Varvar</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image className="cursor-pointer"
            src="/img/accept.png" alt=""
            width={20} height={20}
          />

          <Image className="cursor-pointer"
            src="/img/reject.png" alt=""
            width={20} height={20}
          />
        </div>
      </div>
    </div>
  )
}

export default FriendRequests