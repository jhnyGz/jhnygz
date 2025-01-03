import { useState } from 'react'
import Layout from '../components/Layout'
import { Terminal } from '../components/Terminal'
import { ProjectCard } from '../components/ProjectCard'
import { Slideshow } from '../components/Slideshow'

export default function Home() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null)

  const projectImages = [
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
  ]

  const projects = [
    {
      id: "1",
      title: "Secure Network Implementation",
      description: "Designed and implemented a secure network infrastructure for a Fortune 500 company.",
      details: [
        "Configured enterprise-grade firewalls",
        "Implemented intrusion detection and prevention systems",
        "Set up VPN for secure remote access",
        "Conducted thorough network segmentation",
        "Implemented multi-factor authentication across the network"
      ]
    },
    {
      id: "2",
      title: "Penetration Testing Framework",
      description: "Developed a custom penetration testing framework for the security team.",
      details: [
        "Created modular architecture for easy expansion",
        "Implemented automated vulnerability scanning",
        "Developed custom exploit modules",
        "Integrated with popular security tools like Metasploit and Nmap",
        "Implemented detailed reporting and analytics features"
      ]
    }
  ]

  const toggleProject = (id: string) => {
    setOpenProjectId(openProjectId === id ? null : id)
  }

  return (
    <Layout>
      <section className="hero py-24 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-300">Cybersecurity Professional</h1>
          <p className="text-xl mb-8 text-gray-300">Protecting digital assets and securing the future</p>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-300">About Me</h2>
          <Terminal command="./display_info">
            <p>Experienced cybersecurity professional with expertise in:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Network Security</li>
              <li>Penetration Testing</li>
              <li>Incident Response</li>
              <li>Security Architecture</li>
            </ul>
          </Terminal>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-300">Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                isOpen={openProjectId === project.id}
                onToggle={() => toggleProject(project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-300">Experience</h2>
          <Terminal command="./show_experience">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-blue-300">Senior Cybersecurity Analyst</h3>
              <p className="text-gray-400 mb-4">TechGuard Solutions | 2020 - Present</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Lead a team of security analysts in threat detection and incident response</li>
                <li>Implement and maintain security information and event management (SIEM) systems</li>
                <li>Conduct regular security assessments and provide recommendations for improvements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-300">Information Security Specialist</h3>
              <p className="text-gray-400 mb-4">CyberDefense Corp | 2017 - 2020</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Performed vulnerability assessments and penetration testing for client networks</li>
                <li>Developed and implemented security policies and procedures</li>
                <li>Provided security awareness training to employees across the organization</li>
              </ul>
            </div>
          </Terminal>
        </div>
      </section>

      <section id="project-gallery" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-300">Project Gallery</h2>
          <div className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg border border-gray-700">
            <Slideshow images={projectImages} />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-300">Contact Me</h2>
          <p className="mb-8 text-xl text-gray-300">Interested in working together? Get in touch!</p>
          <a href="mailto:contact@example.com" className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors inline-block">
            Email Me
          </a>
        </div>
      </section>
    </Layout>
  )
}

