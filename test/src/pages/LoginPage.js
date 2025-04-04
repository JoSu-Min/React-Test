import React, { useState } from 'react';
import { useAuth } from '../store/AuthContext';
import { loginCheck, getList } from '../service/member';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        id: '',
        pwd: ''
    });
    const { login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = loginCheck(credentials.id, credentials.pwd);
        if (result === 0) {
            const user = getList().find(user => user.id === credentials.id);
            login(user);
        } else if (result === 1) {
            alert('비밀번호가 틀렸습니다.');
        } else {
            alert('존재하지 않는 아이디입니다.');
        }
    };

    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>아이디:</label>
                    <input
                        type="text"
                        name="id"
                        value={credentials.id}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>비밀번호:</label>
                    <input
                        type="password"
                        name="pwd"
                        value={credentials.pwd}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default LoginPage;