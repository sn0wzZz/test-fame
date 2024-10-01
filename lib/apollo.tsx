import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: String(process.env.NEXT_PUBLIC_SHARINGTOOL_WS),
          shouldRetry: () => true,
        })
      )
    : null;

const httpLink = new HttpLink({
  uri: String(process.env.NEXT_PUBLIC_FAME_API),
  credentials: "include",
});

const link =
  typeof window !== "undefined" && wsLink != null
    ? split(
        ({ query }) => {
          const def = getMainDefinition(query);
          return (
            def.kind === "OperationDefinition" &&
            def.operation === "subscription"
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  credentials: "include",
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
});
