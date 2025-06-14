import Image from "next/image";

const Comments = () => {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image className="w-9 h-9 rounded-full"
          src="/images/avatar-gnom.jpg" alt=""
          width={36} height={36}
        />

        <div className="flex-1 flex items-center justifybetween
         bg-slate-100 rounded-xl text-sm px-6 py-2 w-full"
        >
          <input className="bg-transparent outline-none flex-1"
            placeholder="Write a comment..."
            type="text"
          />

          <Image className="cursor-pointer"
            src="/img/emoji.png" alt=""
            width={16} height={16}
          />
        </div>
      </div>

      {/* COMMENTS */}
      <div>
        {/* COMENT */}
        <div>
          {/* AVATAR */}
          <Image className="w-10 h-10 rounded-full"
            src="/images/avatar-gnom.jpg" alt=""
            width={40} height={40}
          />

          {/* DESC */}
          <div className="flex flex-col gap-2">
            <span className="font-medium">Bernice Spencer</span>

            <p>
              This world feels alive already... 
              The floating isles, the portal, 
              the skyships – it’s like stepping into a dream woven from magic and code. 
              I can not wait to explore what lies beyond! ✨🛡️🚀
            </p>
          </div>

          {/* ICON */}
          <Image className="cursor-pointer w-4 h-4"
            src="/img/more.png" alt=""
            width={16} height={16}
          />
        </div>
      </div>
    </div>
  )
}

export default Comments;