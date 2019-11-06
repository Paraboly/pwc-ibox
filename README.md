![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=for-the-badge)

![WebComponent PWC README Boilerplate](https://raw.githubusercontent.com/paraboly/pwc-ibox/repository-resources/logo.png)

[![Fully customizable readme boilerplate for web component with StencilJS via Paraboly](https://img.shields.io/badge/-Fully%20customizable%20readme%20boilerplate%20for%20web%20component%20with%20StencilJS%20via%20Paraboly-lightgrey?style=for-the-badge)](https://github.com/Paraboly/pwc-ibox)

[![npm version](https://img.shields.io/npm/v/@paraboly/pwc-ibox.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/pwc-ibox)
[![npm](https://img.shields.io/npm/dt/@paraboly/pwc-ibox.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/pwc-ibox)
![Platform - Platform Free Web](https://img.shields.io/badge/-Web%20%7C%20Platform%20Free-blue?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

![WebComponent PWC Animated Checkbox](https://raw.githubusercontent.com/paraboly/pwc-ibox/repository-resources/Screenshots/JSLibraryBoilerplate.png)

## [Live JSFiddle Example](https://jsfiddle.net/starikcetin/tjh6y15o/)

## Installation

### Script tag

- Put a script tag similar to this `<script	type="module" src="https://unpkg.com/@paraboly/pwc-ibox@latest/dist/pwc-ibox.js"></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install @paraboly/pwc-ibox --save`
- Put a script tag similar to this `<script src='node_modules/@paraboly/pwc-ibox/dist/pwc-ibox.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install @paraboly/pwc-ibox --save`
- Add an import to the npm packages `import @paraboly/pwc-ibox;`
- Then you can use the element anywhere in your template, JSX, html etc


# Usage

## Basic Usage

```html
<pwc-ibox>
  <pwc-ibox-title>
    Title Goes Here
    <pwc-ibox-tools minimize-button close-button>
      Tools content go here.
    </pwc-ibox-tools>
  </pwc-ibox-title>
  <pwc-ibox-content>Content goes here.</pwc-ibox-content>
  <pwc-ibox-footer>Footer goes here.</pwc-ibox-footer>
</pwc-ibox>
```

# Components

* [pwc-ibox](src/components/pwc-ibox)
* [pwc-ibox-content](src/components/pwc-ibox-content)
* [pwc-ibox-footer](src/components/pwc-ibox-footer)
* [pwc-ibox-title](src/components/pwc-ibox-title)
* [pwc-ibox-tools](src/components/pwc-ibox-tools)


## Authors

starikcetin, tarik.cetin@paraboly.com | cetinsamedtarik@gmail.com

## License

WebComponent PWC Ibox is available under the MIT license. 

See the [LICENSE](/LICENCE) file for more info.
