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