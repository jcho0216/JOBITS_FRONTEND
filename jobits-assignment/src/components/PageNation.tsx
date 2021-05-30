import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./styles";
import PageDataType from "../interface/PageDataTypes";

const PageNation = (): JSX.Element => {
  const [data, setData] = useState<PageDataType[]>([]);
  // const [loading, setLoading] = useState<PageDataType | boolean>(false);
  const [maxPage, setMaxPage] = useState<PageDataType | number>(0);
  let [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  const pageLength = new Array(maxPage);

  for (let i = 0; i < maxPage; i++) {
    pageLength[i] = i + 1;
  }

  const getData = async (page: PageDataType | number) => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/page?page=${page}`)
      .then((res) => {
        setData(res.data.data);
        setMaxPage(res.data.maxPage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // setLoading(true)
    getData(page);
    // setLoading(false)
  }, [page]);

  const setPageNation = (e: any) => {
    setPage(parseInt(e.target.innerHTML));
  };

  const nextButton = () => {
    if (page >= maxPage) {
      console.log("no more data");
      return;
    } else {
      setPage(page + 1);
    }
  };

  const prevButton = () => {
    if (page <= 1) {
      console.log("first page");
      return;
    } else {
      setPage(page - 1);
    }
  };

  // if(loading) return <S.Loading>Loading...</S.Loading>
  return (
    <S.PageNationContainer>
      <S.PageNation>
        <S.RecruitmentRequestPage>채용의뢰</S.RecruitmentRequestPage>
        <S.TableBar>
          <span>기업명 :</span>
          <span>등록일</span>
        </S.TableBar>
        <S.TableContainer>
          {data.map((data) => {
            return (
              <>
                <S.Table key={data.name}>
                  <span>{data.name}</span>
                  <span>{data.createdAt}</span>
                </S.Table>
              </>
            );
          })}
        </S.TableContainer>
      </S.PageNation>
      <S.PageContainer>
        <S.Button onClick={prevButton}>{"<"}</S.Button>
        {pageLength.map((i) => {
          return <S.Page onClick={setPageNation}>{i}</S.Page>;
        })}
        <S.Button onClick={nextButton}>{">"}</S.Button>
      </S.PageContainer>
    </S.PageNationContainer>
  );
};

export default PageNation;
