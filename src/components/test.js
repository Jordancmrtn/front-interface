import React from 'react'
import propTypes from 'prop-types'

export default function test({color}) {
    return (
        <div style={{backgroundColor : color, height : '32px', width : '33px'}}>
            hello world
        </div>
    )
}

test.propTypes = {
    color: propTypes.string,
  };

test.defaultProps = {
    color: 'tomato'
};