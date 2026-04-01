# Personal Finance Tracker 💰

A clean, modern, and professional web application to help you manage your monthly finances. Built with **React**, **TypeScript**, and **Styled Components**.

---

## 🚀 Overview

The **Personal Finance Tracker** is designed to provide users with a quick and visual way to monitor their income and expenses. It features a sleek header with a custom logo, a dynamic summary of your balance, and a powerful input area to record your financial activities.

## ✨ Key Features

-   📅 **Monthly Navigation**: Easily switch between months to see your past and future financial projections.
-   📊 **Financial Summary**: Real-time calculation of total Income, Expenses, and overall Balance.
-   🎨 **Categorized View**: Items are grouped by categories (Food, Rent, Salary, Leisure, etc.) with consistent color-coding.
-   ✅ **Validated Input Area**: Add new items with a multi-field horizontal form that includes:
    -   Category selector (dropdown)
    -   Date picker with timezone fix
    -   Description and value validation
    -   Clear feedback on invalid entries

## 🛠️ Built With

-   **React 19**: Modern UI library for a fast and reactive experience.
-   **TypeScript**: Type-safe development for better maintainability and fewer bugs.
-   **Styled Components**: CSS-in-JS for flexible and scoped styling.

## 📦 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/YujiSeto/personal-finance-tracker.git
    ```
2.  Install NPM packages:
    ```sh
    npm install
    ```
3.  Start the development server:
    ```sh
    npm start
    ```

## 📂 Project Structure

-   `src/components`: UI components (InfoArea, InputArea, TableArea, TableItem, etc.)
-   `src/data`: Dummy data and constants for categories and items.
-   `src/helpers`: Utility functions for date filtering and formatting.
-   `src/types`: TypeScript interfaces for the data models.
-   `src/assets`: Visual assets including the custom project logo.

