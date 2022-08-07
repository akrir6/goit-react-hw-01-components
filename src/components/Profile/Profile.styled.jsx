import styled from "@emotion/styled";

export const UserProfile = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    border: 1px solid #4472C450;
    border-radius: 4px;
    box-shadow: 0 6px 8px 0 #D9E1F2;

    display: flex;
    align-content:space-between; 
    flex-wrap: wrap;

    :hover{
        border-color: #4472C475;
        box-shadow: 0 6px 8px 0 #4472C475; 
    }
`

export const Description = styled.div`
    width: 100%;
    text-align: center;
`

export const UserAvarar = styled.img`
    display: inline-block;
    margin-top: 42px;
    margin-bottom: 42px;
    width: 150px;
    height: 150px;
    border-radius: 50px;
    
`;
export const UserName = styled.p`
    font-weight: 700;
    font-size: larger;
    color:#223961;
`
export const UserTag = styled.p`
     margin-top: 8px;
  
    font-size: medium;
    color:#223961;
`
export const UserLocation = styled.p`
    margin-top: 8px;
    font-size: medium;
    color:#223961;
`

export const StatsList = styled.ul`
    margin-top: 36px;
    display: flex;
    justify-content: space-between;
    width:100%;
`;

export const StatsListItem = styled.li`
    width: 100%;
    border: 1px solid #4472C450;
    padding: 12px;
    background-color: #D9E1F2;
`

export const Label = styled.span`
    display: block;
    text-align: center;
    font-size: smaller;
    color:#223961;
`
export const Quantity = styled.span`
    display: block;
    margin-top: 8px;
    font-weight: 700;
    text-align: center;
    font-size: medium;
    color:#223961;
`
