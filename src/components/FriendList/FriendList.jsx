import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    return (<ul className="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
        />)
        )}
    </ul>)
}

FriendList.propRypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))
}