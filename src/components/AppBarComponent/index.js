import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { ToolbarStyled, ListStyled } from './styles';
import { GlobalStore } from '../../store/GlobalStore';
import { withRouter } from 'react-router-dom';
import { ButtonStyled } from '../GlobalStyles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Api from '../../services/Api';
function AppBarComponent({ history }) {
    const [bar, setBar] = useState(false)
    async function logout() {
        await Api.logout();
        GlobalStore.token = undefined;
        GlobalStore.user = undefined;
        history.push('/login');
    }
    return (
        <>
            <AppBar position="static">
                <ToolbarStyled>
                    <Typography style={{ cursor: 'pointer' }} onClick={() => {
                        if (GlobalStore.user && GlobalStore.user.company) {
                            history.push('/profile/company'); setBar(false)
                        } else if (GlobalStore.user && GlobalStore.user.candidate) {
                            history.push('/profile/candidate'); setBar(false)
                        } else {
                            history.push('/'); setBar(false)
                        }
                    }} variant="h6">
                        Jobs Here
                    </Typography>
                    {GlobalStore.user ? <ButtonStyled color="secondary" variant="outlined" onClick={() => { setBar(!bar) }} >Menu</ButtonStyled> : null}
                </ToolbarStyled>
            </AppBar>
            <Drawer anchor="right" transitionDuration={200} open={bar} onClose={() => setBar(!bar)}>
                <ListStyled component="nav" aria-label="main mailbox folders">
                    <ListItem onClick={() => {
                        if (GlobalStore.user && GlobalStore.user.company) {
                            history.push('/profile/company'); setBar(false)
                        } else {
                            history.push('/profile/candidate'); setBar(false)
                        }
                    }} key={1} button>
                        <ListItemText>Ir para perfil</ListItemText>
                    </ListItem>
                    <ListItem onClick={() => {
                        if (GlobalStore.user && GlobalStore.user.company) {
                            history.push('/profile/company/edit'); setBar(false)
                        } else {
                            history.push('/profile/candidate/edit'); setBar(false)
                        }

                    }} key={1} button>
                        <ListItemText>Editar perfil</ListItemText>
                    </ListItem>
                    {GlobalStore.user && GlobalStore.user.company ?
                        <ListItem onClick={() => { history.push('/profile/company/add'); setBar(false) }} key={2} button>
                            <ListItemText>Adcionar vagas</ListItemText>
                        </ListItem> : null
                    }
                    <ListItem onClick={() => { logout(); setBar(false) }} key={3} button>
                        <ListItemText>Logout</ListItemText>
                    </ListItem>
                </ListStyled>
            </Drawer>
        </>
    );
}
export default withRouter(AppBarComponent)