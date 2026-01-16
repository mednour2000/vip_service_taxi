# Fix CORS Issue - Language Files Not Loading

## Problem

You're seeing CORS errors because you're opening the HTML file directly from the file system (`file://` protocol). Browsers block local file access for security reasons.

## Solution: Use a Local Server

You need to serve the website through a local web server instead of opening the HTML file directly.

### Option 1: Python (Easiest)

1. **Open Terminal/Command Prompt**
2. **Navigate to the project folder:**
   ```bash
   cd C:\Users\Msi\vip_service_taxi\frontend
   ```

3. **Start a local server:**

   **Python 3:**
   ```bash
   python -m http.server 8000
   ```

   **Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

4. **Open your browser and go to:**
   ```
   http://localhost:8000
   ```

### Option 2: Node.js (if you have it installed)

1. **Install http-server globally:**
   ```bash
   npm install -g http-server
   ```

2. **Navigate to the frontend folder:**
   ```bash
   cd C:\Users\Msi\vip_service_taxi\frontend
   ```

3. **Start the server:**
   ```bash
   http-server
   ```

4. **Open your browser and go to:**
   ```
   http://localhost:8080
   ```

### Option 3: VS Code Live Server Extension

1. **Install "Live Server" extension** in VS Code
2. **Right-click on `index.html`**
3. **Select "Open with Live Server"**

### Option 4: PHP (if you have it installed)

```bash
cd C:\Users\Msi\vip_service_taxi\frontend
php -S localhost:8000
```

## Why This Happens

- Browsers block `file://` protocol from making fetch requests
- This is a security feature to prevent malicious websites from accessing local files
- Using `http://localhost` or `http://127.0.0.1` allows the browser to load local files properly

## Quick Test

After starting a server, you should see:
- ✅ No CORS errors in the console
- ✅ Language files load successfully
- ✅ Language switching works
- ✅ All translations appear correctly

## Recommended Solution

**Use Python's built-in server** - it's the simplest and doesn't require any additional installations if you have Python.
