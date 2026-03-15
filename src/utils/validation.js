export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
    return emailRegex.test(email);
};

export const validatePassword = (password) => {
    const passwordRegex = /^[A-Za-z0-9]{3,}$/;
    return passwordRegex.test(password);
};

export const validateUsername = (name) => {
    return name.length >= 3;
};

export const validateStudent = (student) => {
    const { name, age, address, contact } = student;
    
    if (!name || name.trim() === "") {
        return { valid: false, message: "Student name cannot be empty." };
    }
    if (!age || age.trim() === "" || isNaN(age)) {
        return { valid: false, message: "Student age must be a valid number." };
    }
    if (!address || address.trim() === "") {
        return { valid: false, message: "Student address cannot be empty." };
    }
    if (!contact || contact.trim() === "" || isNaN(contact) || contact.length < 10) {
        return { valid: false, message: "Student contact number is invalid." };
    }
    
    return { valid: true };
};
