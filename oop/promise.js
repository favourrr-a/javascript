
/*const promise = new Promise((resolve, reject) => {

    let fileLoaded = false;

    if (fileLoaded){
        resolve("file loaded")
    }
    else{
        reject("file not loaded")
    }
} );

promise.then(doSth => console.log(doSth)).catch(error => console.log(error))

//loading a file is an asynchronous process
*/


const promise = new Promise(resolve => {
    setTimeout(resolve, 5000);
})

promise.then(() => console.log("tahnks for waiting"));

//you can name a promise whatever you want


//other examples
/*
// Function that returns a Promise simulating an asynchronous operation (fetching data)
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate fetching data after a delay
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        const data = "Some important data!";
        resolve(data); // Operation succeeded
      } else {
        const reason = "Failed to fetch data.";
        reject(reason); // Operation failed
      }
    }, 2000); // Simulating a 2-second delay
  });
}

// Using the Promise
fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((reason) => {
    console.error("Error:", reason);
  });
*/

/*
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        const userData = { id: userId, username: "john_doe" };
        resolve(userData); // Operation succeeded
      } else {
        const reason = "Failed to fetch user data.";
        reject(reason); // Operation failed
      }
    }, 2000); // Simulating a 2-second delay
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        const posts = ["Post 1", "Post 2", "Post 3"];
        resolve(posts); // Operation succeeded
      } else {
        const reason = "Failed to fetch posts.";
        reject(reason); // Operation failed
      }
    }, 2000); // Simulating a 2-second delay
  });
}

// Using Promises for sequential asynchronous operations
fetchUserData(123)
  .then((userData) => {
    console.log("User data received:", userData);
    return fetchPosts(userData.id); // Return another Promise for chaining
  })
  .then((posts) => {
    console.log("User posts received:", posts);
  })
  .catch((reason) => {
    console.error("Error:", reason);
  });
*/
