import { Routes, Route } from "react-router-dom"; // Måste importas för att routing ska fungera

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
// Denna return fungerar precis som en Django url. du ger den en path och sedan vilket element den ska rendera

const Shop = () => {
  return <h1>HEY! I AM THE SHOP PAGE</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        {/* Det är så här man får navigationen att alltid synas på sidan. Home grejen är också bra för key-wordet index gör att det kommer synas tillsammans med navbaren. */}
      </Route>
    </Routes>
  );
};

export default App;
