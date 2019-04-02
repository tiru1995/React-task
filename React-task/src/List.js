import React from 'react';

const Listdata = (data) => {
    return (

        <div className="right-side-bar">

     
     <table className="table">
  <tbody>
    <tr>
      <th scope="row">FullName:</th>
      <td>{data.data.name}</td>
     
    </tr>
    <tr>
      <th scope="row">Email:</th>
     <td>{data.data.email}</td>
    </tr>
    <tr>
      <th scope="row">PhNo:</th>
      
      <td>{data.data.phno}</td>
    </tr>
    <tr>
      <th scope="row">Company:</th>
      
      <td>{data.data.company}</td>
    </tr>
    <tr>
      <th scope="row">Address:</th>
     
      <td>{data.data.address}</td>
    </tr>
  </tbody>
</table>


     </div>
      );
}
 
export default Listdata ;