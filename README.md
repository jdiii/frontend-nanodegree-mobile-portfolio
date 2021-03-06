# Portfolio Optimization
Project optimizes CRP performance of a mobile portfolio and a fake pizza parlor website.

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
  * `compress-js`: minifies .js files
  * `compress-imgs`: optimizes image files in `/img/`

Addtionally:
  * Google Fonts css was added to the style.css file to reduce round-trips
  * New pizza parlor thumbnail, reduced to a few kb from several megabytes
  * Added media attributes to `style` tags
  * Added 'async' attribute to JS in header
  * Removed Google Analytics to reduce round-trips and blocking JS

### Pizza Website
Optimizations were made to `views/js/main.js`.

#### Function changeSliderLabel()
Replace `querySelector()` with `getElementById()`

#### Function changePizzaSizes()
  * Calculate image width with a single `switch` statement instead of calling `determineDx()` repeatedly in the for loop
  * Remove multiple `querySelectorAll()` statements from `for` loop
  * Use `getElementsByClassName()` in place of `querySelectorAll()`

#### Function updatePositions()
  * Use `getElementsByClassName()` in place of `querySelectorAll()`
  * Factor `document.body.scrollTop` out of `for` loop to avoids lots of style calculations
  * Factor `phase` variable out of main loop, calculating the phases once instead of every iteration

#### Event listener 'DOMContentLoaded'
Use math to generate the minimum number of background-pizzas necessary, rather than always generating 200.
