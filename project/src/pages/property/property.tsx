import { Offers } from '../../types/offer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ImagesComponent from '../../components/images/images';
import CommentFormComponent from '../../components/form/form';

type PropertyScreenProps = {
  offers: Offers;
}

function PropertyScreen({ offers }: PropertyScreenProps): JSX.Element {
  const { id } = useParams();
  const [room, setRoom] = useState({
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'https://12.react.pages.academy/static/hotel/12.jpg',
    images: [
      'https://12.react.pages.academy/static/hotel/3.jpg',
      'https://12.react.pages.academy/static/hotel/7.jpg',
      'https://12.react.pages.academy/static/hotel/12.jpg',
      'https://12.react.pages.academy/static/hotel/1.jpg',
      'https://12.react.pages.academy/static/hotel/4.jpg',
      'https://12.react.pages.academy/static/hotel/14.jpg',
      'https://12.react.pages.academy/static/hotel/9.jpg',
      'https://12.react.pages.academy/static/hotel/10.jpg',
      'https://12.react.pages.academy/static/hotel/8.jpg',
      'https://12.react.pages.academy/static/hotel/6.jpg',
      'https://12.react.pages.academy/static/hotel/11.jpg',
      'https://12.react.pages.academy/static/hotel/5.jpg',
      'https://12.react.pages.academy/static/hotel/19.jpg',
      'https://12.react.pages.academy/static/hotel/17.jpg'
    ],
    title: 'The Joshua Tree House',
    isPremium: true,
    rating: 4.5,
    type: 'house',
    bedrooms: 3,
    maxAdults: 5,
    price: 165,
    goods: [
      'Laptop friendly workspace',
      'Coffee machine',
      'Baby seat',
      'Fridge',
      'Breakfast',
      'Air conditioning',
      'Washer',
      'Dishwasher',
      'Towels'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    location: {
      latitude: 51.217402,
      longitude: 6.7693140000000005,
      zoom: 16
    },
    id: 3,
  });

  useEffect(() => {
    const data = (offers.filter((element) => element.id === Number(id)))[0];
    setRoom(data);
  }, [id, offers]);

  return (
    <main className='page page__main page__main--property'>
      <section className='property'>
        <div className='property__gallery-container container'>
          <div className='property__gallery'>
            {
              room.images.map((link) => <ImagesComponent link={link} key={link} />).slice(0, 6)
            }
          </div>
        </div>
        <div className='property__container container'>
          <div className='property__wrapper'>
            <div className='property__mark'>
              <span>{room.isPremium ? 'Premium' : 'Standart'}</span>
            </div>
            <div className='property__name-wrapper'>
              <h1 className='property__name'>
                {room.title}
              </h1>
            </div>
            <div className='property__rating rating'>
              <div className='property__stars rating__stars'>
                <span style={{ width: '80%' }} />
                <span className='visually-hidden'>Rating</span>
              </div>
              <span className='property__rating-value rating__value'>{room.rating}</span>
            </div>
            <ul className='property__features'>
              <li className='property__feature property__feature--entire'>
                Apartment
              </li>
              <li className='property__feature property__feature--bedrooms'>
                {room.bedrooms} Bedrooms
              </li>
              <li className='property__feature property__feature--adults'>
                Max {room.maxAdults} adults
              </li>
            </ul>
            <div className='property__price'>
              <b className='property__price-value'>€{room.price}</b>
              <span className='property__price-text'>&nbsp;night</span>
            </div>
            <div className='property__inside'>
              <h2 className='property__inside-title'>What&apos;s inside</h2>
              <ul className='property__inside-list'>
                {
                  room.goods.map((link) =>
                    <li className='property__inside-item' key={link}>{link}</li>
                  )
                }
              </ul>
            </div>
            <div className='property__host'>
              <h2 className='property__host-title'>Meet the host</h2>
              <div className='property__host-user user'>
                <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                  <img className='property__avatar user__avatar' src='img/avatar-angelina.jpg' width={74} height={74} alt='Host avatar' />
                </div>
                <span className='property__user-name'>
                  Angelina
                </span>
                <span className='property__user-status'>
                  Pro
                </span>
              </div>
              <div className='property__description'>
                <p className='property__text'>
                  {room.description}
                </p>
                {/* <p className='property__text'>
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p> */}
              </div>
            </div>
            <section className='property__reviews reviews'>
              <h2 className='reviews__title'>Reviews · <span className='reviews__amount'>1</span></h2>
              <ul className='reviews__list'>
                <li className='reviews__item'>
                  <div className='reviews__user user'>
                    <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                      <img className='reviews__avatar user__avatar' src='img/avatar-max.jpg' width={54} height={54} alt='Reviews avatar' />
                    </div>
                    <span className='reviews__user-name'>
                      Max
                    </span>
                  </div>
                  <div className='reviews__info'>
                    <div className='reviews__rating rating'>
                      <div className='reviews__stars rating__stars'>
                        <span style={{ width: '80%' }} />
                        <span className='visually-hidden'>Rating</span>
                      </div>
                    </div>
                    <p className='reviews__text'>
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <time className='reviews__time' dateTime='2019-04-24'>April 2019</time>
                  </div>
                </li>
              </ul>
              <CommentFormComponent />
            </section>
          </div>
        </div>
        <section className='property__map map' />
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>Other places in the neighbourhood</h2>
          <div className='near-places__list places__list'>
            <article className='near-places__card place-card'>
              <div className='near-places__image-wrapper place-card__image-wrapper'>
                <a href='/'>
                  <img className='place-card__image' src='img/room.jpg' width={260} height={200} alt='' />
                </a>
              </div>
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>€80</b>
                    <span className='place-card__price-text'>/&nbsp;night</span>
                  </div>
                </div>
                <div className='place-card__rating rating'>
                  <div className='place-card__stars rating__stars'>
                    <span style={{ width: '80%' }} />
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <a href='/'>Wood and stone place</a>
                </h2>
                <p className='place-card__type'>Private room</p>
              </div>
            </article>
            <article className='near-places__card place-card'>
              <div className='near-places__image-wrapper place-card__image-wrapper'>
                <a href='/'>
                  <img className='place-card__image' src='img/apartment-02.jpg' width={260} height={200} alt='' />
                </a>
              </div>
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>€132</b>
                    <span className='place-card__price-text'>/&nbsp;night</span>
                  </div>
                </div>
                <div className='place-card__rating rating'>
                  <div className='place-card__stars rating__stars'>
                    <span style={{ width: '80%' }} />
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <a href='/'>Canal View Prinsengracht</a>
                </h2>
                <p className='place-card__type'>Apartment</p>
              </div>
            </article>
            <article className='near-places__card place-card'>
              <div className='place-card__mark'>
                <span>Premium</span>
              </div>
              <div className='near-places__image-wrapper place-card__image-wrapper'>
                <a href='/'>
                  <img className='place-card__image' src='img/apartment-03.jpg' width={260} height={200} alt='' />
                </a>
              </div>
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>€180</b>
                    <span className='place-card__price-text'>/&nbsp;night</span>
                  </div>
                </div>
                <div className='place-card__rating rating'>
                  <div className='place-card__stars rating__stars'>
                    <span style={{ width: '100%' }} />
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <a href='/'>Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className='place-card__type'>Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default PropertyScreen;