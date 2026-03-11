# Docket

A professional, minimalist note-taking application built with **React 19**, **TypeScript**, and **Redux Toolkit**. Docket is designed for users who value a clean interface, efficient organization, and **reliable code through automated testing**.

---

## Core Features

* **Real-time Search**: Instant filtering of notes based on titles and content using a centralized Redux state.
* **Featured System**: Ability to prioritize important notes with a custom-designed star toggle system.
* **Dynamic Color Themes**: Personalize each note with a curated color palette for better visual categorization.
* **Persistent Storage**: All notes and application states are synchronized with Local Storage to ensure data retention.
* **Responsive Modal Architecture**: A backdrop-blurred, animated modal for editing note details without losing context.
* **Automated Testing Suite**: Comprehensive Unit and Integration tests to ensure features like adding and deleting notes work flawlessly.

---

## Technical Stack

* **Frontend Library**: React 19
* **State Management**: Redux Toolkit (RTK)
* **Styling Framework**: Tailwind CSS
* **Icons**: Lucide React
* **Type Safety**: TypeScript
* **Build Tool**: Vite
* **Testing Framework**: Vitest & React Testing Library

---

## Getting Started

### Prerequisites

* Node.js (Version 16.0 or higher)
* npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone [https://github.com/your-username/docket.git](https://github.com/your-username/docket.git)
    ```

2. Navigate to the project directory:
    ```bash
    cd docket
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. **Run Tests**:
    ```bash
    npm run test
    ```

5. Run the development server:
    ```bash
    npm run dev
    ```

---

## Project Structure
src/
├── store/            # Redux store and middleware configuration
├── features/       # Redux slices (notes, search, and UI states)
├── components/     # Reusable UI components (SearchInput, NoteCard, Modal)
├── hooks/          # Typed Redux hooks for TypeScript support
├── test/          # Unit and Integration tests (Vitest + RTL)
└── main.tsx        # Application entry point

---

## Design & Quality Principles

* **Simplicity**: No unnecessary UI elements; focus solely on the user's content.
* **Reliability**: Every core feature (Add, Delete, Render) is backed by **Vitest** to prevent regressions.
* **Responsiveness**: Fluid layout transitions and interactive elements that adapt to user input.
* **Accessibility**: Clear visual indicators for active states and focus-within effects on input fields, verified through **Testing Library** queries.

---