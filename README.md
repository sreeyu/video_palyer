# video_player
The Video Player app is a React application that lets you choose from a list of videos and play them in a customizable video player. You can select videos from a menu and watch them using the embedded video player component.

## Features
- Select and play videos from a menu.
- Customizable video player with controls for playback, volume, and fullscreen mode.
- Automatically load and play the selected video when an option is chosen.

## Technologies Used
- React
- HTML5 Video API

## Usage
1. Click on a video option from the menu.
2. The selected video will be loaded and played in the video player.
3. Use the video player controls to play, pause, adjust volume, and enter fullscreen mode.

## Demo
Check out the live demo of the Video Player app [here](https://sreeyu.github.io/video_player/).

## License
This project is open source and available under the [MIT License](https://opensource.org/license/mit/).

# Project Notes
## State lifting in React
State lifting in React refers to the process of managing and sharing state data between multiple components that may not have a direct parent-child relationship in the component tree. This is typically done by moving the state to a common ancestor component (higher in the component tree) and then passing down the state and related functions as props to the components that need access to that state. 

In simpler terms, state lifting allows you to "lift" the state up to a higher-level component so that it can be shared and synchronized across multiple components.

State lifting is often used in scenarios where:
1. **Shared State:** Multiple components need access to the same piece of data(state).
2. **Communication:** Components that are not directly connected need to communicate or share data with each other.
3. **Centralized Control:** You want to centralize the control of a certain piece of state to avoid duplication and ensure consistency.

## Passing functions as props
In React, passing functions as props is a common pattern used to enable communication and interaction between parent and child components. It allows a child component to trigger actions or update state in its parent component, even if the child is nested several levels deep in the component tree.

Key points to remeber:
- The function being passed as a prop should be defined in the parent component.
- The child component receives the function as a prop and can use it as an event handler or perform other actions.
- When calling the function in the child component, use the prop name followed by parentheses.
- This pattern allows child component to modify the parent's state or trigger actions in the parent. 