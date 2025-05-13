
import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imagePath: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, imagePath }) => {
  return (
    <div className="bg-muted p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow card-hover">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-mrblue-200">
          <img
            src={imagePath}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-mrblue-500 mb-3">{role}</p>
        <p className="text-muted-foreground text-center">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
