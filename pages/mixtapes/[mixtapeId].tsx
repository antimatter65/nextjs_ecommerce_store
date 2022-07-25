import { css } from '@emotion/react';
// from npm for helping with cokkies allows to use Cookies.set and Cookies.get to simplify things
import Cookies from 'js-cookie';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import contactusmixtape from '../../public/contactusmixtape.gif';
import { getParsedCookie, setStringifiedCookie } from '../../util/cookies';
import { getMixtape } from '../../util/database';
import { PageProps } from '../_app';

// import { mixtapesDatabase } from '../util/database';

const mainproductpageStyles = css`
  display: flex;
  position: relative;
  height: 49vw;
  padding-top: 50px;
  padding-left: 100px;
`;

const imageStyles = css`
  border-radius: 20px 0px 0px 20px;
`;

const sectionStyles = css`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 50px;
  font-size: 18px;
  background-color: white;
  height: 600px;
  border: black 1px solid;
  border-radius: 0px 20px 20px 0px;
`;
const buttonStyles = css`
  text-decoration: none;
  font-family: Dosis, sans-serif;
  font-size: 20px;
  width: 200px;
  height: 50px;
  color: black;
  background-color: blanchedalmond;
  box-shadow: #5e5df0 0 10px 20px -10px;

  :hover {
    background-color: black;
    color: blanchedalmond;
  }
`;

const cartButtonsStyles = css`
  display: flex;
  position: relative;
  align-items: center;
`;
const buttonStyles2 = css`
  text-decoration: none;
  font-family: Dosis, sans-serif;
  font-size: 20px;
  width: 50px;
  height: 50px;
  color: black;
  border-radius: 25px;
  background-color: blanchedalmond;
  box-shadow: #5e5df0 0 10px 20px -10px;

  :hover {
    background-color: black;
    color: blanchedalmond;
  }
`;

export type CartItem = {
  id: string;
  itemCounter: number;
};

type Props = {
  mixtape: {
    id: string;
    name: string;
    color: string;
    price: number | string;
    length: string;
    itemCounter: number;
    setItemInCart: number | string;
  };
  setItemInCart: {
    id: string;
    itemCounter: number;
  };
};


