import * as React from 'react'
import PropTypes from 'prop-types'

export class LazyLoadImage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.imageRef = elem => (this.image = elem)
    this.wrapperRef = elem => (this.wrapper = elem)
    this.backgroundRef = elem => (this.background = elem)
    this.createObserver = this.createObserver.bind(this)
    this.destroyObserver = this.destroyObserver.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.loadImage = this.loadImage.bind(this)
  }

  componentDidMount() {
    this.createObserver()
  }

  componentWillUnmount() {
    this.destroyObserver()
  }

  createObserver() {
    const options = {
      root: null,
      rootMargin: '-10% 0% 0% 0%',
      threshold: 0,
      ...this.props.observerOptions,
    }

    this.observedElem = this.wrapper || this.image || this.background
    this.observer = new IntersectionObserver(this.handleChange, options)
    this.observer.observe(this.observedElem)
  }

  destroyObserver() {
    this.observer.unobserve(this.observedElem)
  }

  handleChange(entries) {
    entries[0].isIntersecting && this.loadImage()
  }

  loadImage() {
    const myImage = this.image || new Image()

    myImage.onload = () => {
      if (this.background) this.background.style.backgroundImage = `url(${this.props.imageSrc})`
      this.observedElem.classList.add(this.props.classAdded)
      this.destroyObserver()
    }

    myImage.src = this.props.imageSrc
  }

  render() {
    return this.props.children({
      wrapperRef: this.wrapperRef,
      imageRef: this.imageRef,
      backgroundRef: this.backgroundRef,
    })
  }
}

LazyLoadImage.defaultProps = {
  classAdded: 'loaded',
  imageSrc: 'https://via.placeholder.com/350x150',
  observerOptions: {},
}

LazyLoadImage.propTypes = {
  children: PropTypes.func,
  classAdded: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  observerOptions: PropTypes.object,
}
