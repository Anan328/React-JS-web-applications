```markdown
# Bug Blaster

Bug Blaster is a bug tracking application built with React and useReducer. It allows users to:

- Add new bugs with a title, description, and priority (Low, Medium, High).
- View the list of bugs, sorted by priority (High to Low or Low to High).
- Edit or delete bugs from the list.
- Store bug data in local storage, so even after a page refresh, the bug list remains intact.

## Features

- **Bug Input:** Users can input the title, description, and set priority (Low, Medium, High) for each bug.
- **Bug Listing:** Displays all bugs with their title, description, and priority.
- **Sorting:** Bugs can be sorted by priority, either from High to Low or Low to High.
- **Edit & Delete:** Allows users to edit the title, description, or priority of a bug and delete bugs from the list.
- **Local Storage:** The bug list persists even after a page refresh, using the browser's local storage.
- **useReducer:** State management is handled using React's `useReducer` hook to separate UI components and business logic.

## Installation

To get started with Bug Blaster, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Anan328/React-JS-web-applications.git
   ```

2. Install dependencies:

   ```bash
   cd bug-blaster
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the app in your browser at `http://localhost:3000`.

## How It Works

- **Bug Form:** You can input the title, description, and set the priority of the bug. When the form is submitted, the bug is added to the list.
- **Display Bugs:** The bugs are displayed in a list with the ability to edit or delete each entry.
- **Sorting Bugs:** The list of bugs can be sorted based on their priority (Low to High or High to Low) by clicking a button.
- **Persistent Data:** All bugs are saved in the browser's local storage, which ensures that the list remains intact even after a page refresh.
- **Editing & Deleting:** You can edit the bug information or delete a bug directly from the list.

## Technologies Used

- **React:** Frontend framework for building the UI.
- **useReducer:** Used for state management to separate UI components and logic.
- **Local Storage:** For storing bug data and persisting it even after a page refresh.

## Contributing

Feel free to fork the repository, make changes, and create a pull request if you'd like to contribute.

If you have any suggestions for improvements, feel free to open an issue or create a pull request. Contributions are always welcome!
```
