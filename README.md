# ecs-site

This is a personal website I built for fun as a React Application. The site is not live anymore, but was previously hosted at https://shreve.dev/, which has been updated as of 12/20/2023.

## Overview

In one sentence, this is React application deployed using [GitHub Pages](https://pages.github.com/), bootstrapped with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) using UI components from [Material UI](https://material-ui.com/).

Previously I had a website that used a simple [Bootstrap](https://getbootstrap.com/) template that I downloaded from one of those _Top 10 Free Bootstrap Templates_ sites, but I felt like practicing [React](https://reactjs.org/).

## Development Steps

These are the main steps I took to create and deploy this application.

### Setup

The first thing I did was create a new repository on GitHub, and clone the repository locally. When I work on projects for myself I always gave GitHub initialize the repo with a `README.md` file, that way the repo isn't empty.

```{bash}
cd
git clone <new repository clone url>
```

Next I used [Create React App](https://create-react-app.dev/docs/adding-typescript/) to make a boilerplate React application using Typescript. Why Typescript? Mostly because that's what we use at work and I find that I write far fewer bugs if the language I'm using makes me think about types. Why did I name the app `client`? I honestly don't know, it was the first thing that came to mind and it seemed fine to put frontend code in a directory named `client`.

```{bash}
cd <repositoryname>
yarn create react-app client --template typescript
yarn add typescript @types/node @types/react @types/react-dom @types/jest
cd client
yarn start
```

Okay, so, at this point if everything worked perfectly then the basic React app will start up and be accessible at `http://localhost:3000/`. But when does everything work perfectly? The Create React App Documentation is super helpful for getting the basic app set up. 

Here's a few things I Googled up to this point:

- "basic typescript react setup"
- "yarn vs npm"
- "react project naming conventions"
- "Couldn't find a package.json file in"
- ...

Great so let's assume we have the basic React app working. What's next? Well I want the site to look nice, I've done minimal frontend development from scratch, and making something look good is really _really_ hard. That's where [Material UI](https://material-ui.com/) comes in! It provides a ton of great out of the box React components with good documentation. So next I followed the [Installation Steps](https://material-ui.com/getting-started/installation/) on the Material UI site.

```{bash}
yarn add @material-ui/core
yarn add @material-ui/icons
```

### Customize the App

Alright so now we have a basic React app, and we have some packages installed that we can import standardized components from. Now it's time to start building some functionality. Let's just replace the basic homepage with our own. To start I replaced the contents of `client/src/App.tsx` with:

```{javascript}
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      fontSize: "large",
      paddingBottom: "25px",
    },
    name: {
      flexGrow: 1,
      marginTop: "10px",
      fontWeight: "bold",
    },
  }),
);

export default function LandingHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h2" className={classes.name}>
          Your Name Here
        </Typography>
      </Container>
    </div>
  );
}
```

At this point when we go to `https://localhost:3000` we should see a page with a white background and large black text that says "Your Name Here". We used 2 components from Material UI to accomplish this, the [Container](https://material-ui.com/components/container/) and [Typography](https://material-ui.com/components/typography/) components. From here we can continue to add components and functionality.

Some things that I Googled up to this point:

- "typescript react import conventions"
- "flex grow 1 css"
- "flex box basics"
- "css padding vs margin"
- "react material ui add custom style"
- ...

### Deploy

Great! So now we spent some time adding components and functionality and the app looks good locally. Next we want to put it on the internet! There are a ton of options here, but the simplest and most lightweight one I found is GitHub Pages. Configuring GitHub Pages and the React app to play nicely together does take a bit of tweaking though.

Assuming we've been working for awhile there should be a number of git commits in the local `master` branch. (Or maybe you were better than me and used a `dev` branch and then merged it into `master`) either way let's push the `master` branch.

```{bash}
git push -u origin master
```

Create React App has great documentation on [how to deploy using GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages). I distilled the basic steps I took below. Let's first assume we DON'T have a custom domain we want to use, and we'll let GitHub pages do everything.

First we need to add a homepage to our `package.json`:

```{json}
"homepage": "https://<username>.github.io/<repositoryname>"
```

Next we install the `gh-pages` npm package:

```{bash}
cd ~/<repositoryname>/client
yarn add gh-pages
```

Then we want to update our `package.json` with `predeploy` and `build` scripts:

```{json}
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

Okay great, now let's actually deploy it:

```{bash}
yarn deploy
```

Now we can go to the repository settings page (`https://github.com/<username>/<repositoryname>/settings`) and scroll down to the GitHub Pages section, where we should see a message stating:
> Your site is published at `https://<username>.github.io/<repositoryname>/`

Click the link and see the site live!

Okay that's cool, but what if we have a slick custom domain that we want to use? GitHub Pages has [some documentation](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site) about how to do this. Here's the basic steps:

- Configure DNS records for your domain to point at GitHub Pages (this will will be different depending on which provider you used to buy your domain, Google is your friend here). We should end up with something that looks this:

| Name  | Type  | TTL   | Data |
| ------|:-----:|:-----:|:----------------|
| @     | A     | 1h    | 185.199.111.153 |

- Now let's check and make sure that worked.

```{bash}
dig mycustomdomain.com +noall +answer
```

- Should return a result that looks something like: 

```{bash}
; <<>> DiG 9.10.6 <<>> mycustomdomain.com +noall +answer
;; global options: +cmd
mycustomdomain.com.	3570	IN	A	185.199.111.153
```

- Cool so the DNS record for our custom domain is now pointing at the GitHub Pages IP address. Let's tell GitHub Pages to use our custom domain.

- First we need to update the homepage in our `package.json`:

```{json}
"homepage": "https://mycustomdomain.com"
```

- Next let's add a `CNAME` file to our project

```{bash}
touch public/CNAME
echo "mycustomdomain.com" >> public/CNAME
```

- Finally let's redeploy our app with the new configuration

```{bash}
yarn deploy
```

Now we can go back to the settings page for this repository in GitHub, and scroll down to the GitHub Pages section and we should see that it has updated with our custom domain.

Some things I Googled during this section:

- "what is a CNAME file"
- "how long do DNS changes take to propagate"
- "use google domain with github pages"
- "deploy react app to github pages basic"
- ...

## Conclusion

That's it, we're done! We made a React application and have it accessible at our custom domain name. While there's a handful of things I Googled listed above, the actual number of things I Googled is much astronomically higher, and it would be impossible to list them all here.

While I do work with Typescript and React for my job, I wouldn't consider myself an "expert" in either. I spent a lot of time during the beginning of this project Googling, trying something, getting an error message, Googling, reading documentation, reading stackoverflow, fixing something, trying something, and repeating.
