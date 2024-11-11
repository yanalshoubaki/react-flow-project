import { PropsWithChildren } from 'react'
import { ReactFlowProvider } from 'reactflow'

const FlowProvider = ({children}: PropsWithChildren) => {
  return (
    <ReactFlowProvider>{children}</ReactFlowProvider>
  )
}

export default FlowProvider