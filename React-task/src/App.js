import React, { Component } from 'react';
import './App.css';
import { getdata } from './Services';
import Listdata from './List';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import Newuser from './Newuser'
import { saveData } from './action';


class App extends Component {

  constructor(props) {
    super(props);
    this.loginDatas = {};
  }


  handleclick = (id) => {
    const res = this.props.data.find((v, i) => (i + 1) === id);
    this.props.dispatch({
      type: 'DISPLAY_DETAIL',
      payload: res
    })
  }

  handledelete = (e, item) => {
    const deleteitem = this.props.data.filter(m => m.id !== item)
    this.props.dispatch({
      type: 'DELETED_ITEM',
      payload: deleteitem
    })
    e.stopPropagation();
  }


  handlemodaldata = ({ target }) => {
    const key = target.name;
    let value = target.value;
    this.loginDatas['id'] = this.props.data.length + 1;
    this.loginDatas[key] = value;
  }

  saveChanges = () => {
    this.props.dispatch(saveData(this.loginDatas));
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">

        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal"></h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="#">{this.props.current.name}</a>
          </nav>

        </div>

        <div className="row mb-5 mt-5">
          <div className="media">
            <img src="https://cdn3.iconfinder.com/data/icons/toolbar-people/512/user_clock_man_male_profile_account_person-32.png" className="mr-3" alt="..." />
            <div className="media-body">
              <h3 className="mt-0">Contacts</h3>
              Welcome to FCM Contact Page.
            </div>
          </div>
        </div>

        <div className="row">



          <div className="col-md-6">
            <div className="row mb-3">
              <div className="col-md-4">
                <button className="btn btn-primary" data-toggle="modal" data-target="#adduserModal">Add Contact</button>
              </div>
            </div>

            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th />
                  <th scope="col">Name</th>
                  <th scope="col">Company</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.props.data.map(data => (
                  <tr key={data.id} onClick={() => this.handleclick(data.id)}>
                    <td>  <span className="badge badge-dark badge-pill">{data.name.slice(0, 1)}</span></td>
                    <td>{data.name}
                      <div className="text-dark">{data.email}</div>
                    </td>
                    <td>{data.company}</td>
                    <td><button onClick={(e) => this.handledelete(e, data.id)} type='button' className="btn btn-danger">Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
          <div className="col-md-6 mt-5">
            {this.props.current
              && this.props.current !== null &&
              <Listdata data={this.props.current} />}
          </div>

        </div>
        <Newuser handlemodaldata={this.handlemodaldata}
          saveChanges={this.saveChanges}
        />
      </div>
    );
  }
}

const stateProps = (state) => {
  console.log(state.data.length, "sattat");
  return {

    data: state.data,
    current: state.current
  }
}

const dispatchProps = (dispatch) => {
  return {
    showDetail: () => { }
  }
}

export default connect(stateProps, null)(App);
