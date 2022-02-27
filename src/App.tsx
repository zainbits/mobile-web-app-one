import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./app/home/home.container";
import { Settings } from "./app/settings/settings.container";
import { Profile } from './app/profile/profile.container';
import { Search } from './app/search/search.container';
import { Flex } from "@chakra-ui/react";
import { BottomBar } from "./app/common/bottom-bar/bottom-bar.component";
import { Header } from './app/common/header/header.component';
import './App.scss';

function App() {
  const [headerTitle, setHeaderTitle] = useState('');
  return (
    <>
      <Header title={headerTitle} />
      <Flex className="app">
        <Routes>
          <Route path="/" element={<Home setHeaderTitle={setHeaderTitle}/>} />
          <Route path="/settings" element={<Settings setHeaderTitle={setHeaderTitle} />} />
          <Route path="/profile" element={<Profile setHeaderTitle={setHeaderTitle} />} />
          <Route path="/search" element={<Search setHeaderTitle={setHeaderTitle} />} />
        </Routes>
      </Flex>
      <BottomBar />
    </>
  );
}

export default App;
