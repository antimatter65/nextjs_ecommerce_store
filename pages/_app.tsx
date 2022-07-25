// import '../styles/globals.css';
import { css, Global } from '@emotion/react';
// for using js.cookie in the backend pass props from _app.js up though Layout.js and then to the Header.js with props or cookie named 'cart'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getParsedCookie } from '../util/cookies';

export type PageProps = {
  cart: {
    id: string;
    itemCounter: number | string;
  };
  itemInCart: {
    id: string;
    itemCounter: number | string;
  };
  setItemInCart: {
    id: string;
    itemCounter: number | string;
  };
};

export default function MyApp({ Component, pageProps }) {
  // not required for cart page - useEffect is required so you dont get hydration errors - this is used in the header ok though
  let cart = Cookies.get('cart')
    ? getParsedCookie('cart') // if true
    : []; // if false
  console.log(cart);

  //const [headerState, setHeaderState] = useState();

  const [itemInCart, setItemInCart] = useState([]);

  useEffect(() => {
    const cartItem = Cookies.get('cart') ? getParsedCookie('cart') : [];
    setItemInCart(cartItem);
  }, []);

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            text-decoration: none;
            padding: 0px;
            margin-left: 0px;
            margin-right: 0px;
            font-family: Dosis, -apple-system, BlinkMacSystemFont, Segoe UI,
              Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
              Helvetica Neue, sans-serif;
            //background-color: #8d7c62;
            //background-image: url(https://images.unsplash.com/photo-1527332900615-32bb872f6b62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80);

            /* background-image: url(../headerbackground.jpg);
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            max-height: 100vh;
            background-size: 100vw 150vh;
            */
            /* background: rgb(255, 255, 255);
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 1) 1%,
              blanchedalmond 100%
            ); */
            background-color: white;
            /* background-image: linear-gradient(315deg, #bbdbbe 0%, #fdfffc#74%); */
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      <Layout cart={cart} itemInCart={itemInCart} setItemInCart={setItemInCart}>
        <Component
          {...pageProps}
          cart={cart}
          itemInCart={itemInCart}
          setItemInCart={setItemInCart}
        />
      </Layout>
    </>
  );
}
