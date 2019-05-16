import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { sizeTypes } from '../../storybook'
import { Radio } from '.'

const info = ``

storiesOf('Radio', module)
  .add('Input', () => (
    <Radio
      inputSize={ select('inputSize', sizeTypes, sizeTypes[1]) }
      name='meow'
    />
  ), { info })