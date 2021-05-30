import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const Loading = styled.div`
  font-size: 150px;
  margin-left: 200px;
  z-index: 99;
`;

//Navigation Bar styles
export const NavBarContainer = styled.div`
  width: 12%;
  height: 92vh;
  padding-top: 8vh;
  background-color: #2c2c2c;
  flex-direction: column;
  float: left;
  position: fixed;
`;

export const NavBar = styled(NavLink)`
  height: 50px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const ActiveStyle = {backgroundColor:"#009d00"}

//Infinity Scroll Styles

export const RecruitmentRequest = styled.div`
  font-size: 20px;
  padding: 6vh 0;
  margin-left: 272px;
  font-weight: 100;
`;

export const Post = styled.div`
  width: 25vw;
  height: 300px;
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
  text-align: center;
  float: left;
  margin: 20px 30px;
  box-shadow: 5px 5px 5px #e7e7e7e7;
`;

export const PostContainer = styled.div`
  display: inline-block;
  margin-left: 240px;
`;

export const CompanyName = styled.div`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  margin: 100px 30px 30px 30px;
`;

//Pagination Styles
export const PageNation = styled.div`
  width: 80vw;
  height: 75vh;
  border: 1px solid #e7e7e7;
  position: relative;
  left: 290px;
  top: 50px;
  box-shadow: 5px 5px 5px #e7e7e7;
`;

export const RecruitmentRequestPage = styled.div`
  font-size: 20px;
  font-weight: 100;
  padding: 40px 80px;
`;

export const TableContainer = styled.div`
  width: 88%;
  height: 60vh;
  margin-left: 80px;
  display: inline-block;
`;

export const TableBar = styled.div`
  display: flex;
  border-top: 3px solid #c1c1c1;
  margin-left: 80px;
  width: 88%;
  height: 70px;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 500;
  span {
    margin: auto 80px;
  }  
`;

export const Table = styled.li`
  display: flex;
  list-style: none;
  font-size: 15px;
  font-weight: 300;
  width: 100%;
  height: 70px;
  border-top: 1px solid #c1c1c1;
  justify-content: space-between;
  &:nth-child(odd) {
    background-color: #fbfbfb;
  }
  div {
    margin: auto 85px;
  }
  
`;

export const PageContainer = styled.div`
  display: flex;
  margin: 80px 295px;
`;

export const Page = styled.li`
  list-style: none; 
  height: 25px;
  width: 30px;
  cursor: pointer;
  border: 1px solid #e1e1e1;
  border-right: none;
  text-align: center;
  padding-top: 5px;
  &:active {
    background-color: #009d00;
  }
`;

export const Button = styled.div`
  width: 30px;
  height: 25px;
  cursor: pointer;
  text-align: center;
  border: 1px solid #e1e1e1;
  border-radius: 10%;
  padding-top: 5px;
`;