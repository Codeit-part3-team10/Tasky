import React from 'react';
import Image from 'next/image';

interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

interface GroupAvatarProps {
  members: Member[];
  totalCount: number;
}

const getRandomColorClass = () => {
  const colors = ['bg-orange-ffc85a', 'bg-yellow-fdd446', 'bg-blue-9dd7ed', 'bg-brown-c4b1a2', 'bg-green-a3c4a2'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};

const GroupAvatar: React.FC<GroupAvatarProps> = ({ members, totalCount }) => {
  return (
    <div className="flex space-x-[-0.6rem]">
      {members.slice(0, 4).map((member) => (
        <div key={member.id} className="relative">
          {member.profileImageUrl ? (
            <Image
              src={member.profileImageUrl}
              alt={`Avatar ${member.id}`}
              className="rounded-full w-10 h-10 border-2 border-white"
            />
          ) : (
            <div className={`rounded-full w-10 h-10 border-2 border-white ${getRandomColorClass()} flex items-center justify-center text-white`}>
              {member.nickname.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      ))}
      {totalCount > 4 && (
        <div className="relative">
          <div className="rounded-full w-10 h-10 border-2 border-white bg-pink-f4d7da flex items-center justify-center text-[#d25b68]">
            +{totalCount - 4}
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupAvatar;
