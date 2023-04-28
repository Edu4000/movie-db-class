import styled from "styled-components";
import { LabelProps } from "./types";

export const TagStyle = styled.div<LabelProps>`
    background: ${props => props.color};;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 10px;
    border-radius: 5px;
    width: fit-content;
    margin-left: 10px;
`;