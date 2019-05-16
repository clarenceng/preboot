import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { sizeTypes } from '../../storybook'
import { Checkbox } from '.'

const info = ``

storiesOf('Checkbox', module)
  .add('Input', () => (
    <Checkbox
      inputSize={ select('inputSize', sizeTypes, sizeTypes[1]) }
      name='meow'
    />
  ), { info })