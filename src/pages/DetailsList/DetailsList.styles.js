import { Virtualized } from "@paciolan/virtualized-table";
import styled, { css } from "styled-components";

export const Virt = styled(Virtualized)`
  margin-top: 20px;
  margin-bottom: 12px;

  > div.ReactVirtualized__Table__Grid {
    border-bottom: ${props => (props.data.length > 8 ? "1px solid #d7d7d7" : "0")};
    height: ${props => (props.data.length === 0 ? "60px !important" : "inherit")};
  }

  > div.ReactVirtualized__Table__headerRow {
    background-color: #e6e6e6;

    > div.ReactVirtualized__Table__headerColumn {
      border-left: 1px solid #d7d7d7;
      height: 100%;
      align-items: center;

      > span {
        font-size: 12px;
        font-weight: bold;
        color: #6a6a6a;

        > svg {
          height: 20px;
          width: 20px;
        }
      }

      > span:nth-child(1) {
        padding-left: 10px;
      }

      > i {
        padding-left: 10px;
        font-size: 16px;
        color: #858585;
        display: none;
      }
    }
  }

  div.ReactVirtualized__Table__rowColumn {
    border-left: 1px solid #d7d7d7;
    height: 100%;
    align-items: center;

    > i {
      padding-left: 10px;
      font-size: 16px;
      color: #858585;
    }

    > div:nth-child(1) {
      padding-left: 10px;

      > div > div {
        max-width: 600px;
        width: 500px;
      }
    }
  }

  div.ReactVirtualized__Table__rowColumn:last-of-type {
    border-right: 1px solid #d7d7d7;
  }

  .grid-text-match-result {
    font-weight: 700;
  }
`;

export const NoDataDiv = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: #6a6a6a;
  font-size: 13px;
`;

export const SearchBarInput = styled.input`
  border: 1px solid #d7d7d7;
  width: 144px;
  height: 20px;
  margin-left: 20px;
  padding-left: 6px;
  font-size: 13px;
`;

export const ContentContainer = styled.div`
  padding: 12px 12px 0px 12px;
  height: ${props => (props.height ? props.height : "520px")};
  display: flex;
  flex-direction: column;
`;

export const EntriesContainer = styled.div`
  font-size: 13px;
  color: #333;
`;

export const PlusIcon = styled.i`
  font-size: 22px !important;
  height: 24px;
  width: 24px;
  color: #3f7be1;
  float: right;
  margin-right: 24px;
`;
