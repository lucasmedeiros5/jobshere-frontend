import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {
    SearchPaper,
    InputBaseStyled
} from './styles';
import { GlobalStore } from '../../store/GlobalStore'
import Api from '../../services/Api';
function SearchBox({ history, setProposal }) {

    const [search, setSearch] = useState("")
    async function find() {
        try {
            const results = await Api.service('proposal').find({
                query: {
                    $or: [
                        {name: { $like: `%${search}%` }},
                        {Company: {$like: `%${search}%`}}
                    ]
                }
            })
            console.log(search, results)
            setProposal(results.data)
        } catch (error) {
            console.log(error)
            setProposal([])
        }
    }

    return (
        <SearchPaper>
            <InputBaseStyled
                placeholder="Procurar por vagas"
                inputProps={{ 'aria-label': 'Procurar por vagas' }}
                onChange={evt => { setSearch(evt.target.value) }}
                onKeyUp={evt => { if (evt.keyCode === 13 && search.length > 0) find() }}
                value={search}
            />
            <IconButton
                onClick={() => { find() }}
                aria-label="search">
                <SearchIcon />
            </IconButton>
        </SearchPaper>
    );
}
export default withRouter(SearchBox)