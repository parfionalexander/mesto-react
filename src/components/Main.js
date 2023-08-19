import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cardsData]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      
      setCards(cardsData);
      })
      .catch((err) => console.error(`Ошибка: ${err}`))
  }, []);

  return (
    <main>
      <section className="profile">
        <button id="avatarEdit" className="profile__avatar-edit" type="button" 
        aria-label="Открыть попап редактирования аватара" onClick={props.onEditAvatar}>
          <img className="profile__avatar" name="avatar" alt="Аватар пользователя" src={userAvatar} />
        </button>

        <div className="profile__info">
          <div className="profile__name-flex">
            <h1 className="profile__info-name">{userName}</h1>
            <button className="profile__edit-button" type="button" aria-label="Открыть попап профайла" 
            onClick={props.onEditProfile}></button> 
          </div>
          <p className="profile__info-profession">{userDescription}</p> 
        </div>
        <button className="profile__add-button" type="button" aria-label="Открыть попап создания карточки"
        onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map((item) => <Card key={item._id} card={item} name={item.name} src={item.link} likes={item.likes.length}
        onCardClick={props.onCardClick}/>)}
      </section>
    </main>
  )
}

export default Main;