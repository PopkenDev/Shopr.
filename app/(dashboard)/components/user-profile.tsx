import Image from "next/image";

interface UserProfileProps {
  user: any;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        priority
        src={user?.imageUrl}
        alt="User-image"
        height={200}
        width={200}
        className="rounded-full h-36 w-36 mb-2"
      />
      <h3 className="text-white font-semibold">
        {user?.firstName + " " + user?.lastName}
      </h3>
      <p className="text-white/70 text-sm">
        {user?.emailAddresses[0]?.emailAddress}
      </p>
    </div>
  );
};

export default UserProfile;
