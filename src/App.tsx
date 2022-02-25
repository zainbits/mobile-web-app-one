import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./app/home/home.container";
import { Settings } from "./app/settings/settings.container";
import { Flex } from "@chakra-ui/react";
import { BottomBar } from "./app/common/bottom-bar/bottom-bar.component";
import './App.scss';

function App() {
  return (
    <>
      <Flex className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Flex>
      <BottomBar />
    </>
  );
}

export default App;
