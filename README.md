# 🍯 Webgrower
## Another collective blog about web-development

Built with [Sapper](https://github.com/sveltejs/sapper) and [Svelte](https://github.com/sveltejs/svelte).

## ✨ Getting started

```bash
git clone git@github.com:webgrower/webgrower.git
cd webgrower
yarn # or you may want to use npm install
PORT=3000 yarn dev # you may use any port you like and that is not busy
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

## 📝 Writing posts

All blog content is stored in `content/posts`. We use [Markdown](https://daringfireball.net/projects/markdown/) for our posts. Everything between the start of the post and the `<!-- more -->` tag becomes the article's "excerpt". Frontmatter properties supported are `author`, `title` and `date`. You can find authors list [here](https://github.com/webgrower/webgrower/blob/master/src/dicts/authors.js).

## 🚀 Deploy

Deploy is automatic through [Now.sh](https://zeit.co/). You don't need to write additional commands here. As soon as your PR is merged to the `master` branch, Now.sh will automatically deploy it.

## 🐛 Bugs and feedback

Webgrower is in early development, there may be bugs and 'features'. You may leave your issues in our [tracker](https://github.com/webgrower/webgrower/issues).
