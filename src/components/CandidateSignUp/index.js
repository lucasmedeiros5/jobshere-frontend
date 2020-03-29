import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import {
    Container,
    ContainerPaperCenter,
    TextFieldStyled,
    Title,
    ButtonStyled
} from '../GlobalStyles'

import Api from '../../services/Api'

function CompanySignUp({ history }) {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [cargo, setCargo] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [confirmPassword, setConfirmPassword] = useState()
    async function cadastrar() {
        try {
            if (password !== confirmPassword) {
                alert('Confirme seu password')
                return;
            }
            const result = await Api.service('register').create({
                users: { email, password }, candidate: { cargo, address, cpf, phone, name }
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
                <Title variant="h5">CADASTRE-SE COMO CANDIDATO</Title>
                <TextFieldStyled onChange={e => { setName(e.target.value); }} value={name} variant="outlined" label="Nome"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setCpf(e.target.value); }} value={cpf} variant="outlined" label="CPF"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setAddress(e.target.value); }} value={address} variant="outlined" label="Endereço"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setCargo(e.target.value); }} value={cargo} variant="outlined" label="Cargo"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setPhone(e.target.value); }} value={phone} variant="outlined" label="Telefone"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setEmail(e.target.value); }} value={email} variant="outlined" type="email" label="Email"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setPassword(e.target.value); }} value={password} variant="outlined" type="password" label="Senha"></TextFieldStyled>
                <TextFieldStyled onChange={e => { setConfirmPassword(e.target.value); }} value={confirmPassword} variant="outlined" type="password" label="Confirmar senha"></TextFieldStyled>
                <ButtonStyled onClick={() => cadastrar()} variant="contained" color="primary">Registrar</ButtonStyled>
            </ContainerPaperCenter>
        </Container>
    )
}

export default withRouter(CompanySignUp)