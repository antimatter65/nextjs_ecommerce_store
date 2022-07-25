import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import mixtape1 from '../public/mixtape1.png';
import { getMixtapes } from '../util/database';

// import { mixtapesDatabase } from '../util/database';

const titleStyles = css`
  margin-left: 600px;
`;

const mixtapesListStyles = css`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  background: ;
  padding: 10px;
  margin: 30px;
  justify-content: flex-start;
  justify-content: space-evenly;
`;

const mixtapesListItemStyles = css`
  border: solid black 1px;
  margin: 10px;
  padding: 30px;
  background-color: white;
  border-radius: 15px;
  align-items: center;
  width: 400px;
  box-shadow: #5e5df0 0 10px 20px -10px;
  .div {
    display: flex;
    position: relative;
    flex-direction: row;
    //justify-content: space-between;
    margin: 30px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background: #fdfdfd;
    font-size: 36px;
    height: 500px;
    width: 500px;
    padding: 10px 16px;
    margin: 20px;
    border: solid black 10px;
    box-shadow: #5e5df0 0 10px 20px -10px;
  }
`;

const mixtapesListItemLinkStyles = css`
  color: grey;
  text-decoration: underline;
  .a {
    color: green;
  }
`;

export default function Shop(props) {
  return (
    <div>
      <Head>
        <title>Mixtapes 3000</title>
        <meta name="description" content="Modern Retro Mixtapes" />
        <link rel="icon" href="/faviconmixtape.png" />
      </Head>
      <h1 css={titleStyles}>Select Your Perfect Mixtape:</h1>
      <hr />

      <main>
        <div css={mixtapesListStyles}>
          {props.mixtapes.map((mixtape) => {
            return (
              <div key={`mixtape-${mixtape.id}`} css={mixtapesListItemStyles}>
                <div
                  data-test-id="product-<product id>"
                  css={mixtapesListItemLinkStyles}
                >
                  <Link href={`/mixtapes/${mixtape.id}`}>{mixtape.name}</Link>
                </div>
                <div>Length: {mixtape.length}</div>
                <div>Price € {mixtape.price}</div>
                {/* <div>{mixtape.color}</div> */}
                <br />
                <Link href={`/mixtapes/${mixtape.id}`}>
                  <Image src={`/${mixtape.id}.jpeg`} width="600" height="400" />
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

// Code in getServerSideProps runs in
// Node.js (on the server)
//
// Important: ONLY in the /pages directory
export async function getServerSideProps() {
  // from database.js
  const mixtapes = await getMixtapes();

  return {
    // Anything that you pass in the props
    // object will get passed to the component
    // at the top in the `props` parameter
    props: {
      // mixtapes: mixtapesDatabase,
      mixtapes: mixtapes,
    },
  };
}
