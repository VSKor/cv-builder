import type { WorkExperience } from "@/types";

export const createEmptyWorkExperience  = (): WorkExperience => {
  return {
    "position": "position",
    "organisation": {
      "name": "organisation name",
      "iconSrc": "icon src",
      "location": "organisation location",
      "link": "src to organisation site"
    },
    "timeFrame": {
      "start": "start date",
      "end": "end date"
    },
    "desc": "description"
  };
};
