"use client";
import React, { useState, useEffect } from "react";
export default  function TodoList() {


    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3032/task');
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData);

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>

                            <th>Task Name</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data, id) => (

                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.completed}</td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
     
