# @ianwalter/sled
> A JavaScript micro-library for animating an element's height to create
> a slide effect

## About

I created Sled because I wanted to use [Bootstrap's](https://getbootstrap.com)
collapsible navbar menu without having to import a bunch of unnecessary code.
Sled is 20 lines of code, 182 bytes, and has no dependencies.

## Demo

[Click here]() to see the demo.

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

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[licenseUrl]: https://github.com/ianwalter/sled/blob/master/LICENSE


