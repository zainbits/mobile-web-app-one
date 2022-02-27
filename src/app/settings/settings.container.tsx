import React from "react";
import { Flex, Switch, Text, useColorMode } from "@chakra-ui/react";
import "./settings.scss";

export const Settings = ({setHeaderTitle}: any) => {
  setHeaderTitle('Settings');

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex className="settings">
      <Text>{colorMode}</Text>
      <Switch size="lg" isChecked={colorMode !== 'light'} onChange={toggleColorMode} />
    </Flex>
  );
};
