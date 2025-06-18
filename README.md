# Flying Free

Flying Free is a web application that displays a list of itineraries from a flight smart search submission. For each itinerary we can see the departure and arrival date and location, the carrier and the price.

## Instructions

This is a React application using the Next.js framework within Typescript.

To run the application locally, execute the following command on a terminal in the project's root:


```bash
npm install // Just once, to install dependencies locally.
npm run start // Builds the application in production mode.
```

(Optional) After packages install, it is also possible to use a development watcher instead of the production build (`npm run start`) using this command:

```bash
npm run dev
```

You can open [http://localhost:3000](http://localhost:3000) with a browser to see the result.

Tests can be run by executing the following commands on a terminal in the project's root:

```bash
npm run test // Runs tests and keeps watching changes.
npm run test:coverage // Runs tests and displays coverage.
```


## Approach considerations

The approach followed to generate this application is explained here with the decisions and assumptions made, so it is easy to understand the thought process behind it.

This project is a single page application that displays a search form on a page, the Home page, and the search results in another page, the Search Results page. There's data coming from a REST API in both pages, the locations in the Home page, to display selectors with a locations list, and the itineraries in the Search Results page, to list them filtered. 

It has been decided to code the API for the locations and the itineraries endpoints in the same application, thanks to the Next.js framework. This decision skips the idea of having the API in a separate project, which is enough for a simple application like this one, but it is not recommended for a bigger application where the API may be used from multiple frontends.
The focus of this project is on the Frontend, so the API is very basic and there's no database involved. There's some minor logic and a JSON data response from local files.

Additionally, the fact that the application is small does not mean that the code is not structured correctly. The organization of the code is correct enough to allow the application to scale, either by adding new functionalities or adapting existing ones.

Finally, it has been decided to add unit tests to all shared components (more on the 'shared' concept in the 'Project organization' section), as well as for each helper method. There are no integration and E2E tests in this project due to its small size.


## Tech Stack

The application uses the Next.js framework over the [React](https://react.dev/) library to speed up the development process. For the styles it has been used basic CSS.

The full project stack is as follows:
- [Next.js](https://nextjs.org/): to perform better in Server Side Rendering (SSR). Using 'app' strategy.
- [TypeScript](https://www.typescriptlang.org/): for basic code scripting.
- [Vitest](https://vitest.dev/): for testing (with [testing-library](https://testing-library.com/)).

It has been decided to use Next.js for a better development experience while coding React. It makes it easy to work with SSR and ensures a good performance, it enforces a clean architecture for routing and project structure, and allows coding the API right there using TypeScript, in addition to other features.

Likewise, it has been decided to use TypeScript over vanilla JavaScript to take advantage of types, which allows for a faster and stricter developer experience, and it is the recommended React preference.

Furthermore, it has been decided to use basic CSS instead of a processor, like SASS i.e., or CSS-in-JS, like Styled Components i.e., to demonstrate that styling (including theming) can be accomplished without the need of over-engineering the styles. Additionally, works flawlessly with server components.

[Eslint](https://eslint.org/) is included to allow code linting in development mode, and preventing invalid production builds.

Finally, it has been decided to use Vitest with Testing library for testing instead of Jest because it needs less configuration, it is faster and, specifically within testing-library, it allows testing DOM components practically.


## Project Organization

The application main code is stored into the `src` folder. The project organization follows Next.js framework requirements and conventions, and it is as follows:

- `app`: A required folder by the Next.js framework when using the 'app strategy'. In the '(api)' folder is contained the server code, a REST API including two basic endpoints. The endpoints return JSON data from local files using the Next.js 'route' feature. '(home)' and 'search-results' folders contain the parent Home and Search Results page's server components. Both of them request data from the API before reaching the client, while in server side rendering. There's also the main layout, the not-found page, and the application favicon.

- `components`: A folder containing the application components. Components are separated into 'shared' components and the application ones:

    - Shared components: The shared components are project-agnostic, isolated basic components ready to fit in different situations. They can be extracted into a separate repository and work as a component's library, or used as micro-frontends to be used by different projects.

    - Application components: The components outside the 'shared' folder are specific to the application, so they are not designed to be used in different projects. The Header and Footer components render this specific application header and footer. The Search folder contains the Search Form visible in the Home page, and the Search Results rendered in the page with the same name.

    The components are created using React (index.tsx file) and styled using CSS (styles.css). Shared components include testing (component.test.tsx) files using testing-library and Vitest.

- `core`: It contains fundamental files to configure API connection, hooks, and global styles including theming. This folder may include additional shared or transversal files, as in example i18n configuration files or cookies management.

- `domain`: It contains a folder for each (backend) domain. Each folder is named the same as the domain in the server API and includes a domain specific file setting up the API requests, an optional helpers file, including related tests, and a TypeScript types file.

Files outside `src` folder are Next, Vitest, Eslint and Typescript configuration files, the public folder containing static assets, as well as the local environmental variables file, the package.json file, and the project's Readme file, yep, this exact file you are reading :).


## Final thoughts

This project has been done with the help of the Next.js framework. Although being a simple project, it is demonstrated how a flexible enough framework can really help to build a web application without compromising performance in a suitable development experience. 

The project has been done following the Domain-Driven Design (DDD) pattern and with scalability in mind. There are multiple parts of the application that can be extended and improved. The main page styles may be adapted to some specific design to make it more elegant or match specific client needs, including the search form and the search results list styles.

Another improvement may be to add text localization. Currently, text literals are hardcoded in English, but with the help of [react-i18next](https://react.i18next.com/), [OpenAI](https://platform.openai.com/docs/overview), or a similar translations tool, the application can be ready to be used for other speakers. In fact, the entire application can be internationalized, affecting currencies, which now are hardcoded to '€', text disposition (right to left instead of left to right), date format, etc.

The Home page's Search Form includes selectors where you can search for results too, instead of plain HTML selectors, to enrich the user experience. The Search Results page includes an infinite scroll to lazy load content as the user scrolls down the page, which improves performance because there's less content loaded in memory. The upper content is not removed once the user scrolls down, so it may be improved by removing them and only keeping in memory the exact content the screen is rendering.

Another improvement in the Search Results page may be to add client filters. Currently, the search result items are listed from the lower price to the higher price, but this may be adapted to be decided by the user and change it from higher to lower instead, or having filters by departure and arrival location or date, and by carrier.

The project is styled entirely using basic CSS and no specific methodology (like [BEM](https://getbem.com/) or similar). Each component has its own related styles associated with using classes. The application is ready to adapt its main design styles to another theme thanks to CSS variables theming. The theme together with the shared components enforces the idea of working within a design system. All can be achieved without over-engineering the CSS, except for one minor specific flaw: the `media` statement does not accept CSS variables ([yet](https://drafts.csswg.org/css-env-1/)).

The API URL used for this project is sent to the application as an environmental variable instead of being hardcoded into the code. This allows for better adaptation to URL modifications without requiring amending the project's internal code. 

Testing is essential for a project to ensure code robustness. This project includes unit testing with Vitest and testing-library. This should be scaled up as the project grows with end-to-end or integration testing to the entire project with technologies such as Cypress or similar, which can be handled by a QA expert or a skilled enough developer.
