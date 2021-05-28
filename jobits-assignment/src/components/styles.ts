import styled from "styled-components";

//Navigation Bar styles
export const Container = styled.div`

`;

export const NavBarContainer = styled.div`
  width: 10%;
  height: 92vh;
  padding-top: 8vh;
  background-color: #2c2c2c;
  flex-direction: column;
  float: left;
  position: fixed;
`;

export const NavBar = styled.div`
  height: 50px;
  color: white;
  cursor: pointer;
  display: flex;
  div {
    margin: 15px auto;
  }
  &:hover {
      background-color: #0f9f0e;
  }
`;


//Infinity Scroll Styles
export const InfinityScrollContainer = styled.div`

`;

export const RecruitmentRequest = styled.div`
  font-size: 20px;
  padding: 6vh 0; 
  margin-left: 300px;
  font-weight: 100;
`;

export const Post = styled.div`
  width: 25vw;
  height: 300px;
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
  text-align: center;
  float: right;
  margin: 20px 30px;
  box-shadow: 10px 5px 5px #e7e7e7e7;
`;



//Pagination Styles
