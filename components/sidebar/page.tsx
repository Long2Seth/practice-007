
'use client';

import { Sidebar } from 'flowbite-react';
import { MenuList } from './menu';
import { useState } from 'react';


type MenuListItems = {
    name: string;
    path: string;
    icon: string;
};

function SidebarComponent() {
    const [Menu , setMenuList] =  useState<MenuListItems[]>(MenuList)
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {
            MenuList.map((item,index) => {
                return (
                    <Sidebar.Item key = {index} href = {item.path} icon = {item.icon} >
                        {item.name}
                    </Sidebar.Item>
            )}
                
            )
          }
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}


export default SidebarComponent;
