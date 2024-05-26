import http from "http";

const PORT = 8080;
const hostname = "localhost";

const server = http.createServer((request, response) => {
    console.log(request.url);

    if (request.url === '/') {
        response.end("<h1>This is the home page</h1>");
    } 
    else if (request.url === "/home") {
        response.end("<h1>This is the Home page</h1>");
    }
    else if (request.url === "/about") {
        response.end("<h1>This is the About page</h1>");
    }
    else if (request.url === '/contact') {
        response.end("<h1>This is the Contact page</h1>");
    } 
    else if (request.url === '/service') {
        response.end("<h1>This is the Service page</h1>");
    } 
    else {
        response.end("<h1>404 Page Not Found</h1>");
    }
});

server.listen(PORT, hostname, () => {
    console.log(`Hostname: ${hostname} Port: ${PORT}`);
    console.log("Server has started...!");
});
