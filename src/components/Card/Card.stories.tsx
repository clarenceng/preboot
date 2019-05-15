import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'
import { sizeTypes } from '../../storybook'
import { Card } from '.'

const info = ``

storiesOf('Card', module)
  .add('default', () => (
    <Card
      size={ select('size', sizeTypes, sizeTypes[1])}
      block={ boolean('block', false) }
    >
      { text('text', 'Hello There') }
    </Card>
  ), { info })