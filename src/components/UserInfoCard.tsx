import Link from "next/link";

const UserInfoCard = ({userId}: {userId: string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>

        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span>Lioyd Fleming</span>
          
          <span className="text-sm">jonathan</span>
        </div>
      </div>
    </div>
  )
}

export default UserInfoCard;