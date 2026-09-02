# Organic Reaction Practice

A small React + TypeScript pilot app for practicing SN1, SN2, E1, and E2 reactions. It has no accounts, database, or external integrations.

## Run it locally

1. Install the current **Node.js LTS** release from [nodejs.org](https://nodejs.org/) if it is not already installed.
2. Open a terminal in this folder.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the address shown in the terminal (usually `http://localhost:5173`).

To stop the app, return to the terminal and press `Ctrl + C`.

## Edit or add questions

Open `src/data/questions.ts`. Each question is one clearly labeled object. To add one, copy an existing object and update:

- `id`: a unique number
- `topic`: `SN1`, `SN2`, `E1`, or `E2`
- `prompt`: the question text
- `choices`: four answer choices (the first is index 0)
- `correctIndex`: the correct choice index, from 0 to 3
- `explanation`: why the answer is correct

After saving, the local development page will update automatically.

## Check a production build

```bash
npm run build
```

This creates an optimized version in the `dist` folder.
