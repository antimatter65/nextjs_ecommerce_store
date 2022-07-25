import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import contactusmixtape from '../public/contactusmixtape.gif';
import tapeletter3 from '../public/tapeletter3.jpeg';
// import { mixtapesDatabase } from '../util/database';
import { getMixtapes } from '../util/database';

const mixtapesListStyles = css`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  border: white solid 1px;
  padding: 10px;
  margin: 30px;
  max-width: 150vw;
  min-height: 35vw;
`;

const cartHeaderStyles = css`
  padding-left: 15vw;
  align-self: center;
  font-size: 20px;
`;

const individualMixtapeStyles = css`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 15px;
  border: white solid 1px;
  background-color: white;
  font-size: 20px;
  border: solid 1px;
  padding-right: 20px;
  margin: 5px;
  margin-left: 50px;
  // max-width: 100vw;
`;

const mixtapesListItemStyles = css`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin: 30px;
  margin-top: 10px;
  border: 1px white;
  border-radius: 20px;
  background: #fdfdfd;
  font-size: 12px;
  width: 15vw;
  height: 100px;
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
  margin: 20px;
  margin-left: 15px;
  border: 1px solid white;
`;

const allButtonStyles = css`
  display: flex;
  position: relative;
  border: 1px white solid;
  flex-direction: column;
`;

const totalCostStyles = css`
  display: flex;
  position: absolute;
  align-self: center;
  background-color: white;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  margin-left: 800px;
  margin-top: 0px;
  margin-bottom: 200px;
  border: black solid 1px;
  padding: 20px;
  line-height: normal;
`;

const totalItemsText = css`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  font-size: 12px;
`;

const buttonStyles = css`
  position: relative;
  text-decoration: none;
  margin-top: 0px;

  padding: 0px;
  font-family: Dosis, sans-serif;
  font-size: 13px;
  width: 160px;
  height: 40px;
  color: black;
  background-color: blanchedalmond;
  box-shadow: #5e5df0 0 10px 20px -10px;

  :hover {
    background-color: black;
    color: blanchedalmond;
  }
`;

// need to make a function to check if any items in cart if not set x to 0, else set to 1
const x = 1;

const changeNumberOfItems = css`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 10px;
  border: white 1px solid;
`;

const buttonStyles2 = css`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  text-decoration: none;
  font-family: Dosis, sans-serif;
  font-size: 20px;
  width: 30px;
  height: 30px;
  color: black;
  border-radius: 15px;
  background-color: blanchedalmond;
  box-shadow: #5e5df0 0 10px 20px -10px;

  :hover {
    background-color: black;
    color: blanchedalmond;
  }
`;

