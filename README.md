# React Native FlatList Performance Optimization

This repository demonstrates a common performance issue in React Native's FlatList component and its solution.  Inefficient key extraction, improper separator handling, and lack of virtualization can significantly impact rendering time, especially with large datasets. The `FlatListBug.js` file showcases the problematic code, while `FlatListBugSolution.js` provides an optimized version.

## Problem
The initial example uses a simple but inefficient `keyExtractor` which causes unnecessary re-renders. The `ItemSeparatorComponent` is also not optimized.  Large lists are rendered without virtualization, leading to very slow initial render times.

## Solution
The solution file demonstrates several improvements.  The `keyExtractor` is optimized to use a unique and stable identifier, the `ItemSeparatorComponent` is improved, and virtualization techniques are used for better performance. This significantly improves rendering performance, especially for large lists.

## How to run
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the app: `npx react-native run-android` or `npx react-native run-ios`