import React from 'react';

const Newuser = (props) => {
  return (

    <div className="modal" id="adduserModal" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="adduserModal">ADD USER</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>Name:</label>
                <input name='name' type="text" className="form-control" placeholder="enter name" onChange={props.handlemodaldata} />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input name='email' type="email" className="form-control" placeholder="name@example.com" onChange={props.handlemodaldata} />
              </div>
              <div className="form-group">
                <label>Company name</label>
                <input name='company' type="text" className="form-control" id="companyname" onChange={props.handlemodaldata} />
              </div>
              <div className="form-group">
                <label>address</label>
                <input name='address' type="text" className="form-control" id="address" onChange={props.handlemodaldata} />
              </div>
              <div className="form-group">
                <label>Phno</label>
                <input name='phno' type="number" className="form-control" id="phno" onChange={props.handlemodaldata} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" onClick={props.saveChanges} className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>


    </div>

  )
}
export default Newuser