# Workspace App
## Description

The workspace is a work in progress that will be a virtual desktop workspace with different 'windows.' You can add as many windows as you want to your screen that serve different purposes. This app could either be a method for focusing on studies or a way to create 'boards' for aesthetic purposes or art references. I would like to add a variety of windows, like a window for taking notes, a window for spotify and/or youtube, a window for images, and so on. The windows are draggable, resizable, and closeable. It's a contained space for many resources.

## Installation
* Clone the repo into your local directory
* cd into your directory and run 'npm i'
* create an .env file in the root directory and set required variables (see 'Environment Variables' section below)
* run 'node server.js' or 'nodemon server.js' and go to localhost:3000 (or whatever port you specified)

## Environment Variables
Currently the only variable being used is the PORT, but there are some specified that I plan to use in the future. don't use anything in parentheses.
```
PORT=3000
ENVIRONMENT=LOCAL (can be LOCAL or PRODUCTION)
MONGODB_URI=mongodb://MONGO-URI
SESSION_SECRET= any session secret