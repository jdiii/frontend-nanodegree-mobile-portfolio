# Portfolio Optimizing
Project optimizes performance on a mobile portfolio and a fake pizza parlor website.

## Getting Started
  1. `git clone` this repository to your machine
  2. run `npm install` to install Gulp and its dependencies
  3. run `gulp` to create the optimized version of the site from `src` in the `dst` folder
  4. `cd dst`
  5. `python -m SimpleHTTPServer 8080`
  6. Visit `http://0.0.0.0:8080/index.html`

## Optimizations

### Mobile Portfolio
Most of the optimizations are made using Gulp tasks. See `gulpfile.js`.
  * `copy-all`: copies the entire contents of `src` to `dst`
  * `minify-css`: removes whitespace and linebeaks from css
  * `minify-html-root`: inlines minified CSS in a `<style>` tag in HTML files and minifies HTML in the root folder
  * `minify-html-views`: minifies HTML in the `/views` folder
  * `compress-js`: minifies .js files
  * `compress-imgs`: optimizes image files in `/img/`

Addtionally:
  * Google Fonts css was added to the style.css file to reduce round-trips
  * The pizza parlor thumbnail was reduced to a few kb from several megabytes

### Pizza Website
Optimizations were made to `views/js/main.js`.

#### Images
Added a miniturized version of pizza parlor thumbnail.

#### Function changeSliderLabel()
Replaced `querySelector()` with `getElementById()`

#### Function changePizzaSizes()
  * Used `switch` statement and percentages instead of `determineDx()`
  * Removed multiple `querySelectorAll()` statements from `for` loop
  * Use `getElementsByClassName()` in place of `querySelectorAll()`

#### Function updatePositions()
  * Use `getElementsByClassName()` in place of `querySelectorAll()`
  * Factor `document.body.scrollTop` out of `for` loop to avoids lots of styles calculations
