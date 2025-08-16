# React Rough Notation

![npm](https://img.shields.io/npm/v/@turahe/react-rough-notation?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=for-the-badge)
![Tests](https://img.shields.io/badge/Tests-28%20passed-brightgreen?style=for-the-badge)
![Coverage](https://img.shields.io/badge/Coverage-89.36%25-brightgreen?style=for-the-badge)

A modern React 19 wrapper for [RoughNotation](https://roughnotation.com/), a small JavaScript library to create and animate annotations on a web page.

- [Visit website to see it in action](https://roughnotation.com/)
- [Library docs](https://github.com/pshihn/rough-notation)
- [Testing Guide](./TESTING.md)
- [Changelog](./CHANGELOG.md)

![Rough Notation logo](https://roughnotation.com/images/social.png)

## ✨ Features

- **React 19 Compatible** - Built with the latest React features
- **TypeScript Support** - Full type safety and IntelliSense
- **Modern Build System** - Rollup 4 with ES modules and CommonJS
- **Comprehensive Testing** - 89.36% test coverage with Jest and React Testing Library
- **Tree Shaking** - Optimized bundle sizes
- **SSR Ready** - Works in server-side rendering environments

## 📦 Installation

You can add react-rough-notation to your project via npm.

```bash
npm install --save @turahe/react-rough-notation
```

Or using yarn:

```bash
yarn add @turahe/react-rough-notation
```

Then import the components you need:

```js
import { RoughNotation, RoughNotationGroup } from "@turahe/react-rough-notation";
```

## 🚀 Quick Start

```jsx
import React, { useState } from 'react';
import { RoughNotation, RoughNotationGroup } from '@turahe/react-rough-notation';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Annotations
      </button>
      
      <RoughNotationGroup show={show}>
        <RoughNotation type="underline" color="red">
          Hello,
        </RoughNotation>
        <RoughNotation type="box" color="blue">
          This is
        </RoughNotation>
        <RoughNotation type="circle" color="green">
          a Test
        </RoughNotation>
      </RoughNotationGroup>
    </div>
  );
}
```

## 🧩 Components

### RoughNotation Component

This is the main component, which renders as a span element by default but can be customized using the `customElement` prop.

#### Basic Usage

```jsx
<RoughNotation type="underline" show={state.show}>
  Hello RoughNotation
</RoughNotation>
```

#### Props

Any unlisted prop will be passed to the component, so you can use any React prop to handle interactions or styling.

| name                | type                                                             | default              | description                                                                                                                                                                                                                                                                                  |
| ------------------- | ---------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animate             | `boolean`                                                        | `true`               | Turn on/off animation when annotating                                                                                                                                                                                                                                                        |
| animationDelay      | `number`                                                         | `0`                  | Delay in animation in milliseconds                                                                                                                                                                                                                                                           |
| animationDuration   | `number`                                                         | `800`                | Duration of the animation in milliseconds                                                                                                                                                                                                                                                    |
| brackets            | `enum` or [`enum`] from `left`, `right`, `top`, `bottom`         | `right`              | Value could be a string or an array of strings, each string being one of these values: `left`, `right`, `top`, `bottom`. When drawing a bracket, this configures which side(s) of the element to bracket.                                                                                    |
| color               | `string`                                                         |                      | String value representing the color of the annotation sketch                                                                                                                                                                                                                                 |
| customElement       | `string`                                                         | `span`               | Element wrapper tagName                                                                                                                                                                                                                                                                      |
| getAnnotationObject | `function`                                                       | `(annotation) => {}` | Callback function called after annotation init, it will receive the javascript [annotation object](https://github.com/pshihn/rough-notation#annotation-object) as a param                                                                                                                    |
| iterations          | `number`                                                         | `2`                  | By default annotations are drawn in two iterations, e.g. when underlining, drawing from left to right and then back from right to left. Setting this property can let you configure the number of iterations.                                                                                |
| multiline           | `boolean`                                                        | `false`              | This property only applies to inline text. To annotate multiline text (each line separately), set this property to true.                                                                                                                                                                     |
| order               | `number`, `string`                                               |                      | Annotation order to animate if is inside an Annotation Group                                                                                                                                                                                                                                 |
| padding             | `number`, `[top, right, bottom, left]`, `[vertical, horizontal]` | `5`                  | Padding in pixels between the element and roughly where the annotation is drawn. If you wish to specify different `top`, `left`, `right`, `bottom` paddings, you can set the value to an array akin to CSS style padding `[top, right, bottom, left]` or just `[top & bottom, left & right]` |
| show                | `boolean`                                                        | `false`              | Show/hide the annotation                                                                                                                                                                                                                                                                     |
| strokeWidth         | `number`                                                         | `1`                  | Width of the annotation strokes                                                                                                                                                                                                                                                              |
| type                | `enum` from (Type values)[#type-values]                          | `underline`          | It sets the annotation style                                                                                                                                                                                                                                                                 |

#### Type Values

| value          | description                                             |
| -------------- | ------------------------------------------------------- |
| underline      | Create a sketchy underline below an element             |
| box            | This style draws a box around the element               |
| circle         | Draw a circle around the element                        |
| highlight      | Creates a highlight effect as if marked by a highlighter |
| strike-through | Draws a horizontal line over the element                |
| crossed-off    | Crosses out the element with two diagonal lines         |

#### Updating Styles

Some props can be changed after initialization without re-rendering the annotation. Here's the complete list:

| Prop              |
| ----------------- |
| animate           |
| animationDuration |
| color             |
| padding           |
| strokeWidth       |

**Note**: The type of the annotation cannot be changed. Create a new annotation for that.

### RoughNotationGroup Component

This is a wrapper for multiple annotations that triggers the `show()` method on every child annotation after the previous annotation animation is complete. **It does not render any HTML element.**

#### Usage

```jsx
<RoughNotationGroup show={state.show}>
  <RoughNotation type="underline">Hello,</RoughNotation>
  <RoughNotation type="underline">This is</RoughNotation>
  <RoughNotation type="underline">a Test</RoughNotation>
</RoughNotationGroup>
```

#### Props

| name | type    | default | description                |
| ---- | ------- | ------- | -------------------------- |
| show | boolean |         | show/hides the annotations |

#### Custom Order

If you need to trigger annotations in a specific order, use the `order` prop in each `RoughNotation` component.

**Example**: Reverse order

```jsx
<RoughNotationGroup show={state.show}>
  <RoughNotation type="underline" order="3">
    Hello,
  </RoughNotation>
  <RoughNotation type="underline" order="2">
    This is
  </RoughNotation>
  <RoughNotation type="underline" order="1">
    a Test
  </RoughNotation>
</RoughNotationGroup>
```

**Note**: It will annotate first the components with the `order` prop, and then the ones without it.

## 🧪 Testing

This project includes comprehensive testing with Jest and React Testing Library:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests in CI mode
npm run test:ci
```

**Current Coverage**: 89.36% overall with 28 passing tests

See [TESTING.md](./TESTING.md) for detailed testing documentation.

## 📋 Changelog

We maintain a detailed changelog documenting all version changes, new features, and breaking changes.

### Recent Updates

- **v2.1.0**: Added comprehensive testing infrastructure and GitHub Actions CI/CD
- **v2.0.0**: Major upgrade to React 19, TypeScript 5.9, and Rollup 4
- **v1.0.0**: Initial release with basic Rough Notation functionality

### Full History

See [CHANGELOG.md](./CHANGELOG.md) for complete version history, migration guides, and detailed change logs.

## 🔧 Development

### Prerequisites

- Node.js 18+ 
- npm 8+ or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/turahe/react-rough-notation.git
cd react-rough-notation

# Install dependencies
npm install

# Start development mode
npm start

# Build for production
npm run build
```

### Scripts

- `npm start` - Start development mode with watch
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run test:ci` - Run tests in CI mode

## 📚 Examples

### Basic Annotations

```jsx
<RoughNotation type="underline" color="red" show={true}>
  This text will be underlined in red
</RoughNotation>

<RoughNotation type="box" color="blue" strokeWidth={2} show={true}>
  This text will be boxed in blue with thick strokes
</RoughNotation>
```

### Animated Group

```jsx
<RoughNotationGroup show={showGroup}>
  <RoughNotation type="highlight" color="yellow" order={1}>
    First
  </RoughNotation>
  <RoughNotation type="underline" color="red" order={2}>
    Second
  </RoughNotation>
  <RoughNotation type="circle" color="green" order={3}>
    Third
  </RoughNotation>
</RoughNotationGroup>
```

### Custom Element

```jsx
<RoughNotation type="underline" customElement="h1" show={true}>
  This will be a heading with an underline
</RoughNotation>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Ensure all tests pass
2. Maintain test coverage above 85%
3. Follow TypeScript best practices
4. Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [RoughNotation](https://roughnotation.com/) - The original library by Preet Shihn
- [React](https://reactjs.org/) - The UI library that makes this possible
- [TypeScript](https://www.typescriptlang.org/) - For type safety and developer experience

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@turahe/react-rough-notation)
- [GitHub Repository](https://github.com/turahe/react-rough-notation)
- [Original RoughNotation](https://roughnotation.com/)
- [React Documentation](https://reactjs.org/)
