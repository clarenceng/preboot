import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { sizeTypes } from '../../storybook'
import { Select } from '.'

const info = ``

const options = [{
  label: 'cat',
  value: 'meow'
}, {
  label: 'dog',
  value: 'bark'
}, {
  label: 'bird',
  value: 'peep'
}]

storiesOf('Select', module)
  .add('default', () => (
    <label>
      <p>Label</p>
      <Select
        options={ options }
        inputSize={ select('inputSize', sizeTypes, sizeTypes[1]) }
      />
    </label>

  ), { info })