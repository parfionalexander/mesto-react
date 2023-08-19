function Card({name, src, likes, card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <button id="trashButton" className="element__trash" type="button" aria-label="Удалить карточку"></button>
        <img className="element__pic" alt={name} src={src} onClick={handleClick}/>
          <div className="element__info">
            <h2 className="element__name">{name}</h2>
            <div className="element__likes">
              <button className="element__reaction" type="button" aria-label="Поставить лайк карточке"></button>
                <p className="element__reaction-count">{likes}</p>
            </div>
          </div>
    </div>
  )
};

export default Card;