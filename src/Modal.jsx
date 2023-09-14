import './Modal.css';

export const Modal = ({ userName, toggleFollowing, hiddenModal }) => {
  const stopFollowing = () => {
    toggleFollowing();
    hiddenModal();
  }

  return (
    <section className="modal">
      <div className="modal__content">
        <h2 className="modal__title">¿Queres dejar de seguir a {userName}?</h2>
        <p className="modal__description">Sus Tweets ya no aparecerán en tu cronología de inicio. Podrás seguir viendo su perfil, a menos que sus Tweets estén protegidos. </p>
        <div className="modal__buttons">
          <button className="modal__button" onClick={stopFollowing}>Dejar de seguir</button>
          <button className="modal__button modal__button--ghost" onClick={hiddenModal}>Cancelar</button>
        </div>
      </div>
    </section>
  );
}