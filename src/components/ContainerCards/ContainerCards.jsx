import { container } from "./styles";

import Card from "../Card/Card";
import jobsData from "../../assets/data.json";

const ContainerCards = (props) => {
  const { filters, setFilters } = props;

  return (
    <main css={container}>
      {jobsData
        .map((job) => {
          job.categories = [
            ...job.tools,
            ...job.languages,
            job.role,
            job.level,
          ];

          return job;
        })
        .filter((job) => {
          return job.categories.some((category) => {
            return filters.every((filter) => filter === category);
          });
        })
        .map((currentJob) => (
          <Card
            key={currentJob.id}
            {...currentJob}
            filters={filters}
            setFilters={setFilters}
          />
        ))}
    </main>
  );
};

export default ContainerCards;
