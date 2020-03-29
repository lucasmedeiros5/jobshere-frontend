import React, { useState, useEffect } from 'react'

import {
    Container,
    ContainerPaperCenter,
    TextFieldStyled,
    Title,
    ButtonStyled,
    SpinnerContent
} from '../../GlobalStyles'
import PersonIcon from '@material-ui/icons/Person';
import Spinner from '@material-ui/core/CircularProgress'
import { withRouter, Redirect, useParams } from 'react-router-dom';
import Api from '../../../services/Api';
function PublicProfile({ history }) {
    const [loading, setLoading] = useState(true)
    const [person, setPerson] = useState({})
    let { id } = useParams();
    useEffect(() => {
        load()
    }, [])
    async function load() {
        try {
            const result = await Api.service('candidate').find({ query: { id: id } })
            const user = await Api.service('users').find({
                query: {
                    id: result.data[0].userId
                }
            })
            console.log(result)
            setPerson({ ...result.data[0], email: user.data[0].email })
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    return loading ? <SpinnerContent><Spinner></Spinner></SpinnerContent> :
        <Container>
            <ContainerPaperCenter>
                <Title variant="overline">JobsHere</Title>
                <PersonIcon></PersonIcon>
                <Title variant="body1">{person.name ? person.name : ''}</Title>
                <Title variant="body1">{person.cargo ? person.cargo : ''}</Title>      
                <Title variant="body1">{person.email ? person.email : ''}</Title>
                <Title variant="body1">{person.address ? person.address : ''}</Title>
                <Title variant="body1">{person.phone ? person.phone : ''}</Title>
            </ContainerPaperCenter>
        </Container>
}
export default withRouter(PublicProfile)