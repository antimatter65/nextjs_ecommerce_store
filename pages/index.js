import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import headerbackground from '../public/headerbackground.jpeg';
import mixtape1 from '../public/mixtape1.png';
import mixtapeeyes from '../public/mixtapeeyes.webp';
import roadtrip2 from '../public/roadtrip2.jpeg';

const mainStyles = css`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: green;
  //background-image: url(../headerbackground.jpeg);
  // background-repeat: no-repeat;
  // background-attachment: fixed;
  // background-position: center;
  //height: 100vh;
  background-size: 100vw 150vh;
  //background-color: #8d7c62;
  .div {
    font-size: 36px;
    color: white;
  }
`;

const introSectionStyles = css`
  display: flex;
  position: relative;
`;

const introImageStyles = css`
  display: flex;
  position: absolute;
  justify-content: center;
  max-width: 100vw;
  height: -100px;
`;

const introTextStyles = css`
  margin-left: -1450px;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: white;
  opacity: 0.99;
  color: grey;
  position: relative;
  border: 1px solid black;
  border-radius: 15px;
  width: 20vw;
  margin-top: 550px;
  margin-bottom: 150px;
  z-index: 5;
  box-shadow: #5e5df0 0 10px 20px -10px;
`;

const section1Styles = css`
  display: flex;
  position: relative;
  flex-direction: row;
  //height: -200px;
`;

const mainImage2Styles = css`
  display: flex;
  position: relative;
  justify-content: flex-end;
  width: 60vw;
  padding-top: 0px;
  margin-left: 200px;
  top: -300px;
  border-radius: 25px;
  float: left;
  width: 33.33%;
  padding: 15px;
`;

const mainTextStyles = css`
  margin-left: 150px;
  display: flex;
  position: absolute;
  left: 0px;
  top: -1200px;
  font-size: 20px;
  flex-direction: column;
  color: white;
  opacity: 1;
  color: white;
  position: relative;
  border-radius: 15px;
  width: 40vw;
  margin-top: 600px;
  margin-bottom: 150px;
  z-index: 5;
`;

const mainImage3Styles = css`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  width: 600vw;
  padding-top: -30px;
  margin-left: 350px;
  align-self: flex-end;
  height: -250px;
`;

const mainVideo1ContainerStyles = css`
  display: flex;
  position: relative;
  justify-content: flex-start;
  // overflow: hidden;
  width: 100%;
  z-index: 10;
  border: 10px solid red;
`;

const mainVideo1Styles = css`
  display: flex;
  position: absolute;
  //left: -350px;
  // top: 100px;
  border-radius: 20px;
  max-width: 60vw;
  padding-top: 0px;
  //padding: 300px;
  margin: 100px;
  height: 0px;
  z-index: 6;
  //width: 1800px;
  border: 1px solid purple;
  background-color: white;
`;
const mainVideo2Styles = css`
  display: flex;
  position: relative;
  left: 900px;
  top: -2600px;
  border-radius: 20px;
  // justify-content: space-evenly;
  padding-top: 20px;
  padding-left: 20px;
  margin-left: 370px;
  width: 25vw;
`;

