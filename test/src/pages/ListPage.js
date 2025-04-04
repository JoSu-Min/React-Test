import React, { useState, useEffect } from 'react';
import { getList } from '../service/member';
import ListCon from "../containers/ListCon";

const ListPage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await getList();
                setItems(data);
            } catch (error) {
                console.error('Error fetching items:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    return (<>
        <ListCon />
    </>);
};

export default ListPage;