export type Menu = {
  id: number;
  title: string;
  path?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  submenu?: Menu[];
};