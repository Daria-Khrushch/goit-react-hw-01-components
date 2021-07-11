import user from './user.json';
import Profile from './components/Profile';
import statisticalData from './statistical-data.json';
import Statistic from './components/Statistics';
import FriendList from './components/FriendList';
import friends from './friends.json';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statisticalData} />
      <Statistic stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
