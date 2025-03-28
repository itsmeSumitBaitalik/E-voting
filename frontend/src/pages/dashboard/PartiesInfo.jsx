import {Link} from 'react-router-dom'
import { Parties } from '../components/Parties';

export default function PartiesInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Political Parties Information</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
        {Parties.map((party) => (
          <div key={party.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg`} style={{ backgroundColor: party.bgColor }}>
                  {/* ✅ Corrected Image Rendering */}
                  <img src={party.icon} alt={party.name} className="h-12 w-12" />
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
                <p className="text-gray-600">{party.leadership.name}</p>
              </div>

              <div className="mt-6">
                <Link to="/partiesinfo"><button className="text-blue-600 hover:text-blue-800 font-medium transition-all cursor-pointer">
                  Learn More →
                </button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

