import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max" >
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image  className="w-20 h-20 rounded-full ring-2" 
            src="/images/bg.png" alt=""
            width={80}
            height={80}
          />

          <span className="font-medium">
            Ricky
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image  className="w-20 h-20 rounded-full ring-2" 
            src="/images/bg-portal.png" alt=""
            width={80}
            height={80}
          />

          <span className="font-medium">
            Ricky
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image  className="w-20 h-20 rounded-full ring-2" 
            src="/images/bg-p.jpg" alt=""
            width={80}
            height={80}
          />

          <span className="font-medium">
            Ricky
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image  className="w-20 h-20 rounded-full ring-2" 
            src="/images/img.jpg" alt=""
            width={80}
            height={80}
          />

          <span className="font-medium">
            Ricky
          </span>
        </div>
      </div>
    </div>
  )
}

export default Stories;