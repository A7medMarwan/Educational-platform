import { createClient } from '@supabase/supabase-js'

// هات الـ URL و الـ anon key من supabase dashboard > project > settings > API
const supabaseUrl = 'https://exorrbmqaxaiuyvrwcvh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4b3JyYm1xYXhhaXV5dnJ3Y3ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NDcxNzgsImV4cCI6MjA2NzEyMzE3OH0.payFUQcVJ2A-h7j5hPm0tgHQYKtv9qKZqvifkS4ELdk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
