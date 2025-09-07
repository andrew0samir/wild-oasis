
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://jauwotzcoqpsnnceqbbk.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphdXdvdHpjb3Fwc25uY2VxYmJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0MDk5MTYsImV4cCI6MjA3MTk4NTkxNn0.UooSMd-9t-duifHCkeTgRdASr9-y4_bLVr5_vqWYfVc"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;