import './FollowCard.css'

export const FollowCard = ({ userName, name }) => {
  return (
    <article className='follow-card'>
      <div className='follow-card__content'>
        <img className='follow-card__image' src={`https://unavatar.io/${userName}`} alt={`Avatar ${userName}`} />
        <div className='follow-card__info'>
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
      </div>
      <button className='follow-card__button'>Seguir</button>
    </article>
  )
}