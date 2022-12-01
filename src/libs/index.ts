export interface ItemInfo {
  club: ClubInfo;
  leaders: LeadersInfo;
}

export interface ClubInfo {
  coverUrl: string;
  description: string;
  id: string;
  meetings: MeetingsInfo[];
  name: string;
  place: string;
  type: string;
}

export interface MeetingsInfo {
  startedAt: string;
  order: number;
}

export interface LeadersInfo {
  name: string;
}
