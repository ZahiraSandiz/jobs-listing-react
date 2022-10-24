import { container } from "./styles";

import Card from "../Card/Card";
import jobsData from "../../assets/data.json";

const ContainerCards = (props) => {
  const { filters, setFilters } = props;

  let jobsList = jobsData.map((job) => {
    job.categories = [...job.tools, ...job.languages, job.role, job.level];

    return job;
  });

  if (filters.length > 0) {
    jobsList = jobsList.filter((job) => {
      return filters.every((f) => {
        return job.categories.some((c) => f === c);
      });
    });
  }

  return (
    <main css={container}>
      {jobsList.map((currentJob) => (
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
