# @ianwalter/sled
> A JavaScript micro-library for animating an element's height to create
> a slide effect

[![npm page][npmImage]][npmUrl]

## About

I created Sled because I wanted to use [Bootstrap's][boostrapUrl]
collapsible navbar menu without having to import a bunch of unnecessary code.
Sled is 44 lines of code, 419 bytes gzipped, and has no dependencies.

## Demo

[Click here][demoUrl] to see the demo.

## Installation

```console
npm install @ianwalter/sled --save
```

## Usage

**Vanilla JavaScript example:**

```js
import Sled from '@ianwalter/sled'
const sled = new Sled(document.querySelector('#myEl'))

// Slide to a specific height:
sled.slide('100px')

// Toggle between 0 height and the elements natural height.
sled.toggle()
```

**Vue.js example:**

```js
import Sled from '@ianwalter/sled'

let sled

export default {
  mounted () {
    sled = new Sled(this.$refs.menu)
  },
  methods: {
    toggleMenu: () => sled.toggle()
  }
}
```

## Related

* [`@ianwalter/power-sled`][powerSledUrl] - A JavaScript micro-library for
adding dropdown menu functionality to elements

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[bootstrapUrl]: https://getbootstrap.com
[demoUrl]: https://sled.iankwalter.com
[npmImage]: https://img.shields.io/npm/v/@ianwalter/sled.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/sled
[powerSledUrl]: https://github.com/ianwalter/power-sled
[licenseUrl]: https://github.com/ianwalter/sled/blob/master/LICENSE


