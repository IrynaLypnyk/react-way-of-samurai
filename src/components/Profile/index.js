import React from 'react';
import styles from './index.module.css';
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = ({state}) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileImgWrap}>
                <img src="https://fimgs.net/himg/o.61686.jpg" alt="winter"/>
            </div>
            <div>
                <ProfileInfo />
            </div>
            <MyPosts state={state}/>
        </div>
    )
}
export default Profile;