import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ChefHat, GraduationCap, Mail, Key } from 'lucide-react';

interface AccessCardProps {
  email: string;
  brandName?: string;
  chefName?: string;
}

const AccessCard: React.FC<AccessCardProps> = ({ 
  email, 
  brandName = "Sua Receita Saudável", 
  chefName = "Chef Fernanda Oliveira" 
}) => {
  return (
    <div 
      id="access-card-template"
      style={{ 
        width: '600px', 
        height: '400px', 
        backgroundColor: '#faf9f5',
        color: '#3d3929',
        fontFamily: "'Inter', sans-serif",
        position: 'relative',
        padding: '40px',
        border: '12px solid #c96442',
        borderRadius: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Wave pattern background or decoration */}
      <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05 }}>
        <ChefHat size={200} />
      </div>

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 900, 
            margin: 0, 
            textTransform: 'uppercase', 
            fontStyle: 'italic', 
            letterSpacing: '-0.05em' 
          }}>
            {brandName}
          </h1>
          <p style={{ 
            fontSize: '18px', 
            fontWeight: 700, 
            margin: 0, 
            color: '#c96442', 
            fontStyle: 'italic' 
          }}>
            {chefName}
          </p>
        </div>
        <div style={{ 
          backgroundColor: '#c96442', 
          color: 'white', 
          padding: '12px', 
          borderRadius: '1.5rem' 
        }}>
          <ChefHat size={32} />
        </div>
      </header>

      <main style={{ marginTop: '20px' }}>
        <h2 style={{ 
          fontSize: '10px', 
          fontWeight: 900, 
          textTransform: 'uppercase', 
          letterSpacing: '0.2em', 
          opacity: 0.6,
          marginBottom: '15px'
        }}>
          DADOS DE ACESSO AO ACERVO ELITE
        </h2>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: '#c96442' }}><Mail size={18} /></div>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 950, margin: 0, opacity: 0.5 }}>E-MAIL:</p>
                <p style={{ fontSize: '14px', fontWeight: 700, margin: 0 }}>{email}</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: '#c96442' }}><Key size={18} /></div>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 950, margin: 0, opacity: 0.5 }}>SENHA PADRÃO:</p>
                <p style={{ fontSize: '14px', fontWeight: 700, margin: 0 }}>receitas123</p>
              </div>
            </div>

            <div
              id="access-card-btn"
              style={{
                marginTop: '10px',
                padding: '12px',
                backgroundColor: '#c96442',
                color: 'white',
                borderRadius: '1rem',
                textAlign: 'center',
                fontWeight: 900,
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
              }}
            >
              <span>ACESSAR MEU ACERVO</span>
              <span style={{ fontSize: '9px', fontWeight: 700, opacity: 0.85, textTransform: 'lowercase', letterSpacing: '0.05em' }}>
                🔗 clique aqui para acessar
              </span>
            </div>

            <p style={{ fontSize: '9px', fontWeight: 700, margin: '5px 0 0 0', fontStyle: 'italic', opacity: 0.6 }}>
              *Clique no botão acima ou escaneie o QR code.
            </p>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            padding: '15px', 
            borderRadius: '2rem', 
            border: '2px solid #edede9',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <QRCodeSVG value={window.location.origin} size={100} />
            <p style={{ 
              fontSize: '8px', 
              fontWeight: 900, 
              textAlign: 'center', 
              marginTop: '8px', 
              opacity: 0.5 
            }}> ESCANEIE O ACESSO </p>
          </div>
        </div>
      </main>

      <footer style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderTop: '1px solid #edede9', 
        paddingTop: '20px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GraduationCap size={16} style={{ color: '#c96442' }} />
          <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase' }}>Aluno Elite Premium</span>
        </div>
        <div style={{ 
          fontSize: '10px', 
          fontWeight: 700, 
          opacity: 0.4, 
          fontStyle: 'italic' 
        }}>
          suareceitasaudavel.com.br
        </div>
      </footer>
    </div>
  );
};

export default AccessCard;
