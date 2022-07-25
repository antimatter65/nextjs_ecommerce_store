import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../util/cookies';
import { mixtapesDatabase } from '../../../util/database';
import contactusmixtape from '../public/contactusmixtape.gif';
import mixtape1 from '../public/mixtape1.png';

const mixtapesListStyles = css`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: flex-start;
  border: black solid 10px;
  background: #dfd;
  padding: 10px;
  margin: 30px;
  max-width: 100vw;
`;

const individualMixtapeStyles = css`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: nowrap;
  border: red solid 10px;
  //border: solid 1px blue;
  // max-width: 100vw;
`;

const mixtapesListItemStyles = css`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 30px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background: #fdfdfd;
  font-size: 20px;
  width: 300px;
  padding: 12px 16px;
  & + & {
    margin-top: 10px;
  }
`;

const mixtapeImageStyles = css`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 30px;
  border: 1px solid red;
`;

const totalCostStyles = css`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  border: blue solid 10px;
`;

const x = 1;

export default function Cart2(props) {
  // Check if the fruit is inside of the diet by checking the property eatCounter
  const [isInCart, setIsInCart] = useState('itemCounter' in props.mixtape);
  // initialize the eatCounter with the value of the cookie or 0
  const [itemCounter, setItemCounter] = useState(
    props.mixtapes.itemCounter || 0,
  );

  return (
    <div>
      <div>
        <div>ID: {props.mixtape.id}</div>
        <ul>
          <li> name: {props.mixtape.name}</li>
          <li> price {props.mixtape.price}</li>
          <li> length {props.mixtape.length}</li>
          <li> item counter from cookie: {props.mixtape.itemCounter}</li>
        </ul>
      </div>
      <button
        onClick={() => {
          // 1. get the original array from the cookies
          const currentCart = Cookies.get('cart') // is diet defined???
            ? getParsedCookie('cart') // if true
            : []; // if false
          let newCart;

          // if the fruit is inside of the diet ???
          if (
            currentCart.find(
              (itemInCart) => props.mixtapes.id === itemInCart.id,
            )
          ) {
            newCart = currentCart.filter(
              (itemInCart) => itemInCart.id !== props.mixtapes.id,
            );
            setIsInCart(false);
            setItemCounter(0);
          } else {
            // 2. add the value (spread operator)
            newCart = [
              ...currentCart,
              { id: props.mixtapes.id, itemCounter: 0 },
            ];
            setIsInCart(true);
          }

          // 3. set the cookie to the new value
          setStringifiedCookie('cart', newCart);
        }}
      >
        {isInCart ? 'remove from cart' : 'add to cart'}
      </button>
      <br />
      {isInCart ? (
        <>
          {itemCounter}
          <button
            onClick={() => {
              setItemCounter(itemCounter + 1);
              // 1. get the cookie
              const currentCart = Cookies.get('cart')
                ? getParsedCookie('cart') // if true
                : []; // if false

              // 2. get the fruit
              const currentFruitInDiet = currentCart.find(
                (itemInCart) => props.mixtapes.id === itemInCart.id,
              );

              // 3. update the counter inside of the fruit
              currentFruitInDiet.itemCounter += 1;
              // 4. set the new cookie
              setStringifiedCookie('cart', currentCart);
            }}
          >
            add one more
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export function getServerSideProps(context) {
  // 1. Get the value of the cookie from the request object
  const currentCookie = JSON.parse(context.req.cookies.cart || '[]');

  // 2. get the id from the url and use it to match the single fruit id
  const singleItem = mixtapesDatabase.find((mixtape) => {
    return mixtape.id === context.query.cartId;
  });

  // 3. Find the object that represent the fruit in the url
  const currentItemInCart = currentCookie.find(
    (itemInCart) => singleItem.id === itemInCart.id,
  );

  // 4. create a new object adding the properties from the cookie object to the fruit in database
  const itemIncCookie = { ...singleItem, ...currentItemInCart };

  return {
    props: {
      mixtape: itemIncCookie,
    },
  };
}
