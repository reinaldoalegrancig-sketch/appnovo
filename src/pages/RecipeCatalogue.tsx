import { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { type Recipe } from '../data/recipes';
import { Plus, Edit3, Save, Undo, X, Printer, Star, ChefHat, BookOpen, Clock, CheckSquare, ChevronRight, ChevronLeft, Search, Loader2 } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useAccess } from '../context/AccessContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';

// MODAL PORTAL DE RECEITA
const RecipeDetailPortal = ({ recipe, onClose, onSave }: { recipe: Recipe | null, onClose: () => void, onSave: (updated: Recipe) => void }) => {
  const { isAdmin } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState<Recipe | null>(recipe);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEditedRecipe(recipe);
    // Se for uma receita nova (sem id real ou recém criada para edição), entra em modo de edição
    if (recipe && (recipe.id.startsWith('new-') || recipe.title === '')) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [recipe]);

  useEffect(() => {
    if (!recipe) return;
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const element = scrollRef.current;
      const progress = (element.scrollTop / (element.scrollHeight - element.clientHeight)) * 100;
      setScrollProgress(progress);
    };
    const container = scrollRef.current;
    if (container) container.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [recipe]);

  if (!recipe || !editedRecipe) return null;

  const handleSave = () => {
    onSave(editedRecipe);
    setIsEditing(false);
  };

  return createPortal(
    <div className="fixed inset-0 z-[999999999] flex items-center justify-center p-0 sm:p-2 bg-black/95 backdrop-blur-xl animate-fade-in" style={{zIndex: 999999999}}>
      <div className="absolute inset-0 z-0" onClick={onClose}></div>
      <div className="bg-white w-full max-w-5xl h-full sm:h-[95vh] sm:rounded-[3rem] shadow-2xl relative z-10 flex flex-col border-t-8 border-primary overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-2 bg-secondary/10 w-full z-100">
           <div className="h-full bg-primary shadow-lg transition-all" style={{ width: `${scrollProgress}%` }}></div>
        </div>

        {/* Header Modal */}
        <div className="p-6 md:p-10 flex justify-between items-center border-b shrink-0 bg-white shadow-sm z-20">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center font-black text-2xl animate-scale-up shadow-lg">F</div>
              <div>
                {isEditing ? (
                  <input 
                    className="font-extrabold text-lg md:text-xl text-foreground uppercase border-b-2 border-primary outline-none"
                    value={editedRecipe.title}
                    onChange={(e) => setEditedRecipe({...editedRecipe, title: e.target.value})}
                    placeholder="Nome da Receita..."
                  />
                ) : (
                  <h4 className="font-extrabold text-lg md:text-xl text-foreground uppercase truncate max-w-[200px] sm:max-w-none">{recipe.title}</h4>
                )}
                <div className="flex items-center gap-2 text-[10px] text-primary font-black uppercase tracking-widest leading-none mt-1">
                   <Clock size={12} /> 
                   {isEditing ? (
                     <div className="flex gap-2">
                       <input className="w-20 border-b border-primary/30 outline-none" placeholder="1h 30m" value={editedRecipe.time} onChange={(e) => setEditedRecipe({...editedRecipe, time: e.target.value})} />
                       • 
                       <input className="w-20 border-b border-primary/30 outline-none" placeholder="12 Unidades" value={editedRecipe.yield} onChange={(e) => setEditedRecipe({...editedRecipe, yield: e.target.value})} />
                     </div>
                   ) : (
                     <>{recipe.time} • {recipe.yield}</>
                   )}
                </div>
              </div>
           </div>
           
           <div className="flex items-center gap-3">
              {isAdmin && (
                <button 
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${isEditing ? 'bg-green-600 text-white shadow-lg shadow-green-200' : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-white border border-border shadow-sm'}`}
                >
                  {isEditing ? <><Save size={18} /> Salvar Receita Master</> : <><Edit3 size={18} /> Editar Receita</>}
                </button>
              )}
              {isEditing && (
                <button onClick={() => setIsEditing(false)} className="w-14 h-14 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center hover:bg-destructive hover:text-white transition-all">
                  <Undo size={24} />
                </button>
              )}
              <button onClick={onClose} className="w-14 h-14 bg-gray-50 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all shadow-md active:scale-90 border border-border">
                 <X size={28} />
              </button>
           </div>
        </div>

        {/* Corpo Modal */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto custom-scrollbar p-6 md:p-16 space-y-16">
           <div className="space-y-6">
              <div className="bg-primary/5 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/20">
                 <Star size={14} className="text-primary fill-primary" />
                 <span className="text-[10px] font-black text-primary uppercase tracking-widest">Acesso Premium Exclusivo</span>
              </div>
              
              {isEditing ? (
                <textarea 
                  className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-none uppercase w-full bg-accent/5 p-4 rounded-3xl border-2 border-primary outline-none"
                  value={editedRecipe.title}
                  onChange={(e) => setEditedRecipe({...editedRecipe, title: e.target.value})}
                  placeholder="DIGITE O NOME DA RECEITA AQUI..."
                />
              ) : (
                <h1 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter leading-none uppercase">{recipe.title}</h1>
              )}

              {isEditing ? (
                <textarea 
                  className="text-xl md:text-2xl text-muted-foreground italic font-medium border-l-8 border-primary/20 pl-8 bg-accent/5 py-6 rounded-r-3xl pr-6 w-full outline-none"
                  value={editedRecipe.description}
                  onChange={(e) => setEditedRecipe({...editedRecipe, description: e.target.value})}
                  rows={3}
                  placeholder="A descrição atraente desta receita..."
                />
              ) : (
                <p className="text-xl md:text-2xl text-muted-foreground italic font-medium border-l-8 border-primary/20 pl-8 bg-accent/5 py-6 rounded-r-3xl pr-6">
                  {recipe.description}
                </p>
              )}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border-2 border-border shadow-inner">
                 <h3 className="text-2xl font-black flex items-center gap-4 text-primary mb-10 border-b-2 border-dashed border-primary/10 pb-4 uppercase tracking-tighter">
                   <ChefHat size={32} /> Ingredientes
                 </h3>
                 
                 {isEditing ? (
                   <textarea 
                     className="w-full bg-white p-6 rounded-3xl border-2 border-primary outline-none font-bold text-lg min-h-[300px]"
                     value={editedRecipe.ingredients.join('\n')}
                     onChange={(e) => setEditedRecipe({...editedRecipe, ingredients: e.target.value.split('\n')})}
                     placeholder="Coloque um ingrediente por linha"
                   />
                 ) : (
                   <ul className="space-y-4">
                     {recipe.ingredients.map((ing, i) => (
                       <li key={i} className="flex items-start gap-4 text-lg text-foreground font-extrabold border-b border-gray-100 pb-3 last:border-0 border-dashed group hover:translate-x-2 transition-transform">
                          <CheckSquare className="text-primary mt-1 shrink-0" size={22} /> {ing}
                       </li>
                     ))}
                   </ul>
                 )}
              </div>

              <div className="space-y-12">
                 <h3 className="text-2xl font-black flex items-center gap-4 text-foreground border-b-2 border-dashed border-border pb-4 uppercase tracking-tighter">
                   <BookOpen size={32} /> Modo de Fazer
                 </h3>
                 
                 {isEditing ? (
                   <textarea 
                     className="w-full bg-accent/5 p-8 rounded-3xl border-2 border-primary outline-none font-black text-lg min-h-[400px] leading-relaxed"
                     value={editedRecipe.instructions.join('\n\n')}
                     onChange={(e) => setEditedRecipe({...editedRecipe, instructions: e.target.value.split('\n\n')})}
                     placeholder="Dê dois enteres entre cada passo para formatar"
                   />
                 ) : (
                   <div className="space-y-12">
                     {recipe.instructions.map((step, i) => (
                       <div key={i} className="flex gap-8 group">
                          <span className="w-12 h-12 bg-foreground text-white rounded-2xl flex items-center justify-center font-black shrink-0 text-xl shadow-premium group-hover:bg-primary transition-colors">{i+1}</span>
                          <p className="text-lg text-muted-foreground font-black pt-2 leading-relaxed tracking-tight">{step}</p>
                       </div>
                     ))}
                   </div>
                 )}

                 <div className="bg-primary/5 p-8 rounded-3xl border-2 border-primary/20 shadow-inner mt-12">
                    <h5 className="font-black text-primary uppercase text-xs mb-4 flex items-center gap-2">💡 Dica da Fernanda</h5>
                    {isEditing ? (
                      <textarea 
                        className="w-full bg-white p-4 rounded-xl border border-primary/20 outline-none font-bold italic text-lg"
                        value={editedRecipe.tip || ''}
                        onChange={(e) => setEditedRecipe({...editedRecipe, tip: e.target.value})}
                        rows={2}
                        placeholder="Uma dica valiosa para sua aluna..."
                      />
                    ) : (
                      <p className="text-foreground font-bold italic text-lg leading-relaxed">{recipe.tip || 'Aproveite esta delícia sem glúten e sem lactose!'}</p>
                    )}
                 </div>
              </div>
           </div>

           <div className="pt-20 border-t flex flex-col sm:flex-row gap-8 justify-between items-center pb-12">
              <button disabled={isEditing} onClick={() => window.print()} className="w-full sm:w-auto bg-white hover:bg-gray-50 text-foreground border-2 border-border font-black py-5 px-10 rounded-2xl flex items-center justify-center gap-4 shadow-md transition-all disabled:opacity-30">
                 <Printer size={24} /> Imprimir PDF Master
              </button>
              {isEditing ? (
                <button onClick={handleSave} className="w-full sm:w-auto bg-green-600 text-white font-black py-6 px-20 rounded-[2rem] text-xl shadow-3xl shadow-green-200 active:scale-95 transition-all uppercase tracking-widest flex items-center gap-3">
                  <Save size={28} /> Salvar Receita Master
                </button>
              ) : (
                <button onClick={onClose} className="w-full sm:w-auto bg-primary text-white font-black py-6 px-20 rounded-[2rem] text-xl shadow-3xl shadow-primary/30 active:scale-95 transition-all uppercase tracking-widest">
                   Anotado! Fechar
                </button>
              )}
           </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const RecipeCatalogue = () => {
  const { productId } = useParams();
  const { isUnlocked } = useAccess();
  const { isAdmin } = useAuth();
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // Edição de Produto (Cabeçalho)
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      // 1. Fetch Product
      const { data: pData, error: pError } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single();
      
      if (pData) setProduct(pData);
      else if (pError) console.error('Erro ao buscar produto:', pError);

      // 2. Fetch Recipes
      const { data: rData, error: rError } = await supabase
        .from('recipes')
        .select('*')
        .eq('product_id', productId)
        .order('created_at', { ascending: true });

      if (rData) {
        const mapped = rData.map((r: any) => ({
          id: r.id,
          productId: r.product_id,
          title: r.title,
          time: r.time,
          yield: r.yield,
          description: r.description,
          category: r.category,
          ingredients: r.ingredients,
          instructions: r.instructions,
          tip: r.tip
        }));
        setAllRecipes(mapped);
      } else if (rError) {
        console.error('Erro ao buscar receitas:', rError);
      }

      setIsLoading(false);
    };

    if (productId) fetchData();
  }, [productId]);

  const productRecipes = useMemo(() => 
    allRecipes.filter(r => r.productId === productId),
    [allRecipes, productId]
  );

  const filteredRecipes = useMemo(() => {
    return productRecipes.filter(r => r.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [productRecipes, searchTerm]);

  // Bloquear scroll
  useEffect(() => {
    document.body.style.overflow = selectedRecipe ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto' };
  }, [selectedRecipe]);

  const handleSaveRecipe = async (updated: Recipe) => {
    try {
      const isNew = updated.id.startsWith('new-');
      const recipeToSave = {
        id: isNew ? `recipe-${Date.now()}` : updated.id,
        product_id: updated.productId,
        title: updated.title,
        time: updated.time,
        yield: updated.yield,
        description: updated.description,
        category: updated.category,
        ingredients: updated.ingredients,
        instructions: updated.instructions,
        tip: updated.tip || ''
      };

      const { error } = await supabase
        .from('recipes')
        .upsert(recipeToSave);

      if (error) throw error;

      // Update local state
      const finalRecipe = { ...updated, id: recipeToSave.id };
      setAllRecipes(prev => {
        const exists = prev.find(r => r.id === updated.id);
        if (exists) {
          return prev.map(r => r.id === updated.id ? finalRecipe : r);
        } else {
          return [...prev, finalRecipe];
        }
      });
      setSelectedRecipe(null);
      alert('Receita salva com sucesso no banco de dados! 🛡️💎');
    } catch (err) {
      console.error('Erro ao salvar receita:', err);
      alert('Erro ao salvar no banco de dados. Tente novamente.');
    }
  };

  const handleSaveProduct = async () => {
    if (!product) return;
    try {
      const { error } = await supabase
        .from('products')
        .update({
          title: product.title,
          description: product.description
        })
        .eq('id', product.id);

      if (error) throw error;

      setIsEditingProduct(false);
      alert('Cabeçalho atualizado com sucesso! 🛡️💎');
    } catch (err) {
      console.error('Erro ao salvar cabeçalho:', err);
      alert('Erro ao salvar alterações.');
    }
  };

  const handleCreateNew = () => {
    const newRecipe: Recipe = {
      id: `new-${Date.now()}`,
      productId: productId || '',
      title: '',
      time: '',
      yield: '',
      description: '',
      category: 'tradicionais',
      ingredients: [],
      instructions: [],
    };
    setSelectedRecipe(newRecipe);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center space-y-6">
        <Loader2 className="w-20 h-20 text-primary animate-spin" />
        <p className="text-2xl font-black text-foreground uppercase tracking-tighter animate-pulse">Sincronizando Acervo Master...</p>
      </div>
    );
  }

  if (!product || !isUnlocked(product.id)) return <Navigate to="/produtos" replace />;
  
  return (
    <div className="min-h-screen bg-background pb-32 selection:bg-primary selection:text-white">
      {/* Header Fixo/Stick */}
      <nav className="bg-white border-b border-border py-6 px-6 sm:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/90">
         <Link to="/produtos" className="flex items-center gap-3 text-muted-foreground hover:text-primary font-black uppercase text-xs transition-colors">
            <ChevronLeft size={20} /> Voltar para Produtos
         </Link>
         <div className="flex items-center gap-6">
            {isAdmin && (
               <button 
                  onClick={handleCreateNew}
                  className="bg-primary text-white font-black px-6 py-3 rounded-2xl flex items-center gap-2 text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
               >
                  <Plus size={18} /> Nova Receita
               </button>
            )}
            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg">F</div>
         </div>
      </nav>

      {/* Titulo Acervo */}
      <header className="pt-20 px-6 sm:px-12 text-center sm:text-left max-w-7xl mx-auto space-y-6 relative group">
         <div className="bg-primary/10 inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20">
            <BookOpen size={16} className="text-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{product.count} No Acervo</span>
         </div>
         
         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <div className="space-y-6 flex-grow ">
               {isAdmin && isEditingProduct ? (
                  <textarea 
                    className="text-4xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-none w-full bg-accent/5 p-4 rounded-3xl border-2 border-primary outline-none"
                    value={product.title}
                    onChange={(e) => setProduct({...product, title: e.target.value})}
                  />
               ) : (
                  <h1 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-none">{product.title}</h1>
               )}
               
               {isAdmin && isEditingProduct ? (
                  <textarea 
                    className="text-xl text-muted-foreground font-bold italic opacity-60 max-w-3xl w-full bg-accent/5 p-4 rounded-xl border border-primary/20 outline-none"
                    value={product.description}
                    onChange={(e) => setProduct({...product, description: e.target.value})}
                    rows={2}
                  />
               ) : (
                  <p className="text-xl text-muted-foreground font-bold italic opacity-60 max-w-3xl">{product.description}</p>
               )}
            </div>

            {isAdmin && (
               <button 
                  onClick={() => isEditingProduct ? handleSaveProduct() : setIsEditingProduct(true)}
                  className={`shrink-0 flex items-center gap-2 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${isEditingProduct ? 'bg-green-600 text-white shadow-lg shadow-green-200' : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-white'}`}
               >
                  {isEditingProduct ? <><Save size={18} /> Salvar Cabeçalho</> : <><Edit3 size={18} /> Editar Cabeçalho</>}
               </button>
            )}
         </div>
      </header>

      {/* Busca */}
      <div className="max-w-7xl mx-auto px-6 mt-16 sm:mt-24">
         <div className="relative max-w-2xl mx-auto sm:mx-0 shadow-2xl rounded-3xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={24} />
            <input 
              type="text" 
              placeholder="Encontrar receita no acervo..."
              className="w-full bg-white border-4 border-accent/20 rounded-3xl py-6 pl-16 pr-8 text-xl font-bold focus:border-primary outline-none transition-all shadow-inner"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
         </div>
      </div>

      {/* Grid de Receitas */}
      <main className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredRecipes.map((recipe: Recipe, idx: number) => (
              <div 
                key={recipe.id}
                onClick={() => setSelectedRecipe(recipe)}
                className="bg-card rounded-[3rem] border-2 border-border shadow-premium p-10 flex flex-col gap-6 cursor-pointer hover:border-primary/50 transition-all hover:shadow-2xl active:scale-95 group relative overflow-hidden"
              >
                <div className="flex justify-between items-center text-[10px] font-black text-primary/50 uppercase">
                   <span className="bg-primary/5 px-3 py-1 rounded-lg border border-primary/10">#{(idx+1).toString().padStart(3, '0')}</span>
                   <div className="flex gap-2">
                       <span className="bg-secondary px-3 py-1 rounded-lg border border-border">{recipe.time}</span>
                   </div>
                </div>

                <div className="space-y-4">
                   <h3 className="text-2xl font-black text-foreground uppercase tracking-tight leading-none group-hover:text-primary transition-colors">{recipe.title}</h3>
                   <p className="text-sm text-muted-foreground font-bold italic opacity-60 line-clamp-2">{recipe.description}</p>
                </div>

                <button className="w-full mt-auto bg-foreground group-hover:bg-primary text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest transition-all border-b-6 border-black/20 group-hover:border-primary/40 active:border-b-0 active:translate-y-1">
                   Abrir Aula <ChevronRight size={14} />
                </button>
              </div>
            ))}
         </div>
         {filteredRecipes.length === 0 && (
            <div className="py-20 text-center space-y-4">
               <div className="text-6xl">🔍</div>
               <h4 className="text-2xl font-black text-foreground uppercase">Nenhuma receita encontrada</h4>
               <p className="text-muted-foreground font-bold">Tente buscar por outro termo ou limpe o filtro.</p>
            </div>
         )}
      </main>

      {/* MODAL PORTAL */}
      <RecipeDetailPortal 
        recipe={selectedRecipe} 
        onClose={() => setSelectedRecipe(null)}
        onSave={handleSaveRecipe}
      />
    </div>
  );
};

export default RecipeCatalogue;
