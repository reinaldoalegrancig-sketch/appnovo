import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';
import { UserPlus, Users, Trash2, ChevronLeft, Save, Loader2, CheckSquare, Square, Shield, Mail } from 'lucide-react';

const ALL_PRODUCTS = [
  { id: 'paes-200', label: '200 Receitas de Pães' },
  { id: 'frigideira-15', label: '+15 Frigideira/Micro-ondas' },
  { id: 'airfryer-25', label: '+25 Air Fryer' },
  { id: 'biscoitos-30', label: '+30 Bolachas e Biscoitos' },
  { id: 'maquina-pao-40', label: '+40 Máquina de Pão' },
];

const AdminStudents = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  const [students, setStudents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Formulário novo aluno
  const [newEmail, setNewEmail] = useState('');
  const [newProducts, setNewProducts] = useState<string[]>(['paes-200']);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!isAdmin) { navigate('/produtos'); return; }
    fetchStudents();
  }, [isAdmin]);

  const fetchStudents = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.auth.admin.listUsers();
    if (data) {
      // Filtra apenas alunos (não admins)
      const alunos = data.users.filter(u => u.email !== 'admin@adminfe.com.br');
      setStudents(alunos);
    } else {
      console.error(error);
    }
    setIsLoading(false);
  };

  const toggleProduct = (productId: string) => {
    setNewProducts(prev =>
      prev.includes(productId)
        ? prev.filter(p => p !== productId)
        : [...prev, productId]
    );
  };

  const handleCreateStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);
    setIsSaving(true);

    if (newProducts.length === 0) {
      setFormError('Selecione pelo menos um produto.');
      setIsSaving(false);
      return;
    }

    // Verificar se já existe
    const existing = students.find(s => s.email === newEmail);

    if (existing) {
      // Atualizar metadados
      const { error } = await supabase.auth.admin.updateUserById(existing.id, {
        user_metadata: { unlocked_products: newProducts }
      });
      if (error) {
        setFormError('Erro ao atualizar aluno: ' + error.message);
      } else {
        setFormSuccess(`✅ Aluno ${newEmail} atualizado com sucesso!`);
        setNewEmail('');
        setNewProducts(['paes-200']);
        fetchStudents();
      }
    } else {
      // Criar novo
      const { error } = await supabase.auth.admin.createUser({
        email: newEmail,
        password: 'receitas123',
        email_confirm: true,
        user_metadata: { unlocked_products: newProducts }
      });
      if (error) {
        setFormError('Erro ao criar aluno: ' + error.message);
      } else {
        setFormSuccess(`✅ Aluno criado! Login: ${newEmail} | Senha: receitas123`);
        setNewEmail('');
        setNewProducts(['paes-200']);
        fetchStudents();
      }
    }

    setIsSaving(false);
  };

  const handleDeleteStudent = async (userId: string, email: string) => {
    if (!confirm(`Remover acesso de ${email}?`)) return;
    const { error } = await supabase.auth.admin.deleteUser(userId);
    if (error) {
      alert('Erro ao remover: ' + error.message);
    } else {
      fetchStudents();
    }
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <nav className="bg-white border-b border-border py-6 px-6 sm:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <Link to="/produtos" className="flex items-center gap-3 text-muted-foreground hover:text-primary font-black uppercase text-xs transition-colors">
          <ChevronLeft size={20} /> Voltar
        </Link>
        <div className="flex items-center gap-3">
          <Shield size={20} className="text-primary" />
          <span className="font-black text-sm uppercase tracking-widest text-foreground">Painel Admin</span>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-16 space-y-16">

        {/* Título */}
        <header className="space-y-4">
          <div className="bg-primary/10 inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20">
            <Users size={14} className="text-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Gestão de Alunos</span>
          </div>
          <h1 className="text-5xl font-black text-foreground tracking-tighter uppercase leading-none">Gerenciar Alunos</h1>
          <p className="text-muted-foreground font-bold italic opacity-70">Cadastre alunos após a compra. Login: e-mail | Senha: <span className="text-primary font-black">receitas123</span></p>
        </header>

        {/* Formulário Novo Aluno */}
        <section className="bg-card rounded-[3rem] border-2 border-border p-10 space-y-8 shadow-premium">
          <h2 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
            <UserPlus size={28} className="text-primary" /> Novo Aluno / Atualizar Acesso
          </h2>

          <form onSubmit={handleCreateStudent} className="space-y-8">
            {/* Email */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">E-mail do comprador</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={e => setNewEmail(e.target.value)}
                  placeholder="email@exemplo.com"
                  className="w-full bg-white border-2 border-border rounded-2xl py-5 pl-14 pr-6 font-bold text-lg focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            {/* Produtos */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Produtos liberados</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ALL_PRODUCTS.map(p => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => toggleProduct(p.id)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 font-bold text-sm text-left transition-all ${newProducts.includes(p.id) ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-white text-muted-foreground hover:border-primary/40'}`}
                  >
                    {newProducts.includes(p.id) ? <CheckSquare size={20} /> : <Square size={20} />}
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {formError && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs font-black p-4 rounded-2xl uppercase tracking-widest">
                {formError}
              </div>
            )}
            {formSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-700 text-sm font-black p-4 rounded-2xl">
                {formSuccess}
              </div>
            )}

            <button
              type="submit"
              disabled={isSaving}
              className="w-full bg-primary text-white font-black py-6 rounded-[2rem] text-sm uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {isSaving ? <Loader2 className="animate-spin" size={22} /> : <Save size={22} />}
              {isSaving ? 'Salvando...' : 'Criar / Atualizar Acesso'}
            </button>
          </form>
        </section>

        {/* Lista de Alunos */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
            <Users size={28} className="text-primary" />
            Alunos Cadastrados
            <span className="bg-primary/10 text-primary text-xs font-black px-3 py-1 rounded-full">{students.length}</span>
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
            </div>
          ) : students.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="text-6xl">📭</div>
              <p className="font-black text-xl text-foreground uppercase">Nenhum aluno cadastrado</p>
              <p className="text-muted-foreground font-bold">Cadastre o primeiro aluno acima.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {students.map(student => {
                const produtos: string[] = student.user_metadata?.unlocked_products ?? [];
                return (
                  <div key={student.id} className="bg-card rounded-[2rem] border-2 border-border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <p className="font-black text-foreground">{student.email}</p>
                      <div className="flex flex-wrap gap-2">
                        {produtos.length === 0 ? (
                          <span className="bg-destructive/10 text-destructive text-[10px] font-black px-3 py-1 rounded-full">Sem produtos</span>
                        ) : (
                          produtos.map(pid => (
                            <span key={pid} className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full">
                              {ALL_PRODUCTS.find(p => p.id === pid)?.label ?? pid}
                            </span>
                          ))
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteStudent(student.id, student.email!)}
                      className="shrink-0 w-12 h-12 bg-destructive/10 hover:bg-destructive text-destructive hover:text-white rounded-2xl flex items-center justify-center transition-all"
                      title="Remover acesso"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminStudents;
