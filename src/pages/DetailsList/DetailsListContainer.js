import { connect } from "react-redux";
import actions from "../../redux/actions";

import DetailsList from "./DetailsList";

const mapState = state => ({
  data: state.conversionList.data || [],
  orgResults: state.orgList.data || [],
  orgList: state.orgList,
  conversionList: state.conversionList
});

const mapDispatch = {
  grabConversionList: actions.grabConversionList,
  grabOrgSearch: actions.grabOrgSearch
};

export default connect(
  mapState,
  mapDispatch
)(DetailsList);
