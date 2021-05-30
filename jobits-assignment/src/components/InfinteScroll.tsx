import { useEffect, useState } from "react";
import * as S from "../styles/styles";
import InfiniteDataTypes from "../interface/InfiniteDataTypes";
import { request } from "../api/api";

const InfiniteScroll = (): JSX.Element => {
  const [data, setData] = useState<InfiniteDataTypes[]>([]);
  let [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<InfiniteDataTypes | number>(0);
  const [loading, setLoading] = useState<InfiniteDataTypes | boolean>(false);

  window.onscroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      if (page >= maxPage) {
        console.log("데이터가 없어요 ㅠ");
      } else {
        setPage(page + 1);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    request("GET", `/scroll?page=${page}`)
      .then((res) => {
        setData([...data, ...res.data]);
        setMaxPage(res.maxPage);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, [page]);

  if (loading) return <S.Loading>Loading...</S.Loading>;
  return (
    <>
      <S.RecruitmentRequest>채용의뢰</S.RecruitmentRequest>
      <S.PostContainer>
        {data.map((data: any) => {
          return (
            <S.Post key={data.name}>
              <S.CompanyName>{data.name}</S.CompanyName>
              {data.createdAt}
            </S.Post>
          );
        })}
      </S.PostContainer>
    </>
  );
};

export default InfiniteScroll;
