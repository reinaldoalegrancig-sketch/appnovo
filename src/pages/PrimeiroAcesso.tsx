import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { ChefHat, Mail, Loader2, ArrowRight, Lock } from 'lucide-react';

const DEFAULT_PASSWORD = 'receitas123';

const PrimeiroAcesso = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password: DEFAULT_PASSWORD,
    });

    if (error) {
      setError('E-mail não encontrado ou acesso ainda não liberado. Verifique com quem te enviou este material.');
      setLoading(false);
    } else {
      navigate('/produtos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md z-10 space-y-6">
        <div className="bg-card/80 backdrop-blur-2xl p-10 md:p-14 rounded-[4rem] shadow-premium border-2 border-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-primary rounded-t-[4rem]" />

          <div className="flex flex-col items-center text-center space-y-8">
            {/* Ícone */}
            <div className="w-24 h-24 bg-primary text-white rounded-[2rem] flex items-center justify-center shadow-2xl">
              <ChefHat size={48} />
            </div>

            {/* Título */}
            <div className="space-y-2">
              <h1 className="text-4xl font-black text-foreground uppercase tracking-tighter italic">
                Primeiro Acesso
              </h1>
              <p className="text-muted-foreground font-bold italic opacity-70">
                Chef Fernanda Oliveira
              </p>
            </div>

            {/* Instrução */}
            <div className="bg-primary/8 border border-primary/20 rounded-3xl p-4 w-full text-left flex gap-3 items-start">
              <Lock size={18} className="text-primary shrink-0 mt-0.5" />
              <p className="text-sm font-bold text-foreground/80 leading-snug">
                Digite o <strong>e-mail usado na compra</strong>. O acesso será liberado automaticamente — sem precisar criar senha.
              </p>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs font-black p-4 rounded-2xl leading-snug text-left">
                  {error}
                </div>
              )}

              <div className="relative group">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                <input
                  type="email"
                  placeholder="Seu e-mail de compra"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  maxLength={255}
                  autoComplete="email"
                  className="w-full bg-white/50 border-2 border-border rounded-3xl py-5 pl-14 pr-6 font-bold text-lg focus:border-primary outline-none transition-all shadow-inner placeholder:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white font-black py-6 rounded-[2rem] text-sm uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-70 border-b-8 border-black/20 hover:opacity-90 mt-2"
              >
                {loading
                  ? <Loader2 className="animate-spin" size={24} />
                  : <> Acessar Meu Acervo <ArrowRight size={20} /> </>
                }
              </button>
            </form>

            {/* Footer */}
            <div className="pt-4 border-t border-border w-full">
              <button
                onClick={() => navigate('/login')}
                className="w-full text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors py-1"
              >
                Já tenho senha — Login completo
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground font-bold opacity-50">
          Problemas para acessar? Entre em contato com o suporte.
        </p>
      </div>
    </div>
  );
};

export default PrimeiroAcesso;
