// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBmSRetsTYoGLnkX_uqazCjT2G7IsZOoE0",
    authDomain: "analog-film-type.firebaseapp.com",
    databaseURL: "https://analog-film-type.firebaseio.com",
    projectId: "analog-film-type",
    storageBucket: "analog-film-type.appspot.com"
  }
};
