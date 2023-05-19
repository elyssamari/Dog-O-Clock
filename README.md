# Dog O'Clock

Dog O'Clock is a Random Dog Generator web application where you can generate new dog photos again and again! Feel free to use it in your own way!

# Pros and Cons of MUI

Designing and building the React application with MUI was a fun yet challenging experience that I have learned a lot from.

### Pros
* The MUI plugin provided a Get Started description, which was really helpful when first being introduced to this plugin.
* The MUI provided many properties that can be switched in the Design panel. This was really helpful as the user didn't have to go back and forth between the MUI Figma and the design they are working on. Instead of copying it and pasting it to their design, they can easily change the property for a different style.
* The MUI plugin allowed me to map out my web application when I started coding the React Application. I knew which buttons, fonts, navigation bar, etc. to use when I build the website making it a lot easier for me.
* Building the React application with MUI helped me layout the frameworks for the web application. There were many pre-build components I used that were easy to implement and customize to how I wanted it.
* Instead of building the web application from plain Javascript, CSS, HTML, and React, I was able to get started much faster when using the components the website provided.
* MUI is pretty easy to learn as it provided examples and documentation on the website that is accessible to everyone.

### Cons
* Using the MUI plugin when designing on Figma was difficult. Some components within the Figma were missing. For example, if you search up Text Field within the Figma there were different fields missing. I wanted to use the outlined text field like shown in the MUI website, but it didn't show in the Figma. 
* Some of the components within the MUI website weren't all shown in the MUI plugin, at least not all the versions of that component. Something that can be improved on is having all the components the websiter provides, including the version and examples, within the Figma. With this suggestion, it will be much easier to use the components the Figma provides into the design.
* When using CSS on some component, the MUI component seem to overwrite it completely unless implemented within that said component. For example, if I wanted to make a Link the color black I would have to either use style or sx within the componet instead of easily setting a className to the link and setting it black in the CSS. This became difficult to implement a group of components to one specific styling.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
