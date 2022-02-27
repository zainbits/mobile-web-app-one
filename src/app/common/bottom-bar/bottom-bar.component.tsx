import React, { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState('');

  return (
    <Flex w={"100%"} className="bottom_bar">
      <MenuItem
        icon={AiOutlineHome}
        to="/"
        name="Home"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <MenuItem
        icon={AiOutlineSearch}
        to="/search"
        name="Search"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <MenuItem
        icon={AiOutlineProfile}
        to="/profile"
        name="Profile"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <MenuItem
        icon={AiOutlineSetting}
        to="/settings"
        name="Settings"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Flex>
  );
};
