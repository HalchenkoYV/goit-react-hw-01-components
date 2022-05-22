import s from './FriendList.module.css'
function FriendList({ friends }) {
  return (
      <section className={s.statistics}>
          <ul className={s.friend_list}>
              {friends.map(friend => (
                <li className={s.item} key={friend.id}>
                    <span className={s.status}style={{backgroundColor:getRandomHexColor(friend.isOnline)}}></span>
                      <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
                      <p className={s.name}>{friend.name }</p>
                </li>
              ))}
          </ul>
</section>
  );
}

function getRandomHexColor(status) {
  if (status) {
    
    return 'green'
  }
  else {
    return 'white'
  }
  
}

export default FriendList