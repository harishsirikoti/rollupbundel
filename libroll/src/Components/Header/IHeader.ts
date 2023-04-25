export interface IMegamenuDataModel {
  id: string;
  name: string;
  discription: string;
  url: string;
  image?: string;
}

export interface IMegamenuAppModel {
  id: string;
  title: string;
  menus: IMegamenuDataModel[];
}

export interface IHeaderNavItem {
  id: string;
  label: string;
  routeURL: string;
  active: boolean;
}

export interface ICreateMenuAppModel {
  id: string;
  name: string;
  discription: string;
  routeURL: string;
  image?: string;
  label?: string;
  active?: boolean;
}
