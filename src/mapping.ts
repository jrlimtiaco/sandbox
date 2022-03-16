import {
  Minter as MinterEvent,
  MetaTransactionProcessor as MetaTransactionProcessorEvent,
  SuperOperator as SuperOperatorEvent,
  AdminChanged as AdminChangedEvent,
  Transfer as TransferEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent
} from "../generated/Land/Land"
import {
  Minter,
  MetaTransactionProcessor,
  SuperOperator,
  AdminChanged,
  Transfer,
  Approval,
  ApprovalForAll
} from "../generated/schema"

export function handleMinter(event: MinterEvent): void {
  let entity = new Minter(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.superOperator = event.params.superOperator
  entity.enabled = event.params.enabled
  entity.save()
}

export function handleMetaTransactionProcessor(
  event: MetaTransactionProcessorEvent
): void {
  let entity = new MetaTransactionProcessor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.metaTransactionProcessor = event.params.metaTransactionProcessor
  entity.enabled = event.params.enabled
  entity.save()
}

export function handleSuperOperator(event: SuperOperatorEvent): void {
  let entity = new SuperOperator(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.superOperator = event.params.superOperator
  entity.enabled = event.params.enabled
  entity.save()
}

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._from = event.params._from
  entity._to = event.params._to
  entity._tokenId = event.params._tokenId
  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._owner = event.params._owner
  entity._approved = event.params._approved
  entity._tokenId = event.params._tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._owner = event.params._owner
  entity._operator = event.params._operator
  entity._approved = event.params._approved
  entity.save()
}
