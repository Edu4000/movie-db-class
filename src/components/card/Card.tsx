import React from 'react'
import { IMAGE_SOURCE, movies } from 'constants/moviesMock'
import genres from 'constants/genres.json'
import { CardsProps } from './types';
import { ImageContainer, InfoShow, ShowBox, ShowCalification, ShowLabelTitle, ShowThumb, ShowTitle } from './styles';
import { Tag } from '../tag';
import { useNavigate } from 'react-router-dom';

const Card: React.FC<CardsProps> = (props) => {
    const navigate = useNavigate();

    const posterAvatar = IMAGE_SOURCE + props.path;

    const getGenre = (genreId: number) => {
        const key: any = Object.keys(genres.genres).find(
            (genre: any): boolean => genres.genres[genre].id === genreId
        );
        if (key) {
            return genres.genres[key].name;
        }
        return "Not Classified";
    };

    const getColor = (rating : number) => {
        if (rating >= 7) {
            return '#00D000';
        } else if (rating >= 5) {
            return '#FFD000';
        } else {
            return '#FF4444';
        }
    };

    return (
        <ShowBox onClick={() => {
            navigate(`/movie/${props.movieId}`);
            }}>
            <ImageContainer>
                <ShowThumb src={posterAvatar} />
            </ImageContainer>
            <InfoShow>
                <ShowTitle>
                    <Tag color={getColor(props.vote_average)} genre={getGenre(props.genreIds[0])} />
                    <ShowLabelTitle>{props.title}</ShowLabelTitle>
                    <ShowCalification>{props.vote_average}</ShowCalification>
                </ShowTitle>
            </InfoShow>
        </ShowBox>
    )
}

export default Card