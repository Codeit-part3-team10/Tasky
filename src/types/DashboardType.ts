export interface Dashboard {
  id:number;
  title:string;
  color:string;
  createdAt:string;
  updatedAt:string;
  createdByMe:boolean;
  userId:number;
}

export interface Card {
  id:number;
  title:string;
  description:string;
  tags:string[];
  dueDate:string;
  assignee:{
    profileImageUrl:string;
    nickname:string;
    id:number;
  };
  imageUrl:string;
  teamId:string;
  columnId:string;
  createdAt:string;
  updatedAt:string;
}

export interface Column {
  id:number;
  title:string;
  teamId:string;
  createdAt:string;
  updatedAt:string;
}

export interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

export interface Invitation {
  id:number;
  inviter:{
    nickname:string;
    email:string;
    id:number;
  };
  teamId:string;
  dashboard:{
    title:string;
    id:number;
  };
  invitee:{
    nickname:string;
    email:string;
    id:number;
  };
  inviteAccepted:boolean;
  createdAt:string;
  updatedAt:string;
}

export interface Comment {
  id:number;
  content:string;
  createdAt:string;
  updatedAt:string;
  cardId:number;
  author:{
    profileImageUrl:string;
    nickname:string;
    id:number;
  };
}
