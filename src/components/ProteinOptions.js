import React from 'react'
import ReactSVG from 'react-svg'

import {getObjectKeys} from "./_utils/getObjectKeys";
import {connect} from "react-redux";
import {userDataUpdate} from "../state/userData";

class ProteinOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proteins: {}
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.setState({
        proteins: this.props.user.proteins
      })
    }
  }

  render() {

    const updateProteins = (e) => {
      const targetName = e.currentTarget.classList[0];
      this.setState({
        proteins: {
          ...this.state.proteins,
          [targetName]: !this.state.proteins[targetName]
        }
      }, function () {
        this.props.userDataUpdate('proteins', this.state.proteins)
      })
    };

    const proteins = getObjectKeys(this.props.user.proteins);
    return (
      <div className="protein-options">
        <h3 className="protein-options__title"> SELECT YOUR PROTEIN OPTIONS</h3>
        <ul className='protein-list'>
          {
            proteins.map((name, index) => {
              return <ReactSVG
                path={`media/icons/${name}.svg`}
                evalScripts="always"
                key={index}
                svgClassName={this.state.proteins[name] ? 'protein protein--active' : 'protein protein--inactive'}
                className={`${name} ${this.state.proteins[name] ? 'protein--active' : 'protein--inactive'}`}
                onClick={updateProteins}
              />
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    userDataUpdate: (key, newData) => dispatch(userDataUpdate(key, newData))
  })
)(ProteinOptions)