import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';

export const Container = styled.div`
    display:inline-block;
    flex-grow:1;
    justify-content:center;
    align-items:center;
`;
export const SpinnerContent = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    height:100vh;
`
export const DownloadLogo = styled.img`
    width:64px;
`
export const Title = styled(Typography)`
    display:flex;
    align-items:center;
    justify-content:center;
    color: rgba(62, 62, 62, 0.8);
`
export const MainTitle = styled(Typography)`
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:12px;
    padding-bottom:12px;
    color: rgba(62, 62, 62, 0.8);
`


export const Content = styled.div`
    display:flex;
    flex:1;
    flex-direction:row;
`

export const Center = styled.div`
    display: flex;
    flex-direction:column;
    flex:1;
    width:100%;
    min-width:560px;
    padding:32px;
    align-items:center;
`

export const Instructions = styled(Paper)`
    display:flex;
    flex-direction:column;
    width:70%;   
    height:auto;
    margin:46px;
    justify-content:center;
    align-items:center;
`
export const InstructionsText = styled(Typography)`  
    padding:24px;
`
export const MostDownloaded = styled(Paper)`
    display:flex;
    flex:1;
    flex-direction:column;
    min-width:800px;
    margin:46px;
    margin-top:64px;
    padding:46px;
`

export const GridListStyled = styled(GridList)`
    display: flex;
    flex-wrap: wrap;
    justify-content: 'space-around';
    justify-content:center;
    align-items:center;
    min-width:80vw;
`

export const GridListTileStyled = styled(GridListTile)`
    margin:6px;
    max-width:240px;
    min-width:240px;
`

export const CardNomeText = styled(Typography)`
`

export const CardDescText = styled(Typography)`
`

export const CardDownloadsText = styled(Typography)`
`
export const CardContentStyled = styled(CardContent)`
`
export const CardActionsStyled = styled(CardActions)`
    justify-content:center;
`
export const DownloadButton = styled(Button)`
`

export const ImagemCapa = styled(GridListTile)`
    display:flex;
    justify-content:center;
    align-items:center;
    min-width:200px;
`

export const ImgCapa = styled.img`


`
export const SearchPaper = styled(Paper)`
        padding: 2px 4px;
        display: flex;
        align-items: center;
        width: 480px;
        margin: 12px;
        background:#fffbfbe0;
`

export const TextFieldStyled = styled(TextField)`
`
export const InputBaseStyled = styled(InputBase)`
        flex: 1;
        margin-left:12px;
`