// localStorage:
// localStorage is a web storage mechanism that allows you to store key-value pairs in the client's web browser with no expiration time. 


// This means that the data stored using localStorage persists even after the browser is closed and reopened. 

// It's commonly used to store data that needs to be remembered across multiple sessions.


// Key features of localStorage:

// Data is stored in a key-value format.

// The data is shared among all tabs and windows of the same origin (same protocol, domain, and port).

// Data is stored as strings, so you need to manually convert it if you want to store other data types.


// You can store a significant amount of data (usually around 5-10 MB, depending on the browser).

// sessionStorage:

// sessionStorage is another web storage mechanism that also allows you to store key-value pairs in the client's web browser, but with a key difference: the data stored using sessionStorage is available only for the duration of the page session. A page session lasts as long as the browser is open and the specific tab or window is not closed.

// Key features of sessionStorage:

// Data is stored in a key-value format.

// Like localStorage, data is shared among all tabs and windows of the same origin.

// The data is available only for the current browser session. If the tab or window is closed, the data is cleared.

// As with localStorage, data is stored as strings.

// Both localStorage and sessionStorage are accessed using the window object, so you can use localStorage.setItem(key, value) and sessionStorage.setItem(key, value) to set data, and localStorage.getItem(key) and sessionStorage.getItem(key) to retrieve data.
//  You can also use removeItem(key) to remove a specific key-value pair and clear() to remove all key-value pairs.