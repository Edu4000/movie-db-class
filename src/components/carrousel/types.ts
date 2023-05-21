import { CardsProps } from "components/card/types";

export interface CarrouselProps {
    title:string | null,
    link:string | null,
    movies: Array<CardsProps>,
}