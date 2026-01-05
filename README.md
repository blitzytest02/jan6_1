# jan6_1

Node.js Express Tutorial Server

A simple Node.js tutorial project demonstrating the Express.js web framework with two greeting endpoints.

## Prerequisites

- Node.js 20.x or higher (tested with Node.js 20.19.6)
- npm 11.x or higher

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd jan6_1

# Install dependencies
npm install
```

## Usage

Start the server:

```bash
npm start
```

The server will start and display:
```
Server running on port 3000
```

## API Endpoints

### GET /hello

Returns a "Hello world" greeting.

**Request:**
```bash
curl http://localhost:3000/hello
```

**Response:**
```
Hello world
```

### GET /evening

Returns a "Good evening" greeting.

**Request:**
```bash
curl http://localhost:3000/evening
```

**Response:**
```
Good evening
```

## Testing

Run the test suite:

```bash
npm test
```

## License

ISC
