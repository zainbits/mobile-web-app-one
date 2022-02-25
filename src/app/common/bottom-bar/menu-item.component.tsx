import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Icon, Text } from "@chakra-ui/react";
import "./menu-item.scss";

export const MenuItem = ({ icon, to, name }: any) => {
  const activeHandler = (e: any) => (e.isActive ? "navlink-active" : "navlink");

  return (
    <NavLink className={activeHandler} to={to}>
      <Flex className="navlink_item">
        <Flex className="navlink_item_icon">
          <Icon as={icon} />
        </Flex>
        <Text className="navlink_item_name">{name}</Text>
      </Flex>
    </NavLink>
  );
};
