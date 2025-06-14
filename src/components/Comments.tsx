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
        <div className="flex gap-4 m-4 justify-between">
          {/* AVATAR */}
          <Image className="w-10 h-10 m-2 rounded-full"
            src="/images/avatar-gnom.jpg" alt=""
            width={40} height={40}
          />

          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Bernice Spencer</span>

            <p>
              This world feels alive already...
              The floating isles, the portal,
              the skyships – it’s like stepping into a dream woven from magic and code.
              I can not wait to explore what lies beyond! ✨🛡️🚀
            </p>

            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image className="cursor-pointer w-4 h-4"
                  src="/img/like.png" alt=""
                  width={16} height={16}
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123</span>
              </div>

              <div>Reply</div>
            </div>
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