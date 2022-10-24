import { containerContent } from "./styles";
import { useState } from "react";

import ContainerCards from "../ContainerCards/ContainerCards";
import FilterBar from "../FilterBar/FilterBar";
import Header from "../Header/Header";

function App() {
  const [filters, setFilters] = useState([]);

  return (
    <div>
      <Header />

      <main css={containerContent}>
        <FilterBar filters={filters} setFilters={setFilters} />

        <ContainerCards filters={filters} setFilters={setFilters} />
      </main>
    </div>
  );
}

export default App;
