import React from "react";

/**
 *
 * @param {Array} data - Conversion Data for a given organization
 *
 * @return {Array} Array of data that reflects Conversion Data but with salesActive and renewalsActive key-value formatted
 */
export const formatActive = data => {
  return data.map(row => ({
    ...row,
    salesActive: row.saleActive ? "Active" : "Inactive",
    renewalsActive: row.renewalActive ? "Active" : "Inactive"
  }));
};

/**
 *
 * @param {Object} row - The row object that equates to one row in the Conversion details list table
 *
 * This is a custom utility function to be used by lodash.orderby to help with case insensitivity and highlightText
 */
export const sortFunc = row => {
  if (row.code) {
    if (typeof row.code === "string") {
      return row.code.toLowerCase();
    } else if (row.code.$$typeof && row.code.props && row.code.props.textid) {
      return row.code.props.textid.toLowerCase();
    }
  } else {
    return row;
  }
};

export const escapeRegexSpecialCharacters = function(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

export const hookIgnoreWhiteSpaceSearch = function(text) {
  text = escapeRegexSpecialCharacters(text);
  text = text.replace(/(\\\s)+/g, "\\s*"); // replacing contiguous escaped spaces with zero or more space regexp.
  return text;
};

// Copied over from order-inquiry.
// This utility function allows for searched/matched text results within the grid to be bolded.
// Is used in handleSearch on DetailsList
export const highlightText = function(match, text, renderInternalMatch, customClassName, extraProps) {
  const orgText = text;
  if (match && text && text.trim().length > 0) {
    text = text.replace(/[\*\?]/g, " ");
    var searchTokens = match.split(" ");
    if (searchTokens.length == 1) {
      /*i for no case sensitive, however, should highlight the exact matching word */
      /*g to replace all matches*/
      var regex = null;
      var replaceExpression = null;
      if (customClassName) {
        replaceExpression = `<span class=${customClassName}>$1</span>`;
      } else {
        replaceExpression = '<span class="text-match-result">$1</span>';
      }

      if (renderInternalMatch) {
        regex = new RegExp("(" + hookIgnoreWhiteSpaceSearch(match) + ")", "ig");
      } else {
        regex = new RegExp("\\b(" + hookIgnoreWhiteSpaceSearch(match) + ")", "ig");
      }

      text = text.replace(regex, replaceExpression);
    } else {
      var resultItems = text.split(" ");
      var result = [];
      text = "";
      searchTokens.forEach(token => {
        if (token.length == 0) {
          return true;
        }
        var regex = null;
        var replaceExpression = null;
        if (customClassName) {
          replaceExpression = `<span class=${customClassName}>$1</span>`;
        } else {
          replaceExpression = '<span class="text-match-result">$1</span>';
        }
        resultItems.forEach((item, index) => {
          if (renderInternalMatch) {
            regex = new RegExp("(" + hookIgnoreWhiteSpaceSearch(token) + ")", "ig");
          } else {
            regex = new RegExp("\\b(" + hookIgnoreWhiteSpaceSearch(token) + ")", "ig");
          }
          if (result[index]) {
            if (!result[index].startsWith('<span class="text-match-result">')) {
              result[index] = item.replace(regex, replaceExpression) + " ";
            }
          } else {
            result.push(item.replace(regex, replaceExpression) + " ");
          }
        });
      });

      result.forEach(word => {
        text += word;
      });
    }
  }
  return (
    <span textid={orgText} className="content" dangerouslySetInnerHTML={{ __html: text.trim() }} {...extraProps} />
  );
};
