import { Transfer as TransferEvent } from "../generated/Land/Land"
import { Token } from "../generated/schema"

export function handleTransferLand(event: TransferEvent): void {
  const id = `${event.params._tokenId}-LAND`
  let entity = new Token(id)
  entity.tokenId = event.params._tokenId
  entity.collection = "LAND"
  entity.owner = event.params._to.toHexString()
  entity.save()
}

export function handleTransferAsset(event: TransferEvent): void {
  const id = `${event.params._tokenId}-ASSET`
  let entity = new Token(id)
  entity.tokenId = event.params._tokenId
  entity.collection = "ASSET"
  entity.owner = event.params._to.toHexString()
  entity.save()
}
