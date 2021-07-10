<p align="center">
  <a href="https://github.com/oneislandearth/math" target="_blank">
    <img src="https://i.imgur.com/NARSJNQ.png">
  </a>
</p>

***

A JavaScript math library without floating-point rounding errors that includes support for Vectors, Matrices, and other geometric functions

## Overview

- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [License](#license)

## Installation

[@oneisland/math](https://github.com/oneislandearth/math) is available through the [npm registry](https://www.npmjs.com/package/oneisland/math):

```bash
$ npm install @onesland/math
```

## Usage

Creating a simple math example using @oneisland/math:<br>

###### example.js
```js
// Import the required operations from @oneisland/math
import { add } from '@oneisland/math';

// Add some number without rounding errors
const result = add(0.1, 0.2);

// Log out the result
console.log(`The result is: ${result}`);
```

```bash
The result is: 0.3
```

## Documentation

[Check out the full documentation](https://github.com/oneislandearth/math/blob/master/docs/README.md)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, OneIsland Limited