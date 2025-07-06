export default interface ChipProps {
  text: Audience
  hasDarkBackground?: boolean
}

export enum Audience {
  OPEN = "Open",
  CLOSED = "Closed"
}