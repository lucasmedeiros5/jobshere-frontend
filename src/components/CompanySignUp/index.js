import React, { useState } from 'react'

import {
    Container,
    ContainerPaperCenter,
    TextFieldStyled,
    Title,
    ButtonStyled
} from '../GlobalStyles'
import { withRouter } from 'react-router-dom';

import Api from '../../services/Api';

function CompanySignUp({ history }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState()
    async function cadastrar() {
        try {
            if (password !== confirmPassword) {
                alert('Confirme seu password')
                return;
            }
            const result = await Api.service('register').create({
                users: { email, password }, company: { address, cnpj, name }
            })
            history.push('/login')
            alert('Cadastrado com sucesso!')
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>
            <ContainerPaperCenter>
                <Title variant="overline">JobsHere</Title>
                <Title variant="h5">CADASTRE SUA EMPRESA</Title>
                <TextFieldStyled onChange={e => { setName(e.target.value); }} value={name} variant="outlined" label="Empresa"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setCnpj(e.target.value); }} value={cnpj} variant="outlined" label="CNPJ"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setAddress(e.target.value); }} value={address} variant="outlined" label="Endereço"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setEmail(e.target.value); }} value={email} variant="outlined" type="email" label="Email"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setPassword(e.target.value); }} value={password} variant="outlined" type="password" label="Senha"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setConfirmPassword(e.target.value); }} value={confirmPassword} variant="outlined" type="password" label="Confirme sua senha"></TextFieldStyled>
                <ButtonStyled onClick={()=> cadastrar()} variant="contained" color="primary">Registrar</ButtonStyled>
            </ContainerPaperCenter>
        </Container>
    )
}
export default withRouter(CompanySignUp)