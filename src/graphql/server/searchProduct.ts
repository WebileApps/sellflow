import gql from 'graphql-tag';

export const SEARCH_PRODUCT = gql`
  query SearchProduct($keyword: String!) {
    products(first: 10, query: $keyword) {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`;

export const SEARCH_RESULTS = gql`
  query SearchResults($searchText: String!) {
    products(first: 10, query: $searchText) {
      edges {
        node {
          id
          title
          availableForSale
          productType
          handle
          presentmentPriceRanges(first: 1, presentmentCurrencies: USD) {
            edges {
              node {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
          images(first: 1) {
            edges {
              node {
                id
                originalSrc
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`;