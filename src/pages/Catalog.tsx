import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, Flame, Zap, Cookie, Cpu, ChevronRight, Lock, Loader2, Users, LogOut } from 'lucide-react';
import { useAccess } from '../context/AccessContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';

const icons: Record<string, React.ReactNode> = {
  "paes-200": <BookOpen size={32} />,
  "frigideira-15": <Zap size={32} />,
  "airfryer-25": <Flame size={32} />,
  "biscoitos-30": <Cookie size={32} />,
  "maquina-pao-40": <Cpu size={32} />
};

const Catalog = () => {
  const { isUnlocked } = useAccess();
  const { isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true }); // Mantenha uma ordem consistente

      if (data) {
        setProducts(data);
      } else if (error) {
        console.error('Erro ao buscar produtos:', error);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId: string, unlocked: boolean) => {
    if (unlocked) {
      navigate(`/produtos/${productId}`);
    } else {
      // Aqui você pode abrir um modal de checkout ou redirecionar para a oferta
      alert(`Este bônus está bloqueado. Deseja adquirir o acesso ao bônus "${products.find(p => p.id === productId)?.title}"?`);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Catalogo */}
      <header className="pt-24 pb-16 px-6 sm:px-12 bg-white border-b border-border shadow-sm">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-3 text-center md:text-left">
               <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase italic">Catálogo de Receitas</h1>
               <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl">Acesso Exclusivo à Coleção Master da Chef Fernanda Oliveira</p>
            </div>
            <div className="flex items-center gap-4">
               {isAdmin && (
                 <Link to="/admin/alunos" className="bg-primary text-white font-black px-6 py-3 rounded-2xl flex items-center gap-2 text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                   <Users size={16} /> Gerenciar Alunos
                 </Link>
               )}
               <div className="bg-primary/5 px-8 py-4 rounded-3xl border border-primary/20 shadow-inner">
                  <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Cursos Premium &amp; E-books</span>
               </div>
               <button
                 onClick={handleLogout}
                 title="Sair"
                 className="w-12 h-12 bg-secondary hover:bg-destructive/10 hover:text-destructive text-muted-foreground rounded-2xl flex items-center justify-center transition-all border border-border shadow-sm"
               >
                 <LogOut size={18} />
               </button>
            </div>
         </div>
      </header>

      {/* Grid de Produtos */}
      <main className="max-w-7xl mx-auto px-6 mt-12 sm:mt-20">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-6">
            <Loader2 className="w-16 h-16 text-primary animate-spin" />
            <p className="text-xl font-bold text-muted-foreground animate-pulse">Carregando Acervo Elite...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {products.map((product) => {
            const unlocked = isUnlocked(product.id);
            
            return (
              <div 
                key={product.id}
                onClick={() => handleProductClick(product.id, unlocked)}
                className={`group bg-card rounded-[3rem] border-2 border-border shadow-premium p-10 flex flex-col gap-8 transition-all relative overflow-hidden cursor-pointer ${unlocked ? 'hover:border-primary/50 hover:shadow-2xl active:scale-98' : 'opacity-80 grayscale-[0.5]'} ${product.featured && unlocked ? 'border-primary/30 ring-4 ring-primary/5' : ''}`}
              >
                {/* Selo Categoria */}
                <div className="flex justify-between items-start">
                   <div className="bg-secondary px-5 py-2 rounded-2xl border border-border shadow-sm">
                      <span className="text-[10px] font-black uppercase tracking-widest text-secondary-foreground">{product.category}</span>
                   </div>
                   {!unlocked && (
                      <div className="flex items-center gap-2 bg-foreground text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase shadow-lg">
                         Bloqueado <Lock size={12} />
                      </div>
                   )}
                   {product.featured && unlocked && (
                      <div className="flex items-center gap-1 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase shadow-lg">
                         Destaque 👑
                      </div>
                   )}
                </div>

                {/* Icone e Titulo */}
                <div className="space-y-6">
                   <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-inner transition-transform duration-500 ${unlocked ? 'bg-primary/10 text-primary group-hover:scale-110' : 'bg-gray-200 text-gray-400'}`}>
                      {unlocked ? icons[product.id] : <Lock size={32} />}
                   </div>
                   <div className="space-y-2">
                      <h2 className={`text-2xl md:text-3xl font-black tracking-tight leading-none uppercase transition-colors ${unlocked ? 'text-foreground group-hover:text-primary' : 'text-gray-400'}`}>
                        {product.title}
                      </h2>
                      <p className={`text-sm font-bold italic ${unlocked ? 'text-primary/60' : 'text-gray-400'}`}>{product.subtitle}</p>
                   </div>
                   <p className={`text-sm font-bold leading-relaxed opacity-70 border-l-4 pl-4 ${unlocked ? 'text-muted-foreground border-primary/10' : 'text-gray-400 border-gray-200'}`}>
                     {product.description}
                   </p>
                </div>

                {/* Footer Card */}
                <div className="mt-auto space-y-6">
                   <div className="flex justify-between items-center text-[10px] font-black tracking-widest opacity-60">
                      <span>STATUS: {unlocked ? 'DISPONÍVEL' : 'OFFERTA DISPONÍVEL'}</span>
                      <span>{product.count}</span>
                   </div>
                   <button className={`w-full font-black py-6 rounded-[2rem] text-xs uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-3 transition-all border-b-8 active:border-b-0 active:translate-y-1 ${unlocked ? 'bg-foreground text-white group-hover:bg-primary border-black/20 group-hover:border-primary/40' : 'bg-primary text-white border-primary-foreground/20'}`}>
                      {unlocked ? (
                        <>Ver Receitas <ChevronRight size={18} /></>
                      ) : (
                        <>Comprar Agora <ChevronRight size={18} /></>
                      )}
                   </button>
                </div>

                {/* Efeito Visual de Fundo */}
                {unlocked && (
                  <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-primary/5 rounded-full filter blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                )}
              </div>
            );
          })}
          </div>
        )}
      </main>


    </div>
  );
};

export default Catalog;
