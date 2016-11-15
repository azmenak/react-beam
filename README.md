React Beam
==========

Allows children to other parts of the React subtree, and updates when needed.

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
import { Transmistter } from 'react-beam';

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
