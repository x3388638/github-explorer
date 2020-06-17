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

## Demo screen recording
https://drive.google.com/file/d/1_Yh9z2jmA6I74XL9jCyFrhGoiRVET0lF/view?usp=sharing

## Architecture
### Server
- Node.js + Express
- React SSR
- route
    - `/:keyword?`: render React app
    - `/search/repos/:keyword/:page?`: proxy for calling GitHub API w/ GitHub access token
        - Use normalizer to remove useless fields in GitHub API response

### Client
- React w/ Hooks
- react-router
- useContext + useReducer for state management
    - repo
    - keyword
- styled-component
- Transpile/bundle via webpack and babel

## Feature
- Gzip for server response
- Real-time search
    - Debounce search input onChange event
    - Bind/sync for keyword in both URL and search input
-  Highlight keywords in repo card
- Scroll to bottom to load more
    - Use intersectionOberver to check if user scrolls to bottom to load more
- Dark mode (w/ bad design lol)

## Code quality
- ESLint
- Prettier
- Husky pre-commit hook w/ lint-staged

## Test
- Jest (unit test)
- CodeceptJS + Puppeteer (e2e test)
- Storybook (manual test :stuck_out_tongue:)

