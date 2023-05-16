export interface MovieDetailsProps  {
    title: string,
    vote_average: number,
    genreId: number,
    overview: string,
    poster_path: string,
    relase_date: string,
    genres: Array<string>,
    runtime: number,
}