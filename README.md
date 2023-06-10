# Dog O'Clock
Website: https://elyssamari.github.io/Dog-O-Clock/ 

Dog O'Clock is a Random Dog Generator web application where you can generate new dog photos again and again! Feel free to use it in your own way!

![3](https://github.com/elyssamari/Dog-O-Clock/assets/70128989/eef98800-49e6-42eb-a46a-cf5f30c69998)

# Pros and Cons of MUI

Designing and building the React application with MUI was a fun yet challenging experience that I have learned a lot from.

## Pros
* The 'MUI for Figma' provided a Get Started description, which was really helpful when first being introduced to this plugin. It gave directions on how to style various components and was basically a mini tutorial to those who are new to MUI for Figma.
* The 'MUI for Figma' provided many properties that can be switched in the Design panel. This was really helpful as the user didn't have to go back and forth between the MUI Figma and the design they are working on. Instead of copying it and pasting it to their design, they can easily change the property to a different style.
* The 'MUI for Figma' allowed me to map out my web application when I started coding the React Application. I knew which buttons, fonts, navigation bar, etc. to use when I build the website making it a lot easier for me.
* Building the React application with MUI helped me layout the frameworks for the web application. There were many pre-build components I used that were easy to implement and customize to how I wanted it.
* Instead of building the web application from plain Javascript, CSS, HTML, and React, I was able to get started much faster when using the components the website provided.
* MUI is pretty easy to learn as it provided examples and documentation on the website that is accessible to everyone.

## Cons
* Using the 'MUI for Figma' when designing on Figma was difficult. To insert components, the options were to work in the 'MUI for Figma' file or copy and paste components. 
  * Working on the file itself is not advices as their are many pages and components on the file itself. If you were to share your design, it would still contain the other pages and not the design alone. 
  * Copying and pasting the components were also a hassle. Going back and forth trying to find components and adding them to the design were a bit tedious and bothersome. 
  * Suggestion: Having MUI as a plugin the user can download would be a much better implementations as it will allow everything to be in one spot. The user can just drop and drag where they want the component on their page without having to exit their design.
* Some components within the Figma were missing. For example, if you search up Text Field within the Figma there were different fields missing. Personally, I wanted to use the outlined text field within my design like shown in the MUI website. This component type was not accessible in the Figma, thus I decided to make my own text field. 
* Some of the components within the MUI website weren't all shown in the MUI plugin, at least not all the versions of that component. 
  * Suggestion: Something that can be improved on is having all the components the website provides, including the version and examples, within the Figma. For those who want to use MUI for web building, this suggestion will allow Figma design to building the application much easier.
* When using CSS on some component, the MUI component seem to overwrite it completely unless implemented within that said component. For example, if I wanted to make a Link the color black I would have to either use style or sx within the component instead of easily setting a className to the link and setting it black in the CSS. This became difficult to implement a group of components to one specific styling.

# Enhancements/Interface Changes
* Card Pop-Up:
As an enhancement for Dog O’Clock, including more information about the various types of dog breeds would be a feature we would like to provide. The card pop-up is a feature that can be implemented to contain information about the breed so that the user can not only have a closer look at the photo, but as well as have better idea of the generated dog's breed.

![4](https://github.com/elyssamari/Dog-O-Clock/assets/70128989/270c966d-cabb-4861-bc02-7700031a49bd)

* Menu Pop-Up and More Categories:
Having multiple random generators being offered to the user in one web application. Other random generator can include other animals, countries, music artists, etc. 

![5](https://github.com/elyssamari/Dog-O-Clock/assets/70128989/39c39dad-30a8-4129-a921-85650650444a)

* Responsiveness:
In the future, our web page will be designed and optimized to provide user experience across multiple devices. Providing access to diverse range of devices that people can use, including desktop computers, laptops, tablets, and smartphones, will allow Dog O'Clock to be accessible anywhere at anytime.

![1](https://github.com/elyssamari/Dog-O-Clock/assets/70128989/74edb263-3291-4eaf-9470-0006704d8cf0)
![2](https://github.com/elyssamari/Dog-O-Clock/assets/70128989/b6403651-ce2c-40f3-8e5c-a85405efb75d)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
