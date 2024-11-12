import { PropsWithChildren } from 'react'
import { ReactFlowProvider } from '@xyflow/react'

const FlowProvider = ({children}: PropsWithChildren) => {
  return (
    <ReactFlowProvider>{children}</ReactFlowProvider>
  )
}

export default FlowProvider