import { connect } from 'react-redux'
import  Audit  from './index'
import * as actions from './actions'



const mapStateToProps = state => ({
  audits: state.audit
})

const mapDispatchToProps = dispatch => ({
  showAll: () => dispatch(actions.showAll())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Audit)