export default function Mixtape(props: Props) {
  // this is required to updated the state so that both the state and the cookie are both updated on button clicks
  // this uses the same logic as within the button bellow - see there for more details
  const [isInCart, setIsInCart] = useState(false);
  // this is used for setting the number of items for each products in the cart starting at 0. this can not be set to other values or the value on screen doesnt update?
  const [itemCounter, setItemCounter] = useState(0);

  // for displaying cookie values of number in cart.
  // const [numberOfThisItemInCart, setnumberOfThisItemInCart] = useState();

  /*  useEffect(() => {
    const currentCart = Cookies.get('cart')
      ? JSON.parse(Cookies.get('cart')) // if true
      : []; // if false

    if (currentCart.find((id) => props.mixtape.id === id)) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [props.mixtape.id]); */
  // updated to work for adding multiple objects to the array
  useEffect(() => {
    const currentCart = Cookies.get('cart')
      ? getParsedCookie('cart') // if true
      : []; // if false

    if (
      currentCart.find(
        (itemInCart: CartItem) => props.mixtape.id === itemInCart.id,
      )
    ) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [props.mixtape.id]);

  /*    const [cartCounter, setCartCounter] = useState(
      props.mixtape.cartCounter || 0,
    ); */

  // useEffect to make sure that the cookie and state are syncronised for at the number of items button
  useEffect(() => {
    const currentCart = Cookies.get('cart')
      ? getParsedCookie('cart') // if true
      : []; // if false

    const currentItemInCart = currentCart.find(
      (itemInCart: CartItem) => props.mixtape.id === itemInCart.id,
    );
    if (currentItemInCart) {
      setItemCounter(currentItemInCart.itemCounter);
    }
  }, []);

  if (!props.mixtape) {
    return (
      <div>
        <Head>
          <title>Mixtape not found</title>
          <meta
            name="description"
            content="Unfortunately, we have had trouble locating the mixtape you selected. Better luck next time."
          />
        </Head>

        <h1>Mixtape not found</h1>
        <Image src={contactusmixtape} alt="twisted mixtape gif" />
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>
          {props.mixtape.name}, the {props.mixtape.color}
        </title>
        <meta
          name="description"
          content={`${props.mixtape.name} is a ${props.mixtape.color} with a ${props.mixtape.length}`}
        />
      </Head>

      <h1>{/* {props.mixtape.name}  */}</h1>

      <div>
        <main css={mainproductpageStyles}>
          <div>
            <Image
              css={imageStyles}
              src={`/${props.mixtape.id}.jpeg`}
              width="1000"
              height="600"
              data-test-id="product-image"
            />
          </div>
          <section css={sectionStyles}>
            <h1>{props.mixtape.name}</h1>
            <div>ID: {props.mixtape.id}</div>
            <div>Color: {props.mixtape.color}</div>
            <div>Mixtape Length: {props.mixtape.length}</div>
            <div data-test-id="product-price">
              Price €: {props.mixtape.price}
            </div>
            <label htmlFor="quantity">
              Quantity <br />
              (between 1 and 10):
            </label>
            <br />
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="10"
              data-test-id="product-quantity"
              //value="1"
            />
            <br />
            <label htmlFor="spotify_link">
              Enter your Spotify Playlist link here: <br /> - Please make sure
              it is public so our bots can see it 🤖 <br />- Also please make
              sure that it is no longer than 90 min or 180 min <br /> (depending
              on the type of mixtape you selected).
            </label>
            <br />
            <input type="text" name="spotify_link" />
            <br />
            <div css={cartButtonsStyles}>
              <button
                css={buttonStyles}
                type="submit"
                // form="form1"
                value="Submit"
                data-test-id="product-add-to-cart"
                //onClick={}

                onClick={() => {
                  // 1. get starting condition of the cookie using the JSON.parse as it is stored as a string and needs changing to an array. JSON.parse cannot parse undefined values i.e. when no cookie has been set at the start. use the ternary operator ? to
                  const currentCart = Cookies.get('cart')
                    ? getParsedCookie('cart') // if Cookies.get('cart') exists - true
                    : []; // if false - pass an empty array that can be used bellow when adding

                  // if the item is inside the cart remove it else add it to the cart for an add or remove button.
                  let newCart;
                  // if the id is contained within the cart cookie then remove it using the .filter method on the array currentCart so the id for this page is removed from the array.
                  // if (currentCart.find((id) => props.mixtape.id === id)) {
                  // updated for an array of objects
                  if (
                    currentCart.find(
                      (itemInCart: CartItem) =>
                        props.mixtape.id === itemInCart.id,
                    )
                  ) {
                    newCart = currentCart.filter(
                      (itemInCart: CartItem) =>
                        itemInCart.id !== props.mixtape.id,
                    );
                    setIsInCart(false);
                    // sets the counter value as zero when remove from cart is pressed
                    setItemCounter(0);
                    props.setItemInCart(newCart);
                  } else {
                    // 2.add the value (using spread operator) in this case add the id of the current mixtape to the cart
                    //newCart = [...currentCart, props.mixtape.id];
                    // updated for array of objects
                    newCart = [
                      ...currentCart,
                      { id: props.mixtape.id, itemCounter: 1 },
                    ];
                    setIsInCart(true);
                    // sets the item counter to 1 when add to cart is pressed
                    setItemCounter(1);
                    props.setItemInCart(newCart);
                  }
                  // on click of the button use Cookies.set plus JSON.stringify to add the array as a string to the cookie as the value passed to the cookie has to be set as string.
                  Cookies.set(`cart`, JSON.stringify(newCart));
                }}
              >
                {/* a similar if statement as above can be used on the label for the
                button  making a add / remove cart button*/}
                {/* Cookies.get('cart') &&
                JSON.parse(Cookies.get('cart')).find(
                  (id) => props.mixtape.id === id,
                ) */}
                {/* isInCart replaces the above code and which useEffect to update the state at the same time as the cookie */}
                {isInCart ? 'remove from cart' : 'add to cart'}
              </button>
              &nbsp; &nbsp; &nbsp;
              <br />
              <br />
              {/* sets a counter that increases by 1 on button press always displayed  */}
              {/* {isInCart ?  itemCounter : ''}
              <button onClick={() => setItemCounter(itemCounter + 1)}>
                Add 1 item too Cart
              </button> */}
              {/* this version only displays only when one or more items are in the cart   */}
              {isInCart ? (
                <>
                  {/*                   {itemCounter}
                   */}
                  <button
                    css={buttonStyles2}
                    onClick={() => {
                      setItemCounter(itemCounter + 1);
                      // 1. get cookie
                      const currentCart = Cookies.get('cart')
                        ? getParsedCookie('cart') // if true, cookie exists
                        : []; // false

                      // 2. find the item in the array

                      const currentItemInCart = currentCart.find(
                        (itemInCart: CartItem) =>
                          props.mixtape.id === itemInCart.id,
                      );

                      // 3. update the counter outside the cart
                      currentItemInCart.itemCounter += 1;
                      // 4. set the new cookie
                      Cookies.set(`cart`, JSON.stringify(currentCart));
                      props.setItemInCart(currentCart);
                    }}
                  >
                    +
                  </button>
                </>
              ) : (
                ''
              )}
              <br />
              <br />
              {/*               // dislaying the cookie value of itemCounter
               */}
              <div>
                &nbsp; &nbsp; {itemCounter} &nbsp; &nbsp;
                {/*                 {numberOfThisItemInCart}
                 */}
              </div>
              {/* button to remove one item from cart but the value is never lass than 1 unless the remove from cart button is pressed */}
              {isInCart ? (
                <>
                  {/*                   {itemCounter}
                   */}
                  <button
                    css={buttonStyles2}
                    onClick={() => {
                      if (itemCounter > 1) {
                        setItemCounter(itemCounter - 1);
                      } else {
                        setItemCounter(1);
                      }
                      // 1. get cookie
                      const currentCart = Cookies.get('cart')
                        ? getParsedCookie('cart') // if true, cookie exists
                        : []; // false

                      // 2. get the item

                      const currentItemInCart = currentCart.find(
                        (itemInCart: CartItem) =>
                          props.mixtape.id === itemInCart.id,
                      );

                      // 3. update the counter outside the cart cookie
                      if (currentItemInCart.itemCounter > 1) {
                        currentItemInCart.itemCounter -= 1;
                      } else {
                        currentItemInCart.itemCounter = 1;
                      }

                      // 4. set the new cookie
                      Cookies.set(`cart`, JSON.stringify(currentCart));
                      props.setItemInCart(currentCart);
                    }}
                  >
                    -
                  </button>
                </>
              ) : (
                ''
              )}
            </div>
            <br />
            <br />
          </section>
        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // now not required as getting from the postscript sql database

  /*   const foundMixtape = mixtapesDatabase.find((mixtape) => {
    return (
      mixtape.id ===
      // This comes from the URL, and its name
      // is based on the filename [mixtapeId].js
      context.query.mixtapeId
    );
  });

  if (!foundMixtape) {
    context.res.statusCode = 404;
  } */

  const foundMixtape = await getMixtape(context.query.mixtapeId);

  return {
    props: {
      mixtape: foundMixtape,
    },
  };
}
