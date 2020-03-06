import React from "react";
import styles from "./index.module.css"

let Users = (props) => {
    return(
        <div>
            {props.users.map(u => {
                return(
                    <div key={u.id} className={styles.user}>
                        <span className={styles.userLeft}>
                            <img src={u.photoUrl} alt="avatar"/>
                            <button>follow</button>
                        </span>
                        <span className={styles.userRight}>
                            <span>{u.fullName}</span>
                            <span>{u.status}</span>
                            <span>{u.location.country}</span>
                            <span>{u.location.city}</span>
                        </span>
                    </div>
                    )
                }
            )}
        </div>
    )
}


export default Users;