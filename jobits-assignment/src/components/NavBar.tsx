import * as S from './styles';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <S.NavBarContainer>
        <NavLink
          to="/pagenation"
          style={{ textDecoration: "none", backgroundColor: "none" }}
          activeClassName="active"
        >
          <S.NavBar>
            <div>페이지 네이션</div>
          </S.NavBar>
        </NavLink>
        <NavLink
          to="/infinitescroll"
          style={{ textDecoration: "none", backgroundColor: "none" }}
          activeClassName="active"
        >
          <S.NavBar>
            <div>무한 스크롤</div>
          </S.NavBar>
        </NavLink>
      </S.NavBarContainer>
    )
}

export default NavBar