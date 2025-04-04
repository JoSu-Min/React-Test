import React, { useState } from 'react';
import LoginCom from '../components/LoginCom';
import { loginCheck, getList } from '../service/member';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

const LoginCon = () => {
    const [formData, setFormData] = useState({ id: '', pwd: '' });
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = loginCheck(formData.id, formData.pwd);
        if (result === 0) {
            const user = getList().find(user => user.id === formData.id);
            login(user);
            navigate('/list');
        } else if (result === 1) {
            alert('비밀번호가 틀렸습니다.');
        } else {
            alert('존재하지 않는 아이디입니다.');
        }
    };

    return <LoginCom onChange={handleChange} onSubmit={handleSubmit} />;
};

export default LoginCon;