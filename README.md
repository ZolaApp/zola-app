# Zola App

[Zola App](https://github.com/ZolaApp/zola-app) is the source code for Zola’s dashboard, [https://app.zola.ink](https://app.zola.ink).

# Meta

* __Production:__ [https://app.zola.ink](https://app.zola.ink)
* __Staging:__ [https://zola-app-preprod.herokuapp.com/](http://zola-app-preprod.herokuapp.com/)
* __Github:__ [https://github.com/ZolaApp/zola-app](https://github.com/ZolaApp/zola-app)
* __Deploys:__ merged PRs to `develop` are automatically deployed to staging; merged PRs from `develop` to `master` are automatically deployed to production.

# Getting started

Copy the `.env.dist` file to `.env` and run:

```bash
$ npm install
$ npm run dev

✨Zola app running on port 3000. ✨
```

You can use a custom port using the `PORT` environment variable.

# License

BSD-3 License. See [LICENSE](LICENSE).
