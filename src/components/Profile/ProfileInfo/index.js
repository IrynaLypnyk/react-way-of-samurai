import React from 'react';
import styles from './index.module.css';
import Preloader from "../../common/Preloader";

const ProfileInfo = ({profile}) => {
    if(!profile){
      return  <Preloader/>
    }
    return (
        <div className={styles.profileInfo}>
            {/*<img className={styles.profileInfoAvatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRr7s7phdifPkZIF17TcMfyLQGhzz-UjqCFULo7Jx5xzt0a5Ck"/>*/}
            <img className={styles.profileInfoAvatar} src={profile.photos.large}/>
            <div className={styles.profileInfoText} >
                <div>{profile.aboutMe}</div>
            </div>
        </div>
    )
}
export default ProfileInfo;