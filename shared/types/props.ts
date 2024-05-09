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
          bold: string[];
        }[];
      }
    | {
        title: string;
        description: string;
        list?: undefined;
      }
  )[];
};

export type PropsBoldText = {
  text: string;
  bold: string[];
};

export type PropsDetailsPointsList = {
  id: string;
  title: string;
  bold: string[];
};
