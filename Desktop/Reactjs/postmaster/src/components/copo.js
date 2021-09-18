import React from 'react'
import PropTypes from 'prop-types'
export default  function Ram(props){
return(
    <div className="div container">
        <h1>this is a heading</h1>
        <div >
           <p style={{color:props.color}} >hello guys it's me prince jain</p>
        </div>
    </div>
        )
 }
Ram.propTypes={
    color:PropTypes.string.isRequired
}
 Ram.defaultProps={
color:'green'
 }
 
