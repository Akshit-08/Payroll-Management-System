import { supabase } from './supabaseClient'

// Get attendance for an employee (last 30 days default)
export async function getAttendanceByEmployee(employeeId) {
  const { data, error } = await supabase
    .from('attendance')
    .select('*')
    .eq('employee_id', employeeId)
    .order('attendance_date', { ascending: false })
    .limit(30)
  if (error) throw error
  return data
}

// Get all attendance for admin (with employee names)
export async function getAllAttendance(dateFilter = null) {
  let query = supabase
    .from('attendance')
    .select('*, employees(name, employee_id)')
    .order('attendance_date', { ascending: false })
  if (dateFilter) {
    query = query.eq('attendance_date', dateFilter)
  }
  const { data, error } = await query
  if (error) throw error
  return data
}

// Mark attendance (upsert — insert or update for same date)
export async function markAttendance(employeeId, date, status, workingHours) {
  const { data, error } = await supabase
    .from('attendance')
    .upsert(
      {
        employee_id: employeeId,
        attendance_date: date,
        status,
        working_hours: workingHours,
      },
      { onConflict: 'employee_id,attendance_date' },
    )
    .select()
  if (error) throw error
  return data[0]
}

// Check today's attendance for an employee
export async function getTodayAttendance(employeeId) {
  const today = new Date().toISOString().split('T')[0]
  const { data, error } = await supabase
    .from('attendance')
    .select('*')
    .eq('employee_id', employeeId)
    .eq('attendance_date', today)
    .maybeSingle()
  if (error) throw error
  return data
}
