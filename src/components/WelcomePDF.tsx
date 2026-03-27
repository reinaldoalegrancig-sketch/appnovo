import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ChefHat } from 'lucide-react';

// Dimensões exatas A4 em pontos PDF (595 × 842)
// Isso garante que as coordenadas do pdf.link() coincidam 1:1

const WelcomePDF: React.FC = () => {
  const appUrl = 'https://chef-app-virid.vercel.app/primeiro-acesso';

  return (
    <div
      id="welcome-pdf-template"
      style={{
        width: '595px',
        height: '842px',
        backgroundColor: '#faf9f5',
        fontFamily: "'Inter', sans-serif",
        color: '#3d3929',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── HEADER ── y: 0–100 */}
      <div
        style={{
          backgroundColor: '#c96442',
          padding: '20px 36px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          flexShrink: 0,
          height: '100px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderRadius: '1rem',
            padding: '8px',
            display: 'flex',
          }}
        >
          <ChefHat size={40} color="white" />
        </div>
        <div>
          <h1
            style={{
              color: 'white',
              fontSize: '20px',
              fontWeight: 900,
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
            }}
          >
            Sua Receita Saudável
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: '13px',
              fontWeight: 700,
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            Chef Fernanda Oliveira
          </p>
        </div>
      </div>

      {/* ── BODY ── y: 100–802 */}
      <div
        style={{
          padding: '32px 36px 0 36px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >

        {/* Boas-vindas — ~148px */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ fontSize: '36px', lineHeight: 1, marginBottom: '8px' }}>🎉</div>
          <h2
            style={{
              fontSize: '26px',
              fontWeight: 900,
              margin: '0 0 8px 0',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Parabéns pela sua compra!
          </h2>
          <p
            style={{
              fontSize: '13px',
              color: '#7a6e60',
              fontWeight: 600,
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            Seu acervo exclusivo de receitas está pronto e esperando por você.
            <br />
            Siga os passos abaixo para acessar todo o conteúdo.
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: '2px', backgroundColor: '#edede9', marginBottom: '20px', flexShrink: 0 }} />

        {/* Steps heading */}
        <p
          style={{
            fontSize: '10px',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#c96442',
            margin: '0 0 14px 0',
          }}
        >
          Como acessar seu acervo
        </p>

        {/* Steps — 3 × ~52px = 156px */}
        {[
          {
            num: '1',
            title: 'Escaneie o QR code ou acesse o link',
            desc: 'Use a câmera do celular para escanear o código abaixo, ou digite o endereço no navegador.',
          },
          {
            num: '2',
            title: 'Digite seu e-mail de compra',
            desc: 'Informe o mesmo e-mail usado na compra. Nenhuma senha é necessária no primeiro acesso.',
          },
          {
            num: '3',
            title: 'Aproveite seu acervo!',
            desc: 'Todas as suas receitas estarão disponíveis imediatamente após o acesso.',
          },
        ].map((step) => (
          <div
            key={step.num}
            style={{
              display: 'flex',
              gap: '14px',
              marginBottom: '12px',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#c96442',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '15px',
                flexShrink: 0,
              }}
            >
              {step.num}
            </div>
            <div style={{ paddingTop: '2px' }}>
              <p style={{ fontWeight: 900, fontSize: '13px', margin: '0 0 2px 0' }}>
                {step.title}
              </p>
              <p style={{ fontSize: '11px', color: '#7a6e60', margin: 0, lineHeight: 1.5 }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Spacer */}
        <div style={{ height: '16px', flexShrink: 0 }} />

        {/* ── CTA BUTTON ── coordenadas no PDF: y≈536, h=68 */}
        <div
          id="welcome-pdf-btn"
          style={{
            backgroundColor: '#c96442',
            color: 'white',
            borderRadius: '14px',
            padding: '16px 24px',
            textAlign: 'center',
            marginBottom: '10px',
            flexShrink: 0,
            boxShadow: '0 6px 20px rgba(201,100,66,0.35)',
          }}
        >
          <p
            style={{
              fontWeight: 900,
              fontSize: '15px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              margin: '0 0 4px 0',
            }}
          >
            Acessar Meu Acervo Agora
          </p>
          <p style={{ fontSize: '11px', fontWeight: 700, opacity: 0.9, margin: 0 }}>
            🔗 {appUrl}
          </p>
        </div>

        {/* QR + URL — seção principal para mobile */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '16px 20px',
            backgroundColor: 'white',
            borderRadius: '16px',
            border: '2px solid #edede9',
            flexShrink: 0,
          }}
        >
          {/* QR grande */}
          <div
            style={{
              padding: '8px',
              border: '2px solid #c96442',
              borderRadius: '12px',
              display: 'flex',
              flexShrink: 0,
              backgroundColor: 'white',
            }}
          >
            <QRCodeSVG value={appUrl} size={110} />
          </div>

          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 900, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c96442', margin: '0 0 6px 0' }}>
              📱 No celular — escaneie o QR code
            </p>
            <p style={{ fontSize: '10px', color: '#7a6e60', margin: '0 0 10px 0', fontWeight: 600, lineHeight: 1.5 }}>
              Aponte a câmera para o código ao lado. Sem digitar nada.
            </p>

            <div style={{ height: '1px', backgroundColor: '#edede9', margin: '8px 0' }} />

            <p style={{ fontWeight: 900, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3d3929', margin: '0 0 4px 0' }}>
              💻 No computador — acesse o link
            </p>
            {/* URL grande e visível */}
            <p style={{
              fontSize: '11px',
              fontWeight: 900,
              color: '#c96442',
              margin: 0,
              wordBreak: 'break-all',
              letterSpacing: '0.02em',
              backgroundColor: '#fdf4f1',
              padding: '6px 10px',
              borderRadius: '8px',
              border: '1px solid #f0c8b8',
            }}>
              {appUrl.replace(/^https?:\/\//, '')}
            </p>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── y: 802–842 */}
      <div
        style={{
          height: '40px',
          backgroundColor: '#3d3929',
          padding: '0 36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '9px', fontWeight: 700 }}>
          Chef Fernanda Oliveira — Sua Receita Saudável
        </span>
        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '9px', fontWeight: 700 }}>
          {appUrl.replace(/^https?:\/\//, '')}
        </span>
      </div>
    </div>
  );
};

export default WelcomePDF;
