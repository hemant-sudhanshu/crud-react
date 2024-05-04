// Function to validate name
export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  return nameRegex.test(name);
};

// Function to validate email
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Function to validate date (within a range)
export const validateDate = (dateString) => {
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  const tenYearsAgo = new Date(
    currentDate.getFullYear() - 8,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const eighteenYearsAgo = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  return inputDate >= eighteenYearsAgo && inputDate <= tenYearsAgo;
};
