# jan6_1

A simple Node.js Express tutorial server demonstrating basic HTTP endpoints. This project serves as an educational example for setting up an Express.js web server with multiple route handlers.

## Description

This tutorial project showcases how to:
- Set up an Express.js web server
- Define multiple HTTP GET endpoints
- Handle HTTP requests and send text responses
- Configure proper server port binding

The server exposes two endpoints:
- `/hello` - Returns "Hello world"
- `/evening` - Returns "Good evening"

## Prerequisites

Before running this project, ensure you have the following installed:

| Requirement | Version | Notes |
|-------------|---------|-------|
| Node.js | 24.x (LTS Krypton) | Check with `node --version` |
| npm | 11.x | Bundled with Node.js 24.x, check with `npm --version` |

### Verifying Prerequisites

```bash
# Check Node.js version
node --version
# Expected output: v24.x.x

# Check npm version
npm --version
# Expected output: 11.x.x
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd jan6_1
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   This will install Express.js and all required dependencies.

## Usage

### Starting the Server

Start the server using npm:

```bash
npm start
```

The server will start and listen on port 3000. You should see:

```
Server running on port 3000
```

### Environment Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | The port number the server listens on |

To use a custom port:

```bash
PORT=8080 npm start
```

## API Endpoints

### GET /hello

Returns the greeting "Hello world".

**Request:**
```
GET /hello HTTP/1.1
Host: localhost:3000
```

**Response:**
- **Status Code:** 200 OK
- **Content-Type:** text/plain
- **Body:** `Hello world`

### GET /evening

Returns the greeting "Good evening".

**Request:**
```
GET /evening HTTP/1.1
Host: localhost:3000
```

**Response:**
- **Status Code:** 200 OK
- **Content-Type:** text/plain
- **Body:** `Good evening`

## Testing

### Using curl

Test the `/hello` endpoint:

```bash
curl http://localhost:3000/hello
```

Expected output:
```
Hello world
```

Test the `/evening` endpoint:

```bash
curl http://localhost:3000/evening
```

Expected output:
```
Good evening
```

### Using a Web Browser

Simply navigate to the following URLs in your web browser:

- [http://localhost:3000/hello](http://localhost:3000/hello)
- [http://localhost:3000/evening](http://localhost:3000/evening)

### Testing Non-Existent Routes

```bash
curl http://localhost:3000/nonexistent
```

This will return a 404 Not Found response (Express default behavior).

## Project Structure

```
jan6_1/
├── .gitignore          # Git exclusion patterns
├── .nvmrc              # Node.js version specification
├── index.js            # Express server application
├── package.json        # Project manifest and dependencies
├── package-lock.json   # Dependency lock file
├── README.md           # This documentation file
└── node_modules/       # Installed dependencies (auto-generated)
```

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.2.1 | Web framework for Node.js |

## License

ISC License

Copyright (c) 2024

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
