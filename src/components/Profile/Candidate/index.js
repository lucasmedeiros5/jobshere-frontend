import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import {
    Container,
    SpinnerContent,
    AddButton
} from '../../GlobalStyles'
import {
    Content,
    Events,
    ProfileBar,
    ProposalStyled,
    ExpansionPanelDetailsStyled
} from './styles'
import PersonIcon from '@material-ui/icons/PersonOutline'
import Spinner from '@material-ui/core/CircularProgress';
import { GlobalStore } from '../../../store/GlobalStore';
import Api from '../../../services/Api';
import { fetchDataCandidate, verify } from '../../../services/Util'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withRouter } from 'react-router-dom';
import SearchBox from '../../SearchBox';
import Divider from '@material-ui/core/Divider'
function Candidate({ history }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(GlobalStore.user)
    const [proposal, setProposal] = useState([])
    useEffect(() => {
        load()
        async function load() {
            try {
                await verify()
                await fetchDataCandidate()
                setUser(GlobalStore.user)
                loadProposal()
                setLoading(false)
                console.log('after', GlobalStore)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
        async function loadProposal() {
            const proposals = await Api.service('proposal').find();
            console.log(proposals)
            setProposal(proposals.data)
        }
    }, [])

    async function subscribe(data) {
        try {
            console.log(data)
            const inscrito = await Api.service('subscribe').find({
                query: {
                    candidateId: user.candidate.id,
                    proposalId: data.id
                }
            })
            if (inscrito.total > 0) {
                alert('Já foi inscrito nessa vaga')
                return;
            }
            const result = await Api.service('subscribe').create({
                candidateId: user.candidate.id,
                proposalId: data.id
            })
            alert(`Você foi inscrito para a vaga de ${data.name}!`)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    return GlobalStore.user ? loading ? <Loading></Loading> :
        <Container>
            <Content>
                <ProfileBar variant="outlined">
                    <PersonIcon></PersonIcon>
                    <Typography variant="h6" display="block">{user ? user.candidate.name : ''}</Typography>
                    <Divider variant="middle"></Divider>
                    <Typography variant="overline" display="block">{user ? user.candidate.cargo : ''}</Typography>
                    <Divider></Divider>
                    <Typography variant="overline" display="block">{user ? user.candidate.address : ''}</Typography>

                    {user.candidate.experiences && user.candidate.experiences.length > 0 ?
                        <ExpansionPanel style={{ minWidth: 260, marginTop: 3  }}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="button" display="block"><strong>Experiências</strong></Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetailsStyled>
                                {user.candidate.experiences.map((experience, index) => {
                                    return (<Typography display="inline" variant="subtitle1" key={index}>{experience.text}</Typography>)
                                })}
                            </ExpansionPanelDetailsStyled>
                        </ExpansionPanel>
                        : null

                    }
                    {user.candidate.certificates && user.candidate.certificates.length > 0 ?
                        <ExpansionPanel style={{ minWidth: 260, marginTop: 3  }}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="button" display="block"><strong>Certificados</strong></Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetailsStyled>

                                <>
                                    {user.candidate.certificates.map((certificates, index) => {
                                        return (<Typography variant="subtitle1" key={index}>{certificates.text}</Typography>)
                                    })}
                                </>
                            </ExpansionPanelDetailsStyled>
                        </ExpansionPanel>
                        : null}
                    {user.candidate.competences && user.candidate.competences.length > 0 ?
                        <ExpansionPanel style={{ minWidth: 260, marginTop: 3 }}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="button" display="block"><strong>Competencias</strong></Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetailsStyled>
                                <>
                                    {user.candidate.competences.map((competencies, index) => {
                                        return (<Typography variant="subtitle1" key={index}>{competencies.text}</Typography>)
                                    })}
                                </>
                            </ExpansionPanelDetailsStyled>
                        </ExpansionPanel>
                        : null}
                    <AddButton color="primary" onClick={() => history.push('/profile/candidate/edit')}>Edite seu currículo</AddButton>

                </ProfileBar>
                <Events>

                    <SearchBox setProposal={setProposal}></SearchBox>

                    {proposal && proposal.length > 0 ? proposal.map((proposal, index) => {
                        return (
                            <ProposalStyled variant="outlined">
                                <Typography variant="h6" gutterBottom display="block">Empresa: {proposal.company}</Typography>
                                <Typography variant="overline" gutterBottom display="block"><strong>Proposta:</strong> {proposal.name}</Typography>
                                <Typography variant="overline" gutterBottom display="block"><strong>Requerimentos:</strong> {proposal.requirements}</Typography>
                                <Typography variant="button" gutterBottom display="block"><strong>Descrição</strong></Typography>
                                <Typography variant="subtitle1">{proposal.description}</Typography>
                                <Typography variant="overline" gutterBottom display="block"><strong>Salario:</strong> {proposal.salary}</Typography>
                                <AddButton onClick={() => subscribe(proposal)}>Increver-se</AddButton>
                            </ProposalStyled>
                        )
                    }) : <Typography variant="overline" gutterBottom display="block"><strong>Nenhuma vaga cadastrada</strong> {proposal.salary}</Typography>
                    }
                </Events>
            </Content>
        </Container> : <Redirect to="/"></Redirect>
}

function Loading() {
    return <SpinnerContent><Spinner></Spinner></SpinnerContent>
}
export default withRouter(Candidate)