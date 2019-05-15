import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { sizeTypes } from '../../storybook'
import { TextInput } from '.'

const info = ``

storiesOf('TextInput', module)
  .add('default', () => (
    <TextInput
      type='text'
      inputSize={ select('inputSize', sizeTypes, sizeTypes[1]) }
    />
  ), { info })