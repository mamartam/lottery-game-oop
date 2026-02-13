#Lottery game oop

An interactive JavaScript lottery game using ES6+ Classes. Features private data fields for game integrity, random win generation, and a responsive UI. Developed to practice OOP architecture and DOM manipulation best practices.

## 🎮 How to Play

1. Start the Game: Click the "Start Game" button to generate a new set of lottery squares.
2. Make Your Choice: You will see 10 squares on the screen. One of them is a "Winning Square", but its location is a secret!
3. The Goal: Click on the squares to find the winning one.

❗️ Limits: You have only 3 attempts.
If you click a wrong square, it will turn red, and you'll get a "Try again" message.
If you find the winning square, you win the game!

4. Game Over: If you use all 3 attempts without finding the winner, the game ends, and the board is cleared. You can always click "Start Game" to try your luck again with a new random winning number.

## 📦 Technologies

- JavaScript (ES6+):
  - Classes & OOP: Logic architecture using constructors and methods.
  - Encapsulation: Implementation of private class fields for data security.
  - DOM API: Advanced manipulation, event delegation, and dynamic HTML rendering.
  - Array Methods: Practical use of `.find()`, `.forEach()`, and `.push()` for state management.
- HTML5: Semantic structure and data-attribute usage.
- CSS3: \* Flexbox: Responsive layout for game elements.
  - Transitions & Animations: Smooth UI feedback on hover and state changes.
  - BEM-like naming: Organized and scalable style classes.
- Git & GitHub: Version control with descriptive commit history and project hosting.

## 📚 What I Learned

While developing this project, I significantly improved my understanding of professional JavaScript development:

- Encapsulation in Action: I learned how to use private class fields (#field) to hide sensitive game data. This ensures that the win condition cannot be easily modified from the browser console, making the application more secure.
- Effective State Management: I practiced separating the application's data (the array of objects) from its visual representation (the DOM).
- Event Optimization: Instead of attaching listeners to every single button, I implemented `Event Delegation`. By listening for clicks on a parent container, I reduced memory usage and wrote cleaner code.
- Clean Code Principles: I focused on the Single Responsibility Principle. By breaking down logic into specific functions like `creatingNewArrayOfDatas()` and `rendering()`, I made the codebase easier to read, debug, and maintain.
- Git Workflow: I mastered the process of initializing a repository, managing a clean commit history with descriptive messages, and deploying a live version via GitHub Pages.

## 🚀 How It Can Be Improved?

This project is a solid foundation, and there are several ways to take it to the next level:

- Dynamic Difficulty: Add a feature to choose the number of squares (e.g., 5, 10, or 20) and adjust the number of attempts accordingly.
- Animation & Feedback: Add CSS-keyframe animations for the "win" and "game over" states to make the user experience more engaging.
- Data Persistence: Use localStorage to track the player's high score or win/loss ratio across different sessions.
- Sound Effects: Integrate the HTML5 Audio API to provide auditory feedback for correct and incorrect guesses.
- Shuffle Logic: Currently, squares are rendered in numerical order. Implementing a shuffle algorithm (like Fisher-Yates) would make the game even more unpredictable.

## 🍿 Video

https://github.com/user-attachments/assets/02b79da6-549f-4dd9-9ddd-564797d52988
