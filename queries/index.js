import gql from 'graphql-tag'
export const CURRENT_USER = gql`
  {
    currentUser {
      firstName
      lastName
      email
      setting {
        id
        accountType
      }
    }
  }
`
