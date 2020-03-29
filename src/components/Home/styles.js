import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
export const PaperTitle = styled(Paper)`
    display:flex;
    align-items:center;
    justify-content:center;
    width:auto;
    height:auto;
    padding:8px;
    margin:16px;
`;
export const Title = styled(Typography)`
    opacity:0.8;
    width:auto;
    height:auto;
    padding:12px;
`;

export const RegisterPaper = styled(Paper)`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:auto;
    height:auto;
    padding:8px;
    margin:16px;
`;

export const RegistrarTitle = styled(Typography)`
    margin: 12px 0px;
`;

export const RegisterText = styled(Typography)`
    margin: 12px 0px;
    max-width:320px;
`;

export const ButtonStyled = styled(Button)`
    margin:8px;
`;

export const ButtonBox = styled.div`
    margin:32px;
`;