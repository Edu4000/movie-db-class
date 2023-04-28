import styled from "styled-components";

export const ShowLabel = styled.div`
    background: #ff0000;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 10px;
    border-radius: 5px;
    width: fit-content;
    margin-left: 10px;
`;

export const ShowBox = styled.div`
    background: #fff;
    margin: 0;
    height: auto;
    float: left;
    overflow: hidden;
    display: block;
    margin-bottom: 30px;
    margin-right: 20px;
    position: relative;
    box-shadow: 4px 4px 5px rgb(0 0 0 / 22%);
    border-radius: 7px;
    padding: 0;
    flex-shrink: 0;
    scroll-behavior: smooth;
`;

export const ImageContainer = styled.div`
    margin-left: 0;
    min-width: 100%;
    overflow: hidden;
    background: #2f3238;
    float: none;
    transition: opacity 0.35s, transform 0.35s;
`;

export const ShowThumb = styled.img`
    transition: 0.9s;
    -webkit-transition: opacity 1s, -webkit-transform 1s;
    transition: opacity 1s, transform 1s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    min-width: 100%;
    height: 370px;
    position: relative;
    max-width: none;
    margin-left: 0;
    transform: scale(1);
    transition: 0.9s;

    &:hover {
        transform: scale(1.2);
        opacity: 0.4;
    }
`;

export const InfoShow = styled.div`
    border-radius: 7px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    opacity: 1;
    transition: all 0.3s;
    background: linear-gradient(0deg, rgb(2, 0, 36) 10%, rgba(0, 0, 0, 0) 100%);
`;

export const ShowLabelTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    margin-top: 10px;
    text-transform: capitalize;
    margin-left: 10px;
`;

export const ShowCalification = styled.p`
    margin-left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ff0000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const ShowTitle = styled.div``;