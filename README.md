# Hussein Itani — Personal Portfolio

Built with React. Deployed to GitHub Pages at [husseinitani.me](https://husseinitani.me)

## 🚀 Setup & Deploy

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm start
```

### 3. Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev
npm run deploy
```

### 4. Connect your domain (Namecheap → GitHub Pages)
In **Namecheap DNS**, add these A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
And a CNAME record:
```
www → yourusername.github.io
```

In **GitHub repo Settings → Pages**, set custom domain to `husseinitani.me` and enable HTTPS.

## 📁 Structure
```
src/
  App.jsx       ← entire site (sections: Hero, Engineering, Business, Leadership, Skills, Contact)
public/
  index.html    ← HTML shell
```

## ✏️ Customizing
- Edit project cards in `ENGINEERING_PROJECTS` array
- Edit timeline in `TIMELINE` array
- Swap contact email/phone in `Contact` section
- Replace color `#C8522A` globally to change accent color
