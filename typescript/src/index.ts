
import { SuiGraphQLClient } from "@mysten/sui/graphql";
import { namedPackagesPlugin, Transaction } from "@mysten/sui/transactions";

const NETWORK = 'mainnet';

// register our mvr plugin globally.
Transaction.registerGlobalBuildPlugin('namedPackages', namedPackagesPlugin({
    suiGraphQLClient: new SuiGraphQLClient({
        url: `https://sui-${NETWORK}.mystenlabs.com/graphql`
    })
}))
