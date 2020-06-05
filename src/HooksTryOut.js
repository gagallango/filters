// import React, { useState, useEffect } from 'react'
// import Users from '../src/Users/Users'
// import './App.css'

// function App() {

//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState([])

//   useEffect(() => {
//     setLoading(true);
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => {
//         // setUsers(res.data);
//         // setLoading(false);
//         setUsers(res.json())
//       })
//       .catch(err => { console.log(err); })
//   }, [])

//   useEffect(() => {
//     setFilteredUsers(
//       users.filter(user =>
//         user.username.toLowerCase().includes(search.toLowerCase()))
//     )
//   }, [search, users])

//   if (loading) {
//     return <p>Loading</p>
//   }

//   // render() {

//   //   const { search } = this.state;
//   //   const filteredUsers = this.state.users.filter(user => {
//   //     if (user.username.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
//   //       return user.username
//   //     } else if (user.email.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
//   //       return user.email
//   //     } else if (user.website.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
//   //       return user.website
//   //     }
//   //   })

//   return (
//     <>
//       <div className="search-box">
//         <h2>Usuarios</h2>
//         <input type="text" placeholder="Busca por nombre, email o website" onChange={e => setSearch(e.target.value)} />
//       </div>
//       <table>
//         <thead>
//           <tr className="table-r">
//             <th>Id</th>
//             <th>Usuario</th>
//             <th>Email</th>
//             <th>Dirección</th>
//             <th>Website</th>
//           </tr>
//         </thead>
//         <tbody className="tbody-r">
//           {filteredUsers.map((user, idx) =>
//             <Users key={idx} {...user} />
//           )}
//         </tbody>
//       </table>
//     </>
//   )
// }

// export default App
