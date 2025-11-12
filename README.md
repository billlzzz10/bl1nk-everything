# AI Memory Proxy Documentation

Static documentation website for the AI Memory Proxy project, built with Tailwind CSS and served via Nginx.

## 📁 Project Structure

```
.
├── src/
│   ├── index.html      # Main documentation page
│   ├── input.css       # Tailwind CSS source
│   └── output.css      # Compiled CSS (generated)
├── tests/
│   └── documentation.spec.js  # Playwright tests
├── docker-compose.yml  # Docker Compose configuration
├── Dockerfile          # Multi-stage Docker build
├── nginx.conf          # Nginx server configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Node.js dependencies and scripts
```

## 🚀 Quick Start

### Option 1: Docker (Recommended)

**Prerequisites:**
- Docker
- Docker Compose

**Steps:**

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Build and run:**
   ```bash
   docker-compose up --build
   ```

3. **View the documentation:**
   Open your browser and navigate to `http://localhost:8080`

4. **Stop the server:**
   ```bash
   docker-compose down
   ```

### Option 2: Local Development

**Prerequisites:**
- Node.js 22 or higher
- npm

**Steps:**

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build CSS:**
   ```bash
   npm run build:css
   ```

3. **Watch for changes (development):**
   ```bash
   npm run watch:css
   ```

4. **Serve the files:**
   Use any static file server, for example:
   ```bash
   npx serve src
   ```

## 🧪 Testing

Run Playwright tests to verify functionality:

```bash
# Make sure the server is running first
docker-compose up -d

# Run tests
npm test
```

## 🛠️ Development

### Available Scripts

- `npm run build:css` - Build and minify Tailwind CSS
- `npm run watch:css` - Watch for changes and rebuild CSS automatically
- `npm test` - Run Playwright tests

### Making Changes

1. Edit HTML in `src/index.html`
2. Modify styles in `src/input.css` or `tailwind.config.js`
3. Run `npm run build:css` to compile changes
4. Refresh your browser to see updates

### Styling System

This project uses **Tailwind CSS** with custom configuration:

- **Colors**: Custom brand colors defined in `tailwind.config.js`
- **Components**: Reusable component classes in `src/input.css`
- **Utilities**: Tailwind utility classes used throughout HTML

## 📝 License

MIT License
