import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { SuiGraphQLClient } from "@mysten/sui/graphql";
import { namedPackagesPlugin, Transaction } from "@mysten/sui/transactions";
import { normalizeSuiAddress } from "@mysten/sui/utils";

const NETWORK = 'mainnet';

const client = new SuiClient({
    url: getFullnodeUrl(NETWORK)
})

// register our mvr plugin globally.
Transaction.registerGlobalBuildPlugin('namedPackages', namedPackagesPlugin({
    suiGraphQLClient: new SuiGraphQLClient({
        url: `https://sui-${NETWORK}.mystenlabs.com/graphql`
    })
}));

async function dryRun() {
    const transaction = new Transaction();

    const hero = transaction.moveCall({
        target: `@testingafreeclaim/hero::hero::new`,
        arguments: [
            transaction.pure.string('My hero!')
        ]
    });
    
    const hero1 = transaction.moveCall({
        target: `@testingafreeclaim/hero::hero::new_v2`,
        arguments: [
            transaction.pure.string('My V2 hero')
        ]
    });

    const hero2 = transaction.moveCall({
        target: `@testingafreeclaim/hero/1::hero::new`,
        arguments: [
            transaction.pure.string('My hero!')
        ]
    });

    transaction.moveCall({
        target: `@testingafreeclaim/hero::hero::set_name`,
        arguments: [
            hero,
            transaction.pure.string('My Hero got renamed!')
        ]
    });

    // // testing the V1 with the same name
    // transaction.moveCall({
    //     target: `@testingafreeclaim/hero::hero::noop`,
    //     typeArguments: [
    //         `@testingafreeclaim/hero::hero::Hero`
    //     ]
    // });

    // // testing the V2 with the same name
    // transaction.moveCall({
    //     target: `@testingafreeclaim/hero::hero::noop`,
    //     typeArguments: [
    //         `@testingafreeclaim/hero::hero::HeroV2`
    //     ]
    // });

    // transaction.setSender();

    transaction.setSender('0xe0b97bff42fcef320b5f148db69033b9f689555348b2e90f1da72b0644fa37d0')
    transaction.transferObjects([hero, hero1, hero2], transaction.pure.address('0x2'))

    const res = await client.dryRunTransactionBlock({
        transactionBlock: await transaction.build({
            client
        })
    });

    console.dir(res, { depth: null });
}

dryRun();
