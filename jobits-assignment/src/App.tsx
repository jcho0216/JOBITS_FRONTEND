import React from "react";
import * as S from "./components/styles";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PageNation from './components/PageNation';
import InfiniteScroll from './components/InfinteScroll';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <S.Container>
      <BrowserRouter>      
      <NavBar />
        <Switch>
          <Route exact path="/" component={PageNation} />
          <Route path="/infinitescroll" component={InfiniteScroll} />
          <Route path="/pagenation" component={PageNation} />
        </Switch>
      </BrowserRouter>
    </S.Container>
  );
}

export default App;
