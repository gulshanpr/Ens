command to verify and deploy in one go

`forge script script/Ens.s.sol --rpc-url $RPC_URL --private-key $PRIVATE_KEY arbitrum --verify --broadcast`

toml config

```P
[rpc_endpoints]
arbitrum = "https://sepolia-rollup.arbitrum.io/rpc"

[etherscan]
arbitrum = { key = "${ARBISCAN_API}", chain=421614 }

```

```
##### arbitrum-sepolia
✅  [Success]Hash: 0x7466add71b9055eeb6f41101d5064a794d8d039a43bc4041762f2dfcc6bc8c55
Contract Address: 0x2FfD94b1B127302Ed2Cd8870bDF686C968aAb296
Block: 66521851
Paid: 0.0004047426 ETH (4047426 gas * 0.1 gwei)

✅ Sequence #1 on arbitrum-sepolia | Total Paid: 0.0004047426 ETH (4047426 gas * avg 0.1 gwei)
```

to verify and deploy contract programmatically this should be the configurations of toml and command
