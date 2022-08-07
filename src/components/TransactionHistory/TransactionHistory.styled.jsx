import styled from "@emotion/styled";

export const TransactionTable=styled.table`
    grid-column: 3/4;
    grid-row: 1/3;
    border-collapse:collapse;
    font-size: small;
`

export const TransactionItemCaption = styled.th`
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #4472C4;
    border: 1px solid #4472C4;
    color: #ffffff;
    font-weight: 500;
    text-transform: uppercase;
`

export const TransactionItem = styled.tr`
    :nth-of-type(even){
        background-color: #D9E1F2;
    }
    :hover {
        background-color: #ddd;
    }  
`
   
export const TransactionItemData = styled.td`
    padding-top: 8px;
    padding-bottom: 8px;
    border: 1px solid #4472C4;
    text-transform: capitalize;
    text-align: center;
`