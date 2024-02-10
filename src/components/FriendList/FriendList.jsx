import FriendListItem from '../FriendListItem/FriendListItem';
import { Galary } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Galary>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Galary>
  );
}
