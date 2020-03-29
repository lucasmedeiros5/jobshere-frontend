import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
export const Title = styled(Typography)`
    opacity:0.8;
    width:auto;
    height:auto;
    padding:4px;
`;

export const ExpansionPanelDetailsStyled = styled(ExpansionPanelDetails)`
    display:flex;
    flex-direction:column;
`;

export const Container = styled.div`
    display:flex;
    flex:1;
    min-height:auto;
    min-width:auto;
    flex-direction:column;
    align-items:center;
`;
export const SpinnerContent = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    height:100vh;
    min-height:100vh;
`


export const ContainerPaperCenter = styled(Paper)`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:32px;
    padding:32px;
    height:auto;
    width:auto;
`;

export const TextFieldStyled = styled(TextField)`
    margin: 6px 3px;
    width:240px;
`

export const ButtonStyled = styled(Button)`
    margin:8px;
`;
export const ErrorButton = styled(({ ...rest }) => (
    <Button classes={{ label: 'label', root: 'root' }} {...rest} />
))

    `
    transition: 300ms;
    background: rgba(193, 66, 66, 0.82);
    :hover {
        background: rgba(193, 66, 66, 1);
    }     
    .label {
        color: white;
    }
`
export const AddButton = styled(({ ...rest }) => (
    <Button classes={{ label: 'label', root: 'root' }} {...rest} />
))

    `
    margin: 2px 0px;
    transition: 300ms;
    max-width:120px;
    background: rgba(66, 193, 140, 0.82);
    :hover {
        background: rgba(66, 193, 140, 1);
    }     
    .label {
        color: white;
    }
`
export const AddButtonCenter = styled(({ ...rest }) => (
    <Button classes={{ label: 'label', root: 'root' }} {...rest} />
))

    `
    margin: 2px 0px;
    transition: 300ms;
    max-width:240px;
    background:rgba(42, 162, 112, 0.87);
    :hover {
        background: rgba(42, 162, 112, 1);
    }     
    .label {
        color: white;
    }
`
