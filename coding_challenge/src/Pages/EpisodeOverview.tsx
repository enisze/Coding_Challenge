import React, { useEffect, useState } from "react";
import { DashboardLayout } from "../Components/DashboardLayout";
import { PageNavigation } from "../Components/PageNavigation";
import { dataCollector } from "../DataCollector";
import { Episode } from "../Models/Episode";
import { EpisodeInfo } from "./EpisodeInfo";

export const EpisodeOverview: React.FC = (props) => {
  const [data, setData] = useState<Episode[]>([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    setData(await dataCollector.getEpisodes(page));
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <DashboardLayout>
      <div>
        {!data ? (
          <div>noData</div>
        ) : (
          data.map((episode) => (
            <div key={episode.id}>
              <EpisodeInfo episode={episode} showDetails={true}></EpisodeInfo>
            </div>
          ))
        )}
        <PageNavigation
          setPage={setPage}
          page={page}
          max_pages={dataCollector.MAX_PAGE_EPISODES}
        />
      </div>
    </DashboardLayout>
  );
};
