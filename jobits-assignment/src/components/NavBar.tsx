import * as S from "./styles";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
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
  );
};

export default NavBar;
