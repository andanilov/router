import React from 'react';
import { useParams } from 'react-router-dom';
import userIdsDb from '../userIdsDb';
import StyledLink from './SlyledLink';

const AnotherUserPageLink = ({ children }) => {
    const id = useParams()?.id;
    console.log(id, +id + 1, userIdsDb.includes(+id + 1));

    return userIdsDb.includes(+id + 1)
        ? <StyledLink to={`/users/${+id + 1}/profile`}>{children}</StyledLink>
        : <>No next user!</>
}
 
export default AnotherUserPageLink;
