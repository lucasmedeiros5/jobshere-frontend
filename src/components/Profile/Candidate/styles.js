import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
export const Content = styled.div`
        position:absolute;
        display:flex;
        flex-direction:row;
        left:0;
        right:0;
        top:69px;
        bottom:0;
`;
export const ExpansionPanelDetailsStyled = styled(ExpansionPanelDetails)`
    display:flex;
    flex-direction:column;
`;
export const ProfileBar = styled(Paper)`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:8px;
    width:300px;
    overflow:auto;
    min-height:auto;
    margin:3px;
    min-width: 200px;
    max-width:380px;
    overflow-x:hidden;
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
    margin: 4px 0px;
    padding: 8px;
`; 