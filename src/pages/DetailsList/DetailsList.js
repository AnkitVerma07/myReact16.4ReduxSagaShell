import React from "react";
import orderBy from "lodash.orderby";
import {
  Virt,
  NoDataDiv,
  SearchBarContainer,
  SearchBarInput,
  EntriesContainer,
  ContentContainer
} from "./DetailsList.styles";
import OpCard from "../../global/common/OpCard";
import LoadingSpinner from "../../global/common/LoadingSpinner";
import { conversionJobConfig, orgResultsConfig } from "../../global/utils/tableConfig";
import { highlightText, sortFunc } from "./utils";
import { constants } from "../../global/utils/constants";
import { Row, Column } from "@paciolan/primitives";
import { SearchButton, Input, InputLabel } from "../../global/styles";

class DetailsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      orgSearch: "",
      data: []
    };
  }

  componentDidMount() {
    this.props.grabConversionList();
  }

  componentDidUpdate() {
    if (
      (this.props.data !== this.state.data && this.state.search.length === 0) ||
      (this.props.data !== this.state.data && this.state.search.length === 1)
    ) {
      this.setState({
        data: this.props.data
      });
    }
  }

  onSearchChange = e => {
    const { value } = e.target;
    this.handleSearch(value);
  };

  handleSearch = searchParam => {
    const { data } = this.props;
    const filteredData = data.reduce((acc, row) => {
      const filteredRow = this.searchRow(row, searchParam);
      if (filteredRow) acc.push(filteredRow);
      return acc;
    }, []);
    if (searchParam.length > 1) {
      this.setState({
        search: searchParam,
        data: filteredData
      });
    } else {
      this.setState({
        search: searchParam
      });
    }
  };

  searchRow = (row, searchParam) => {
    if (!searchParam) return null;

    searchParam = searchParam.toLowerCase().trim();
    let match = false;
    const _row = { ...row };
    for (let key in row) {
      if (row[key]) {
        if (typeof row[key] === "string") {
          if (row[key].toLowerCase().includes(searchParam)) {
            _row[key] = highlightText(searchParam, row[key], true, "grid-text-match-result");
            match = true;
          }
        } else if (typeof row[key] === "object" && row[key].$$typeof) {
          if (row[key].props.textid.toLowerCase().includes(searchParam)) {
            _row[key] = highlightText(searchParam, row[key].props.textid, true, "grid-text-match-result");
            match = true;
          }
        }
      }
    }
    if (match) return _row;
  };

  getSearchBar = () => {
    const { search } = this.state;
    return (
      <SearchBarContainer>
        Find <SearchBarInput value={search} onChange={this.onSearchChange} />
      </SearchBarContainer>
    );
  };

  getTable = () => {
    const { data } = this.state;
    const defaultData = orderBy(data, [sortFunc], ["asc"]);
    return (
      <Virt
        config={conversionJobConfig}
        data={defaultData}
        search={this.state.search}
        tableHeight="medium"
        tableName="tfundsConversionStatus"
      />
    );
  };

  getOrgResultTable = () => {
    const { orgResults } = this.props;
    const defaultData = orderBy(orgResults, [sortFunc], ["asc"]);
    return (
      <Virt
        config={orgResultsConfig}
        data={defaultData}
        tableHeight="medium"
        onLinkClick={id => this.props.history.push(`${constants.CONVERSION_URL}/${id}`)}
      />
    );
  };

  getEntries = () => {
    const currentCount = this.state.data.length;
    const totalCount = this.props.data.length;
    const { search } = this.state;
    const singularOrPlural = totalCount === 1 ? `entry` : `entries`;
    const entriesString =
      search.length > 1 ? `${currentCount} of ${totalCount} ${singularOrPlural}` : `${totalCount} ${singularOrPlural}`;
    return <EntriesContainer>{entriesString}</EntriesContainer>;
  };

  getConversionStatusCardTitle = () => <React.Fragment>{constants.CONV_STATUS}</React.Fragment>;
  getOrganizationSearchTitle = () => <React.Fragment>{constants.RESULTS}</React.Fragment>;
  getSearchTitle = () => <React.Fragment>{constants.SEARCH_HEADER}</React.Fragment>;

  getConversionStatusCardContent = () => {
    return (
      <ContentContainer height={this.props.data.length}>
        {this.props.data.loading ? <LoadingSpinner height={"-webkit-fill-available"} /> : null}
        {this.props.data.emptyData ? <NoDataDiv>{constants.NO_DATA_FOUND}</NoDataDiv> : null}
        {this.getSearchBar()}
        {this.getTable()}
        {this.getEntries()}
      </ContentContainer>
    );
  };

  getOrganizationSearchContent = () => {
    return (
      <ContentContainer height={this.props.orgResults.length}>
        {this.props.orgResults.loading ? <LoadingSpinner height={"-webkit-fill-available"} /> : null}
        {this.props.orgResults.emptyData ? <NoDataDiv>{constants.NO_DATA_FOUND}</NoDataDiv> : null}
        {this.getOrgResultTable()}
        <EntriesContainer>{this.props.orgResults.length} entries</EntriesContainer>
      </ContentContainer>
    );
  };

  onTextChange = orgSearch => {
    this.setState({ orgSearch });
  };

  getSearchCardContent = () => {
    return (
      <Row>
        <Column>
          <InputLabel padding={"20px"}>
            <Input
              placeholder={constants.SEARCH_LABEL + "..."}
              type="text"
              name={"search"}
              width={"500px"}
              onChange={e => this.onTextChange(e.target.value)}
              value={this.state.orgSearch}
            />
            <SearchButton color={"primary"} onClick={() => this.props.grabOrgSearch({ search: this.state.orgSearch })}>
              Search
            </SearchButton>
          </InputLabel>
        </Column>
      </Row>
    );
  };

  render() {
    return (
      <React.Fragment>
        <OpCard wide title={this.getSearchTitle()} content={this.getSearchCardContent()} />
        {this.props.orgList.callMade ? (
          <OpCard wide title={this.getOrganizationSearchTitle()} content={this.getOrganizationSearchContent()} />
        ) : null}
        <OpCard wide title={this.getConversionStatusCardTitle()} content={this.getConversionStatusCardContent()} />
      </React.Fragment>
    );
  }
}

export default DetailsList;
