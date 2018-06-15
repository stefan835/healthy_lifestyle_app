import React from 'react'
import ReactSVG from 'react-svg'

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user.progress !== prevProps.user.progress
      &&
      this.props.user.proteins !== prevProps.user.proteins) {
      this.setState({
        currentPage: this.props.user.progress
      })
    }
  }

  render() {
    const increase = () => {
      this.state.currentPage < 12 ?
        this.setState({
          currentPage: this.state.currentPage + 1
        })
        :
        this.setState({
          currentPage: this.state.currentPage
        })
    };
    const decrease = () => {
      this.state.currentPage > 1 ?
        this.setState({
          currentPage: this.state.currentPage - 1
        })
        :
        this.setState({
          currentPage: this.state.currentPage
        })
    };

    return (
      <div className='slider'>
        <button className="btn btn-prev" onClick={decrease}>
          <ReactSVG
            path={`media/Arrow.svg`}
            svgClassName={'icon-arrow'}
          />
        </button>
        <h2 className="counter">Week {this.state.currentPage}</h2>
        <button className="btn btn-next" onClick={increase}>
          <ReactSVG
            path={`media/Arrow.svg`}
            svgClassName={'icon-arrow'}
          />
        </button>
      </div>
    )
  }

}

export default Slider
