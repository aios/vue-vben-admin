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

  // 当前选中的菜单项 key 数组
  selectedKeys: string[];

  // __Some-New-Token__
  collapsedOpenKeys: string[];
}
