# MyWeb

A Next.js landing page project with app router structure.

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server locally:

```bash
npm run start
```

## GitHub / Production

- The repository uses Next.js app router conventions.
- `package.json` contains install, build, start, and lint scripts.
- A GitHub Actions workflow is configured to install dependencies and build on push and pull request.
- `app-local-backup/` is excluded in `.gitignore` to keep backup files out of source control.
