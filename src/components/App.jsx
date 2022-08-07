import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from '../user.json';
import statistics from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import styled from "@emotion/styled";

export const App = () => {
  return (
    <Box>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Box>
  )
};

const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: 3fr 1fr;
    align-items: stretch;
  
    align-content: center;  
    gap: 8px;
    padding: 8px;
`;