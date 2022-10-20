import { css } from "@emotion/react";
import { useState } from "react";

import ContainerCards from "./ContainerCards";
import FilterBar from "./FilterBar";
import Header from "./Header";

const containerContent = css`
  padding: 0 6.4%;
  margin-bottom: 34px;

  @media (min-width: 1024px) {
    padding: 0 11.46%;
    margin-bottom: 120px;
  }
`;

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
