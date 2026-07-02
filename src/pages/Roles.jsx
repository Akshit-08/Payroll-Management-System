import { usePermissionContext } from '../contexts/PermissionContext'

export default function Roles() {
  // Akshit will connect real data tomorrow — use empty arrays for now
  const roles = [
    { id: 1, name: 'Admin', description: 'Full access' },
    { id: 2, name: 'Manager', description: 'Manage team' },
    { id: 3, name: 'Employee', description: 'Own data only' }
  ]

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Role Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Create Role
        </button>
      </div>

      {/* Role Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {roles.map(role => (
          <div key={role.id} className="bg-white rounded-xl shadow p-5 border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{role.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{role.description}</p>
              </div>
              <div className="flex gap-2">
                <button className="text-blue-500 hover:text-blue-700 text-sm">Edit</button>
                <button className="text-red-400 hover:text-red-600 text-sm">Delete</button>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-xs text-gray-400">Permissions assigned: —</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}