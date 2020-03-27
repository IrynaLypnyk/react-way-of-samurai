import React from 'react';
import styles from './index.module.css';
import MyPostsContainer from "./MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileImgWrap}>
                <img src="https://fimgs.net/himg/o.61686.jpg" alt="winter"/>
            </div>
            <div>
                <ProfileInfo profile={props.profile}/>
            </div>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}
export default Profile;