import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({userId}: {userId: string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
    {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>

        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
            src="/images/alpha.png" alt="" fill 
            sizes="(max-width: 600px) 100vw, 20vw"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
            src="/images/alpha-1.png" alt="" fill 
            sizes="(max-width: 600px) 100vw, 20vw"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
            src="/images/alpha-2.png" alt="" fill 
            sizes="(max-width: 600px) 100vw, 20vw"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
            src="/images/alpha-3.jpg" alt="" fill 
            sizes="(max-width: 600px) 100vw, 20vw"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
            src="/images/alpha-4.jpg" alt="" fill 
            sizes="(max-width: 600px) 100vw, 20vw"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
            src="/images/alpha-5.jpg" alt="" fill 
            sizes="(max-width: 600px) 100vw, 20vw"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
            src="/images/alpha-6.jpg" alt="" fill 
            sizes="(max-width: 600px) 100vw, 20vw"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image className="object-cover rounded-md"
            src="/images/alpha-7.jpg" alt="" fill 
            sizes="(max-width: 600px) 100vw, 20vw"
          />
        </div>
      </div>
    </div>
  )
}

export default UserMediaCard;