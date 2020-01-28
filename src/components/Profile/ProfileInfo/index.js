import React from 'react';
import styles from './index.module.css';

const ProfileInfo = () => {

    return (
        <div className={styles.profileInfo}>
            <img className={styles.profileInfoAvatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRr7s7phdifPkZIF17TcMfyLQGhzz-UjqCFULo7Jx5xzt0a5Ck"/>
            <div className={styles.profileInfoText} >ProfileInfo</div>
        </div>
    )
}
export default ProfileInfo;