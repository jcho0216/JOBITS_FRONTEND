import { useEffect, useState } from "react";
import * as S from "./styles";
import PageDataType from "../interface/PageDataTypes";
import { request } from "../api/api";

const PageNation = (): JSX.Element => {
  const [data, setData] = useState<PageDataType[]>([]);
  const [loading, setLoading] = useState<PageDataType | boolean>(false);
  const [maxPage, setMaxPage] = useState<PageDataType | number>(0);
  let [page, setPage] = useState<number>(1);

  const pageLength = new Array(maxPage);

  for (let i = 0; i < maxPage; i++) {
    pageLength[i] = i + 1;
  }

  useEffect(() => {
    request("GET", `/page?page=${page}`)
      .then((res) => {
        setData(res.data);
        setMaxPage(res.maxPage);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
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

  if (loading) return <S.Loading>Loading...</S.Loading>;
  return (
    <>
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
                  <div>{data.name}</div>
                  <div>{data.createdAt}</div>
                </S.Table>
              </>
            );
          })}
        </S.TableContainer>
      </S.PageNation>
      <S.PageContainer>
        <S.Button onClick={prevButton}>{"<"}</S.Button>
        {pageLength.map((value, index) => {
          return (
            <S.Page
              style={
                index === page - 1
                  ? { backgroundColor: "#009d03", color: "white" }
                  : { backgroundColor: "white" }
              }
              onClick={setPageNation}
            >
              {value}
            </S.Page>
          );
        })}
        <S.Button onClick={nextButton}>{">"}</S.Button>
      </S.PageContainer>
    </>
  );
};

export default PageNation;
