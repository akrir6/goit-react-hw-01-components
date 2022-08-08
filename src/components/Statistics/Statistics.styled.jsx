import styled from "@emotion/styled";

export const StatisticSection=styled.section`
    grid-column: 1/2;
    grid-row: 2/3;
   
    border: 1px solid  #4472C450;
    height: fit-content;
    border-radius: 4px;
    box-shadow: 0 6px 8px 0 #D9E1F2; 

    :hover{
        border-color: #4472C475;
        box-shadow: 0 6px 8px 0 #4472C475; 
    }

`
export const Title = styled.h2`
    padding: 24px;
    text-align: center;
    text-transform: uppercase;
    font-size: larger;
    color:#223961;
`
export const StatisticList = styled.ul`
    display: flex;
`
export const StatisticItem = styled.li`
    padding:12px;
    width: 100%;
    ${({percentage}) => `
        background-color: #4472C4${percentage};
    `}

    :hover{
        box-shadow: 0 0px 4px 0 #4472C475; 
    }
`
export const Label = styled.span`
    display: block;
    font-weight: 700;
    text-align: center;
    font-size: smaller;
    color:#223961;
`
export const Percentage = styled.span`
    display: block;
    margin-top:8px;
    text-align: center;
    font-size: large;
    color:#223961;
    font-weight: 600;
`