import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineProfile,
  AiOutlineSearch,
} from "react-icons/ai";
import { MenuItem } from "./menu-item.component";
import "./bottom-bar.scss";

export const BottomBar = () => {
  return (
    <Flex w={"100%"} className="bottom_bar">
      <MenuItem
        icon={AiOutlineHome}
        to="/"
        name="Home"
      />

      <MenuItem
        icon={AiOutlineSearch}
        to="/abc"
        name="Search"
      />
      <MenuItem
        icon={AiOutlineProfile}
        to="/abch"
        name="Profile"
      />
      <MenuItem
        icon={AiOutlineSetting}
        to="/settings"
        name="Settings"
      />
    </Flex>
  );
};
