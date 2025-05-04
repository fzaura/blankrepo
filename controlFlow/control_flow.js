let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "Manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;

    case "manager":
        userCategory = "Manager";
        break;

    case "subscriber":
        userCategory = "Subscriber";
        break;
    
    default:
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory);

let isAuthenticated = true;

let authenticationstatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status: ", authenticationstatus);


let person = "Enrolled Member";
let dietaryServices;

switch (person) {

    case "Employee":
        dietaryServices = "Access granted to dietary services";
        break;

    case "Enrolled Member":
        dietaryServices = "Access granted to dietary services and " 
        + "one-on-one interaction with a dietician";
        break;

    case "Subscriber":
        dietaryServices = "Partial access granted to dietary services";
        break;

    default:
        dietaryServices = "Access denied. Please enroll or subscribe to gain access";
}

console.log(dietaryServices);