import { css } from "@emotion/react";
import Card from "./Card";
import jobsData from "../assets/data.json"


const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 56px;
  @media (min-width: 1024px){ 
    gap: 24px;
  }
`

const ContainerCards = ()=>{
  return(
    <main css={container}>

      {jobsData.map((currentJob) => <Card key={currentJob.id} {...currentJob} />)}


    </main>
  )
}

export default ContainerCards


