# Wi News

## Setting up the project

Clone the project to your local directory.

Create an `env.local` file with below info

```
REACT_APP_NEWS_API_KEY= <your-news-api-key>
```

Install latest version of Node.JS (14.8.1 or Above)

Run the following commands:

```
npm install
npm start
```

## Thought Process & Decisions

- Divided UI into components and maximized reusability.
- Created a maintainable codebase structure for the application.
- Decided to maximize usage of relevant React APIs and concepts like hooks and composition.
- Decided to use Redux as global store even though it was not required (Just to demo the usage)
- Decided to debounce search API in order to optimize performance.
- Added pagination for optimizing API response size.
- Implemented code splitting by adding lazy loaded routes.
- Used Axios for API queries as it has great control over querying. Made use of interceptors.
- Setup plop templates for generating components and pages with help of command.
- Setup husky, lint-staged and other code quality enforcing tools.

## Room for improvement
- Can add unit testing for components but haven't done due to lack of time.
- Can create a storybook as a guide.

## Known issues
- News search pagination is not fully working due to an API error.