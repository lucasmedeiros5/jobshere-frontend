import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from '../GlobalStyles';
import {
    PaperTitle,
    Title,
    RegisterPaper,
    RegisterText,
    RegistrarTitle,
    ButtonBox,
    ButtonStyled
} from './styles';
function Home({ history }) {
    return (
        <Container>
            <PaperTitle variant="outlined">
                <Title variant="button">
                    O “JobsHere” tem como objetivo facilitar a vida tanto de pessoas que procuram uma vaga quanto das empresas que estão em busca de empregados.
               </Title>
            </PaperTitle>
            <RegisterPaper variant="outlined">
                <RegistrarTitle>REGISTRAR</RegistrarTitle>
                <RegisterText>
                    Você pode se cadastrar sendo candidato ou empresa!
                </RegisterText>
                <RegisterText>
                    Garanta sua vaga de emprego desejada, ou contrate os melhores profissionais do mercado!
                </RegisterText>
                <ButtonBox>
                    <ButtonStyled onClick={() => { history.push('/register/company/signup') }} variant="contained" color="primary">Registrar como empresa</ButtonStyled>
                    <ButtonStyled onClick={() => { history.push('/register/candidate/signup') }} variant="contained" color="primary">Registrar como candidato</ButtonStyled>
                </ButtonBox>
                <ButtonStyled onClick={() => { history.push('/login') }} variant="contained" color="primary">Ja sou cadastrado</ButtonStyled>
           
            </RegisterPaper>
        </Container>
    );
}
export default withRouter(Home)