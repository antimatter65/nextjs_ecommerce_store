import { css } from '@emotion/react';
// import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import hands from '../public/hands.webp';
import transitionbackgoundtapes from '../public/transitionbackgoundtapes.jpeg';
// import { mixtapesDatabase } from '../util/database';
import { getMixtapes } from '../util/database';

/* import contactusmixtapealt from '../public/contactusmixtapealt.png';
 */

const titleStyles = css`
  margin-left: 700px;
`;

const mainStyles = css`
  display: flex;
  position: relative;
  align-content: center;
  flex-wrap: wrap;
  padding: 5px;
  margin: 5px;
  max-height: 80vh;
  border: white 5px;
`;

const infoBoxStyles = css`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  max-height: 70vh;
  height: 300px;
  margin-top: 100px;
  padding-right: 20px;
  margin-right: 100px;
  padding-left: 20px;
  border: 1px black solid;
  border-radius: 0px 20px 20px 0px;
  box-shadow: #5e5df0 0 10px 20px -10px;
`;

const mainImageStyles = css`
  flex-direction: row;
  border: 2px white white;
  border-radius: 20px;
  padding: 50px;
  padding-right: 0px;
`;

const inputFormStyles = css`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-right: 20px;
  padding-top: 20px;
  font-size: 26px;
  border: 1px solid grey;
  width: 25vw;
  border-radius: 20px 20px 0px 0px;
  width: 600px;
`;

const inputLabelStyles = css`
  display: flex;
  position: relative;
  margin-left: -200px;
  height: 20px;
  font-size: 15px;
  width: 200px;
`;

const inputBoxStyles = css`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding-left: 10px;
  height: 25px;
  font-size: 16px;
  width: 400px;
`;

const buttonStyles = css`
  text-decoration: none;
  font-family: Dosis, sans-serif;
  font-size: 20px;
  align-self: start;
  width: 600px;
  height: 50px;
  color: black;
  background-color: blanchedalmond;
  box-shadow: #5e5df0 0 10px 20px -10px;

  :hover {
    background-color: black;
    color: blanchedalmond;
  }
`;

export default function Home(props) {
  const [sum, setSum] = useState(0);
  useEffect(() => {
    function totalSum() {
      let total = 0;
      props.cookiearray.map((item) => {
        return (total +=
          props.mixtapes.find((mixtape) => {
            return item.id === mixtape.id;
          }).price * item.itemCounter);
      });
      setSum(total);
    }
    totalSum();
  }, [props.cookiearray, props.mixtapes]);

  const [sum2, setSum2] = useState(0);
  // calculate the number of items in the cart

  useEffect(() => {
    function totalSum2() {
      let total = 0;
      props.cookiearray.map((item) => {
        return (total += item.itemCounter);
      });
      setSum2(total);
    }
    totalSum2();
  }, [props.cookiearray]);

  return (
    <div>
      <Head>
        <title>Mixtapes 3000</title>
        <meta name="description" content="Modern Retro Mixtapes" />
        <link rel="icon" href="/faviconmixtape.png" />
      </Head>
      <h1 css={titleStyles}>GET YOU ITEMS!</h1>
      <hr />

      <main css={mainStyles}>
        <br />
        <div css={mainImageStyles}>
          {/* <Image src={contactusmixtapealt} alt="contact us mixtape" /> */}
          <Image
            src={transitionbackgoundtapes}
            css={mainImageStyles}
            alt="sky, hands and mixtape"
            height="600"
            width="400"
          />
        </div>
        <div css={infoBoxStyles}>
          {/* <h1>mixtapes 3000: </h1> */}
          <h2>Checkout your items by filling in you details</h2>
          <br />
          <div> if you have any problems feel free to contact us</div>
          <br />
          <br />
          <div> Your Order Details</div>
          <br />
          <div>
            Number of items: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; {sum2}
          </div>
          <div>Total price of you order (€) : &nbsp; &nbsp; &nbsp;{sum}</div>
        </div>
        <div>
          <form css={inputFormStyles}>
            <label id="firstname" css={inputLabelStyles}>
              First Name :{' '}
            </label>
            <input
              css={inputBoxStyles}
              id="firstname"
              minLength="1"
              maxLength="40"
              name="firstname"
              placeholder="John"
              data-test-id="checkout-first-name"
              pattern="[a-zA-Z]*"
              required
            />
            <label id="last_name" css={inputLabelStyles}>
              Last Name :{' '}
            </label>
            <input
              css={inputBoxStyles}
              id="last_name"
              data-test-id="checkout-last-name"
              required
            />
            <br />
            <label id="email" css={inputLabelStyles}>
              E-mail :{' '}
            </label>
            <input
              css={inputBoxStyles}
              id="email"
              type="email"
              required
              data-test-id="checkout-email"
            />
            <br />
            <label id="address" css={inputLabelStyles}>
              Address :{' '}
            </label>

            <input
              css={inputBoxStyles}
              id="address"
              type=""
              data-test-id="checkout-address"
              required
            />
            <label id="city" css={inputLabelStyles}>
              City :{' '}
            </label>
            <input
              css={inputBoxStyles}
              id="city"
              data-test-id="checkout-city"
              required
            />
            <label id="postcode" css={inputLabelStyles}>
              Postcode :{' '}
            </label>
            <input
              css={inputBoxStyles}
              id="postcode"
              data-test-id="checkout-postal-code"
              required
            />
            <label id="country" css={inputLabelStyles}>
              Country :{' '}
            </label>
            <input
              css={inputBoxStyles}
              id="country"
              data-test-id="checkout-country"
              required
            />
            <br />
            <label id="credit-card-number" css={inputLabelStyles}>
              Credit Card Number :{' '}
            </label>
            <input
              css={inputBoxStyles}
              id="credit-card-number"
              data-test-id="checkout-credit-card"
              required
            />
            <label id="cc-expiration-date" css={inputLabelStyles}>
              Expiration Date :{' '}
            </label>
            <input
              css={inputBoxStyles}
              id="cc-expiration-date"
              data-test-id="checkout-expiration-date"
              required
            />
            <label id="cc-security-code" css={inputLabelStyles}>
              Security Code :{' '}
            </label>
            <input
              css={inputBoxStyles}
              id="cc-security-code"
              data-test-id="checkout-security-code"
              required
            />
            <br />
            <Link href="/ordered" input type="submit">
              <button css={buttonStyles} data-test-id="checkout-confirm-order">
                Confirm Your Order
              </button>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const currentCookie = JSON.parse(context.req.cookies.cart || '[]');

  // const mixtapes = mixtapesDatabase;
  const mixtapes = await getMixtapes();
  const databaseIncCookie = currentCookie.map((cookie) => ({
    ...cookie,
    ...mixtapes.find((mixtape) => mixtape.id === cookie.id),
  }));

  console.log(databaseIncCookie);

  return {
    props: {
      mixtapes: databaseIncCookie,
      cookiearray: currentCookie,
    },
  };
}
