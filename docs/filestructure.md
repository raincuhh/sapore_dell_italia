# File Structure

This documents the basic structure idea behind the project.

## Explanation of Key Directories:

### in **src/**:

-  **app/**: Contains the main application logic, including the entry point and the routing.
-  **features/**: Organized by features, each containing:
   -  **api/**: For handling API requests related to the feature.
   -  **lib/**: Helper functions and utilities.
   -  **ui/**: UI components specific to the feature.
-  **pages/**: Components representing pages of the application, structured similarly to features.
-  **shared/**: Contains components, hooks, utilities, and types that are shared across the application.
-  **widgets/**: Is organized by folders named after pages. Has components specific to the page the components folder is.
