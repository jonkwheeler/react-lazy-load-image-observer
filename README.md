# react-lazy-load-image

The LazyLoadImage component allows you to lazy load images, or background-images, and set the observed element.

## Install

```js
yarn add react-lazy-load-image
```

or

```js
npm install react-lazy-load-image
```

## Import

```js
import LazyLoadImage from 'react-lazy-load-image'
```

## About

The `wrapperRef` declares the element you want to observer to trigger the image loading.

Use `imageRef` if you want to load an image to an `<img>` element.

Use `backgroundRef` if you want to load an image to an element's `background-image`.

If you omit `wrapperRef`, the observed elem will be `imageRef`. You can omit `backgroundRef` as well.

## Props

| prop                    | desc                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| <code>imageSrc</code>   | src of the image, `string`                                                                 |
| <code>classAdded</code> | name of class added to the observed element once the image has loaded, default is `loaded` |

In order to animate, you'll have to add css in in regards to the `.loaded` class.

Something like

```css
opacity: 0;
transition: opacity 400ms ease-in-out;

&.loaded {
  opacity: 1;
}
```

OR if using a `wrapperRef`, then

```css
opacity: 0;
transition: opacity 400ms ease-in-out;

& .loaded {
  opacity: 1;
}
```

^^ notice the space in `& .loaded`, versus `&.loaded`

## Examples

```js
<LazyLoadImage imageSrc={src}>
  {({ wrapperRef, imageRef, backgroundRef }) => (
    <span ref={wrapperRef}>
      <img ref={imageRef} />
      <span ref={backgroundRef} />
    </span>
  )}
</LazyLoadImage>
```

```js
<LazyLoadImage imageSrc={src}>{({ imageRef }) => <img ref={imageRef} />}</LazyLoadImage>
```

```js
<LazyLoadImage imageSrc={src}>
  {({ backgroundRef }) => (
    <div>
      <div ref={backgroundRef} />
    </div>
  )}
</LazyLoadImage>
```
