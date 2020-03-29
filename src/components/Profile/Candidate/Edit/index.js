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
    const [name, setName] = useState(user.candidate.name || '')
    const [address, setAddress] = useState(user.candidate.address || '')
    const [cargo, setCargo] = useState(user.candidate.cargo || '')
    const [phone, setPhone] = useState(user.candidate.phone || '')
    const [cpf, setCpf] = useState(user.candidate.cpf || '')
    const [experience, setExperience] = useState('')
    const [competencia, setCompetencia] = useState('')
    const [certificates, setCertificates] = useState('')
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
            const res = await Api.service('candidate').update(user.candidate.id, { name, address, cargo, phone, cpf, userId: user.candidate.userId })
            alert(`Salvo com sucesso!`)
        } catch (error) {
            console.log(error)
        }
    }
    async function addExperience() {
        try {
            if (experience === '') {
                alert('digite uma experiencia para adcionar')
                return;
            }
            const result = await Api.service('experience').create({
                candidateId: user.candidate.id,
                text: experience
            })
            console.log(result)
            load()
        } catch (error) {
            console.log(error)
        }
    }
    async function removeExperience(id) {
        try {
            const result = await Api.service('experience').remove(id)
            console.log(result)
            load()
        } catch (error) {
            console.log(error)
        }
    }
    async function removeCompetence(id) {
        try {
            const result = await Api.service('competencia').remove(id)
            console.log(result)
            load()
        } catch (error) {
            console.log(error)
        }
    }
    async function removeCertificado(id) {
        try {
            const result = await Api.service('certificates').remove(id)
            console.log(result)
            load()
        } catch (error) {
            console.log(error)
        }
    }
    async function addCompetence() {
        try {
            if (competencia === '') {
                alert('digite uma competencia para adcionar')
                return;
            }
            const result = await Api.service('competencia').create({
                candidateId: user.candidate.id,
                text: competencia
            })
            console.log(result)
            load()
        } catch (error) {
            console.log(error)
        }
    }
    async function addCertificate() {
        try {
            if (certificates === '') {
                alert('digite uma certificação para adcionar')
                return;
            }
            const result = await Api.service('certificates').create({
                candidateId: user.candidate.id,
                text: certificates
            })
            console.log(result)
            load()
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
                <TextFieldStyled variant="standard" value={cargo} onChange={e => setCargo(e.target.value)} label="Cargo"></TextFieldStyled>
                <TextFieldStyled variant="standard" value={phone} onChange={e => setPhone(e.target.value)} label="Telefone"></TextFieldStyled>
                <TextFieldStyled variant="standard" value={cpf} onChange={e => setCpf(e.target.value)} label="CPF"></TextFieldStyled>
                <AddButton onClick={savePerfil}>Salvar</AddButton>
            </ContainerPaperCenter>
            <ContainerPaperCenter>
                <Typography variant="h6">Experiencias</Typography>
                <ListStyled>
                    {user.candidate.experiences && user.candidate.experiences.map(value => {
                        return (
                            <>
                                <ListItem key={value.id}>
                                    <ListItemBox variant="outlined">
                                        <Typography variant="body1">{value.text}</Typography>
                                        <ErrorButton size="small" onClick={() => removeExperience(value.id)}>Remover</ErrorButton>
                                    </ListItemBox>
                                </ListItem>
                            </>
                        );
                    })}
                </ListStyled>
                <TextareaAutosizeStyled onChange={e => setExperience(e.target.value)} value={experience} variant="standard" rowsMin={5} placeholder="Adcione uma experiência de trabalho" />
                <AddButton onClick={addExperience}>Adcionar nova</AddButton>
            </ContainerPaperCenter>
            <ContainerPaperCenter>
                <Typography variant="h6">Competencias</Typography>
                <ListStyled>
                    {user.candidate.competences && user.candidate.competences.map(value => {
                        return (
                            <>
                                <ListItem key={value}>
                                    <ListItemBox>
                                        <Typography variant="overline">{value.text}</Typography>
                                        <ErrorButton onClick={() => removeCompetence(value.id)}>Remover</ErrorButton>
                                    </ListItemBox>
                                </ListItem>
                                <Divider />
                            </>
                        );
                    })}
                </ListStyled>
                <TextareaAutosizeStyled onChange={e => setCompetencia(e.target.value)} value={competencia} variant="standard" rowsMin={2} placeholder="Adcione uma competencia sua" />
                <AddButton onClick={addCompetence}>Adcionar nova</AddButton>
            </ContainerPaperCenter>
            <ContainerPaperCenter>
                <Typography variant="h6">Certificados</Typography>
                <ListStyled>
                    {user.candidate.certificates && user.candidate.certificates.map(value => {
                        return (
                            <>
                                <ListItem key={value}>
                                    <ListItemBox>
                                        <Typography variant="overline">{value.text}</Typography>
                                        <ErrorButton onClick={() => removeCertificado(value.id)}>Remover</ErrorButton>
                                    </ListItemBox>
                                </ListItem>
                                <Divider />
                            </>
                        );
                    })}
                </ListStyled>
                <TextareaAutosizeStyled onChange={e => setCertificates(e.target.value)} value={certificates} variant="standard" rowsMin={2} placeholder="Adcione um certificado" />
                <AddButton onClick={addCertificate}>Adcionar nova</AddButton>
            </ContainerPaperCenter>
        </Container>
    )
}