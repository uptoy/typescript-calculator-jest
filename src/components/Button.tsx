import React from 'react'
import styled from 'styled-components'

export enum ButtonType {
    Number,
    Operation
}

type Props ={
    type?:ButtonType
    height?:number
    label:string
    position?:[x:number,y:number]
    width?:number
}

const StyledButton = styled.button`
    background:#e48900
    border:none
    border-radius:8px
    color:#fff
    font-size:24px
    `
const Button:React.FC<Props> = ({
    type = ButtonType.Operation,
    height,
    label,
    position,
    width,
    })=>{
    const styles:React.CSSProperties = {};
    if(position){
        styles.gridColumnStart = position[0]+1
        styles.gridRowStart = position[1] + 1
    }
    if(height){
        styles.gridRowEnd = `span ${height}`
    }
    if(width){
        styles.gridColumn = `span ${width}`
    }
    if(type === ButtonType.Number){
        styles.color = '#000'
        styles.background = '#E48900'
    }
    return <StyledButton style={styles}>{label}</StyledButton>
}

export default Button