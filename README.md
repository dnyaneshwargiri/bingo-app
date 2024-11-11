<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Live Demo</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A simple and interactive Bingo game built with React, TypeScript, and Zustand for state management, offering an engaging experience with a customizable bingo card. The app allows users to play Bingo with predefined phrases, dynamically generate bingo cards.


### Built With

Below are frameworks/ libraries used to bootstrap this project.

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![Zustand](https://img.shields.io/badge/zustand-%23404d59.svg?style=for-the-badge&logo=zustand&logoColor=%2361DAFB)
- ![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)
- ![Pnpm](https://img.shields.io/badge/pnpm-%232C8EBB.svg?style=for-the-badge&logo=pnpm&logoColor=white)
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![Jest](https://img.shields.io/badge/jest-%23C63D14.svg?style=for-the-badge&logo=jest&logoColor=%23FFFFFF)

## Getting Started

Below are instructions on setting up your project locally.

### Prerequisites

- Node 21
- Yarn 8.15.4
- Typescript": ^5.6.2

### Installation

1. Clone the repo
   ```sh
    git clone https://github.com/dnyaneshwargiri/bingo-app.git
   ```
2. Install NPM packages
   ```sh
    pnpm install/ yarn install
   ``` 
3. Compile bingo app
    ```sh
    pnpm build
    ```
4. Run 
   ```sh
   pnpm start /* production */
   pnpm dev /* dev mode */
   ```

## Test and Lint

Run test cases

```sh
pnpm test
```

Check for linting Warnings, Error

```sh
pnpm lint
```

## To run application via Docker Image

1. Build application for production
   ```sh
     pnpm build
   ```
2. Build Docker image
   ```sh
     chmod +x ./docker.build.sh
   ```
    ```sh
     ./docker.build.sh
   ```
3. Run Docker image
   ```sh
     docker run -p 4000:4000 -p bingo-app
   ```

Please be informed commits are intentionly not squashed.

## Open issue
  None
