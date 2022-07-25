import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import cart2 from '../public/cart2.png';
import headermixtape from '../public/headermixtape.png';

// import { getParsedCookie } from '../util/cookies';

const headerStyles = css`
  color: grey;
  position: static;
  z-index: 5;
  width: 100vw;
  height: 70px;
  background: white;
  opacity: 0.95;
  border-bottom: grey 1px solid;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const headerLinkContainerStyles = css`
  display: flex;
  position: relative;
`;

const headerLinkStyles = css`
  /*   border: white 1px solid;
 */
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border-color: grey solid 1px;
  color: grey;
  width: 150px;
  padding-top: 5px;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  box-shadow: #5e5df0 0 10px 20px -10px;
  :hover {
    color: white;
    background: grey;
    text-decoration-color: grey;
    border-color: grey;
  }
`;

// const headerImageStyles = css`
//   display: flex;
//   justify-content: left;
//   align-items: center;
// `;

const cartImageStyles = css`
  margin-top: 0px;
  background-color: white;
  color: grey;
  padding-left: 20px;
  padding-right: 20px;
  align-items: baseline;
  box-shadow: #5e5df0 0 10px 20px -10px;

  :hover {
    color: white;
    background: grey;
    text-decoration: underline;
    text-decoration-color: grey;
    border-color: grey;
  }
`;

export default function Header(props) {
  // calculate the number of items in the cart
  // JSON.parse(Cookies.get('cart'));

  console.log('we are in header', props.cart);
  console.log('we are in header - headerSum', props.setHeaderSum);

  const cookiesarray = props.cart;

  // let headerState1 = props.setHeaderSum;

  console.log(cookiesarray);

  console.log('test');
  console.log(Array.isArray(cookiesarray));
  console.log('test2');
  console.log(typeof cookiesarray === 'string');

  const [totalItemsSum, setTotalItemsSum] = useState(0);

  // console.log('any cookie here?', cookiesarray);

  useEffect(() => {
    function totalSum() {
      let total = 0;
      console.log('can you find a cookie?', cookiesarray);
      cookiesarray.map((item) => {
        return (total += item.itemCounter);
      });
      setTotalItemsSum(total);
    }
    totalSum();
  }, [cookiesarray]);

  return (
    <header css={headerStyles}>
      {/* adds a home link to the image in the header */}
      <Link href="/">
        <Image src={headermixtape} alt="mix tape in the clouds" hef="/" />
      </Link>
      <h1>Mixtapes 3000</h1>
      <div css={headerLinkContainerStyles}>
        <div css={headerLinkStyles}>
          <Link href="/">Home</Link>
        </div>
        <div css={headerLinkStyles}>
          <Link href="/about">About</Link>
        </div>
        <div css={headerLinkStyles}>
          <Link href="/createamixtape" data-test-id="products-link">
            Create A Mixtape
          </Link>
        </div>
        <div css={headerLinkStyles}>
          <Link href="/merch">Merch</Link>
        </div>
        <div css={cartImageStyles} href="cart">
          <Link href="/cart">
            <Image
              src={cart2}
              alt="cart icon"
              // hef="/cart"
              width="30"
              height="30"
            />
            {/* nbsp;( {totalItemsSum} ) */}
          </Link>
          &nbsp;( {totalItemsSum} )
        </div>
      </div>
    </header>
  );
}
