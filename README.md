# GitHub Explorer
Explore all repos in the GitHub world
![](https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/ecab7b6543076ba29b253478179852e041b43a71/github-explorer.png)

## Set GitHub access token (Optional)
> For requests using Basic Authentication, OAuth, or client ID and secret, you can make up to 30 requests per minute. For unauthenticated requests, the rate limit allows you to make up to 10 requests per minute. -- https://developer.github.com/v3/search/#rate-limit

Create `.GITHUB_ACCESS_TOKEN.js` at repo root
```javascript
module.exports = '{YOUR_ACCESS_TOKEN}'
```

## Run
```
npm ci
npm start
```
Open http://localhost:8080

## Development

**Prerequisites: Node v10 or higher**

```
npm ci
npm start
```

with another terminal:

```
npm run build:dev
```

### Storybook
```
npm run storybook
```

### Test
```
npm run test
npm run test:functional
```
