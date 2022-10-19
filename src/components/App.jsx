import { css } from "@emotion/react";
import ContainerCards from "./ContainerCards";
import Filter from "./Filter";
import Header from "./Header"

const containerContent = css`
  padding: 0 6.4%;
  margin-bottom: 34px;
  
  @media (min-width: 1024px) {
    padding: 0 11.46%;
    margin-bottom: 120px;
  }
`

function App() {
  return (
    <div > 
      <Header/>

      <main css={containerContent}>

        <Filter/>

        <ContainerCards/>



      </main>
    </div>
  )
}

export default App
