import React, { Component } from 'react';

class Users extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <tr>
                    <th>
                        {this.props.id}
                    </th>
                    <th>
                        {this.props.username}
                    </th>
                    <th>
                        {this.props.email}
                    </th>
                    <th>
                        {this.props.address}
                    </th>
                    <th>
                        {this.props.website}
                    </th>
                </tr>
            </>
        )
    }
}

export default Users