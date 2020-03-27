import React from "react";
import {connect} from "react-redux";
import * as axios from 'axios';
import Users from "../index";
import {follow, setUsers, unfollow, setCurrentPage, setUsersCount, setIsFetching} from "../../../redux/user-reducer";

class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${this.props.selectedPage}`)
      .then(response => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      })

  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${pageNumber}`)
      .then(response =>  {
          this.props.setIsFetching(false);
          this.props.setUsers(response.data.items)})
  }
  render(){
        return(
            <Users
            users={this.props.users}
            selectedPage={this.props.selectedPage}
            usersCount={this.props.usersCount}
            usersPerPage={this.props.usersPerPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setUsers={this.props.setUsers}
            setCurrentPage={this.props.setCurrentPage}
            isFetching={this.props.isFetching}
            />
          )
  }
}

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        usersPerPage: state.usersPage.usersPerPage,
        selectedPage: state.usersPage.selectedPage,
        isFetching: state.usersPage.isFetching,

    }
};
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersCount,
    setIsFetching,
})(UsersContainer);
