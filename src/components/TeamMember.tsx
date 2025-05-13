
import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imagePath: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, imagePath }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow card-hover border border-border">
      <div className="flex flex-col items-center">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-5 border-2 border-mrblue-400">
          <img
            src={imagePath}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-2xl font-semibold">{name}</h4>
        <p className="text-mrblue-400 mb-4 text-lg">{role}</p>
        <p className="text-muted-foreground text-center text-lg">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
