import React, { useEffect } from 'react';
import { fetchData } from '../../api/fetchData';
const TestComponent = () => {
    useEffect(() => {
        const subscription = fetchData().subscribe(({ rows }) => {
            console.log(rows);
        });
        return () => subscription.unsubscribe();
    }, []);
    return (
        <div>
            Test
        </div>
    )
}

export default TestComponent
