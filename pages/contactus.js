import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
// import Link from 'next/link';
import contactusmixtape from '../public/contactusmixtape.gif';
import waitingatstation from '../public/waitingatstation.jpeg';

/* import contactusmixtapealt from '../public/contactusmixtapealt.png';
 */

const mainStyles = css`
  display: flex;
  position: relative;
  border: 1px;
  margin: 20px;
  height: 72vh;
  border: 1px green solid;
`;

const mainImageStyles = css`
  flex-direction: row;
  border: 2px white white;
  border-radius: 20px;
  padding: 50px;
  padding-right: 0px;
  margin-right: 200px;
`;
const mainTextBoxStyles = css`
  display: flex;
  position: relative;
  flex-direction: column;
  border: solid black 1px;
  font-size: 10px;
  margin-left: 100px;
  margin-top: 20px;
  height: 400px;
  width: 700px;
  padding: 50px;
  padding-right: 100px;
  border-radius: 20px 0px 0px 20px;
  box-shadow: #5e5df0 0 10px 20px -10px;
`;

const inputFormStyles = css`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: 200px;
  margin-right: 20px;
  padding-top: 20px;
  font-size: 20px;
  border: 1px solid grey;
  width: 25vw;
  border-radius: 20px 20px 0px 0px;
  width: 600px;
`;

const buttonStyles = css`
  text-decoration: none;
  font-family: Dosis, sans-serif;
  font-size: 20px;
  align-self: start;
  width: 600px;
  height: 50px;
  margin-left: 200px;
  color: black;
  background-color: blanchedalmond;
  box-shadow: #5e5df0 0 10px 20px -10px;

  :hover {
    background-color: black;
    color: blanchedalmond;
  }
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
const inputBoxFormStyles = css`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding-left: 10px;
  height: 250px;
  font-size: 16px;
  width: 400px;
`;

export default function Home() {
  return (
    <div css={mainStyles}>
      <Head>
        <title>Mixtapes 3000</title>
        <meta name="description" content="Modern Retro Mixtapes" />
        <link rel="icon" href="/faviconmixtape.png" />
      </Head>

      <main css={mainStyles}>
        <div css={mainTextBoxStyles}>
          <h1>mixtapes 3000: </h1>
          <h2>has something gone wrong?</h2>
          <h2> feel free to contact us:</h2>
          {/* <Image src={contactusmixtapealt} alt="contact us mixtape" /> */}
          <Image
            src={contactusmixtape}
            alt="twisted mixtape gif"
            width="400"
            height="400"
          />
        </div>
        <div>
          <Image
            css={mainImageStyles}
            src={waitingatstation}
            alt="man waiting at station listening to walkman"
            height="1300"
            width="800"
          />
        </div>
        <div>
          <form css={inputFormStyles}>
            <label id="fristnameinput">First Name: </label>
            <input css={inputBoxStyles} id="firstnameinput" />
            <label id="lastnameinput">Last Name: </label>
            <input id="lastnameinput" css={inputBoxStyles} />
            <br />
            <label id="emailinput">Email: </label>
            <input id="emailinput" css={inputBoxStyles} />
            <br />
            <label id="problemdescription">Description: </label>
            <textarea
              css={inputBoxFormStyles}
              rows="20"
              cols="100"
              name="Description"
              id="Description"
            />
            <br />
          </form>
          <button css={buttonStyles}>Submit Your Questions..</button>
        </div>
        <br />
      </main>
    </div>
  );
}

