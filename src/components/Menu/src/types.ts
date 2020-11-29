import { ComputedRef } from 'vue';
import { ThemeEnum } from '/@/enums/appEnum';
import { MenuModeEnum } from '/@/enums/menuEnum';
export interface MenuState {
  // __Some-New-Token__
  defaultSelectedKeys: string[];

  // __Some-New-Token__
  mode: MenuModeEnum;

  // __Some-New-Token__
  theme: ComputedRef<ThemeEnum> | ThemeEnum;

  // __Some-New-Token__
  inlineIndent?: number;

  // __Some-New-Token__
  openKeys: string[];

  // __Some-New-Token__
  searchValue: string;

  // __Some-New-Token__ key __Some-New-Token__
  selectedKeys: string[];

  // __Some-New-Token__
  collapsedOpenKeys: string[];
}
