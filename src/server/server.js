import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// no __filename or __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __src_dirname = path.dirname(__dirname);
const __project_dirname = path.dirname(__src_dirname);

app.use(
  '/assets',
  express.static(path.join(__project_dirname, 'dist', 'app', 'assets'))
);

app.use(express.static(path.join(__project_dirname, 'dist', 'app')));

app.get('/', (req, res) => {
  console.log('index sent');
  res.sendFile(path.join(__project_dirname, 'dist', 'app', 'index.html'));
});

const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
