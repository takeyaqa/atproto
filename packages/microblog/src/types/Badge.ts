// @TODO: should we have `name` on subject here?
export interface Record {
  assertion:
    | InviteAssertion
    | EmployeeAssertion
    | TagAssertion
    | UnknownAssertion
  subject: {
    did: string
    name?: string
  }
  createdAt: string
}
export interface InviteAssertion {
  type: 'invite'
}
export interface EmployeeAssertion {
  type: 'employee'
}
export interface TagAssertion {
  type: 'tag'
  tag: string // @TODO is the a more general way to describe "tag"? ie "info"
}
export interface UnknownAssertion {
  type: string
}
