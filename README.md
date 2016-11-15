React Beam
==========

Allows children to other parts of the React subtree, and updates
when needed. Originally designed for use with React Router in an app
which has a common element such as a header with a title, where
a component in the page subtree might want to change the title.

## Install

    npm i @azmenak/react-beam

## Api

### `Receiver`

```js
import { Receiver } from 'react-beam';
```

#### Props

- `link:<String>`: a unique ID, used to send children to the correct component
- `onUpdate:<Function (children)> (optional)`: runs whenever an update is received, with children as the only argument 
- `children:<ReactNode> (optional)`: renders child node(s) when the recevied children are null or undefined
- `style:<Object> (optional)`: style will be shallowly mixed in when there is 1 child node, or is applied to a new `<span>` root node
- `className:<String> (optional)`: applied to child node when there is 1 child node, or applied to new `<span>` root node

### `Transmitter`

Always renders null.

```js
import { Transmitter } from 'react-beam';
```

#### Props

- `link:<String>` a unique ID, used to send children to the correct component
- `children:<ReactNode>` children to render in the `<Receiver />` component

## Usage

```js
// AppHeader.jsx

import React from 'react';
import { Receiver } from 'react-beam';

export class AppHeader extends React.Component {
  render() {
    return (
      <div>
        { // ...other stuff }
        <Recevier link="header" />
      </div>
    );
  }
}
```

```js
// SomePage.jsx

import React from 'react';
import { Transmitter } from 'react-beam';

export class SomePage extends React.Component {
  render() {
    return (
      <div>
        { // ...page stuff }
        <Transmitter link="header">
          <span>Page dependent content</span>
          <span>More content</span>
        </Transmitter>
      </div>
    );
  }
}
```
