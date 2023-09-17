import React from 'react';
import { Purchases } from "screens/purchases/Purchases";

const App = () => {
  /**
   * In a real application, we will want to use something like react-router, and Purchases
   * would be one of the routes.
   *
   * Depending on the scale of our application, we could also wrap sections or pages in a dynamic
   * loading mechanism so that our build system may output chunks that correspond to pages/sections,
   * and the user will only need to load the chunks they need based on what pages/sections they visit.
   */

  return (
   <Purchases/>
  );
};

export default App;
