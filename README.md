# MVR Workshop

# Instructions

## Installing dependencies
Make sure you have the Sui CLI, cargo, and pnpm installed:
```
brew install sui pnpm rust
```

If it's your first time using Sui, set up your environment:
```
sui client --yes new-env --alias mainnet --rpc https://fullnode.mainnet.sui.io:443
sui client switch --env testnet
sui client envs
```

Clone the MVR repo, and install the mvr cli:

```
git clone https://github.com/MystenLabs/mvr
cd mvr/mvr-cli
cargo install --path .
```

If you don't have ~/.cargo/bin on your path, add it for now:

```
export PATH="${PATH}/~/.cargo/bin"
```

## Using MVR for Move dependency management

We're going to create a package that uses the `hero` package.

```
sui move new workshop
cd workshop
```

This creates the package that we have in this repo, name it something else when you run it.

Now we can add a dependency on the `hero` package using mvr:
```
mvr add @testingafreeclaim/hero --network testnet
```

Now when you build the package, it will automatically fetch the `hero` package.
```
sui move build
```

To switch to mainnet, just change this line in your Move.toml:
```
[r.mvr]
network = "mainnet"
```

Run a build again to see that it fetches the mainnet version of the `hero` package.
```
sui move build
```

# Using MVR in PTBs

Change into the typescript directory and install the dependencies:
```
cd mvr-demo/typescript
pnpm install
```
Run the ptb on mainnet:
```
pnpm ts-node src/index.ts
```

To change to testnet, just change this line in index.ts:
```
const NETWORK = 'mainnet';
```
to
```
const NETWORK = 'testnet';
``` 

And then, the **exact same PTB** will run on testnet.
