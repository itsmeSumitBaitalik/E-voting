import { Globe, Users, Target, Award } from 'lucide-react';

export default function PartiesInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Political Parties Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {parties.map((party) => (
          <div key={party.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${party.bgColor}`}>
                  {party.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">{party.name}</h3>
                  <p className="text-sm text-gray-600">{party.slogan}</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-gray-800 mb-2">Key Policies</h4>
                <ul className="space-y-2">
                  {party.policies.map((policy, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 text-sm mr-2">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{policy}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-gray-800 mb-2">Current Leadership</h4>
                <p className="text-gray-600">{party.leadership}</p>
              </div>

              <div className="mt-6">
                <button className="text-blue-600 hover:text-blue-800 font-medium transition-all">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const parties = [
  {
    id: 1,
    name: 'Progressive Party',
    slogan: 'Building a Better Tomorrow',
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    bgColor: 'bg-blue-100',
    policies: ['Universal Healthcare Reform', 'Green Energy Initiative', 'Education Accessibility'],
    leadership: 'Jane Wilson - Party Chair',
  },
  {
    id: 2,
    name: 'Conservative Party',
    slogan: 'Preserving Our Values',
    icon: <Target className="w-6 h-6 text-red-600" />,
    bgColor: 'bg-red-100',
    policies: ['Fiscal Responsibility', 'Strong National Defense', 'Free Market Economics'],
    leadership: 'Robert Mitchell - Party Chair',
  },
  {
    id: 3,
    name: 'Green Party',
    slogan: 'For a Sustainable Future',
    icon: <Award className="w-6 h-6 text-green-600" />,
    bgColor: 'bg-green-100',
    policies: ['Environmental Protection', 'Renewable Energy', 'Sustainable Agriculture'],
    leadership: 'Maria Garcia - Party Chair',
  },
  {
    id: 4,
    name: 'Independent Alliance',
    slogan: 'People Before Politics',
    icon: <Users className="w-6 h-6 text-purple-600" />,
    bgColor: 'bg-purple-100',
    policies: ['Government Transparency', 'Electoral Reform', 'Local Governance'],
    leadership: 'David Chen - Alliance Coordinator',
  },
];

