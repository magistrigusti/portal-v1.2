import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image className="w-10 h-10 rounded-full"
            src="/images/avatar-1.jpg" alt=""
            width={40} height={40}
          />
          <span className="font-medium">Jack McBride</span>
        </div>

        <Image src="/img/more.png" alt="" width={16} height={16}/>
      </div>

      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image className="object-cover rounded-md"
            src="/images/img.jpg" alt="" fill
          />
        </div>

        <p>
           🙋‍♂️ Welcome to Portal! 
            <br />
           Here begins your grand journey across the astral isles,
           where magic🧙‍♂️, heroes🦸‍♀️ and legends meet at the crossroads of worlds.
           This is not just a cosial network - it is a PORTAL to a new universe,
           where every step opens new opportunities.
            <br />
           🎮Join our community, share your stories,
           find friends, and help us build a new are together!
            <br />
           May your path lead you to glory, 🧝‍♂️ wisdom, and true friendship.
            <br />
          ✌️ Welcome home, abventurer!
        </p>
      </div>

      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image className="cursor-pointer"
              src="/img/like.png" alt="" width={16} height={16} 
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image className="cursor-pointer"
              src="/img/comment.png" alt="" width={16} height={16} 
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image className="cursor-pointer"
              src="/img/share.png" alt="" width={16} height={16} 
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123
              <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>

      <Comments />
    </div>
  )
}

export default Post;