import React from "react";
import styles from "./index.module.css";
import userPhoto from "../../assets/images/user.png";
import Preloader from "../common/Preloader"


const Users = (props) => {

      let pagesCount = Math.ceil(props.usersCount/props.usersPerPage);
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
        return(
          <>
          {props.isFetching ? <Preloader/> :(
            <div>
                {
                  pages.map(p => <span className={props.selectedPage == p ? `${styles.paginationItem} ${styles.selectedPage} ` : styles.paginationItem} onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>)
                }
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
          )}
          </>
        )
}
export default Users;
