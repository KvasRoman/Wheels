
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ziznhlavhcyeblwoqjrw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppem5obGF2aGN5ZWJsd29xanJ3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzU5NjM5NiwiZXhwIjoyMDAzMTcyMzk2fQ._WW-LzU40t8AAv2vfiMwvcD1WU93DgmeNpf3dIUmo28'

export const supabase = createClient(supabaseUrl, supabaseKey)