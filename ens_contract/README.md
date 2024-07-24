`forge script script/Ens.s.sol --rpc-url $RPC_URL --private-key $PRIVATE_KEY --broadcast --verify --verifier-url https://api-goerli.arbiscan.io/api
`
toml config

```
[rpc_endpoints]
sepolia = "${RPC_URL}"
arbitrum-goerli = "${RPC_URL}"

[etherscan]
arbitrum-sepolia = { key = "${ARBISCAN_API}", url = "https://api-goerli.arbiscan.io/api" }

```

```
##### arbitrum-sepolia
✅  [Success]Hash: 0xb255e0f71bc4ad4092ea375cf76af93ab6c432c57be9e85654b8f6137246c79f
Contract Address: 0x23705a0D49ECf00597f428Ef5b4F7A9c84F51c9d
Block: 66334055
Paid: 0.0000410334 ETH (410334 gas * 0.1 gwei)

✅ Sequence #1 on arbitrum-sepolia | Total Paid: 0.0000410334 ETH (410334 gas * avg 0.1 gwei)
```

but still can not able to verify 😿😿