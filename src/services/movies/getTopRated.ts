import { httpinstance } from "services/httpinstance";

export const getTopRated = async () => {
    let res: any;
    const endpoint = `top_rated?api_key=${process.env.REACT_APP_MOV_DB_API_KEY}&language=en-US`;
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