import { useReducer } from "react";
import RegCom from "../components/RegCom";
import { initalState, reducer } from "../moduls/member_red";
import { useNavigate } from "react-router-dom";
import { register } from "../service/member";

function RegCon() {
    const [state, dispatch] = useReducer(reducer, initalState);
    const onChange = (e) => {
        const {value, name} = e.target;
        dispatch({type:"CHANGE_INPUT", name, value, form:"register"});
    }
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("register : ", state)
        try {
            dispatch({type:"LOADING"})
            const result = register(state.register)
            dispatch({type:"FINISHED"})
            console.log("result : ", result)
            if(result === 1) {
                navigate("/list")
            } else {
                throw new Error("동일 아이디 있음")
            }
        } catch(e) {
            dispatch({type:"ERROR", error: e.toString()})
        }
    }

    return (<>
        <RegCom 
            loading={state.loading} 
            error={state.error}
            onSubmit={onSubmit} 
            onChange={onChange} 
            id={state.register.id}
            pwd={state.register.pwd} 
            name={state.register.name}
            addr={state.register.addr} 
        />
    </>);
}

export default RegCon;