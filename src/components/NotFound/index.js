import React from 'react'

import {
    Container,
    ContainerPaperCenter,
    Title
} from '../GlobalStyles'
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Container>
            <ContainerPaperCenter>
                <Title variant="overline">JobsHere</Title>
                <Title variant="h5">Page not found</Title>
                <Link to="/">Voltar</Link>
            </ContainerPaperCenter>
        </Container>
    )
}
