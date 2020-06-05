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
                    {props.address.street},
                <br />
                    {props.address.zipcode},
                <br />
                    {props.address.city}
                </th>
                <th>
                    {props.website}
                </th>
            </tr>
        </>
    )
}

export default Users