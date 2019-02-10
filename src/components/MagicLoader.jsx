import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagic } from '@fortawesome/free-solid-svg-icons'

export const MagicLoader = ({ loading }) => {
  if(!loading) return ''
  return (
    <div className='magic-loader flex-center'>
      <FontAwesomeIcon icon={faMagic} />
    </div>
  )
}