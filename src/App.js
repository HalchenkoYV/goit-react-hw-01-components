import './App.css';
import Container from './components/Container/Cotainer';
import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import history from './components/TransactionHistory/transactions.json'


function App() {
  return (
      <Container>
        <Profile username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
        stats={user.stats} />
      <Statistics data={data} />
      <FriendList friends={friends} />;
      <TransactionHistory history={history} />;
      </Container>

  );
}

export default App;
