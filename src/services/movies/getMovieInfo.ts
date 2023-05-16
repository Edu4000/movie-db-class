import { httpinstance } from "services/httpinstance";

export const getMovieInfo = async (id: string) => {
    let res: any;
    const endpoint = `${id}?api_key=${process.env.REACT_APP_MOV_DB_API_KEY}&language=en-US`;
    await httpinstance
    .get(endpoint)
    .then((response) => {
        res = response;
    }).
    catch((error) => {
        res = error.response;
    });
    return res;
}