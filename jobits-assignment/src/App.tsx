import React from "react";
import * as S from "./components/styles";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PageNation from "./components/PageNation";
import InfiniteScroll from "./components/InfinteScroll";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <S.NavBarContainer>
        <Link
          to="/pagenation"
          style={{ textDecoration: "none", backgroundColor: "none" }}
        >
          <S.NavBar>
            <div>페이지 네이션</div>
          </S.NavBar>
        </Link>
        <Link
          to="/infinitescroll"
          style={{ textDecoration: "none", backgroundColor: "none" }}
        >
          <S.NavBar>
            <div>무한 스크롤</div>
          </S.NavBar>
        </Link>
      </S.NavBarContainer>

      <Route exact path="/" component={PageNation} />
      <Route path="/infinitescroll" component={InfiniteScroll} />
      <Route path="/pagenation" component={PageNation} />
    </BrowserRouter>
  );
};

export default App;
