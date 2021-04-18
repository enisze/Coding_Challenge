import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainWindow } from "../MainWindow/MainWindow";
import { CharacterDetails } from "./CharacterDetails";
import { CharacterOverview } from "./CharacterOverview";
import { EpisodeDetails } from "./EpisodeDetails";
import { EpisodeOverview } from "./EpisodeOverview";

export const Router: React.FC = (props) => {
  return (
    <BrowserRouter>
        <Route exact path="/" component={MainWindow} />
        <Route exact path="/characters" component={CharacterOverview} />
        <Route exact path="/episodes" component={EpisodeOverview} />
        <Route exact path="/episode/:id" component={EpisodeDetails} />
        <Route exact path="/character/:id" component={CharacterDetails} />
    </BrowserRouter>
  );
};
