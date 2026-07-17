import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { logActivity } from '../../lib/logger';
import { Lock, Save, Loader, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Profile() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    // Get current user email
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user?.email) setEmail(user.email);
    });
  }, []);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: password
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Password updated successfully!");
      logActivity('PASSWORD_CHANGE', 'USER', 'Admin changed their password');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">My Profile</h1>
          <p className="text-slate-400 mt-1">Manage your account settings and change your password.</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-2xl">
        <div className="mb-6">
          <label className="text-sm font-medium text-slate-400 block mb-2">Account Email</label>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-300">
            {email || 'Loading...'}
          </div>
        </div>

        <div className="border-t border-slate-800 my-6"></div>

        <h2 className="text-lg font-semibold text-white mb-4">Change Password</h2>

        {error && (
          <div className="mb-4 rounded-xl bg-red-500/10 border border-red-500/20 p-4 flex gap-3 text-red-400 text-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-4 rounded-xl bg-teal-500/10 border border-teal-500/20 p-4 flex gap-3 text-teal-400 text-sm">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>{success}</span>
          </div>
        )}

        <form onSubmit={handleUpdatePassword} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-400 block mb-2">New Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-slate-950 border border-slate-800 rounded-xl block w-full pl-10 pr-3 py-3 text-white placeholder-slate-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
                placeholder="Enter new password"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-400 block mb-2">Confirm New Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-slate-950 border border-slate-800 rounded-xl block w-full pl-10 pr-3 py-3 text-white placeholder-slate-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
                placeholder="Confirm new password"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-medium rounded-xl hover:bg-teal-600 transition-colors disabled:opacity-50"
            >
              {loading ? <Loader className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
