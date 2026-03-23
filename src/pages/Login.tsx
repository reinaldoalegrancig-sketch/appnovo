import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { ChefHat, Mail, Lock, Loader2, ArrowRight, Shield } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/produtos');
    }
  };

  const handleAdminMode = () => {
    setIsAdminMode(true);
    setEmail('');
    setPassword('');
    setError(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 relative overflow-hidden">

      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md z-10">
        <div className="bg-card/80 backdrop-blur-2xl p-10 md:p-14 rounded-[4rem] shadow-premium border-2 border-white/50 relative overflow-hidden">

          {/* Top accent */}
          <div className={`absolute top-0 left-0 right-0 h-2 ${isAdminMode ? 'bg-amber-500' : 'bg-primary'} rounded-t-[4rem]`} />

          <div className="flex flex-col items-center text-center space-y-8">

            {/* Ícone */}
            <div className={`w-24 h-24 ${isAdminMode ? 'bg-amber-500' : 'bg-primary'} text-white rounded-[2rem] flex items-center justify-center shadow-2xl transition-colors`}>
              {isAdminMode ? <Shield size={48} /> : <ChefHat size={48} />}
            </div>

            {/* Título */}
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-foreground uppercase tracking-tighter italic">
                {isAdminMode ? 'Área Admin' : 'Portal Elite'}
              </h2>
              <p className="text-muted-foreground font-bold italic opacity-70">
                {isAdminMode ? 'Acesso Exclusivo do Administrador' : 'Chef Fernanda Oliveira'}
              </p>
            </div>

            {/* Formulário */}
            <form onSubmit={handleLogin} className="w-full space-y-6">
              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs font-black p-4 rounded-2xl uppercase tracking-widest">
                  {error === 'Invalid login credentials' ? 'Dados incorretos. Tente novamente.' : error}
                </div>
              )}

              <div className="space-y-4">
                <div className="relative group">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                  <input
                    type="email"
                    placeholder={isAdminMode ? 'E-mail do Administrador' : 'Seu E-mail de Aluno'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/50 border-2 border-border rounded-3xl py-6 pl-14 pr-6 font-bold text-lg focus:border-primary outline-none transition-all shadow-inner placeholder:opacity-50"
                  />
                </div>

                <div className="relative group">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                  <input
                    type="password"
                    placeholder="Sua Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-white/50 border-2 border-border rounded-3xl py-6 pl-14 pr-6 font-bold text-lg focus:border-primary outline-none transition-all shadow-inner placeholder:opacity-50"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white font-black py-6 rounded-[2rem] text-sm uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-70 border-b-8 border-black/20 ${isAdminMode ? 'bg-amber-500 hover:bg-amber-600' : 'bg-foreground hover:bg-primary'}`}
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  <>{isAdminMode ? 'Entrar como Admin' : 'Acessar Acervo'} <ArrowRight size={20} /></>
                )}
              </button>
            </form>

            {/* Rodapé */}
            <div className="pt-4 border-t border-border w-full space-y-4">
              {!isAdminMode ? (
                <button
                  type="button"
                  onClick={handleAdminMode}
                  className="w-full flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-amber-600 transition-colors py-2"
                >
                  <Shield size={13} /> Área Administrativa
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => { setIsAdminMode(false); setEmail(''); setPassword(''); setError(null); }}
                  className="w-full text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  ← Voltar para Login de Aluno
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
