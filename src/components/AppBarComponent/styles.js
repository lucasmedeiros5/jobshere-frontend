import styled from 'styled-components';

import Toolbar from '@material-ui/core/Toolbar';

import List from '@material-ui/core/List';

export const ToolbarStyled = styled(Toolbar)`
    display:flex;
    justify-content:space-between;
`;
export const ListStyled = styled(List)`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

