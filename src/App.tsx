import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as Atoms from "src/atoms";
import * as Pages from "src/pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Atoms.Nav />}>
          <Route index element={<Pages.Main />} />
          <Route path="/info" element={<Pages.Info />} />
          <Route path="/store" element={<Pages.Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
