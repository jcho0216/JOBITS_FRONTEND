import * as S from './styles';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <S.NavBarContainer>
        <S.NavBar
          to="/pagenation"
          activeStyle={S.ActiveStyle}
        >
            페이지 네이션
          </S.NavBar>
          <S.NavBar 
          to="/infinitescroll"
          activeStyle={S.ActiveStyle}>
            무한 스크롤
          </S.NavBar>
      </S.NavBarContainer>
    )
}

export default NavBar