import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../Components/DashboardLayout";
import { Button } from "../Components/StyledComponents";
import { dataCollector } from "../DataCollector";
import { Episode } from "../Models/Episode";

export const EpisodeOverview: React.FC = (props) => {
  const [data, setData] = useState<Episode[]>([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    setData(await dataCollector.getEpisodes(page));
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  const next = () => {
    setPage(page + 1);
  };
  const previous = () => {
    setPage(page - 1);
  };

  return (
    <DashboardLayout>
      <div>
        {!data ? (
          <div>noData</div>
        ) : (
          data.map((episode) => (
            <div key={episode.id}>
              <p>Name : {episode.name}</p>
              <Link to={{ pathname: `episode/${episode.id}` }}>
                <Button>More</Button>
              </Link>
            </div>
          ))
        )}
        {page > 1 ? (
          <button onClick={() => previous()}>Previous </button>
        ) : null}{" "}
        <p>{page}</p>
        {page < dataCollector.MAX_PAGE_EPISODES ? (
          <button onClick={() => next()}>Next</button>
        ) : null}{" "}
      </div>
    </DashboardLayout>
  );
};
