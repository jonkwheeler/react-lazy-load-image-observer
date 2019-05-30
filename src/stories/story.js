import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { LazyLoadImage } from '../LazyLoadImage'

storiesOf('LazyLoadImage', module).add('Scrolling Example', () => (
  <div
    style={{
      padding: '20px',
    }}>
    <p>scroll</p>
    <p>scroll baby</p>
    <p>scroll</p>
    <div
      style={{
        height: '125vh',
        width: '100%',
      }}
    />
    <div
      style={{
        width: '100%',
        maxWidth: '500px',
      }}>
      <LazyLoadImage>
        {({ wrapperRef, imageRef, backgroundRef }) => (
          <span ref={wrapperRef}>
            <img ref={imageRef} />
            <span ref={backgroundRef} />
          </span>
        )}
      </LazyLoadImage>
    </div>
  </div>
))
