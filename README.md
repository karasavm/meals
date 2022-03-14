# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Improvements

###

1. Improve performance using caching that supported from react-query.
2. Optimize components. (memo)
3. Better layout, more responsive.
4. Handle recipe image loading delay.
5. Remove styles prop noise. Move styles prop from components to classes or styled component way.
6. More tests.

### If it was a large App

1. Structure with Header, Menu, Content.
2. Maybe Authenticated and UnAuthenticated components.
3. Generic Error handling with error pages and/or error components.
4. Different directory structure
5. react-use or any other library providing custom hooks utilities.

### Libraries

1. react-query. Help full for rest apis and server state management. Ability to cache recipes!!
2. Chakra-UI. In order to see how I adapt to new libraries.
3. axios. Out of the box error handling compared to fetch api and much more especially for large apps.
4. testing-library. Better ui testing compared to enzyme. Less implementation detail approach.
