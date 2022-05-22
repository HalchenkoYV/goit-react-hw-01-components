import s from './Profile.module.css';
import PropTypes from "prop-types";
function Profile({ username,
  tag,location,avatar,stats: { followers, views, likes } }) {
  return (
    <div className={s.profile}>
        <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                  className="avatar"
                  width={200}
            />
            <p className={s.name}>{username}</p>
            <p className={s.name}>@{tag}</p>
            <p className={s.name}>{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers: </span>
                <span className="quantity">{followers}</span>
            </li>
            <li>
                <span className="label">Views: </span>
                <span className="quantity">{views}</span>
            </li>
            <li>
                <span className="label">Like: </span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};


export default Profile