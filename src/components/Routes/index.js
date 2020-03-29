import React, { useEffect, useState } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import { view } from 'react-easy-state';
import Home from '../Home';
import AppBarComponent from '../AppBarComponent';
import CompanySignUp from '../CompanySignUp';
import CandidateSignUp from '../CandidateSignUp';
import Login from '../Login';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NotFound from '../NotFound';
import CandidateEdit from '../Profile/Candidate/Edit';
import CompanyEdit from '../Profile/Company/Edit';
import CompanyProfile from '../Profile/Company';
import CandidadeProfile from '../Profile/Candidate';
import { GlobalStore } from '../../store/GlobalStore';
import { verify, fetchDataCandidate } from '../../services/Util';
import { SpinnerContent } from '../GlobalStyles'
import Api from '../../services/Api';
import Spinner from '@material-ui/core/CircularProgress';
import AddProposal from '../Profile/Company/AddProposal';
import PublicProfile from '../Profile/PublicProfile';
const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: 'rgba(82, 109, 169, 0.87)',
            dark: '#143C8C',
            contrastText: '#fff',
        },
        secondary: {
            main: '#fff',
            dark: '#008732',
            contrastText: 'black',
        },
        error: {
            main: '#BD0043',
            contrastText: '#fff',
        },
        divider: '#D7D6D5',
        background: {
            paper: '#d7d6d54d',
            default: "white"
        },
    },
    overrides: {
        MuiDrawer: {
            paper: {
                color: 'rgba(82, 109, 169, 0.87)',
                background: 'white'
            }
        },
        MuiCard: {
            root: {
                background: '#fffcfca8'
            }
        }, MuiPaper: {
            root: {
                color: 'black'
            }
        }
    },
    typography: {
        fontFamily: [
            'Josefin Sans',
            'sans-serif'
        ].join(','),
    },
});
function Routes({ history }) {
    const [loading, setLoading] = useState(true)
    const [type, setType] = useState(false)
    useEffect(() => {
        getUser()
        async function getUser() {
            try {
                await verify()
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
    }, [])
    function getType() {
        if (GlobalStore.user && GlobalStore.user.company) {
            return 'company';
        } else if (GlobalStore.user && GlobalStore.user.candidate) {
            return 'candidate';
        }
        return false;
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {loading ? <Loading></Loading> :
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <AppBarComponent />
                            <Home />
                        </Route>
                        <Route exact path="/public/:id">
                            <AppBarComponent />
                            <PublicProfile />
                        </Route>
                        <Route exact path="/register/candidate/signup">
                            <AppBarComponent />
                            <CandidateSignUp />
                        </Route>
                        <Route exact path="/register/company/signup">
                            <AppBarComponent />
                            <CompanySignUp />
                        </Route>
                        <Route exact path="/login">
                            <AppBarComponent />
                            <Login />
                        </Route>
                        <Route exact path="/profile/company" render={
                            () => {
                                return getType() === 'company' ?
                                    <>
                                        <AppBarComponent />
                                        <CompanyProfile />
                                    </>
                                    : <Redirect to="/"></Redirect>
                            }
                        }>

                        </Route>
                        <Route exact path="/profile/company/add">
                            <AppBarComponent />
                            <AddProposal />
                        </Route>
                        <Route exact path="/profile/company/edit">
                            <AppBarComponent />
                            <CompanyEdit />
                        </Route>

                        <Route exact path="/profile/candidate" render={
                            () => {
                                return getType() === 'candidate' ?
                                    <>
                                        <AppBarComponent />
                                        <CandidadeProfile />
                                    </>
                                    : <Redirect to="/"></Redirect>

                            }
                        }>

                        </Route>
                        <Route exact path="/profile/candidate/edit">
                            <AppBarComponent />
                            <CandidateEdit />
                        </Route>
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>}
        </ThemeProvider>
    )
}
function Loading() {
    return <SpinnerContent><Spinner></Spinner></SpinnerContent>
}
export default view(Routes)