import { Card, Username, Tag, Location, BoardStats, StatList, StatTitle, StatDesk } from "./Profile.styled";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Card class="profile">
      <div class="description">
        <img
          src={avatar}
          alt="User avatar"
          width="250"
        />
        <Username class="name">{username}</Username>
        <Tag class="tag">{ tag}</Tag>
        <Location class="location">{location}</Location>
      </div>

      <BoardStats class="stats">
        <StatList>
          <StatTitle class="label">Followers</StatTitle>
          <StatDesk class="quantity">{stats.followers}</StatDesk>
        </StatList>
        <StatList>
          <StatTitle class="label">Views</StatTitle>
          <StatDesk class="quantity">{stats.views}</StatDesk>
        </StatList>
        <StatList>
          <StatTitle class="label">Likes</StatTitle>
          <StatDesk class="quantity">{stats.likes}</StatDesk>
        </StatList>
      </BoardStats>
    </Card>
  );
}
