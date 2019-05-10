import React from "react"
import PropTypes from 'prop-types'

const COLORS = ["#673ab7", "#2196f3", "#26a69a", "#e91e63"]

const Definition = props => {
	let { def, idx } = props

	let styles = {
		color: "white",
		padding: "10px",
		backgroundColor: COLORS[idx]
	}

	return (
		<div className="card text-center" style={styles}>
			<h5>Definition {idx + 1}</h5>
			<p>{def.definitions[0]}</p>
		</div>
	)
}

Definition.propTypes = {
	def: PropTypes.object,
	idx: PropTypes.number
}

Definition.defaultProps = {
	def: {
		definitions: []
	}
}

export default Definition
