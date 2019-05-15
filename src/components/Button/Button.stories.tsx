import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, select, boolean } from '@storybook/addon-knobs'
import { appearanceTypes, sizeTypes } from '../../storybook'
import { Button } from '.'

const info = ``

storiesOf('Button', module)
  .add('default', () => (
    <Button
      appearance={ select('appearance', appearanceTypes, appearanceTypes[0]) }
      size={ select('size', sizeTypes, sizeTypes[1])}
      block={ boolean('block', false) }
      onClick={ action('clicked') }
      disabled={ boolean('disabled', false) }
    >
      { text('text', 'hello') }
    </Button>
  ), { info })