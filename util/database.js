// Simulate a Node.js server-side dependency
// to make the file fail if used in frontend
// import fs from 'node:fs';

// console.log(fs);
// End simulation

//import to change snake_case in database to camelcase
import camelCase from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

// functions for database export
config();

// function to only connect once as otherwise the limit of 100 connections can be exceeded and this is limited to superusers and will though an error
// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.postgresSqlClient) {
      globalThis.postgresSqlClient = postgres();
    }
    sql = globalThis.postgresSqlClient;
  }

  return sql;
}
// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

// function to return all the products in the database for the createamixtape page

export async function getMixtapes() {
  const mixtapes = await sql`
  SELECT * FROM mixtapes
  `;
  return mixtapes.map((mixtape) => camelCase(mixtape));
}

// function to return single mixtapes/products for the dynamic page [mixtapesId]

export async function getMixtape(id) {
  const [mixtape] = await sql`
  SELECT * FROM mixtapes
  WHERE id = ${id}
  `;
  return camelCase(mixtape);
}

// this is the original array which is now not needed as it is linked to the sql database
/* export const mixtapesDatabase = [
  {
    id: '1',
    name: 'The Green Mixtape',
    color: 'green',
    length: '90 minutes',
    price: 9,
  },
  {
    id: '2',
    name: 'The Pink Mixtape',
    color: 'pink',
    length: '90 minutes',
    price: 9,
  },
  {
    id: '3',
    name: 'The White Mixtape',
    color: 'white',
    length: '90 minutes',
    price: 7,
  },
  {
    id: '4',
    name: 'The Black Mixtape',
    color: 'black',
    length: '90 minutes',
    price: 7,
  },
  {
    id: '5',
    name: 'The Clear Neon Mixtape',
    color: 'clear2',
    length: '180 minutes',
    price: 15,
  },
  {
    id: '6',
    name: 'The Blue Mixtape ',
    color: 'blue',
    length: '180 minutes',
    price: 13,
  },
  {
    id: '7',
    name: 'The Yellow Mixtape',
    color: 'yellow',
    length: '180 minutes',
    price: 13,
  },
  {
    id: '8',
    name: 'The Clear Mixtape',
    color: 'clear',
    length: '180 minutes',
    price: 13,
  },
  {
    id: '9',
    name: 'Retro Walkman',
    color: 'Red',
    price: 35,
    length: 'N/A',
  },
  {
    id: '10',
    name: 'The Grey Mixtape',
    color: 'grey',
    length: '180 minutes',
    price: 15,
  },
]; */
