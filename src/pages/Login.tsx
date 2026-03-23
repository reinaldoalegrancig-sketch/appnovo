import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { ChefHat, Mail, Lock, Loader2, ArrowRight, Shield } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/produtos');
    }
  };

  const handleAdminQuickLogin = () => {
    setEmail('admin@adminfe.com.br');
    setPassword('admin123'); // Sugestão para ela criar no Supabase
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 relative overflow-hidden">
      {/* Background Decorativo ... same ... */}

      <div className="w-full max-w-md z-10">
        <div className="bg-card/80 backdrop-blur-2xl p-10 md:p-14 rounded-[4rem] shadow-premium border-2 border-white/50 relative overflow-hidden">
          {/* Top Border Accent ... same ... */}

          <div className="flex flex-col items-center text-center space-y-8">
            <div className="w-24 h-24 bg-primary text-white rounded-[2rem] flex items-center justify-center shadow-2xl shadow-primary/40 animate-bounce-slow">
              <ChefHat size={48} />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-foreground uppercase tracking-tighter italic">Portal Elite</h2>
              <p className="text-muted-foreground font-bold italic opacity-70">Chef Fernanda Oliveira</p>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-6">
              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs font-black p-4 rounded-2xl animate-shake uppercase tracking-widest">
                  {error === 'Invalid login credentials' ? 'Dados Incorretos. Tente novamente.' : error}
                </div>
              )}

              <div className="space-y-4">
                <div className="relative group">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                  <input 
                    type="email" 
                    placeholder="Seu E-mail de Aluno"
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
                    placeholder="Sua Senha Mestra"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-white/50 border-2 border-border rounded-3xl py-6 pl-14 pr-6 font-bold text-lg focus:border-primary outline-none transition-all shadow-inner placeholder:opacity-50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-foreground text-white font-black py-6 rounded-[2rem] text-sm uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center gap-3 transition-all hover:bg-primary active:scale-95 disabled:opacity-70 border-b-8 border-black/20"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={24} />
                  ) : (
                    <>Acessar Acervo <ArrowRight size={20} /></>
                  )}
                </button>

                <button 
                  type="button"
                  onClick={handleAdminQuickLogin}
                  className="w-full bg-secondary/20 text-secondary-foreground border-2 border-dashed border-secondary/50 font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-secondary/30 transition-all"
                >
                  <Shield size={14} /> Ativar Login Rápido (Fernanda)
                </button>
              </div>
            </form>

            <div className="pt-6 border-t border-border w-full flex flex-col gap-4">
              <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-relaxed">
                Acesso restrito para alunos da Chef Fernanda Oliveira. 
                <br />Problema no acesso? <span className="text-primary cursor-pointer border-b border-primary/20">Suporte 24h</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
