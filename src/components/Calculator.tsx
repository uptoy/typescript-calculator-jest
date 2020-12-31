import React,{useState} from 'react'
import styled from 'styled-components'
import Calc,{CalcInput,InputType,OperatorType} from '../modules/calc'
import Button,{ButtonType} from './Button'

const Container = styled.div``

const Grid = styled.div`
    display:grid
    grid-gap:10px
    grid-template-columns:repeat(4,80px)
    grid-template-rows:120px repeat(5,80px)
`

const Display = styled.div`
    background:#fff
    border-radius:8px
    font-size:48px
    grid-column-end: span 4
    padding:30px 24px
    text-align:right
`

const Calculator:React.FC<{}> = () => {
    const[inputs,setInputs] =useState<Array<CalcInput>>([])
    const state = Calc.getState(inputs)
    console.log(inputs)

    const appendInput =(input:CalcInput):void =>{
        setInputs((prev)=>[...prev,input])
    }

    const handleAllClear = () => setInputs([])

    const handleOops = () => setInputs((prev)=>prev.slice(0,-1))

    const handleNumerical = (value:number) => () =>
        appendInput({type:InputType.Numerical,value})

    const handleOperator = (operator:OperatorType)=>()=>{
        appendInput({type:InputType.Operator,operator})
    }

    return(
        <Container>
            <Grid>
                <Display>{state.displayValue}</Display>
                <Button
                    label="AC"
                    position={[0,1]}
                    width={2}
                    onClick={handleAllClear}
                />
                <Button label="Oops" position={[2,1]} width={2} onClick={handleOops}/>
                <Button
                    label="-"
                    position={[3,2]}
                    onClick={handleOperator(OperatorType.Subtract)} />
                <Button
                    label="+"
                    position={[3,3]}
                    onClick={handleOperator(OperatorType.Add)} />
                <Button
                    label="="
                    position={[3,4]}
                    height={2}
                    onClick={handleOperator(OperatorType.Equals)} />
                <Button buttonType={ButtonType.Number} label="9" position={[2,2]} onClick={handleNumerical(9)} />
                <Button buttonType={ButtonType.Number} label="8" position={[1,2]} onClick={handleNumerical(8)}/>
                <Button buttonType={ButtonType.Number} label="7" position={[0,2]} onClick={handleNumerical(7)} />
                <Button buttonType={ButtonType.Number} label="6" position={[2,3]} onClick={handleNumerical(6)} />
                <Button buttonType={ButtonType.Number} label="5" position={[1,3]} onClick={handleNumerical(5)} />
                <Button buttonType={ButtonType.Number} label="4" position={[0,3]} onClick={handleNumerical(4)} />
                <Button buttonType={ButtonType.Number} label="3" position={[2,4]} onClick={handleNumerical(3)} />
                <Button buttonType={ButtonType.Number} label="2" position={[1,4]} onClick={handleNumerical(2)} />
                <Button buttonType={ButtonType.Number} label="1" position={[0,4]} onClick={handleNumerical(1)} />
                <Button buttonType={ButtonType.Number} label="0" position={[0,5]} width={3} onClick={handleNumerical(0)}/>
            </Grid>
        </Container>
    )
}

export default Calculator