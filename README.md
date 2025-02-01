# Image Search Engine

This is a simple Image Search Engine web application that allows users to search for images using the Unsplash API. Users can enter a search query, view images, and load more results.

## Features
- Search for images based on user input.
- Fetch images from the Unsplash API.
- Display search results in a grid layout.
- Show more results with a "Show More" button.

## Technologies Used
- HTML
- CSS
- JavaScript
- Unsplash API

## Setup and Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ashay-patil/Image-Search-Engine.git
   ```

2. Navigate to the project folder:
   ```sh
   cd Image-Search-Engine
   ```

3. Open `index.html` in a web browser.

## How to Use
1. Enter a search query in the input box.
2. Click the "Search" button to fetch images.
3. Click "Show More" to load additional results.

## API Key Setup
To use the Unsplash API, you need an access key:

1. Go to [Unsplash Developers](https://unsplash.com/developers) and create an account.
2. Register an application to get an API access key.
3. Replace `.....Enter Your Access Id Here .....` in `script.js` with your Unsplash Access Id:
   ```javascript
   const client_id = "YOUR_ACCESS_ID";
   ```

## Project Structure
```
image-search-engine/
│── index.html  # Main HTML file
│── style.css   # Styling file
│── script.js   # JavaScript file
│── README.md   # Documentation
```

## Acknowledgments
- [Unsplash API](https://unsplash.com/developers) for providing free images.

