import React from "react";
import { DataProvider } from "./Context/DataContext";
import MainPage from "./Components/pages/MainPage";

const App: React.FC = (): JSX.Element => {
  return (
    <DataProvider>
      <div className="App">
        <MainPage />
      </div>
    </DataProvider>
  );
};

export default App;
