/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { DashboardLayout } from "../Components/DashboardLayout";
import { PageNavigation } from "../Components/PageNavigation";
import { dataCollector } from "../DataCollector";
import { Character } from "../Models/Character";
import { CharacterInfo } from "./CharacterInfo";

export const CharacterOverview: React.FC = (props) => {
  const [data, setData] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    setData(await dataCollector.getCharacters(page));
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
          data.map((character) => (
            <div key={character.id}>
              <CharacterInfo character={character} showDetails={true} />
            </div>
          ))
        )}
        <PageNavigation
          setPage={setPage}
          page={page}
          max_pages={dataCollector.MAX_PAGE_CHARACTERS}
        />
      </div>
    </DashboardLayout>
  );
};
