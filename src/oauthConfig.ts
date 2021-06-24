const authEndpoint = 'https://localhost:44319/connect/authorize';

const scopes = [
  'openid email roles profile api1 api2',
];

function randomNonce(length : number) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export const getAuthorizeHref = (): string => {
  // const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  // const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  // const clientId = 'A_UI';
  const clientId = 'aurelia';
  const redirectUri = 'https://localhost:3000/signin-oidc/';
  const nonce = randomNonce(12);
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&nonce=${nonce}&scope=${scopes.join("%20")}&response_type=token`;
}
