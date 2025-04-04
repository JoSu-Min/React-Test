let data_set = [
    {id:"7", pwd:"777", name:"손흥민", addr:"영국 토트넘"},
    {id:"4", pwd:"444", name:"김민재", addr:"독일 뮌헨"},
    {id:"18", pwd:"181818", name:"이강인", addr:"파리 생제르맹"}
];

const getList = () => data_set;

const loginCheck = (id, pwd) => {
    const data = data_set.filter(data => data.id === id);
    if(data.length !== 0) { //id가 존재하는 경우
        if(data[0].pwd === pwd) {
            return 0; //인증 성공
        } else {
            return 1; //비밀번호 틀림
        }
    } else {
        return -1; //존재하지 않는 id
    }
};

const register = (user) => {
    const isExist = data_set.some(data => data.id === user.id);
    if(isExist) {
        return 0; //이미 존재하는 아이디
    }
    data_set = data_set.concat(user);
    return 1; //성공
};

const deleteItem = (id) => {
    data_set = data_set.filter(item => item.id !== id);
    return 1; //성공
};

const updateItem = (id, newData) => {
    const index = data_set.findIndex(item => item.id === id);
    if(index !== -1) {
        data_set[index] = {...data_set[index], ...newData};
        return 1; //성공
    }
    return 0; //실패
};

export { getList, loginCheck, register, deleteItem, updateItem };