import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';
import s from './FriendList.module.css'

const FriendsList = ({ friends }) => {
    return (
        <ul className={s.list}>
            {friends.map(friend => (
                <li className={s.item} key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li> 
            ))}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
}

export default FriendsList;