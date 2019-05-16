import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { appearanceTypes } from '../../storybook'
import { Chip } from '.'

const info = ``

storiesOf('Chip', module)
  .add('default', () => (
    <Chip
      appearance={ select('appearance', appearanceTypes, appearanceTypes[0]) }
    >
      { text('text', 'Hello There') }
    </Chip>
  ), { info })