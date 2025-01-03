interface TerminalProps {
  command: string
  children: React.ReactNode
}

export function Terminal({ command, children }: TerminalProps) {
  return (
    <div className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-6 shadow-lg border border-gray-700">
      <div className="text-green-400 mb-4 font-mono text-sm">$ {command}</div>
      <div className="text-gray-200 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  )
}

