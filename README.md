# LSM Fronted

### Setup instruction

1. Clone the project

```
git clone https://github.com/bha8081/LMS-Frontend.git
```

2. Move into the directory

```
cd LMS-Frontend
```

3. install dependencies

```
npm i
```

4. run the server

```
npm run dev
```

### Setup instruction for tailwind
5. install the Tailwind

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
6. After install the tailwind go to the tailwind css file and save the content part.

```
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

7. Then go to the index.css file and save the Tailwind directives in your css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

8. After complete this process start your project

```
npm run dev
```

### Adding plugins and dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort esline

1. Install simple import sore

```
  npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.cjs`

```
  'simple-import-sort/imports': 'error'
```

3. add simple-import sort plugin in `.eslint.cjs`

```
  plugins: [..., 'simple-import-sort']
```

4. To enable auto import sort on file save in vscode

  -Open `settings.json`
 ```
    "editor.codeActionsOnSave": {
    "source.organizeImports": true,
  },
 ```