# 🔐 Shared `.env` Secrets File (Part Two - Secrets Management Assignment)

This Node.js project demonstrates an **improper but common practice**: using a `.env` file to store secrets but **accidentally committing it to version control**.

> ⚠️ This is for **educational purposes only** exposing secrets like this in real world projects is a security risk.

---

## 📌 Purpose

- Show what happens when a secrets file (like `.env`) is pushed to GitHub.
- Demonstrate how using environment variables is a good practice but not if you share the file!
- Understand why `.env` files should be added to `.gitignore`.

---

## ⚙️ How It Works

- Secrets such as the `API_KEY` and `PORT` are stored in a `.env` file.
- The app uses the `dotenv` package to load them.
- The `.env` file is **intentionally included** in this repository.
- Visit the `/secret` route to view the loaded secret.

---

## 🛠 Setup Instructions

- Clone the repository:

```bash
   git clone https://github.com/GonzalezEzequiel-FS-1/SAD_Three_Hardcoded_Secrets_P2.git
   cd SAD_Three_Hardcoded_Secrets_P2
```

- Install dependencies

```bash
npm install
Run the app:
node app.js
```

- Open your browser to:
  <http://localhost:3002/secret>

## 📄 Example .env File (included in repo)

```env
PORT=3002
API_KEY=stillNotASafePlace123
```

🔍 Example Output

```json
{
  "success": true,
  "message": "This secret is coming from a shared .env file (bad practice)",
  "API_KEY": "stillNotASafePlace123"
}
```

## 🚨 Why This Is Bad

While using .env is better than hard coding secrets, pushing the file to GitHub defeats the purpose:

Anyone can see the .env file and access your sensitive data.
If this was a production API key, it could be abused or stolen.
GitHub may flag the file or warn you after committing it.

## ✅ What's Next

### In Part Three, we will

1. Store secrets in a .env file
2. Add .env to .gitignore
3. Require users to provide their own .env file the correct approach

### Note

This project is part of a multi-step assignment demonstrating good and bad secrets management practices.
