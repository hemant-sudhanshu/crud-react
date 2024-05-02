// Message constants
export const FIRST_NAME_REQUIRED =
  "First Name is required and should be at least 3 characters long.";
export const LAST_NAME_REQUIRED =
  "Last Name is required and should be at least 3 characters long.";
export const INVALID_EMAIL = "Please enter a valid email address.";
export const INVALID_DATE = "Please select a valid date.";
export const SELECT_CLASS = "Please select student's class.";
export const FILL_REQUIRED_INPUTS = "Please fill the required inputs.";

// Regular expressions for input validation
export const nameRegex = /^[A-Za-z'-]+$/; // Matches alphabetical characters, hyphens, and apostrophes
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Matches email addresses
export const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Matches date strings in the format YYYY-MM-DD
