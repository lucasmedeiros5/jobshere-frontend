import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
export const Content = styled.div`
        position:absolute;
        display:flex;
        flex-direction:row;
        left:0;
        right:0;
        top:69px;
        bottom:0;
`;

export const ProfileBar = styled(Paper)`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:8px;
    width:auto;
    overflow:auto;
    min-height:auto;
    margin:3px;
    min-width: 200px;
    max-width:380px;
`;

export const Events = styled(Paper)`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin:2px;
    overflow:auto;
`;
export const ProposalStyled = styled(Paper)`
    width:100%;
    margin: 4px 32px;
    padding: 8px;
`;

export const ExpansionPanelStyled = styled(ExpansionPanel)`
    margin: 6px 0px;
`; 