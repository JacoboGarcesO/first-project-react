import { useState } from 'react';
import './FollowCard.css'
import { Modal } from './Modal';

export const FollowCard = ({ children, initialIsFollowing, userName, format }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [followingText, setFollowingText] = useState('Siguiendo');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const text = isFollowing ? followingText : 'Seguir';
  
  const buttonClasses = isFollowing
    ? 'follow-card__button follow-card__button--following'
    : 'follow-card__button';

  const handleClick = () => {
    setIsModalVisible(isFollowing);

    !isFollowing && toggleFollowing();
  }

  const toggleFollowing = () => {
    setIsFollowing(!isFollowing);
  }

  const hiddenModal = () => {
    setIsModalVisible(false);
  }

  const handleMouseEnter = () => {
    isFollowing && setFollowingText('Dejar de seguir');
  }

  const handleMouseOut = () => {
    isFollowing && setFollowingText('Siguiendo');
  }

  return (
    <article className='follow-card'>
      <div className='follow-card__content'>
        <img className='follow-card__image' src={`https://unavatar.io/${userName}`} alt={`Avatar ${userName}`} />
        <div className='follow-card__info'>
          {children}
          <span>{format(userName)}</span>
        </div>
      </div>
      <button className={buttonClasses} onClick={handleClick} onMouseOut={handleMouseOut} onMouseEnter={handleMouseEnter}>{text}</button>
      {isModalVisible && <Modal userName={format(userName)} toggleFollowing={toggleFollowing} hiddenModal={hiddenModal} />}
    </article>
  )
}