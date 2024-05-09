export type PropsSvg = { className?: string; fill?: string };
export type PropsNav = {
  item: {
    title: string;
    url: string;
  };
  idx: number;
  length: number;
};

export type PropsDetailsList = {
  subItems: (
    | {
        title: string;
        description: string;
        list: {
          id: string;
          title: string;
        }[];
      }
    | {
        title: string;
        description: string;
        list?: undefined;
      }
  )[];
};
