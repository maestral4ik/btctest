// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fireBaseConfig: {
    apiKey: "AIzaSyBMlaGp8maHde48p9l9No-GbdKgBsyGUKo",
    authDomain: "btc-checker-fa513.firebaseapp.com",
    databaseURL: "https://btc-checker-fa513.firebaseio.com",
    projectId: "btc-checker-fa513",
    storageBucket: "btc-checker-fa513.appspot.com",
    messagingSenderId: "167317142258"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
