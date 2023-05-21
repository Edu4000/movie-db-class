import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
    color: #fff;
    padding: 20px;
    height: 100vh;
    overflow: auto;
`;

export const ImageStyle = styled.img`
    width: 100%;
    height: 100%;
    max-height: 500px;
    max-width: auto;
    object-fit: contain;
    border-radius: 0.5rem;
`;