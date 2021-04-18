/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { DashboardLayout } from "../Components/DashboardLayout";
import { Button } from "../Components/StyledComponents";
import { dataCollector } from "../DataCollector";
import { Character } from "../Models/Character";

export const CharacterOverview: React.FC = (props) => {
  console.log(props);
  const [data, setData] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    setData(await dataCollector.getCharacters(page));
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
          data.map((character) => (
            <div key={character.id}>
              <p>Name : {character.name}</p>
                <Link to={{pathname:`character/${character.id}`}}>
                  <Button onClick={()=>{}}>
                    Show Details
                  </Button>
                </Link>
            </div>
          ))
        )}
        {page > 1 ? (
          <button onClick={() => previous()}>Previous </button>
        ) : null}{" "}
        <p>{page}</p>
        {page < dataCollector.MAX_PAGE_CHARACTERS ? (
          <button onClick={() => next()}>Next</button>
        ) : null}{" "}
      </div>
    </DashboardLayout>
  );
};
