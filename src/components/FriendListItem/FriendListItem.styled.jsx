import styled from "@emotion/styled";


export const ListItem= styled.li`
    margin-bottom: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 16px;
    padding-left: 16px;
    display: flex;
    gap:16px;
    align-items: center;

    border:1px solid #4472C450;
    border-radius: 4px;
    box-shadow: 0 6px 8px 0 #D9E1F2; 
    
    :hover{
        border-color: #4472C475;
        box-shadow: 0 6px 8px 0 #4472C475; 
    }
`
export const Status = styled.span`
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    ${({ isOnline }) => `
    background-color: ${isOnline ? '#375623' : '#C00000'};
  `};
` 
export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 16px;
` 
export const Name = styled.p`
    font-size: large;
    font-weight: 600;
    color:#223961;
` 
