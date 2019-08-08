# AXON ACTIVE ASSIGNMENT

## Description:
- The assignment is about live loading currency exchange rate when user selects a quote symbol.
- The data is visualized on a chart to let user know the differences between exchange rates by minutes.
- API is provided by: [https://1forge.com](https://1forge.com)

## Front-end framework & libraries:
- Angular 7
- rxjs
- Angular Kendo UI
- Bootstrap 4

## Dev environment requirement:
- [NodeJS >= 10](https://nodejs.org/en/) 
- [Angular CLI >= 7](https://cli.angular.io/)

## Project build instruction:
### Prerequisites:
- Clone the source code from [https://bitbucket.org/Redplane/axon-assignment/src](https://bitbucket.org/Redplane/axon-assignment/src)
- Open the folder that contains the newly cloned source code.
- Run `npm install` command in **Command prompt** to install **Node libraries**.
- 
[![Foo](https://i.ibb.co/Rphrbpm/axon-npm-install.png)](https://i.ibb.co/Rphrbpm/axon-npm-install.png)

### Run web in dev environment:
- Run `ng serve` to run the project in development environment. The source code will be transpiled and browser will be opened automatically. 
    (In case your browser does not open, please access to [http://localhost:4200](http://localhost:4200))

[![Foo](https://i.ibb.co/tz8QfKL/axon-ng-serve.png)](https://i.ibb.co/tz8QfKL/axon-ng-serve.png)

### Build project to deploy to production environment:
- Use `npm run build --prod` command in **Command prompt**. The transpiled & uglified js files will be placed into **dist** folder.
- The files placed in **dist** folder can be copied to static hosting and serves as a normal **Single page application**.

[![Foo](https://i.ibb.co/Fhbhb8H/axon-ng-build.png)](https://i.ibb.co/Fhbhb8H/axon-ng-build.png)
## Notes:
- This project uses 3rd party API provided by [https://1forge.com](https://1forge.com/forex-data-api/api-documentation), therefore, it requires API Key.
- The API key can be found and changed at **forgeApiKey** which is placed in **(source code folder)/src/assets/app.config.json** file.
- The API key can be changed in the **app.config.json** even in the production environment because it is runtime configuration.
[![Foo](https://i.ibb.co/6XZYVcT/axon-config-file.png)](https://i.ibb.co/6XZYVcT/axon-config-file.png)

## How to use the system.

1. Open the demo page at: [https://currency-exchange-visualizer.netlify.com/](https://currency-exchange-visualizer.netlify.com/) or the local published (please refer **Run web in dev environment** and **Build project to deploy to production environment**)
[![Foo](https://i.ibb.co/x6LSsDR/axon-visualizer.png)](https://i.ibb.co/x6LSsDR/axon-visualizer.png)

2. Choose a currency symbol in the currency symbol selector (top-right of the screen).
(Symbol can be filtered by typing keyword(s) in the **Combobox**)
3. The data will be loaded every **5** seconds after a valid symbol is chosen.
[![Foo](https://i.ibb.co/n0LzySv/axon-production-visualizer.png)](https://i.ibb.co/n0LzySv/axon-production-visualizer.png)

