
# Harvey Randall - Alevel Project 2021
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9419d194c3d64f5f93f88af1a2b8739a)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Gerald12344/Rovolution&amp;utm_campaign=Badge_Grade)

## Project Details
This is a project written in javascript and typescript, using react, nextjs, expressjs, nodejs, babel, threejs and cannon-es. The aim is to create a working flight simulator inside a web browser which works on lots of different devices including mobile.

## Current Cycle : Cycle 4 -  Working Planes
### Current Check List:
- [ ] Add basic cannon-es to the three-js world with gravity
- [ ] Fix the .glb handler so it works in nextjs
- [x] Create a class system for handling all aspects of the plane
- [x] Use an existing plane model and split the propeller away from the model
- [x] Cut out holes in the wings, vertical stabilizer and on the elevators
- [x] Add basic velocity to the plane using keyboard control
- [x] Fix the camera to the tail of the plane and update each frame with render handler
- [ ] Setup the wheels as cannon-es wheels so the plane can roll
- [ ] Add basic friction to the wheels
- [x] Make the control surfaces a separate .glb file
- [x] Position and animate the control surface depending on keyboard input

## Building and running
This project is a mix of Javascript and Tyescript, to run the project in its current state simply use:
```bash
npm start
```
If you want to run the client app without the serverside functionality and Web sockets use
