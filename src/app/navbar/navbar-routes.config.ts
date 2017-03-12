import { MenuType, RouteInfo } from './navbar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: '', title: 'Hayden Wagner', menuType: MenuType.BRAND },
    { path: 'about', title: 'About', menuType: MenuType.LEFT },
    { path: 'posts', title: 'Posts', menuType: MenuType.LEFT }
];


// { path: 'contact', title: 'Contact', menuType: MenuType.RIGHT }