export default function Cart(props) {
  // function using props from app.js to calculate the total number of items in the cookie array that update with cookie and state changes from the button cookiesarray is different to cookiearray from gSSP

  const cookiesarray = props.itemInCart;

  const [totalItemsSum, setTotalItemsSum] = useState(0);

  useEffect(() => {
    function totalSum() {
      let total = 0;
      cookiesarray.map((item) => {
        return (total += item.itemCounter);
      });
      setTotalItemsSum(total);
    }
    totalSum();
  }, [cookiesarray]);

  // calculate the total sum cost of all items in cart with useEffect

  const [totalCostSum, setTotalCostSum] = useState(0);

  useEffect(() => {
    function totalSum() {
      let total = 0;
      cookiesarray.map((item) => {
        return (total +=
          props.mixtapes.find((mixtape) => {
            return item.id === mixtape.id;
          }).price * item.itemCounter);
      });
      setTotalCostSum(total);
    }
    totalSum();
  }, [cookiesarray, props.mixtapes]);

  // calculate the total number of items in the cart not required anymore
  /*   const [sum2, setSum2] = useState(0);

  useEffect(() => {
    function totalSum2() {
      let total = 0;
      props.cookiearray.map((item) => {
        return (total += item.itemCounter);
      });
      setSum2(total);
    }
    totalSum2();
  }, []); */

  // calculate the individual item total cost

  const [totalItemCostSum, setTotalItemCostSum] = useState(0);

  useEffect(() => {
    function totalSum2() {
      let total = 0;
      cookiesarray.map((item) => {
        return (total =
          props.mixtapes.find((mixtape) => {
            return item.id === mixtape.id;
          }).price * item.itemCounter);
      });
      setTotalItemCostSum(total);
    }
    totalSum2();
  }, [cookiesarray, props.mixtapes]);

  // calculate the quantity of each individual item

  const [totalItemQuantitySum, setTotalItemQuantitySum] = useState(0);

  useEffect(() => {
    function totalSum3() {
      let total = 0;
      cookiesarray.map((item) => {
        return console.log(
          'total number for this item',
          (total = item.itemCounter),
          typeof total,
        );
      });
      setTotalItemQuantitySum(total);
    }
    totalSum3();
  }, [cookiesarray]);

  // i am lost

  const [readCurrentCookies, setReadCurrentCookies] = useState([]);

  useEffect(() => {
    const currentCookieState = Cookies.get('cart')
      ? JSON.parse(Cookies.get('cart')) // if true
      : [];
    setReadCurrentCookies(currentCookieState);
  }, []);

  /*  useEffect(() => {
    function totalSum() {
      let total = 0;
      cookiesarray.map((item) => {
        return (total = item.itemCounter);
      });
      setTotalItemQuantitySum(total);
    }
    totalSum();
  }, [cookiesarray, props.mixtapes]); */

  //

  const [isInCart, setIsInCart] = useState(true);

  /*   const [itemCounter, setItemCounter] = useState(
    props.cookiearray.map((state) => {
      return state.itemCounter;
    }),
  ); */

  const [itemCounter, setItemCounter] = useState(
    cookiesarray.map((state) => {
      return state.itemCounter;
    }),
  );

  useEffect(() => {
    const currentCart = Cookies.get('cart')
      ? JSON.parse(Cookies.get('cart')) // if true
      : []; // if false

    if (currentCart.find((itemInCart) => props.mixtapes.id === itemInCart.id)) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, []);

  //

  useEffect(() => {
    const currentCart = Cookies.get('cart')
      ? JSON.parse(Cookies.get('cart')) // if true
      : []; // if false

    const currentItemInCart = currentCart.find(
      (itemInCart) => props.mixtapes.id === itemInCart.id,
    );
    if (currentItemInCart) {
      setItemCounter(currentItemInCart.itemCounter || 0);
    }
  }, []);

  /// trying to get the total of an individual item.

  let getCookie = cookiesarray.map(function (element) {
    return `${element.itemCounter}`;
  });

  console.log('not sure if this works', getCookie);

  // const onlyOneItemCounter = getCookie.itemCounter;

  const onlyOneItemCounter = getCookie.find(function (item) {
    return `${item.itemCounter}`;
  });

  // console.log('maybe this?', onlyOneItemCounter);

  // const individualTotal = resultArray.find((item) => {
  //   console.log('maybe this works?', item.itemCounter);
  //   return item.itemCounter;
  // });

  /// i am so lost i will try anything

  if (cookiesarray.length < 1) {
    return (
      <div>
        <Head>
          <title>No Items In Your Cart</title>
          <meta
            name="description"
            content="Unfortunately, we have had trouble loading your mixtape cart, please try again."
          />
        </Head>

        <h1>Your Cart is Empty : No items currently found.</h1>
        <div>
          <Image src={contactusmixtape} alt="twisted mixtape gif" />
        </div>
        <div>
          <Link href="/createamixtape" data-test-id="products-link">
            Click Here To Find Your Perfect Mixtape
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Mixtapes 3000</title>
        <meta name="description" content="Modern Retro Mixtapes" />
        <link rel="icon" href="/faviconmixtape.png" />
      </Head>

      <h1 css={cartHeaderStyles}>ITEMS IN YOUR CART</h1>
      <hr />

      <main>
        <div css={mixtapesListStyles}>
          {props.mixtapes.map((mixtape) => {
            return (
              <div key={`mixtape-${mixtape.id}`} css={individualMixtapeStyles}>
                <section css={mixtapesListItemStyles}>
                  <div data-test-id="product-<product id>">
                    <Link href={`/mixtapes/${mixtape.id}`}>{mixtape.name}</Link>
                  </div>
                  <div>Length : {mixtape.length}</div>
                  <div>Price (per mixtape) : € {mixtape.price}</div>
                  <div>ITEM TOTAL PRICE:{totalItemCostSum}</div>
                  <div>
                    TOTAL Quantity:
                    {totalItemQuantitySum}
                  </div>
                  {/* <div>Spotify Playlist Link: {}</div> */}
                </section>
                <section css={mixtapeImageStyles}>
                  <Image src={`/${mixtape.id}.jpeg`} width="125" height="90" />
                </section>
                <section css={allButtonStyles}>
                  <div>Quantity2 : {mixtape.itemCounter} </div>
                  <br />
                  <div> Cost : €{mixtape.itemCounter * mixtape.price}</div>
                  <div> quantity: {cookiesarray.itemCounter}</div>
                  <div>
                    Quantity3 :
                    {cookiesarray.map((item) => {
                      console.log('what happens here', item.itemCounter);
                      return item.itemCounter;
                    })}
                  </div>
                  <div>Quantity 4: {onlyOneItemCounter}</div>
                  <button
                    css={buttonStyles}
                    hre="./cart"
                    onClick={() => {
                      const currentCart = Cookies.get('cart')
                        ? JSON.parse(Cookies.get('cart'))
                        : [];

                      const newCart = currentCart.filter(
                        (itemInCart) => itemInCart.id !== mixtape.id,
                      );

                      setItemCounter(0);
                      props.setItemInCart(newCart);
                      Cookies.set(`cart`, JSON.stringify(newCart));
                      setReadCurrentCookies(newCart);
                    }}
                  >
                    REMOVE FROM CART
                  </button>
                  {/* <button
                    css={buttonStyles}
                    type="submit"
                    // form="form1"
                    value="Submit"
                    data-test-id="product-add-to-cart"
                    onClick={() => {
                      const currentCart = Cookies.get('cart')
                        ? JSON.parse(Cookies.get('cart')) // if Cookies.get('cart') exists - true
                        : []; // if false - pass an empty array that can be used bellow when adding

                      let newCart;

                      if (
                        currentCart.find(
                          (itemInCart) => mixtape.id === itemInCart.id,
                        )
                      ) {
                        newCart = currentCart.filter(
                          (itemInCart) => itemInCart.id !== mixtape.id,
                        );
                        setIsInCart(false);
                        setItemCounter(0);
                        props.setItemInCart(newCart);
                      } else {
                        newCart = [
                          ...currentCart,
                          { id: mixtape.id, itemCounter: 1 },
                        ];
                        setIsInCart(true);
                        setItemCounter(1);
                        props.setItemInCart(newCart);
                      }
                      Cookies.set(`cart`, JSON.stringify(newCart));
                    }}
                  >
                    {isInCart ? 'remove from cart' : 'add to cart'}
                  </button> */}
                  <br />
                  <div css={changeNumberOfItems}>
                    <button
                      css={buttonStyles2}
                      onClick={() => {
                        setItemCounter(itemCounter + 1);
                        // 1. get cookie
                        const currentCart = Cookies.get('cart')
                          ? JSON.parse(Cookies.get('cart')) // if true, cookie exists
                          : []; // false

                        // 2. find the item in the array

                        const currentItemInCart = currentCart.find(
                          (itemInCart) => mixtape.id === itemInCart.id,
                        );

                        console.log(currentItemInCart);
                        // 3. update the counter outside the cart
                        currentItemInCart.itemCounter += 1;
                        // 4. set the new cookie
                        Cookies.set(`cart`, JSON.stringify(currentCart));
                        props.setItemInCart(currentCart);
                      }}
                    >
                      +
                    </button>

                    <div>
                      &nbsp; &nbsp; {/* itemCounter */} &nbsp; &nbsp;
                      {/*                 {numberOfThisItemInCart}
                       */}
                    </div>

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
                          ? JSON.parse(Cookies.get('cart')) // if true, cookie exists
                          : []; // false

                        // 2. get the item

                        const currentItemInCart = currentCart.find(
                          (itemInCart) => mixtape.id === itemInCart.id,
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
                  </div>
                </section>
              </div>
            );
          })}
          {/*   {props.mixtapes((mixtape) => {
            return ( */}
          <section css={totalCostStyles}>
            <section css={mixtapeImageStyles}>
              <Image src={tapeletter3} width="600" height="300" />
            </section>
            <section css={totalItemsText}>
              <h2>CHECKOUT</h2>
              <h2>Total Cost : €{totalCostSum}</h2>
              <h2>
                Total Number of Items In Cart :{totalItemsSum}
                {/* sum2 */}
              </h2>
              <div>
                <Link href="/checkout">
                  <button css={buttonStyles}>CHECKOUT NOW</button>
                </Link>
              </div>
              <br />
            </section>
          </section>
          {/*     );
          })} */}
        </div>
      </main>
    </div>
  );
}

// Code in getServerSideProps runs in
// Node.js (on the server)
//
// Important: ONLY in the /pages directory
export async function getServerSideProps(context) {
  const currentCookie = JSON.parse(context.req.cookies.cart || '[]');
  // no longer required as array not used
  // const mixtapes = mixtapesDatabase;
  const mixtapes = await getMixtapes();

  // console.log(mixtapes);
  // console.log(currentCookie);

  // map the currentCookie array with a value of cookie / and find within the mixtapes array the mixtape and compare the two ids
  // once compared then return the required
  /*   const itemsInCart = currentCookie.map((cookie) => {
    const cartItem = mixtapes.find((mixtape) => mixtape.id === cookie.id);

    return {
      id: cartItem.id,
      name: cartItem.name,
      color: cartItem.color,
      price: cartItem.price,
    };
  });
*/

  const databaseIncCookie = currentCookie.map((cookie) => ({
    ...cookie,
    ...mixtapes.find((mixtape) => mixtape.id === cookie.id),
  }));

  console.log(databaseIncCookie);

  return {
    // Anything that you pass in the props
    // object will get passed to the component
    // at the top in the `props` parameter

    props: {
      mixtapes: databaseIncCookie,
      cookiearray: currentCookie,
    },
  };
}
