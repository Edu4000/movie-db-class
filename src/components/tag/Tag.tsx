import React from 'react'
import { TagProps } from './types'
import { TagStyle } from './styles'

const Tag: React.FC<TagProps> = ({color = "#ff4444", genre}) => {
    return <TagStyle color={color}>{genre}</TagStyle>
};

export default Tag
