import React from "react";
import styles from "./index.module.css";
import * as axios from 'axios';
import userPhoto from "../../assets/images/user.png"

let Users = (props) => {

  let getUsers = () =>{
    if(props.users.length === 0){

      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => props.setUsers(response.data.items))

    }
  }

    return(
        <div>
        <button onClick={getUsers}>get users</button>
            {props.users.map(u => {
                return(
                    <div key={u.id} className={styles.user}>
                        <span className={styles.userLeft}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"/>
                            {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button> : <button onClick={()=> {props.follow(u.id)}}>follow</button>}
                        </span>
                        <span className={styles.userRight}>
                            <span>{u.name}</span>
                            <span>{u.status}</span>
                            <span>{"u.location.country"}</span>
                            <span>{"u.location.city"}</span>
                        </span>
                    </div>
                    )
                }
            )}
        </div>
    )
}


export default Users;
