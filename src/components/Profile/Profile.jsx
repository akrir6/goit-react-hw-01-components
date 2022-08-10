import PropTypes from 'prop-types';
import { UserProfile, Description, UserAvarar, UserName, UserTag, UserLocation, StatsList, StatsListItem, Label, Quantity } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats:{followers, views, likes} } ) => {
    return (<UserProfile>
        <Description>
            <UserAvarar
                src={avatar}
                alt="User avatar"
            />
            <UserName>{username}</UserName>
            <UserTag>@{tag}</UserTag>
            <UserLocation>{location}</UserLocation>
        </Description>

        <StatsList>
            <StatsListItem>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </StatsListItem>
            <StatsListItem>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </StatsListItem>
            <StatsListItem>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </StatsListItem>
        </StatsList>
    </UserProfile>)
}
 
Profile.propTypes = {
    
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired,

}