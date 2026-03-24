import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { ChefHat, Mail, Lock, Loader2, ArrowRight, Shield, UserPlus, KeyRound, CheckCircle2 } from 'lucide-react';

type Mode = 'login' | 'register' | 'reset' | 'admin';

const Login = () => {
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const reset = (newMode: Mode) => {
    setMode(newMode);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
    setSuccess(null);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { setError('Dados incorretos. Verifique e tente novamente.'); setLoading(false); }
    else navigate('/produtos');
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) { setError('As senhas não coincidem.'); return; }
    if (password.length < 6) { setError('A senha deve ter pelo menos 6 caracteres.'); return; }
    setLoading(true); setError(null);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) { setError(error.message); setLoading(false); }
    else {
      setLoading(false);
      setSuccess('Conta criada! Confirme seu e-mail para ativar o acesso.');
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/nova-senha`,
    });
    if (error) { setError(error.message); setLoading(false); }
    else {
      setLoading(false);
      setSuccess(`E-mail enviado para ${email}. Verifique sua caixa de entrada.`);
    }
  };

  const configs = {
    login:    { icon: <ChefHat size={48} />, color: 'bg-primary',    title: 'Portal Elite',   subtitle: 'Chef Fernanda Oliveira',             btn: 'Acessar Acervo' },
    register: { icon: <UserPlus size={48} />, color: 'bg-emerald-600', title: 'Criar Conta',   subtitle: 'Registre-se para acessar o acervo',  btn: 'Criar Minha Conta' },
    reset:    { icon: <KeyRound size={48} />, color: 'bg-blue-600',   title: 'Redefinir Senha', subtitle: 'Enviaremos um link para seu e-mail', btn: 'Enviar Link' },
    admin:    { icon: <Shield size={48} />,   color: 'bg-amber-500',  title: 'Área Admin',     subtitle: 'Acesso Exclusivo do Administrador',  btn: 'Entrar como Admin' },
  };
  const cfg = configs[mode];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md z-10">
        <div className="bg-card/80 backdrop-blur-2xl p-10 md:p-14 rounded-[4rem] shadow-premium border-2 border-white/50 relative overflow-hidden">
          <div className={`absolute top-0 left-0 right-0 h-2 ${cfg.color} rounded-t-[4rem] transition-colors`} />

          <div className="flex flex-col items-center text-center space-y-8">
            {/* Ícone */}
            <div className={`w-24 h-24 ${cfg.color} text-white rounded-[2rem] flex items-center justify-center shadow-2xl transition-all`}>
              {cfg.icon}
            </div>

            {/* Título */}
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-foreground uppercase tracking-tighter italic">{cfg.title}</h2>
              <p className="text-muted-foreground font-bold italic opacity-70">{cfg.subtitle}</p>
            </div>

            {/* Sucesso */}
            {success && (
              <div className="bg-emerald-50 border-2 border-emerald-200 text-emerald-700 p-5 rounded-3xl flex items-start gap-3 text-left w-full">
                <CheckCircle2 size={22} className="shrink-0 mt-0.5" />
                <p className="font-bold text-sm">{success}</p>
              </div>
            )}

            {/* Formulário */}
            {!success && (
              <form onSubmit={mode === 'login' || mode === 'admin' ? handleLogin : mode === 'register' ? handleRegister : handleReset} className="w-full space-y-4">
                {error && (
                  <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs font-black p-4 rounded-2xl uppercase tracking-widest">
                    {error}
                  </div>
                )}

                {/* E-mail */}
                <div className="relative group">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                  <input type="email" placeholder="Seu e-mail" value={email} onChange={e => setEmail(e.target.value)} required
                    className="w-full bg-white/50 border-2 border-border rounded-3xl py-5 pl-14 pr-6 font-bold text-lg focus:border-primary outline-none transition-all shadow-inner placeholder:opacity-50" />
                </div>

                {/* Senha (exceto reset) */}
                {mode !== 'reset' && (
                  <div className="relative group">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                    <input type="password" placeholder="Sua senha" value={password} onChange={e => setPassword(e.target.value)} required
                      className="w-full bg-white/50 border-2 border-border rounded-3xl py-5 pl-14 pr-6 font-bold text-lg focus:border-primary outline-none transition-all shadow-inner placeholder:opacity-50" />
                  </div>
                )}

                {/* Confirmar senha (só no registro) */}
                {mode === 'register' && (
                  <div className="relative group">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                    <input type="password" placeholder="Confirmar senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required
                      className="w-full bg-white/50 border-2 border-border rounded-3xl py-5 pl-14 pr-6 font-bold text-lg focus:border-primary outline-none transition-all shadow-inner placeholder:opacity-50" />
                  </div>
                )}

                {/* Link esqueci senha (só no login) */}
                {(mode === 'login' || mode === 'admin') && (
                  <div className="text-right">
                    <button type="button" onClick={() => reset('reset')} className="text-xs font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">
                      Esqueci minha senha
                    </button>
                  </div>
                )}

                <button type="submit" disabled={loading}
                  className={`w-full text-white font-black py-6 rounded-[2rem] text-sm uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-70 border-b-8 border-black/20 ${cfg.color} hover:opacity-90 mt-2`}>
                  {loading ? <Loader2 className="animate-spin" size={24} /> : <>{cfg.btn} <ArrowRight size={20} /></>}
                </button>
              </form>
            )}

            {/* Rodapé de navegação */}
            <div className="pt-4 border-t border-border w-full space-y-3">
              {mode === 'login' && (
                <>
                  <button onClick={() => reset('register')} className="w-full flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-emerald-600 transition-colors py-1">
                    <UserPlus size={13} /> Não tenho conta — Registrar
                  </button>
                  <button onClick={() => reset('admin')} className="w-full flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-amber-600 transition-colors py-1">
                    <Shield size={13} /> Área Administrativa
                  </button>
                </>
              )}
              {(mode === 'register' || mode === 'reset' || mode === 'admin' || success) && (
                <button onClick={() => reset('login')} className="w-full text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors py-1">
                  ← Voltar para Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
