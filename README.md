
# Authentication of Live Streams and Video Apps with JSON Web Tokens

This code is part of a tutorial on how to build a broadcasting app for the web and mobile. It utilizes the following technologies:

 1. NodeJS
 2. React Native
 3. Expo
 4. BingeWave

## Tutorial

To read the full tutorial, please visit here: [https://medium.com/bingewave/how-to-authenticate-with-json-web-tokens-for-interactive-live-streams-61dd2675b3e6](https://medium.com/bingewave/how-to-authenticate-with-json-web-tokens-for-interactive-live-streams-61dd2675b3e6)

## Installation
To install, please follow the steps below.

 1. Clone this repose to your local computer.
 2. Go onto [BingeWave](https://developers.bingewave.com/), register for an account and create a Live Event.
 3. Go into backend/ folder and run `npm install` on the command line. In the .env file, input the organizer access token of your organizer account. Run `node server.js` to start the backend.
 4. Go into mobile/ folder and run `npm install` on the command line. In the mobile/screens/Video.js, be sure to enter the id of a live event. Run `expo start` to start the mobile app interface.
 5. In web/ folder, in the files index.html replace the id with a live event id and the users auth token.


