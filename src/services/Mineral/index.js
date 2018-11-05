const BASE_API = 'https://headlight-tournament-1.herokuapp.com';
const NODES_URL = `${BASE_API}/nodes`;
const BOTS_URL = `${BASE_API}/bots`;

export const fetchNodes = () => {
  return fetch(NODES_URL).then(res => res.json());
};

export const fetchBots = () => {
  return fetch(BOTS_URL).then(res => res.json());
}