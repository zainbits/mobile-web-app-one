import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import './home.scss';

export const Home = ({setHeaderTitle}: any) => {
  setHeaderTitle('Home');

  return (
    <Flex className="home">
      <Text>Hi there</Text>
    </Flex>
  );
};
