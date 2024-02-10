import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
