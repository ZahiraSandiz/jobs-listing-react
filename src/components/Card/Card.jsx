import {
  image,
  wrapInformation,
  headerCard,
  companyName,
  wrapFeaturedMessages,
  stylePosition,
  moreInformation,
  point,
  line,
  getJobCardStyles,
} from "./styles";

import FeaturedMessage from "../FeaturedMessage/FeaturedMessage";
import CategoriesList from "../CategoriesList/CategoriesList";

const Card = (props) => {
  const {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    filters,
    setFilters,
  } = props;

  return (
    <article css={getJobCardStyles(featured)}>
      <img css={image} src={logo} alt="Company logo" />
      <section css={wrapInformation}>
        <div css={headerCard}>
          <p css={companyName}>{company}</p>
          <div css={wrapFeaturedMessages}>
            {isNew && <FeaturedMessage text="NEW!" background="new" />}

            {featured && (
              <FeaturedMessage text="FEATURED" background="featured" />
            )}
          </div>
        </div>

        <div>
          <p css={stylePosition}>{position}</p>
        </div>

        <div css={moreInformation}>
          <span>{postedAt}</span>
          <span css={point}></span>
          <span>{contract}</span>
          <span css={point}></span>
          <span>{location}</span>
        </div>
      </section>

      <div css={line}></div>

      <CategoriesList
        role={role}
        level={level}
        languages={languages}
        tools={tools}
        filters={filters}
        setFilters={setFilters}
      />
    </article>
  );
};

export default Card;
