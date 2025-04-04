import React from 'react';
import HeaderCom from '../components/HeaderCom';
import { useAuth } from '../store/AuthContext';

function HeaderCon() {
    const { user, logout } = useAuth();

    return <HeaderCom user={user} onLogout={logout} />;
}

export default HeaderCon;