import React, { useEffect, useState } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import "./menu-item.scss";

export const MenuItem = ({
  icon,
  to,
  name,
  currentPage,
  setCurrentPage,
}: any) => {
  const [activeNav, setActiveNav] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleNavigate = () => {
    setCurrentPage(name);
    navigate(to);
  };

  useEffect(() => {
    location.pathname === to ? setActiveNav('navlink-active') : setActiveNav('navlink');
    console.log('setting navlink in use')
  }, [to, location.pathname]);

  return (
    <Flex className={activeNav} onClick={handleNavigate}>
      <Flex className="navlink_item">
        <Flex className="navlink_item_icon">
          <Icon as={icon} />
        </Flex>
        <Text className="navlink_item_name">{name}</Text>
      </Flex>
    </Flex>
  );
};
