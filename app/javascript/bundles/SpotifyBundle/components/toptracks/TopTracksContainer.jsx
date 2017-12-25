import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from '../Title'
import { connect } from 'react-redux'
import TopTrackItem from './TopTrackItem'
import { Box } from 'reactbulma'
import fetchToptracks from '../../actions/toptracks/fetch'
import fetchUser from '../../actions/user/fetch'
import './TopTracksContainer.scss'

class TopTracksContainer extends Component {
  static propTypes = {
    toptracks: PropTypes.array.isRequired,
    user: PropTypes.array.isRequired
  }

  renderTopTrack(toptrack, index) {
    return (
      <TopTrackItem key={index} {...toptrack} />
    )
  }

  componentDidMount() {
    // user array always exists so user will always be true. Should be .length > 0
    if (this.props.user) {
      this.props.fetchToptracks()
    }
  }

  render() {
    return(
      <div className="container topsongs">
        <header>
          <Title className="title" content="Your spotify Top Tracks" />
        </header>
        <main className="container topsongs-overview">
          { this.props.toptracks.map(this.renderTopTrack) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ toptracks, user }) => ({ toptracks, user })

export default connect(mapStateToProps, {fetchToptracks, fetchUser})(TopTracksContainer)
