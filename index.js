// console.log(`Hello World!`);

// console.log(15+27);

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// // const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello World!\n');
// // });

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write('<p>Hey you! Look at me teapotpicks...</p>');
//     res.end();
//   });

// server.listen(port, hostname, () => {
//   console.log(`Server is running on http://${hostname}:${port}/`);
// });

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Default route
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World!</h1><p>This is the default route.</p>');
  }
  // Route for /about
  else if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>About Us</h1><p>This is an about page.</p>');
  }
  // Route for /contact
  else if (req.url === '/contact') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Contact Us</h1><p>You can contact us at contact@example.com</p>');
  }
  // Dynamic Content
  else if (req.url.startsWith('/greet')) {
    const url = new URL(req.url, `http://${hostname}`);
    const name = url.searchParams.get('name') || 'Guest';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Hello, ${name}!</h1>`);
  // Jason respond
  }
  else if (req.url === '/data') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const data = { message: 'This is some JSON data!', success: true };
    res.end(JSON.stringify(data));
  }
  // Handle 404 for other routes
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>404 Not Found</h1><p>Sorry, the page you are looking for does not exist.</p>');
  }
  // REMOVED
  
});

//Listen to host's port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




