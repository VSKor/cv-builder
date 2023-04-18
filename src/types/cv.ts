export interface Education {
  degree: string;
  organisation: Organisation;
  timeFrame: {
    start: string
    end: string;
  }
}

export interface Organisation {
  name: string;
  iconSrc: string;
  location: string;
  link: string;
}

export interface WorkExperience {
  position: string;
  organisation: Organisation,
  timeFrame: {
    start: string
    end: string;
  },
  desc: string;
}

export interface CV {
  fullName: string;
  position: string;
  shortDesc: string;
  photoSrc: string;
  contacts: {
    type: string;
    value: string;
  }[]
  workExperience: WorkExperience[],
  education: Education[],
  skills: {
    name: string;
    level: number;
  }[];
  languages: {
    name: string;
    level: number;
  }[];
}
