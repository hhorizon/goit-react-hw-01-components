import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <Fragment>
            <span className={isOnline ? s.online : s.offline}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </Fragment>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem;