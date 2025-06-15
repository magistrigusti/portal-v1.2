import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image className="rounded-md object-cover"
          src="/images/user-bg.jpg" alt="" fill 
        />

        <Image className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
          src="/images/user.png" alt="" width={48} height={48} 
        />  
      </div> 

      <div className="h-20 flex-col gap-2 items-center">
        <span className="font-semibold">Edward Gabriel May</span>

        <div></div>
      </div>
    </div>
  )
}

export default ProfileCard;