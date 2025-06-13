import Image from "next/image";

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
           This is not just a cosial network - it's a PORTAL to a new universe,
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
      <div></div>
    </div>
  )
}

export default Post;