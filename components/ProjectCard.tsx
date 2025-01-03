import { Terminal } from './Terminal'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  details: string[]
  isOpen: boolean
  onToggle: () => void
}

export function ProjectCard({ id, title, description, details, isOpen, onToggle }: ProjectCardProps) {
  return (
    <Terminal command={`./display_project --id=${id}`}>
      <h3 className="text-xl font-bold mb-4 text-blue-300">{title}</h3>
      <p className="mb-4">{description}</p>
      <button
        onClick={onToggle}
        className="flex items-center text-green-400 hover:text-green-300 transition-colors"
      >
        {isOpen ? 'Hide Details' : 'Show Details'}
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 ml-2" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 ml-2" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 pl-4 border-l-2 border-green-400">
          <h4 className="text-lg font-semibold mb-2 text-blue-300">Project Details:</h4>
          <ul className="list-disc list-inside space-y-2">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </Terminal>
  )
}

