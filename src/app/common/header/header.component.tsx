import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import "./header.scss";

interface props {
  title: string;
}

export const Header = ({ title }: props) => {
  return (
    <Flex w={"100%"} className="header">
      <Text>{title}</Text>
    </Flex>
  );
};
