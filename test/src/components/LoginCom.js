import React from 'react';

function LoginCom({onSubmit, onChange}) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="id" onChange={onChange} placeholder="아이디" /><br />
      <input type="password" name="pwd" onChange={onChange} placeholder="비밀번호" /><br />
      <button>로그인</button>
    </form>
  );
}

export default LoginCom;