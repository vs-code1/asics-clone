import "./nav-styles.css";

function MainLogo() {
  return (
    <div className="main-logo">
      <a href="#">
        <img
          src="https://www.asics.com/system/images/asics-logo-blue.svg"
          alt="Asics"
        />
      </a>
    </div>
  );
}
function NavItems() {
  return (
    <div className="nav-items">
      <ul>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">Kids</a>
        </li>
        <li>
          <a href="#">Sportstyle</a>
        </li>
        <li>
          <a href="#">Collection</a>
        </li>
        <li>
          <a href="#">Sale</a>
        </li>
        <li>
          <a href="#">Running Club</a>
        </li>
      </ul>
    </div>
  );
}
function CartAnSearch() {
  return (
    <div className="cart-search">
      <div className="search-form">
        <form action="#">
          <label htmlFor="text">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search our products"
            />
          </label>
          <label htmlFor="submit">
            <input
              type="submit"
              name="submit"
              id="submit-search"
              value="submit"
              tabIndex="0"
            />
          </label>
        </form>
      </div>
      <div>
        <svg viewBox="0 0 23 21" id="shopping-cart">
          <path d="M19.502 14.998H7a.835.835 0 0 1-.824-.716L4.798 5.114a.47.47 0 0 1-.005-.037l-.51-3.396H.832A.838.838 0 0 1-.002.838c0-.466.373-.843.834-.843h4.167c.412 0 .762.305.824.717l.513 3.417 15.838.081a.827.827 0 0 1 .664.34.85.85 0 0 1 .131.742l-2.667 9.103a.836.836 0 0 1-.8.603zM7.716 13.313H18.88l2.175-7.423L6.59 5.816l1.126 7.497zM9 17a2 2 0 1 1 .001 3.999A2 2 0 0 1 9 17zm9 0a2 2 0 1 1 .001 3.999A2 2 0 0 1 18 17z"></path>
        </svg>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="header">
      <h3>Hello My name is vishant~</h3>
      <div className="nav-bar">
        <MainLogo />
        <NavItems />
        <CartAnSearch />
      </div>
      <div className="border"></div>
    </div>
  );
}

export default Nav;
