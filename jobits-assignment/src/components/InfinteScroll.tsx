import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./styles";

const InfiniteScroll = (): JSX.Element => {
  const [data, setData] = useState<string[]>([]);
  let [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(0);

  window.onscroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      if (page > maxPage) {
        console.log("데이터가 없어요 ㅠ");
      } else {
        setPage((page += 1));
      }
    }
  };

  useEffect(() => {
    const getData = async (page: number) => {
      const jobData = await axios.get(
        `${process.env.REACT_APP_API_URL}/scroll?page=${page}`
      );
      setData([...data, ...jobData.data.data]);
      setMaxPage(jobData.data.maxPage);
    };
    getData(page);
  }, [page]);

  return (
    <S.InfinityScrollContainer>
      <S.RecruitmentRequest>채용의뢰</S.RecruitmentRequest>
      <S.PostContainer>
        {data.map((data: any) => {
          return (
            <S.Post>
              <S.CompanyName>{data.name}</S.CompanyName>
              {data.createdAt}
            </S.Post>
          );
        })}
      </S.PostContainer>
    </S.InfinityScrollContainer>
  );
};

export default InfiniteScroll;
