import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import boombox1 from '../public/boombox1.jpeg';
//import { mixtapesDatabase } from '../util/database';
import { getMixtapes } from '../util/database';

/* import contactusmixtapealt from '../public/contactusmixtapealt.png';
 */

const orderHeaderStyles = css`
  padding-left: 15vw;
  align-self: center;
  font-size: 20px;
`;
const mainStyles = css`
  display: flex;
  position: relative;
  align-content: center;
  justify-items: center;
  flex-direction: row;
  border: 1px;
  flex-wrap: wrap;
  padding: 50px;
  margin: 50px;
  height: 72vh;
`;

const insideStyles = css`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px;
  padding-top: 0px;
`;

const inside2Styles = css`
  display: flex;
  border: 10px black solid;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 100px;
  padding: 40px;
  padding-top: 0px;
  font-size: 18px;
  height: 400px;
  border: 1px black solid;
  border-right: 0px;
  border-radius: 20px 0px 0px 20px;
  box-shadow: #5e5df0 0 10px 20px -10px;
`;
const orderImageStyles = css`
  border-radius: 20px;
  border: 1px solid black;
`;

const buttonPosition = css`
  padding-top: 500px;
  padding-left: 100px;
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
  }, []);

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
  }, []);

  return (
    <div>
      <Head>
        <title>Mixtapes 3000</title>
        <meta name="description" content="Modern Retro Mixtapes" />
        <link rel="icon" href="/faviconmixtape.png" />
      </Head>

      <h1 css={orderHeaderStyles}>ORDER PAGE</h1>
      <hr />

      <main css={mainStyles}>
        <br />
        <div css={insideStyles}>
          <div css={inside2Styles}>
            <h1>THANK YOU FOR YOUR ORDER</h1>
            <hr />
            <h2> Feel free to contact us if you have any questions</h2>
            <hr />
            <div>Number of items purchased: {sum2}</div>
            <hr />
            <div>Total Cost of your order (€) : {sum}</div>
          </div>

          <Image
            css={orderImageStyles}
            src={boombox1}
            alt="man with boombox"
            width="400"
            height="570"
          />
        </div>
        <div css={buttonPosition}>
          <Link href="/">
            <button
              css={buttonStyles}
              onClick={() => {
                const refreshCart = [];
                Cookies.set(`cart`, JSON.stringify(refreshCart));
              }}
            >
              Exit
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const currentCookie = JSON.parse(context.req.cookies.cart || '[]');
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
