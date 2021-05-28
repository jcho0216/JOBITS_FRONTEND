import { JSXElement } from "@babel/types";
import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./styles";

interface DataType {
  name: string;
  page: number;
  createdAt: string;
}

const InfiniteScroll = (): JSX.Element => {
  const [data, setData] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async (page:number) => {
    const jobData = await axios.get(
      `http://52.78.60.221:8000/scroll?page=${page}`
    );
    setLoading(true);
    setData(jobData.data.data);
  };

  useEffect(() => {
    getData(page);
    setLoading(false);
  }, []);

  if (loading != true) return <h1>Loading...</h1>;
  return (
    <S.InfinityScrollContainer>
      <S.RecruitmentRequest>채용의뢰</S.RecruitmentRequest>
      {data.map((data: any) => {
        return (
            <S.Post>
              {data.name}
              {data.createdAt}
            </S.Post>
        );
      })}
    </S.InfinityScrollContainer>
  );
};

export default InfiniteScroll;
