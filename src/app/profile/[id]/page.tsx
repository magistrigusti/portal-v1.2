import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>

      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image className="object-cover"
                src="/images/user-2-bg.jpg" alt="" fill 
              />

              <Image className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto 
                -bottom-16 object-cover"
                src="/images/card-elf-1.jpg" alt="" 
                width={128} height={128}
              />
            </div>
          </div>

          <Feed />
        </div>
      </div>

      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  )
}

export default ProfilePage;