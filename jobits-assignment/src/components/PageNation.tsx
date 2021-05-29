import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './styles';

const PageNation = ():JSX.Element => {
    const [data, setData] = useState<string[]>();
    const [loading, setLoading] = useState<boolean>(false)
    const [maxPage, setMaxPage] = useState<number>(0);
    const [page, setPage] = useState<number>(0);

    const getData = async (page:number) => {
        const jobData = await axios.get(`${process.env.REACT_APP_API_URL}/page?=${page}`)
        setData(jobData.data.data);
        console.log(data);
    }

    getData(1)
    return (
        <div>PageNation</div>
    )
}

export default PageNation