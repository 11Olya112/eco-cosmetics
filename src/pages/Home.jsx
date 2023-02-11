import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <header className="header page__section">
        <div className="container">
          <div className="top-actions">
            <a href="#menu" className="top-actions__menu-icon icon icon--menu"></a>

            <a href="#" className="top-actions__logo logo"></a>

            <nav className="top-actions__menu">
              <ul className="top-actions__list">
                <li className="top-actions__item">
                  <a href="#shop" className="top-actions__link">
                    Shop
                  </a>
                </li>

                <li className="top-actions__item">
                  <a href="#contact" className="top-actions__link">
                    Contact
                  </a>
                </li>

                <li className="top-actions__item">
                  <a href="#about" className="top-actions__link">
                    About
                  </a>
                </li>
              </ul>
            </nav>

            <a href="#shop" className="top-actions__shop-icon icon icon--shop"></a>
          </div>

          <div className="grid">
            <div className="header__image-box grid__item grid__item--1-2 grid__item--tablet--1-6 grid__item--desktop--7-12">
              <img
                src="assets/images/header/header.png"
                alt="Header image"
                className="header__image"
              />
            </div>

            <div className="header__content grid__item grid__item--1-2 grid__item--tablet--2-5 grid__item--desktop--2-6">
              <h1 className="header__title">
                Brand of eco-cosmetics and magic candles
              </h1>

              <p className="header__text">20% of sales at a wild bird shelter</p>

              <a href="#shop" className="header__button button">
                shop
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="menu page__menu" id="menu">
        <div className="container">
          <a href="#" className="menu__icon icon icon--cross"></a>

          <ul className="menu__list">
            <li className="menu__item">
              <a href="#shop" className="menu__link">
                Shop
              </a>
            </li>

            <li className="menu__item">
              <a href="#contact" className="menu__link">
                Contact
              </a>
            </li>

            <li className="menu__item">
              <a href="#about" className="menu__link">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="menu page__menu page__menu--card" id="menu-card">
        <div className="container">
          <a href="#card" className="menu__icon icon icon--cross"></a>

          <ul className="menu__list">
            <li className="menu__item">
              <a href="#shop" className="menu__link">
                Shop
              </a>
            </li>

            <li className="menu__item">
              <a href="#contact" className="menu__link">
                Contact
              </a>
            </li>

            <li className="menu__item">
              <a href="#about" className="menu__link">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <section className="choose page__section">
          <div className="choose__line choose__line--top"></div>

          <div className="container">
            <div className="grid">
              <h3 className="choose__title grid__item grid__item--1-2 grid__item--tablet--2-5 grid__item--desktop--7-10">
                if you choose the gifts of nature and care about it’s - scroll
                down
              </h3>

              <p className="choose__text choose__text--desktop grid__item grid__item--desktop--2-5">
                Biologists say that birds are indicators of the environmental
                situation, and over the past half century, the population of
                seabirds has declined by 70%. Birds die due to environmental
                problems and human intervention in the natural environment.
              </p>
            </div>
          </div>

          <div className="choose__line choose__line--bottom"></div>
        </section>

        <section className="brand page__section" id="about">
          <div className="container">
            <div className="page__section-label">witch of mountain winds</div>

            <div className="grid">
              <div className="grid__item grid__item--1-2 grid__item--tablet--1-3 grid__item--desktop--2-5">
                <h2 className="page__title brand__title">about our brand</h2>

                <p className="brand__text">
                  Our brand cosmetics are made from natural ingredients and we
                  are promoting them to the masses. Shampoo, hair conditioner,
                  soap - in recycled paper. Creams, oils, washing products in
                  glass containers with recycled paper labels. No synthetics and
                  microplastics in cosmetics. And the packaging from it can be
                  returned for recycling or reused.
                </p>

                <p className="brand__text brand__text--desktop">
                  We are all neighbors of one big House. And we must protect
                  what we have. Destroying everything around for the sake of
                  consumerism and imaginary convenience, we destroy what does
                  not belong to us. Be aware of your choice!
                </p>

                <a href="#" className="brand__link learn-more">
                  LEARN MORE
                </a>
              </div>

              <div className="brand__image-box grid__item grid__item--tablet--4-6 grid__item--desktop--7-10">
                <img
                  src="./images/brand/brand.png"
                  alt="Brand image"
                  className="brand__image"
                />
              </div>

              <div className="brand__image-box brand__image-box--desktop grid__item grid__item--desktop--11-12">
                <img
                  src="assets/images/brand/brand.png"
                  alt="Brand image"
                  className="brand__image brand__image--desktop"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="shop page__section" id="shop">
          <div className="container">
            <div className="page__section-label">shop</div>

            <div className="grid">
              <h2 className="page__title shop__title grid__item grid__item--1-2 grid__item--tablet--1-3 grid__item--desktop--2-5">
                shop
              </h2>

              <div className="shop__tabs grid__item grid__item--1-2 grid__item--tablet--1-3 grid__item--desktop--2-5">
                <button
                  type="button"
                  className="shop__tab tab tab--active"
                  data-product="face"
                >
                  face
                </button>

                <button type="button" className="shop__tab tab" data-product="body">
                  body
                </button>

                <button type="button" className="shop__tab tab" data-product="hair">
                  hair
                </button>

                <button
                  type="button"
                  className="shop__tab tab"
                  data-product="candles"
                >
                  candles
                </button>
              </div>

              <div className="swiper shop__slider grid__item grid__item--1-2 grid__item--tablet--1-6 grid__item--desktop--2-12">
                <div className="swiper-wrapper shop__wrapper">
                  <div className="swiper-slide shop__slide" data-product="face">
                    <a href="#card" className="shop__product">
                      <div className="shop__image-box">
                        <img
                          src="assets/images/shop/shop-01.png"
                          alt="Hydrophilic oil"
                          className="shop__image"
                        />
                      </div>

                      <h4 className="shop__product-name">Hydrophilic oil</h4>

                      <p className="shop__price">160 UAH</p>
                    </a>
                  </div>

                  <div className="swiper-slide shop__slide" data-product="face">
                    <a href="#card" className="shop__product">
                      <div className="shop__image-box">
                        <img
                          src="assets/images/shop/shop-02.png"
                          alt="Face cream"
                          className="shop__image"
                        />
                      </div>

                      <h4 className="shop__product-name">Face cream</h4>

                      <p className="shop__price">210 UAH</p>
                    </a>
                  </div>

                  <div className="swiper-slide shop__slide" data-product="body">
                    <a href="#card" className="shop__product">
                      <div className="shop__image-box">
                        <img
                          src="assets/images/shop/shop-03.png"
                          alt="Ubtan"
                          className="shop__image"
                        />
                      </div>

                      <h4 className="shop__product-name">ubtan</h4>

                      <p className="shop__price">160 UAH</p>
                    </a>
                  </div>

                  <div className="swiper-slide shop__slide" data-product="body">
                    <a href="#card" className="shop__product">
                      <div className="shop__image-box">
                        <img
                          src="assets/images/shop/shop-08.png"
                          alt="Conditioning Body Scrub"
                          className="shop__image"
                        />
                      </div>

                      <h4 className="shop__product-name">mild body scrub</h4>

                      <p className="shop__price">400 UAH</p>
                    </a>
                  </div>

                  <div className="swiper-slide shop__slide" data-product="hair">
                    <a href="#card" className="shop__product">
                      <div className="shop__image-box">
                        <img
                          src="assets/images/shop/shop-04.png"
                          alt="Almond Shampoo with Lavender Oil"
                          className="shop__image"
                        />
                      </div>

                      <h4 className="shop__product-name">
                        Almond Shampoo with Lavender Oil
                      </h4>

                      <p className="shop__price">200 UAH</p>
                    </a>
                  </div>

                  <div className="swiper-slide shop__slide" data-product="hair">
                    <a href="#card" className="shop__product">
                      <div className="shop__image-box">
                        <img
                          src="assets/images/shop/shop-07.png"
                          alt="shampoo-conditioner HERBS"
                          className="shop__image"
                        />
                      </div>

                      <h4 className="shop__product-name">
                        shampoo-conditioner "HERBS"
                      </h4>

                      <p className="shop__price">160 UAH</p>
                    </a>
                  </div>

                  <div className="swiper-slide shop__slide" data-product="hair">
                    <a href="#card" className="shop__product">
                      <div className="shop__image-box">
                        <img
                          src="assets/images/shop/shop-07.png"
                          alt="shampoo-conditioner HERBS"
                          className="shop__image"
                        />
                      </div>

                      <h4 className="shop__product-name">
                        shampoo-conditioner "HERBS"
                      </h4>

                      <p className="shop__price">400 UAH</p>
                    </a>
                  </div>

                  <div className="swiper-slide shop__slide" data-product="candles">
                    <a href="#card" className="shop__product">
                      <div className="shop__image-box">
                        <img
                          src="assets/images/shop/shop-05.png"
                          alt="Ubtan"
                          className="shop__image"
                        />
                      </div>

                      <h4 className="shop__product-name">whiskey room candle</h4>

                      <p className="shop__price">350 UAH</p>
                    </a>
                  </div>

                  <div className="swiper-slide shop__slide" data-product="candles">
                    <a href="#card" className="shop__product">
                      <div className="shop__image-box">
                        <img
                          src="assets/images/shop/shop-06.png"
                          alt="Almond Shampoo with Lavender Oil"
                          className="shop__image"
                        />
                      </div>

                      <h4 className="shop__product-name">
                        hand poured scented soy candle
                      </h4>

                      <p className="shop__price">300 UAH</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="shop__button button">
              all products
            </a>
          </div>
        </section>

        <section className="card page__card" id="card">
          <div className="card__overflow">
            <div className="container">
              <div className="top-actions">
                <a
                  href="#menu-card"
                  className="top-actions__menu-icon icon icon--menu"
                ></a>

                <a href="#" className="top-actions__logo logo"></a>

                <nav className="top-actions__menu">
                  <ul className="top-actions__list">
                    <li className="top-actions__item">
                      <a href="#shop" className="top-actions__link">
                        Shop
                      </a>
                    </li>

                    <li className="top-actions__item">
                      <a href="#contact" className="top-actions__link">
                        Contact
                      </a>
                    </li>

                    <li className="top-actions__item">
                      <a href="#about" className="top-actions__link">
                        About
                      </a>
                    </li>
                  </ul>
                </nav>

                <a
                  href="#shop"
                  className="top-actions__shop-icon icon icon--shop"
                ></a>
              </div>

              <div className="grid">
                <div className="card__image-box grid__item grid__item--1-2 grid__item--tablet--2-5 grid__item--desktop--2-6">
                  <img
                    src="assets/images/shop/shop-04.png"
                    alt="Almond Shampoo with Lavender Oil"
                    className="card__image"
                  />
                </div>

                <div className="card__header grid__item grid__item--1-2 grid__item--tablet--2-5 grid__item--desktop--8-11">
                  <h4 className="card__product-name">
                    Almond Shampoo with Lavender Oil
                  </h4>

                  <p className="card__price">70 UAH</p>

                  <p className="card__weight">30 g</p>
                </div>

                <div className="card__content grid__item grid__item--1-2 grid__item--tablet--2-5 grid__item--desktop--8-11">
                  <a href="#shipping" className="card__button button">
                    Buy
                  </a>

                  <p className="card__text">
                    <mark className="card__text card__text--marked">
                      Ingredients:
                    </mark>
                    cocosulfate, aloe hydrolate, sweet almond oil, wheat
                    proteins, chamomile grass, lavender essential oil.
                  </p>

                  <p className="card__text">
                    <mark className="card__text card__text--marked">
                      Application:
                    </mark>
                    foam the shampoo in your hands and apply foam on the hair or
                    draw a block over wet hair, foam, massage, rinse, apply balm
                    or conditioner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="shipping" className="shipping page__shipping contact">
          <div className="card__overflow">
            <div className="container">
              <div className="top-actions">
                <a
                  href="#menu-card"
                  className="top-actions__menu-icon icon icon--menu"
                ></a>

                <a href="#" className="top-actions__logo logo"></a>

                <nav className="top-actions__menu">
                  <ul className="top-actions__list">
                    <li className="top-actions__item">
                      <a href="#shop" className="top-actions__link">
                        Shop
                      </a>
                    </li>

                    <li className="top-actions__item">
                      <a href="#contact" className="top-actions__link">
                        Contact
                      </a>
                    </li>

                    <li className="top-actions__item">
                      <a href="#about" className="top-actions__link">
                        About
                      </a>
                    </li>
                  </ul>
                </nav>

                <a
                  href="#shop"
                  className="top-actions__shop-icon icon icon--shop"
                ></a>
              </div>

              <div className="shipping__checkout">checkout</div>

              <div className="shipping__title">shipping</div>

              <form action="#" className="shipping__form">
                <label for="name">
                  <input
                    type="text"
                    id="name"
                    className="contact__input"
                    name="your-name"
                    placeholder="Full name"
                    pattern=".{2,}"
                    title="Your name: minimum 7 characters"
                    required
                  />
                </label>
                <label for="e-mail">
                  <input
                    type="email"
                    id="email"
                    className="contact__input"
                    name="email"
                    placeholder="E-mail"
                    title="Your e-mail format: local-part@domain"
                    required
                  />
                </label>
                <label for="country">
                  <input
                    type="text"
                    id="country"
                    className="contact__input"
                    name="country"
                    placeholder="Country"
                    pattern=".{2,}"
                    title="Your country: minimum 10 characters"
                    required
                  />
                </label>
                <label for="city">
                  <input
                    type="text"
                    id="city"
                    className="contact__input"
                    name="city"
                    placeholder="City"
                    pattern=".{2,}"
                    title="Your city: minimum 2 characters"
                    required
                  />
                </label>
                <label for="postal_code">
                  <input
                    type="number"
                    id="postal_code"
                    className="contact__input"
                    name="postal_code"
                    placeholder="Postal code"
                    pattern=".{2,}"
                    title="Your Postal code: minimum 7 characters"
                    required
                  />
                </label>
                <label for="address">
                  <input
                    type="text"
                    id="address"
                    className="contact__input"
                    name="address"
                    placeholder="Address"
                    pattern=".{2,}"
                    title="Your address: minimum 5 characters"
                    required
                  />
                </label>
                <a href="#payment" className="shipping__button button">
                  next
                </a>
              </form>
            </div>
          </div>
        </section>

        <section id="payment" className="payment page__payment">
          <div className="card__overflow">
            <div className="container">
              <div className="top-actions">
                <a
                  href="#menu-card"
                  className="top-actions__menu-icon icon icon--menu"
                ></a>

                <a href="#" className="top-actions__logo logo"></a>

                <nav className="top-actions__menu">
                  <ul className="top-actions__list">
                    <li className="top-actions__item">
                      <a href="#shop" className="top-actions__link">
                        Shop
                      </a>
                    </li>

                    <li className="top-actions__item">
                      <a href="#contact" className="top-actions__link">
                        Contact
                      </a>
                    </li>

                    <li className="top-actions__item">
                      <a href="#about" className="top-actions__link">
                        About
                      </a>
                    </li>
                  </ul>
                </nav>

                <a
                  href="#shop"
                  className="top-actions__shop-icon icon icon--shop"
                ></a>
              </div>

              <div className="shipping__checkout">checkout</div>

              <div className="shipping__title">payment</div>

              <div className="payment__choose">Choose payment option</div>

              <div className="payment__delivery">
                <img
                  src=".src/images/delivery/card.svg"
                  alt="Credit card"
                  className="payment__delivery-img"
                />
                <div className="payment__delivery-title">Credit card</div>
              </div>

              <div className="payment__delivery">
                <img
                  src="assets/images/delivery/del.svg"
                  alt="Payment on delivery"
                  className="payment__delivery-img"
                />
                <div className="payment__delivery-title">Payment on delivery</div>
              </div>

              <a href="#payment" className="payment__button button">
                next
              </a>
            </div>
          </div>
        </section>

        <section className="creators page__section">
          <div className="container">
            <div className="page__section-label">about the creators</div>

            <div className="grid">
              <div className="grid__item grid__item--1-2 grid__item--tablet--1-3 grid__item--desktop--2-5">
                <h2 className="page__title creators__title">about the creators</h2>

                <p className="creators__text">
                  My name is Victoria, I’m a master at candle making and natural
                  cosmetics. In the past, a cynologist, was engaged in herbs,
                  made layouts on the Tarot.
                </p>

                <p className="creators__text">
                  I am also a volunteer to save wild birds in distress, a
                  consultant to the Phoenix Wildlife Rehabilitation Center, a
                  member of the Society for the Conservation of Birds of Ukraine
                  with the support of Birdlife International.
                </p>

                <p className="creators__text creators__text--desktop">
                  My husband and I live in the Carpathian region in the city of
                  Chernivtsi. I dream of my center for the rehabilitation of
                  wild birds, as it is very difficult to rescue birds in a
                  rented communal apartment.
                </p>

                <a href="#" className="creators__link learn-more">
                  LEARN MORE
                </a>

                <a href="#contact" className="creators__button button">
                  to contact us
                </a>
              </div>

              <div className="creators__image-box grid__item grid__item--tablet--4-6 grid__item--desktop--7-12">
                <img
                  src="assets/images/creators/creators.png"
                  alt="Creators image"
                  className="creators__image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="ingredients page__section">
          <div className="container">
            <div className="page__section-label">ingredients</div>

            <div className="grid ingredients__tooth-powder">
              <h2 className="page__title ingredients__title grid__item grid__item--1-2 grid__item--tablet--1-3 grid__item--desktop--2-5">
                Ayurvedic Tooth Powder
              </h2>

              <div className="ingredients__illustrations grid__item grid__item--1-2 grid__item--tablet--2-6 grid__item--desktop--6-12">
                <div className="ingredients__hints">
                  <p className="ingredients__hint">Kaolin</p>

                  <p className="ingredients__hint">Sivak</p>

                  <p className="ingredients__hint">Calcium</p>

                  <p className="ingredients__hint">Licorice root</p>

                  <p className="ingredients__hint">Turmeric</p>
                </div>

                <div className="ingredients__illustration"></div>
              </div>

              <div className="ingredients__link grid__item grid__item--1-2 grid__item--tablet--1-2 grid__item--desktop--2-3">
                <a href="#" className="learn-more">
                  LEARN MORE
                </a>
              </div>
            </div>

            <div className="grid">
              <div className="ingredients__features grid__item grid__item--1-2 grid__item--tablet--1-2 grid__item--desktop--1-4">
                <div className="ingredients__image ingredients__image--safe"></div>

                <p className="ingredients__text">No synthetics and microplastics</p>
              </div>

              <div className="ingredients__features grid__item grid__item--1-2 grid__item--tablet--3-4 grid__item--desktop--5-8">
                <div className="ingredients__image ingredients__image--recycle"></div>

                <p className="ingredients__text">
                  product packaging can be recycled or reused
                </p>
              </div>

              <div className="ingredients__features grid__item grid__item--1-2 grid__item--tablet--5-6 grid__item--desktop--9-12">
                <div className="ingredients__image ingredients__image--natural"></div>

                <p className="ingredients__text">only natural ingredients</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="contact page__section page__section--contact"
          id="contact"
        >
          <div className="container">
            <div className="page__section-label">help</div>

            <div className="grid">
              <div className="grid__item grid__item--1-2 grid__item--tablet--1-3 grid__item--desktop--2-5">
                <h2 className="page__title contact__title">contact us</h2>

                <p className="contact__text">
                  We will help you choose a product that suits you and answer
                  your other questions
                </p>

                <form action="#" className="contact__form">
                  <label for="name">
                    <input
                      type="text"
                      id="name"
                      className="contact__input"
                      name="your-name"
                      placeholder="your name"
                      pattern=".{2,}"
                      title="Your name: minimum 4 characters"
                      required
                    />
                  </label>
                  <label for="e-mail">
                    <input
                      type="email"
                      id="email"
                      className="contact__input"
                      name="email"
                      placeholder="e-mail"
                      title="Your e-mail format: local-part@domain"
                      required
                    />
                  </label>
                  <label for="tel">
                    <input
                      type="tel"
                      id="tel"
                      className="contact__input"
                      name="phone"
                      placeholder="phone number"
                      pattern="[\+]\d{12}"
                      title="Your phone number format: +xxxxxxxxxxxx"
                      required
                    />
                  </label>
                  <textarea
                    name="message"
                    rows="1"
                    placeholder="Your Message"
                    className="contact__input contact__input--textarea"
                    required
                  ></textarea>

                  <button className="contact__button button">send a message</button>
                </form>
              </div>

              <div className="contact__image-box grid__item grid__item--tablet--4-6 grid__item--desktop--7-12">
                <img
                  src="assets/images/contact-us/contacts-us.png"
                  alt="Contact image"
                  className="contact__image"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer page__section page__section--footer">
        <div className="container">
          <div className="grid">
            <nav className="footer__menu grid__item grid__item--1-2 grid__item--tablet--1-1 grid__item--desktop--1-4">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#shop" className="footer__link">
                    Shop
                  </a>
                </li>

                <li className="footer__item">
                  <a href="#contact" className="footer__link">
                    Contact
                  </a>
                </li>

                <li className="footer__item">
                  <a href="#about" className="footer__link">
                    About
                  </a>
                </li>
              </ul>
            </nav>

            <div className="footer__socials grid__item grid__item--1-2 grid__item--tablet--1-1 grid__item--desktop--8-8">
              <a
                href="https://www.facebook.com/witch.of.mountain.winds"
                className="footer__icon icon icon--facebook"
                target="_blank"
              ></a>

              <a
                href="https://www.instagram.com/witch_of_mountain_winds/"
                className="footer__icon icon icon--instagram"
                target="_blank"
              ></a>
            </div>

            <div className="footer__contacts grid__item grid__item--1-2 grid__item--tablet--4-6 grid__item--desktop--8-12">
              <a
                href="https://goo.gl/maps/kepKPHgnJD1DeKip7"
                className="footer__contact"
                target="_blank"
              >
                Ukraine
              </a>

              <br />

              <a
                href="mailto:support.mountain@gmail.com"
                className="footer__contact"
                target="_blank"
              >
                support.mountain@gmail.com
              </a>

              <br />

              <a
                href="tel:+380934476839"
                className="footer__contact"
                target="_blank"
              >
                +380934476839
              </a>

              <p className="footer__text">
                Support is available Monday - Friday 9am-6pm
              </p>
            </div>

            <p className="footer__copyright grid__item grid__item--1-2 grid__item--tablet--1-3 grid__item--desktop--1-5">
              &copy; 2019 witch of mountain winds
            </p>
          </div>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      <script type="text/javascript" src="./src/scripts/main.js"></script>
      <script type="text/javascript" src="./src/scripts/main.js"></script>
    </React.Fragment>
  );
}
