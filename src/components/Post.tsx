import Image from "next/image";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div>
        <div className="flex items-center gap-4">
          <Image className="w-10 h-10 rounded-full"
            src="/images/avatar-1.jpg" alt=""
            width={40} height={40}
          />
          <span>Jack McBride</span>
        </div>
      </div>

      {/* DESC */}
      <div></div>

      {/* INTERACTION */}
      <div></div>
    </div>
  )
}

export default Post;