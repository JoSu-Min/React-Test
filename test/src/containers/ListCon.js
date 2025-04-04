import React, { useEffect, useReducer, useState } from 'react';
import ListCom from '../components/ListCom';
import { initalState, reducer } from '../moduls/member_red';
import { getList, deleteItem, updateItem } from '../service/member';
import { useAuth } from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';

function ListCon() {
    const [state, dispatch] = useReducer(reducer, initalState);
    const [selectedMember, setSelectedMember] = useState(null);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            dispatch({ type: "LOADING" })
            setTimeout(() => {
                const data = getList();
                dispatch({ type: "FINISHED" })
                dispatch({ type: "LIST", data })
            }, 2)
        } catch (e) {
            dispatch({ type: "ERROR", error: e.toString() })
        }
    }, [])

    const handleSelect = (id) => {
        const member = state.data.find(d => d.id === id);
        setSelectedMember(member);
    };

    const handleDelete = (id) => {
        deleteItem(id);
        const updatedData = state.data.filter(member => member.id !== id);
        dispatch({ type: "LIST", data: updatedData });
        setSelectedMember(null);
        setTimeout(() => {
            navigate('/');
        }, 0);
    };

    const handleEdit = (member) => {
        updateItem(member.id, member);
        const updatedData = state.data.map(m => (m.id === member.id ? member : m));
        dispatch({ type: "LIST", data: updatedData });
        setSelectedMember(null);
        navigate('/LIST');
    };

    return (<>
        <ListCom 
            data={state.data} 
            loading={state.loading} 
            error={state.error} 
            selectedMember={selectedMember}
            onSelect={handleSelect}
            onDelete={handleDelete}
            onEdit={handleEdit}
            currentUser={user}
            setSelectedMember={setSelectedMember}
        />
    </>);
}

export default ListCon;