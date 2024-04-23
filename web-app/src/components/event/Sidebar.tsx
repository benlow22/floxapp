import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

interface SidebarProps {
  eventId: string;
}

export const Sidebar = ({ eventId }: SidebarProps) => {
  const handleClick = (e: any) => {
    console.log('click ', e);
  };

  function handleCreateClick() {
    console.log('Create clicked');
  }

  return (
    <div style={{ width:'200px' }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={[]}
        mode="inline"
        onClick={handleClick}
      >
        <Menu.Item key="1">
          <NavLink to={`/event/${eventId}`}>Event home</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to={`/event/${eventId}/chats`}>Chat</NavLink>
        </Menu.Item>
        <SubMenu key="sub1" title="Create" onTitleClick={handleCreateClick}>
          <Menu.Item key="3">Outing</Menu.Item>
          <Menu.Item key="4">Poll</Menu.Item>
        </SubMenu>
        <Menu.Item key="5">
          Invite
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;