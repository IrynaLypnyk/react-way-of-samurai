import React from 'react';
import Profile from "../index";
import * as axios from "axios";
import {setUserProfile} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        // this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data); //задиспатчили полученные данные в reducer
            })

    }

    render() {
        return (
           <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let WithUrlProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(WithUrlProfileContainer);