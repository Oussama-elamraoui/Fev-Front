// import {
//   MENU_ITEMS,
//   HORIZONTAL_MENU_ITEMS,
//   TWO_COl_MENU_ITEMS,
//   MenuItemTypes,
// } from "../constants/menu";
import { useSelector, useDispatch } from "react-redux";
import {
  MENU_ITEMS_ADMIN,MENU_ITEMS_PSY,MENU_ITEMS_MEDECIN,MENU_ITEMS_ASSISTANT,MENU_ITEMS_TPME,MENU_ITEMS_ONG,
  MENU_ITEMS1,
  HORIZONTAL_MENU_ITEMS,
  TWO_COl_MENU_ITEMS,
  MenuItemTypes,
} from "../constants/menu1";
interface UserData {
  id: number;
  email?: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  cin: string;
  token: string;
}
const getMenuItems = (user:UserData|any) => {
  switch (user.role){
    case 'medecin':
      return MENU_ITEMS_MEDECIN;
      break;
    case 'psy':
      return MENU_ITEMS_PSY;
      break;
    case 'assistant sociale':
      return MENU_ITEMS_ASSISTANT;
      break;
    case 'admin':
      return MENU_ITEMS_ADMIN;
      break;
    case 'tpme':
      return MENU_ITEMS_TPME;
      break;
    case 'ong':
      return MENU_ITEMS_ONG;
      break;
    default: 
    return MENU_ITEMS1;
      break;
  }
  return MENU_ITEMS1
};

const getHorizontalMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return HORIZONTAL_MENU_ITEMS;
};

const getTwoColumnMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return TWO_COl_MENU_ITEMS;
};

const findAllParent = (
  menuItems: MenuItemTypes[],
  menuItem: MenuItemTypes
): string[] => {
  let parents: string[] = [];
  const parent = findMenuItem(menuItems, menuItem["parentKey"]);

  if (parent) {
    parents.push(parent["key"]);
    if (parent["parentKey"])
      parents = [...parents, ...findAllParent(menuItems, parent)];
  }

  return parents;
};

const findMenuItem = (
  menuItems: MenuItemTypes[] | undefined,
  menuItemKey: MenuItemTypes["key"] | undefined
): MenuItemTypes | null => {
  if (menuItems && menuItemKey) {
    for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i];
      }
      var found = findMenuItem(menuItems[i].children, menuItemKey);
      if (found) return found;
    }
  }
  return null;
};

export {
  getMenuItems,
  getHorizontalMenuItems,
  getTwoColumnMenuItems,
  findAllParent,
  findMenuItem,
};
