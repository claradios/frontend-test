# FrontendTestSolved

## Quickly start:
In order to include SASS and have a basic structure I have used a kit with gulp.
You need to have the following installed: [Node.js](https://nodejs.org/) y [Gulp](https://gulpjs.com) after that:
1. Download o clone this repository
2. Install local dependencies with `$ npm install`
3. Start the kit with `$ gulp` or `$ npm start`

## Project structure
The **gulpfile.js** uses a config JSON with the files rootes to watch and create.

The folders are organized with this structure:
```
/
`- _src
   |- assets
   |  |- icons
   |  |- images
   |  |- js
   |  `- scss
   |     `- core
   |
   `- templates
      `- partials

```

## GOALS

#### The main goal of this tech test is to create a client side web application that reproduces the screenshots below by using [GitHub API](https://developer.github.com/v3/) .

We will only evaluate the client side code and the criteria will be based mainly on:

1. Good use of **pure Javascript** language without external libraries and frameworks like jQuery, React...
2. Clean HTML and CSS markup
3. Clean, maintainable & easy-to-read
4. Good architectural practices

## HOW TO START

1. Investigate the GitHub API calls for `user` and `repos` (for example: test them in the browser)
2. Launch the web application, for example with: `python -m SimpleHTTPServer 1337`
3. Open the browser with http://localhost:1337/ and start coding!

## NOT REQUIRED, BUT IMPRESSIVE

- Adding Unit Testing. External libraries limitation doesn't apply here, you can use Jasmine, Karma...
- Build System (browseriy, webpack, parcel..)
- Keep in consideration browsers support
- ES6+
- SASS


## SCREENSHOTS

#### First Screen

The user can search a username of GitHub

![](https://drive.google.com/uc?export=view&id=1V19nQhn7Bn3E-sBNBFtFJIatSaqLUoUj)

#### Success Screen

If the searched username does exist: The searched user profile is displayed with all his repositories

![](https://drive.google.com/uc?export=view&id=1LHyqNTFVQZQ1tdidLXLrCOxo0w6JK9oa)

#### Error Screen

If the searched username does not exist: An error is shown

![](https://drive.google.com/uc?export=view&id=1uIajOBQvo4ugtoxkga8KPbY5x2PlHh0j)

