import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import {
    Container,
    SpinnerContent,
    AddButton,
    AddButtonCenter,
    ErrorButton,
    ExpansionPanelDetailsStyled
} from '../../GlobalStyles'
import EmpresaIcon from '@material-ui/icons/HomeWorkOutlined'
import {
    Content,
    Events,
    ProfileBar,
    ProposalStyled,
    ExpansionPanelStyled
} from './styles'
import Spinner from '@material-ui/core/CircularProgress';
import { GlobalStore } from '../../../store/GlobalStore';
import Api from '../../../services/Api';
import { fetchDataCompany, verify } from '../../../services/Util'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withRouter } from 'react-router-dom';
import SearchBox from '../../SearchBox';

function Company({ history }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(GlobalStore.user)
    const [total, setTotal] = useState(0)
    const [proposal, setProposal] = useState(GlobalStore.user.company.proposal)
    useEffect(() => {
        load()
    }, [])

    async function load() {
        try {
            await verify()
            await fetchDataCompany()
            setUser(GlobalStore.user)
            loadProposal()
            setLoading(false)
            console.log('after', GlobalStore.user)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    async function loadProposal() {
        setTotal(0)
        let newProps = []
        const proposals = await Api.service('proposal').find({ query: { companyId: user.company.id } });
        for (const prop of proposals.data) {
            let newProp = {};
            const subscribes = await Api.service('subscribe').find({ query: { proposalId: prop.id } })
            let newSubs = []
            setTotal(total + subscribes.total)
            for (const sub of subscribes.data) {
                const candidate = await Api.service('candidate').find({ query: { id: sub.candidateId } })
                const userCandidate = await Api.service('users').find({ query: { id: candidate.data[0].userId } })
                newSubs.push({ ...candidate.data[0], email: userCandidate.data[0].email })
            }
            newProp = { ...prop, subs: newSubs }
            newProps.push(newProp)
        }
        console.log(newProps)
        setProposal(newProps)
    }



    async function removerPorId(id) {
        const proposals = await Api.service('proposal').remove(id);
        console.log(proposal)
        setProposal(proposals.data)
        load()
    }
    return (
        <Container>
            <Content>
                <ProfileBar variant="outlined">
                    <EmpresaIcon></EmpresaIcon>
                    <Typography variant="h6" display="block">{GlobalStore.user.company ? GlobalStore.user.company.name : ''}</Typography>
                    <Typography variant="overline" display="block">{GlobalStore.user.company ? GlobalStore.user.company.addres : ''}</Typography>
                    <Typography variant="overline" display="block">Propostas criadas {GlobalStore.user.company.proposal ? GlobalStore.user.company.proposal.length : ''}</Typography>
                    <Typography variant="overline" display="block">Incrições recebidas {total}</Typography>

                </ProfileBar>
                <Events>
                    <AddButtonCenter onClick={() => { history.push(`/profile/company/add`) }}>Adcionar uma nova vaga de emprego</AddButtonCenter>
                    {proposal ? proposal.map((proposal, index) => {
                        return (
                            <ProposalStyled variant="outlined">
                                <Typography variant="overline" gutterBottom display="block"><strong>Proposta:</strong> {proposal.name}</Typography>
                                <Typography variant="overline" gutterBottom display="block"><strong>Requerimentos:</strong> {proposal.requirements}</Typography>
                                <Typography variant="button" gutterBottom display="block"><strong>Descrição</strong></Typography>
                                <Typography variant="subtitle1">{proposal.description}</Typography>
                                <Typography variant="overline" gutterBottom display="block"><strong>Salario:</strong> {proposal.salary}</Typography>
                                {proposal.subs && proposal.subs.length > 0 ?
                                    <ExpansionPanelStyled>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography variant="button" display="block"><strong>Incrições</strong></Typography>
                                        </ExpansionPanelSummary>

                                        {proposal.subs && proposal.subs.map(sub => {
                                            return (
                                                <ExpansionPanelDetailsStyled>
                                                    <Divider></Divider>
                                                    <Typography variant="subtitle1" key={index}><strong>Nome:</strong> {sub.name}</Typography>
                                                    <Typography variant="subtitle1" key={index}><strong>Telefone:</strong> {sub.phone}</Typography>
                                                    <Typography variant="subtitle1" key={index}><strong>Email:</strong> {sub.email}</Typography>
                                                    <AddButton onClick={() => { history.push(`/public/${sub.id}`) }}>Ver perfil</AddButton>
                                                </ExpansionPanelDetailsStyled>
                                            )
                                        })}


                                    </ExpansionPanelStyled> : null}
                                <ErrorButton onClick={() => removerPorId(proposal.id)} color="primary">Remover proposta</ErrorButton>
                            </ProposalStyled>
                        )
                    }) : null}
                </Events>
            </Content>
        </Container >)


}

export default withRouter(Company)