import { Box, Name, Status } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Box>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="58" />
      <Name>{name}</Name>
    </Box>
  );
}