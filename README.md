
# Svelte Avataaars Generator

Svelte Avataaars Generator is a reimplementation of the original Avataaars generator, originally developed by Fang-Pen Lin in React and designed by Pablo Stanley. This version is built with [Svelte](https://svelte.dev/) and TypeScript, offering a modern and lightweight alternative to the React-based implementation.

You can check out the original project here: [Avataaars Generator](http://getavataaars.com).

## Features

- **Avatar customization**: Easily generate avatars with customizable options.
- **Svelte-based**: Built with Svelte for a highly performant and reactive user experience.
- **TypeScript support**: Fully typed for better developer experience and safer code.
- **Web-based app**: Run the app locally or deploy it to generate avatars on the web.

## Getting Started

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) installed.
- You'll also need [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/).

### Running the App Locally

1. Clone the repository:

    ```bash
    git clone <your-repo-url>
    cd svelte-avataaars-generator
    ```

2. Install the dependencies:

    ```bash
    yarn install
    # or
    npm install
    ```

3. Start the development server:

    ```bash
    yarn dev
    # or
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5000` to see the app running.


## React Alternative

The original project provided a React component to easily integrate avatars into React applications. While this reimplementation focuses on Svelte, you can integrate the avatars generated from this app into any frontend project by exporting the avatars as SVGs.

## License

This project is licensed under the MIT License, the same as the original [Avataaars Generator](https://github.com/fangpenlin/avataaars-generator).

## Version

`0.0.2` Implement all clothing alternatives to match the original Avataaars Generator
`0.0.3x` Fix exports on index.ts to completely implement Avataaars style selection
