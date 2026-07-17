import { supabase } from './supabaseClient';

export type ActionType = 'CREATE' | 'UPDATE' | 'DELETE' | 'UPLOAD' | 'LOGIN' | 'PASSWORD_CHANGE';
export type ResourceType = 'NEWS' | 'PROGRAMS' | 'TESTIMONIALS' | 'GALLERY' | 'USER' | 'SYSTEM';

export const logActivity = async (
  action: ActionType,
  resource: ResourceType,
  details: string
) => {
  try {
    // Get the current user email
    const { data: { user } } = await supabase.auth.getUser();
    const user_email = user?.email || 'Unknown User';

    const { error } = await supabase
      .from('activity_logs')
      .insert([
        {
          user_email,
          action,
          resource,
          details
        }
      ]);

    if (error) {
      console.error('Failed to log activity:', error);
    }
  } catch (err) {
    console.error('Exception during activity logging:', err);
  }
};
