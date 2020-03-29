import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import List from '@material-ui/core/List';
export const Content = styled.div`
        position:absolute;
        display:flex;
        flex-direction:row;
        left:0;
        right:0;
        top:69px;
        bottom:0;
`;
export const ContainerPaperCenter = styled(Paper)`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:12px;
    padding:12px;
    height: auto;
    max-height:480px;
    width:460px;
    overflow:auto;
`;

export const ListStyled = styled(List)`
    display:flex;
    flex-direction:column;
`
export const ListItemBox = styled(Paper)`
    display: flex;
    flex-direction:column;
    width: auto;
    align-items:center;
    max-width:360px;
    min-width:250px;
    padding:12px;
`; 


export const ProfileBar = styled(Paper)`
    padding-left:6px;
    width:23%;
`;

export const Events = styled(Paper)`
    width:100%;
    overflow:auto;
`;
export const ProposalStyled = styled(Paper)`
    margin: 4px 0px;
    padding: 8px;
`; 

export const TextareaAutosizeStyled = styled(TextareaAutosize)`
    min-width:380px;
    min-height:100px;
    max-width:380px;
    max-height:100px;
    margin: 6px;
`;
