import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://brxyhorsxcsfbiivubin.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyeHlob3JzeGNzZmJpaXZ1YmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxNjAyMTQsImV4cCI6MjAxNDczNjIxNH0._RS1Z6BydY99zFyVtseR1HKH_KNVSOU1IsPj7i019l0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);