import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>

        <Image src="/img/more.png" alt="" width={16} height={16} />
      </div>

      {/* BOTTOM */}
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}>
          <Image fill className="rounded-lg object-cover"
            src="/images/allod.jpg" alt=""
          />
        </div>

        <div className="flex items-center gap-4">
          <Image className="rounded-full w-6 h-6 object-cover"
            src="/images/allod.jpg" alt=""
            width={24} height={24}
          />

          <span className="text-blue-500 font-medium">BigChef Lounge</span>
        </div>

        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm" 
            ? "🌳 BigChef Lounge Rest your weary soul beneath the floating tree of legends." 
            : size === "md" 
            ? "🌳 BigChef Lounge Rest your weary soul beneath the floating tree of legends. 🍵 Magic brews, ancient tales, and peaceful skies await. ✨ Step in, adventurer — your story deserves a pause." 
            : 
            " 🌳 BigChef Lounge Rest your weary soul beneath the floating tree of legends. 🍵 Magic brews, ancient tales, and peaceful skies await. ✨ Step in, adventurer — your story deserves a pause."
          }

        </p>
      </div>
    </div>
  )
}

export default Ad;