const section3Styles = css`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 200px;
  width: 25vw;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mixtapes 3000</title>
        <meta name="description" content="Modern Retro Mixtapes" />
        <link rel="icon" href="/faviconmixtape.png" />
      </Head>

      <main>
        <div css={mainStyles}>
          <section css={introSectionStyles}>
            <div css={mainVideo1ContainerStyles}>
              <iframe
                css={mainVideo1Styles}
                width="2000"
                height="2500"
                src="https://player.vimeo.com/video/570291170?title=0&portrait=0&byline=0&autoplay=1"
                allow="autoplay"
                title="mixtape"
                frameBorder="0"
                autoPlay="1&loop=100"
                algin="center"
                sandbox=""
              />
            </div>

            <div css={introImageStyles}>
              <Image src={headerbackground} alt="header photo" />
            </div>
            <div css={introTextStyles}>
              <h1>Welcome to MIXTAPES 3000</h1>
              <br />
              <div>We create retro mixtapes out of your Spotify playlists.</div>
              <br />
              <div>XXXX XXXX XXXXX XXXX XXXX XXX XXX XXX XX</div>
              <br />
              <div>XXXX XXXX XXXXX XXXX XXXX XXX XXX XXX XX</div>
              <br />
              <div>XXXX XXXX XXXXX XXXX XXXX XXX XXX XXX XX</div>
              <br />
              <div>XXXX XXXX XXXXX XXXX XXXX XXX XXX XXX XX</div>
              <br />
              <div>XXXX XXXX XXXXX XXXX XXXX XXX XXX XXX XX</div>
              <br />
              <div>XXXX XXXX XXXXX XXXX XXXX XXX XXX XXX XX</div>
              <br />
              <br />
              <br />
            </div>
          </section>
          <section css={section1Styles}>
            <section css={mainTextStyles}>
              <h1>Welcome to Mixtapes 3000 </h1>
              <h1>We create physical mixtapes out of you Spotify Playlists!</h1>
              <br />
              <div>Perfect as a gift for someone you love</div>
              <br />
              <div>Great for an old school road trip</div>
              <br />
              <div>
                Link to your own playlists or select on of our perfectley
                curated mixtapes
              </div>
              <br />
              <div>
                Get yourself a retro walkman to get that perfect old school vibe
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
            </section>
          </section>

          <div css={mainImage2Styles}>
            <Image
              src={roadtrip2}
              alt="road trip pic"
              width="600"
              height="900"
            />
          </div>
          <section css={section1Styles}>
            <section css={mainTextStyles}>
              <h1>Mixtapes 3000: </h1>
              <h2>Create physical Mixtapes out of you Spotify Playlists!</h2>
              <div>Perfect as a gift for someone you love</div>
              <div>Great for an old school road trip</div>
              <div>Keep It Retro</div>
              <div>
                Link to your own playlists or select on of our perfectley
                curated mixtapes
              </div>
              <div>
                Get yourself a retro walkman to get that perfect old school vibe
              </div>
            </section>
            <div css={mainImage3Styles}>
              <Image
                src={mixtapeeyes}
                alt="mixtape eyes pic"
                width="600"
                height="900"
              />
            </div>
          </section>
          <section css={section3Styles}>
            <section css={mainTextStyles}>
              <h1>Mixtapes 3000: </h1>
              <h2>Create physical Mixtapes out of you Spotify Playlists!</h2>
              <div>Perfect as a gift for someone you love</div>
              <div>Great for an old school road trip</div>
              <div>Keep It Retro</div>
              <div>
                Link to your own playlists or select on of our perfectley
                curated mixtapes
              </div>
              <div>
                Get yourself a retro walkman to get that perfect old school vibe
              </div>
            </section>
          </section>
          <section css={section3Styles}>
            <div css={mainVideo2Styles}>
              <iframe
                width="1120"
                height="630"
                src="https://www.youtube.com/embed/urGmmkUDi20"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox=""
              />
            </div>
            <section css={mainTextStyles}>
              <h1>Mixtapes 3000: </h1>
              <h2>Create physical Mixtapes out of you Spotify Playlists!</h2>
              <div>Perfect as a gift for someone you love</div>
              <div>Great for an old school road trip</div>
              <div>Keep It Retro</div>
              <div>
                Link to your own playlists or select on of our perfectley
                curated mixtapes
              </div>
              <div>
                Get yourself a retro walkman to get that perfect old school vibe
              </div>
            </section>
          </section>

          <div>
            {/*  <video controls autoplay>
              <source src=" https://player.vimeo.com/video/570291170?title=0&portrait=0&byline=0&autoplay=1" type="video/mp4">
              <source src="movie.ogg" type="video/ogg">
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
      </main>
    </div>
  );
}
