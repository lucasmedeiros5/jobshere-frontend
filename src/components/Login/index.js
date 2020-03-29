import React, { useState } from 'react'

import {
    Container,
    ContainerPaperCenter,
    TextFieldStyled,
    Title,
    ButtonStyled,
    SpinnerContent
} from '../GlobalStyles'
import Spinner from '@material-ui/core/CircularProgress'
import { GlobalStore } from '../../store/GlobalStore'
import { withRouter, Redirect } from 'react-router-dom';
import Api from '../../services/Api';
import { verify, fetchDataCandidate } from '../../services/Util'
function Login({ history }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    async function logar() {
        console.log(email, password)
        try {           
            setLoading(false)
            const user = await Api.authenticate({
                strategy: 'local',
                email: email,
                password: password
            })
            GlobalStore.token = user.accessToken;
            await verify()
            if (GlobalStore.user.company) {
                history.push('/profile/company')
            } else {
                await fetchDataCandidate()
                history.push('/profile/candidate')
            }
            console.log(GlobalStore)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            alert('Usuario ou senha inválidos!')
        }
    }
    return loading ? <SpinnerContent><Spinner></Spinner></SpinnerContent> :
        <Container>
            <ContainerPaperCenter>
                <Title variant="overline">JobsHere</Title>
                <Title variant="h5">ENTRAR</Title>
                <TextFieldStyled onChange={e => { setEmail(e.target.value) }} value={email} variant="outlined" type="email" label="Email"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setPassword(e.target.value) }} value={password} variant="outlined" type="password" label="Senha"></TextFieldStyled>
                <ButtonStyled onClick={logar} variant="contained" color="primary">entrar</ButtonStyled>
            </ContainerPaperCenter>
        </Container>
}
export default withRouter(Login)