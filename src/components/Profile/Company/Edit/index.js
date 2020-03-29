import React, { useEffect, useState } from 'react'
import Divider from '@material-ui/core/Divider';
import {
    Container,
    TextFieldStyled,
    AddButton,
    ErrorButton
} from '../../../GlobalStyles'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {
    ContainerPaperCenter,
    ListStyled,
    ListItemBox,
    TextareaAutosizeStyled
} from './styles'
import Typography from '@material-ui/core/Typography';
import { GlobalStore } from '../../../../store/GlobalStore';
import { verify, fetchDataCandidate } from '../../../../services/Util'
import Api from '../../../../services/Api';
export default function CandidateEdit() {
    const [user, setUser] = useState(GlobalStore.user)
    const [name, setName] = useState(user.company.name || '')
    const [address, setAddress] = useState(user.company.address || '')
    const [cnpj, setCnpj] = useState(user.company.cnpj || '')
    useEffect(() => {
        load()
    }, [])
    async function load() {
        await verify()
        await fetchDataCandidate()
        setUser(GlobalStore.user)
        console.log('after', GlobalStore.user)
    }
    async function savePerfil() {
        try {
            const res = await Api.service('company').update(user.company.id, { name, address, cnpj, userId: user.company.userId })
            console.log(res)
            alert(`Salvo com sucesso!`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <ContainerPaperCenter>
                <Typography variant="h6">Perfil</Typography>
                <TextFieldStyled variant="standard" value={name} onChange={e => setName(e.target.value)} label="Nome"></TextFieldStyled>
                <TextFieldStyled variant="standard" value={address} onChange={e => setAddress(e.target.value)} label="Endereço"></TextFieldStyled>
                <TextFieldStyled variant="standard" value={cnpj} onChange={e => setCnpj(e.target.value)} label="CNPJ"></TextFieldStyled>
                <AddButton onClick={savePerfil}>Salvar</AddButton>
            </ContainerPaperCenter>
        </Container>
    )
}