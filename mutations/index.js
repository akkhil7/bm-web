import gql from 'graphql-tag'

export const CREATE_STRIPE_SESSION = gql`
  mutation createStripeSessionMutation($input: createStripeSessionInput!) {
    createStripeSession(input: $input) {
      session
    }
  }
`
