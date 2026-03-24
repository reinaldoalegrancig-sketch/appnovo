import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { KeyRound, Lock, Loader2, ArrowRight, CheckCircle2 } from 'lucide-react';

const NovaSenha = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Supabase injeta o token na URL automaticamente ao clicar no link do e-mail
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setReady(true);
      }
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) { setError('As senhas não coincidem.'); return; }
    if (password.length < 6) { setError('A senha deve ter pelo menos 6 caracteres.'); return; }

    setLoading(true); setError(null);
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setTimeout(() => navigate('/login'), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md z-10">
        <div className="bg-card/80 backdrop-blur-2xl p-10 md:p-14 rounded-[4rem] shadow-premium border-2 border-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-blue-600 rounded-t-[4rem]" />

          <div className="flex flex-col items-center text-center space-y-8">
            <div className="w-24 h-24 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center shadow-2xl">
              {success ? <CheckCircle2 size={48} /> : <KeyRound size={48} />}
            </div>

            <div className="space-y-2">
              <h2 className="text-4xl font-black text-foreground uppercase tracking-tighter italic">
                {success ? 'Senha Alterada!' : 'Nova Senha'}
              </h2>
              <p className="text-muted-foreground font-bold italic opacity-70">
                {success ? 'Você será redirecionado em instantes...' : 'Digite sua nova senha abaixo'}
              </p>
            </div>

            {success ? (
              <div className="bg-emerald-50 border-2 border-emerald-200 text-emerald-700 p-5 rounded-3xl flex items-start gap-3 text-left w-full">
                <CheckCircle2 size={22} className="shrink-0 mt-0.5" />
                <p className="font-bold text-sm">Senha alterada com sucesso! Redirecionando para o login...</p>
              </div>
            ) : !ready ? (
              <div className="text-center space-y-4 py-4">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto" />
                <p className="font-bold text-muted-foreground">Verificando link de redefinição...</p>
                <p className="text-xs text-muted-foreground opacity-60 font-bold">
                  Se este link expirou, solicite um novo na tela de login.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                {error && (
                  <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs font-black p-4 rounded-2xl uppercase tracking-widest">
                    {error}
                  </div>
                )}

                <div className="relative group">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-blue-600 transition-colors" size={20} />
                  <input type="password" placeholder="Nova senha" value={password} onChange={e => setPassword(e.target.value)} required
                    className="w-full bg-white/50 border-2 border-border rounded-3xl py-5 pl-14 pr-6 font-bold text-lg focus:border-blue-600 outline-none transition-all shadow-inner placeholder:opacity-50" />
                </div>

                <div className="relative group">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-blue-600 transition-colors" size={20} />
                  <input type="password" placeholder="Confirmar nova senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required
                    className="w-full bg-white/50 border-2 border-border rounded-3xl py-5 pl-14 pr-6 font-bold text-lg focus:border-blue-600 outline-none transition-all shadow-inner placeholder:opacity-50" />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-6 rounded-[2rem] text-sm uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-70 border-b-8 border-black/20">
                  {loading ? <Loader2 className="animate-spin" size={24} /> : <>Salvar Nova Senha <ArrowRight size={20} /></>}
                </button>
              </form>
            )}

            <div className="pt-2 border-t border-border w-full">
              <button onClick={() => navigate('/login')} className="w-full text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors py-1">
                ← Voltar para Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovaSenha;
