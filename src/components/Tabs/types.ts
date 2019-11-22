import { BaseComponentProps } from "../../common/types"
import { ReactNode } from "react"

export interface TabsProps extends BaseComponentProps {
  children: ReactNode[] | ReactNode
  defaultActiveKey: string
  activeKey: string
  hideAdd: boolean
  size: "default" | "medium"
  onChange: (activeKey: string) => void
}

export interface TabPane {
  key: string
  tab: string | ReactNode
}
