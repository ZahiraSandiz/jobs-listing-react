import { css } from "@emotion/react";
import Category from "./Category";


const list = css`
display: flex;
flex-wrap: wrap;
gap: 16px;

@media (min-width: 1024px) {
  margin-left: auto;
  max-width: 40%;
}
`

const CategoriesList = (props) => {
  const {role, level, languages, tools} = props
  return(

    <section css={list}>
     
      <Category text={role} />
      <Category text={level} />

      {languages.map((element) => {
        return(
          <Category text={element} />
        )
      })}

      {tools.map((element) => {
        return(
          <Category text={element} />
        )
      })}

  </section>
  )
}

export default CategoriesList