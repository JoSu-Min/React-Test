import React from 'react';
import { Link } from 'react-router-dom';

function HeaderCom({ onLogout, isLoggedIn, user }) {
    return (<>
        <Link to="/">HOME</Link> &nbsp;
        <Link to="/list">LIST</Link> &nbsp;
        {isLoggedIn ? 
            <><Link to="/logout" onClick={onLogout}>LOGOUT</Link> {user}님 로그인 상태 </>: 
            <Link to="/login">LOGIN</Link>
        }
        &nbsp;
        <Link to="/register">REGISTER</Link> &nbsp;
        <hr/>
    </>);
}

export default HeaderCom;