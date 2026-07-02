export default function Permissions() {
  // Hardcoded preview data — Akshit replaces with real data on Day 3
  const modules = ['Dashboard', 'Employees', 'Attendance', 'Leave', 'Payroll', 'Departments', 'Roles']
  const actions = ['view', 'create', 'edit', 'delete', 'manage', 'approve', 'generate']
  const roles = ['Admin', 'Manager', 'Employee']

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Permission Matrix</h1>
      <p className="text-gray-500 text-sm mb-6">
        Configure what each role can access. Changes save automatically.
      </p>

      {/* Role selector tabs */}
      <div className="flex gap-2 mb-6">
        {roles.map(role => (
          <button
            key={role}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium
                       hover:bg-blue-50 hover:border-blue-300 transition"
          >
            {role}
          </button>
        ))}
      </div>

      {/* Permission grid - static preview */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-5 py-3 text-gray-600 font-medium">Module</th>
              {actions.map(a => (
                <th key={a} className="px-3 py-3 text-gray-500 font-normal capitalize">{a}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {modules.map((mod, idx) => (
              <tr key={mod} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                <td className="px-5 py-3 font-medium text-gray-700">{mod}</td>
                {actions.map(action => (
                  <td key={action} className="px-3 py-3 text-center">
                    <input
                      type="checkbox"
                      disabled
                      className="w-4 h-4 rounded accent-blue-600 cursor-not-allowed opacity-40"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-5 py-3 bg-gray-50 border-t text-xs text-gray-400">
          Connect to backend on Day 3
        </div>
      </div>
    </div>
  )
}