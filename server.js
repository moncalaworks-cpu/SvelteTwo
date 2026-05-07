import { handler } from './build/handler.js';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(`Starting server from: ${__dirname}`);
console.log(`Build handler loaded from: ./build/handler.js`);

const port = process.env.PORT || 3000;
const host = '0.0.0.0'; // Force bind to all interfaces for GoDaddy compatibility

const requestHandler = (req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  return handler(req, res);
};

const server = http.createServer(requestHandler);

// Listen with explicit host binding
server.listen({ port, host }, () => {
  const actualHost = server.address().address;
  const actualPort = server.address().port;
  console.log(`Server running on ${actualHost}:${actualPort}`);
  console.log(`Port: ${port}, Host config: ${host}`);
});

server.on('error', (err) => {
  console.error('Server error:', err.message);
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully...');
  server.close(() => {
    process.exit(0);
  });
});
