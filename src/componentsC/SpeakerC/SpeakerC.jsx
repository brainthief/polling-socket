import React from 'react'

import SpeakerJoin from './SpeakerJoinC/SpeakerJoinC'

export default class SpeakerC extends React.Component {
  render() {
    const { emit, member, status } = this.props
    return (
      <ul className="list-group list-group-flush" >
        <li className="list-group-item">
          {status === 'connected' ?
            member.name && member.type === 'speaker' ? <><p>Klausymai</p><p>Attendance</p></> : <SpeakerJoin emit={emit} />
            : null}
        </li>
      </ul>
    )
  }
}

