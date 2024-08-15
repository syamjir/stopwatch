# Stopwatch

A simple React component for a stopwatch with countdown and count-up functionality.

## Features

- **Count Up Mode**: Timer starts from 0 and counts up.
- **Countdown Mode**: Timer counts down from a set time.
- **Start, Stop, and Reset**: Basic controls for managing the timer.
- **Set Countdown Time**: Input fields to set the countdown time.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Import the Stopwatch component into your React app:

   ```jsx
   import Stopwatch from "./Stopwatch";
   ```

2. Use the Stopwatch component in your application:

   ```jsx
   function App() {
     return (
       <div>
         <Stopwatch />
       </div>
     );
   }
   ```

3. Make sure to include `Stopwatch.css` for styling.

## Development

- Start the development server:

  ```bash
  npm start
  ```

- Build the project:

  ```bash
  npm run build
  ```
