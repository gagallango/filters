import React from 'react';

function Users(props) {
    return (
        <>
            <tr>
                <th>
                    {props.id}
                </th>
                <th>
                    {props.username}
                </th>
                <th>
                    {props.email}
                </th>
                <th>
                    {props.address}
                </th>
                <th>
                    {props.website}
                </th>
            </tr>
        </>
    )
}

export default Users