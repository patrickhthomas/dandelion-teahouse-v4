import * as React from "react"
import { createClient, Provider as UrlqProvider } from "urql"

export const urqlClient = createClient({
  url: `https://dandelion-teahouse-apothecary.myshopify.com/api/2021-01/graphql.json`,
  fetchOptions: {
    headers: {
      "X-Shopify-Storefront-Access-Token":
        "c0dc6a512f5f2d61d44afbd6bbc8915b",
    },
  },
})

export function SearchProvider({ children }) {
  return <UrlqProvider value={urqlClient}>{children}</UrlqProvider>
}
