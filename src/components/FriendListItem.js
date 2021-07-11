import PropTypes from 'prop-types';

export default function FriendListItem({ isOnline, name, avatar }) {
  return (
    <li className="">
      <span className="">{isOnline}</span>
      <img className={avatar} src={avatar} alt={name} width="48" />
      <p className={name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
