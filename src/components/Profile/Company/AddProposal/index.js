import React, { useEffect, useState } from 'react'
import Divider from '@material-ui/core/Divider';
import {
    Container,
    TextFieldStyled,
    AddButton,
    ErrorButton
} from '../../../GlobalStyles'
import { withRouter } from 'react-router-dom';
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
function AddProposal({ history }) {
    const [user, setUser] = useState(GlobalStore.user)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [salary, setSalary] = useState('')
    const [requirements, setRequirements] = useState('')
    async function addPropostal() {
        try {
            if(!name || !description || !salary || !requirements){
                alert('Digite os campos corretamente')
                return;
            }
            const result = await Api.service('proposal').create({
                companyId: user.company.id,
                company: user.company.name,
                name, description, salary, requirements
            })
            console.log(result)
            alert('Salvo com sucesso!')
            history.push('/profile/company')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>
            <ContainerPaperCenter>
                <Typography variant="h6">Adcionar uma proposta de trabalho</Typography>
                <TextFieldStyled variant="standard" value={name} onChange={e => setName(e.target.value)} label="Nome"></TextFieldStyled>
                <TextareaAutosizeStyled variant="standard" rowsMin={5} placeholder="Digite a descrição da proposta" variant="standard" value={description} onChange={e => setDescription(e.target.value)} label="Descrição"></TextareaAutosizeStyled>
                <TextFieldStyled variant="standard" value={salary} onChange={e => setSalary(e.target.value)} label="Salário"></TextFieldStyled>
                <TextareaAutosizeStyled variant="standard" value={requirements} onChange={e => setRequirements(e.target.value)} placeholder="Digite as competencias necessárias"  label="Requerimentos"></TextareaAutosizeStyled>
                <AddButton onClick={() => addPropostal()}>Salvar</AddButton>
            </ContainerPaperCenter>
        </Container>
    )
}
export default withRouter(AddProposal)