# Reax Avatar

Avatar component for React that displays an avatar with initials based on user's name.

[![npm version](https://badge.fury.io/js/reax-avatar.svg)](https://badge.fury.io/js/reax-avatar)

## PropTypes

```js
{
  name: React.PropTypes.string.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number
}
```

## Usage
```sh
npm install --save reax-avatar
```

```jsx
import React from 'react';
import Avatar from 'reax-avatar';

const Foo = () => (
  <Avatar name="Bar" />
);

export default Foo;
```
