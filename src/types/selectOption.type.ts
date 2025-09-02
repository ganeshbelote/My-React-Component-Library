export type OptionProps = {
  value: string
  children: string
  Active?: boolean
  onClick?: () => void
}

export type SelectProps = {
  children: React.ReactElement<OptionProps>[]
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}