import './index.css'
import { useEffect, useState, useRef } from 'react'

function ThemeToggle({ theme, toggleTheme }: { theme: 'light' | 'dark'; toggleTheme: () => void }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-sm shadow-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={isDark ? 'Modo claro' : 'Modo escuro'}
      type="button"
    >
      {isDark ? (
        // Ícone Sol
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        // Ícone Lua
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </button>
  )
}

function Navbar({ theme, toggleTheme }: { theme: 'light' | 'dark'; toggleTheme: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-semibold tracking-tight">Luana Palheta • Arquitetura</a>
        <nav className="hidden items-center gap-4 md:flex">
          <a href="#sobre" className="text-sm hover:text-primary hover:underline decoration-primary underline-offset-4">Sobre</a>
          <a href="#servicos" className="text-sm hover:text-primary hover:underline decoration-primary underline-offset-4">Serviços</a>
          <a href="#portfolio" className="text-sm hover:text-primary hover:underline decoration-primary underline-offset-4">Portfólio</a>
          <a href="#ar" className="text-sm hover:text-primary hover:underline decoration-primary underline-offset-4">AR</a>
          <a href="#depoimentos" className="text-sm hover:text-primary hover:underline decoration-primary underline-offset-4">Depoimentos</a>
          <a href="#contato" className="text-sm hover:text-primary hover:underline decoration-primary underline-offset-4">Contato</a>
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a href="#contato" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Solicitar Orçamento</a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Força o vídeo a tocar quando o componente montar
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          // Define o volume como 0 para garantir que está mudo
          videoRef.current.volume = 0
          await videoRef.current.play()
        } catch (error) {
          console.log('Erro ao reproduzir vídeo:', error)
          // Se falhar, tenta novamente após um pequeno delay
          setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.volume = 0
              videoRef.current.play().catch(() => {})
            }
          }, 500)
        }
      }
    }
    
    // Aguarda o vídeo estar pronto
    const handleCanPlay = () => {
      playVideo()
    }
    
    if (videoRef.current) {
      if (videoRef.current.readyState >= 3) {
        // Vídeo já está pronto
        playVideo()
      } else {
        videoRef.current.addEventListener('canplay', handleCanPlay, { once: true })
      }
    }
    
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('canplay', handleCanPlay)
      }
    }
  }, [])

  return (
    <section id="hero" className="relative overflow-hidden" style={{ 
      minHeight: '90vh', 
      height: 'auto',
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
    }}>
      {/* Vídeo/GIF/Imagem de fundo - cobre toda a seção */}
      <div className="absolute z-0 overflow-hidden" style={{ 
        top: 0,
        left: 0,
        width: '100vw',
        height: '100%',
        minHeight: '90vh',
      }}>
        {/* 
          INSTRUÇÕES PARA ADICIONAR VÍDEO:
          
          Opção 1 - Vídeo local:
          1. Coloque seu arquivo de vídeo na pasta public/ (ex: public/video-arquitetura.mp4)
          2. Descomente o código do vídeo abaixo e ajuste o caminho:
             <source src="/video-arquitetura.mp4" type="video/mp4" />
          
          Opção 2 - URL externa:
          1. Use uma URL de vídeo que permita acesso direto (sem CORS)
          2. Substitua a URL abaixo pela sua URL
          
          Opção 3 - GIF:
          Substitua todo o elemento <video> por:
          <img 
            src="/seu-arquivo.gif" 
            alt="Background arquitetura" 
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        */}
        
        {/* Imagem de fundo padrão - sempre visível */}
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format&fit=crop"
          alt="Background arquitetura - cozinha moderna e espaçosa"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100%',
            minHeight: '90vh',
            objectFit: 'cover',
            objectPosition: 'center center',
            zIndex: 0,
            display: 'block',
          }}
        />
        
        {/* Vídeo de fundo - descomente e configure quando tiver um vídeo disponível */}
        {/* 
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center center',
            width: '100%',
            height: '100%',
            minWidth: '100%',
            minHeight: '100%',
          }}
          onError={(e) => {
            // Se o vídeo falhar, esconde o elemento para mostrar a imagem de fundo
            const target = e.target as HTMLVideoElement
            target.style.display = 'none'
          }}
        >
          <source src="/video-arquitetura.mp4" type="video/mp4" />
          <source src="/video-arquitetura.webm" type="video/webm" />
        </video>
        */}
        
        {/* Overlay para legibilidade do texto - gradiente horizontal: mais opaco à esquerda, mais transparente à direita */}
        <div 
          className="absolute bg-gradient-to-r from-background/95 via-background/75 to-background/40"
          style={{
            top: 0,
            left: 0,
            width: '100vw',
            height: '100%',
            minHeight: '90vh',
          }}
        ></div>
        <div 
          className="absolute bg-gradient-to-t from-background/30 via-transparent to-transparent"
          style={{
            top: 0,
            left: 0,
            width: '100vw',
            height: '100%',
            minHeight: '90vh',
          }}
        ></div>
      </div>
      
      {/* Grid principal - layout assimétrico */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Coluna esquerda - Conteúdo principal */}
          <div className="lg:col-span-7 lg:flex lg:flex-col lg:justify-center">
            {/* Badge superior */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-4 py-2 text-xs uppercase tracking-wider text-foreground backdrop-blur-sm shadow-sm">
              <span className="h-px w-12 bg-accent"></span>
              <span>Arquitetura & Interiores</span>
            </div>

            {/* Título principal */}
            <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-foreground drop-shadow-lg md:text-6xl lg:text-7xl">
              <span className="block">Arquitetura</span>
              <span className="block text-primary drop-shadow-md">autoral</span>
              <span className="block">e atemporal</span>
            </h1>

            {/* Descrição */}
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-foreground/90 drop-shadow-md md:text-xl">
              Projetos residenciais e comerciais com curadoria de materiais, iluminação e ergonomia. Do conceito à execução.
            </p>

            {/* CTAs */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <a 
                href="#contato" 
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/20"
              >
                <span className="relative z-10">Agendar Conversa</span>
                <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </a>
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-border bg-background px-8 py-4 text-sm font-medium transition-all hover:border-primary hover:bg-primary/5"
              >
                Ver Portfólio
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Estatísticas em linha horizontal */}
            <div className="flex flex-wrap gap-8 border-t border-border/50 bg-background/50 rounded-lg p-6 backdrop-blur-sm pt-8">
              <div>
                <div className="text-3xl font-bold text-foreground drop-shadow-md">+7</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-foreground/80">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground drop-shadow-md">+120</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-foreground/80">Projetos entregues</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground drop-shadow-md">100%</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-foreground/80">Atendimento nacional</div>
              </div>
            </div>
          </div>

          {/* Coluna direita - Imagem da profissional */}
          <div className="relative lg:col-span-5">
            <div className="relative h-[500px] md:h-[600px] lg:h-full lg:min-h-[600px]">
              {/* Container da imagem com design moderno */}
              <div className="absolute inset-0">
                {/* Imagem principal */}
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  {/* Gradiente decorativo no canto superior direito */}
                  <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl"></div>
                  
                  {/* Imagem com efeito de profundidade */}
                  <div className="relative h-full w-full">
                    <img
                      className="h-full w-full object-cover"
                      alt="Luana Palheta - Arquiteta profissional especializada em projetos residenciais e comerciais"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop&crop=face"
                    />
                    {/* Overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40"></div>
                  </div>

                  {/* Borda decorativa */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-border/50"></div>
                </div>

                {/* Card de identificação profissional - posicionado no canto inferior esquerdo */}
                <div className="absolute bottom-6 left-6 right-6 z-10 rounded-2xl border border-border/70 bg-background/95 backdrop-blur-md p-5 shadow-2xl md:right-auto md:w-auto">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 text-lg font-bold text-foreground">Luana Palheta</div>
                      <div className="text-sm text-muted-foreground">Arquiteta & Designer de Interiores</div>
                      <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <svg className="h-3.5 w-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Belém, PA</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Elemento decorativo geométrico - canto superior direito */}
                <div className="absolute -right-6 top-12 hidden h-32 w-32 rounded-full border-2 border-accent/20 bg-accent/5 blur-2xl lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Linha decorativa na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  )
}

function SectionHeading(props: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {props.kicker && <p className="text-xs uppercase tracking-widest text-accent">{props.kicker}</p>}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{props.title}</h2>
      {props.subtitle && <p className="mt-3 text-muted-foreground">{props.subtitle}</p>}
    </div>
  )
}

function Sobre() {
  return (
    <section id="sobre" className="border-t py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="sobre" title="Arquitetura centrada em pessoas" subtitle="Cada projeto é um diálogo entre estética, técnica e propósito." />
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <p className="text-balance text-muted-foreground">
            Atuo do estudo preliminar ao executivo, coordenando disciplinas, detalhamento e acompanhamento de obra. Minha abordagem combina processos claros, uso inteligente do orçamento e seleção criteriosa de fornecedores.
          </p>
          <ul className="grid gap-4 text-sm">
            <li className="rounded-lg border p-4">Projetos residenciais, comerciais e institucionais</li>
            <li className="rounded-lg border p-4">Interiores, reformas e retrofit</li>
            <li className="rounded-lg border p-4">Arquitetura sustentável e eficiência energética</li>
            <li className="rounded-lg border p-4">Consultoria de layout e iluminação</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Servicos() {
  const cards = [
    { title: 'Projeto Arquitetônico', desc: 'Do conceito ao executivo, compatibilização e memorial.' },
    { title: 'Interiores & Marcenaria', desc: 'Detalhamento, materiais, mobiliário e luminotécnica.' },
    { title: 'Gerenciamento de Obra', desc: 'Cronograma, orçamentos, fornecedores e visitas técnicas.' },
    { title: 'Consultoria Express', desc: 'Sessão estratégica para dúvidas e direcionamentos.' },
  ]
  return (
    <section id="servicos" className="border-t py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="serviços" title="Do esboço à entrega" subtitle="Pacotes sob medida para a necessidade de cada cliente." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="rounded-xl border p-6 shadow-sm transition hover:shadow-md">
              <h3 className="font-medium tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

type Project = {
  id: number
  title: string
  tag: string
  cover: string
  images: string[]
  specs: {
    area: string
    year: string
    location: string
    scope: string
  }
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Apartamento Jardim',
    tag: 'Residencial',
    cover:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
    ],
    specs: { area: '120 m²', year: '2025', location: 'Belém, PA', scope: 'Interiores completos e marcenaria' },
  },
  {
    id: 2,
    title: 'Café Aurora',
    tag: 'Comercial',
    cover:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513579924656-c837cd86a8f1?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    ],
    specs: { area: '85 m²', year: '2023', location: 'Campinas, SP', scope: 'Conceito, layout, iluminação e fachada' },
  },
  {
    id: 3,
    title: 'Casa da Serra',
    tag: 'Residencial',
    cover:
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    ],
    specs: { area: '260 m²', year: '2022', location: 'Campos do Jordão, SP', scope: 'Arquitetônico + interiores' },
  },
  {
    id: 4,
    title: 'Clínica Solaris',
    tag: 'Institucional',
    cover:
      'https://images.unsplash.com/photo-1583911860205-72f8c3c48fb1?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1583911860205-72f8c3c48fb1?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
    ],
    specs: { area: '140 m²', year: '2024', location: 'Belém, PA', scope: 'Reforma, acessibilidade e ambientação' },
  },
  {
    id: 5,
    title: 'Studio Minimal',
    tag: 'Interiores',
    cover:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1600&auto=format&fit=crop',
    ],
    specs: { area: '48 m²', year: '2021', location: 'Belém, PA', scope: 'Conceito, layout e mobiliário solto' },
  },
  {
    id: 6,
    title: 'Loja Concept',
    tag: 'Comercial',
    cover:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513579924656-c837cd86a8f1?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    ],
    specs: { area: '110 m²', year: '2022', location: 'Santos, SP', scope: 'Branding espacial e vitrine' },
  },
]

function Portfolio({ onOpen }: { onOpen: (project: Project) => void }) {
  return (
    <section id="portfolio" className="border-t py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="portfólio" title="Seleção de projetos" subtitle="Breve curadoria de trabalhos recentes." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((it) => (
            <button
              key={it.id}
              onClick={() => onOpen(it)}
              className="group overflow-hidden rounded-xl border text-left transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img className="aspect-4/3 w-full object-cover transition group-hover:scale-[1.02]" src={it.cover} alt={it.title} />
              <div className="flex items-center justify-between p-4 text-sm">
                <span>{it.title}</span>
                <span className="text-muted-foreground">{it.tag}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectGalleryModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) setLightboxIndex(null)
        else onClose()
      }
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') setLightboxIndex((i) => (i! + 1) % project.images.length)
        if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i! - 1 + project.images.length) % project.images.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, onClose, project.images.length])

  return (
    <div className="fixed inset-0 z-60">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative mx-auto mt-10 max-w-5xl rounded-2xl border bg-background p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
            <p className="text-xs text-muted-foreground">{project.tag}</p>
          </div>
          <button onClick={onClose} className="rounded-md border px-3 py-1 text-sm hover:bg-muted">Fechar</button>
        </div>
        <div className="mb-6 grid gap-3 rounded-xl border bg-card p-4 text-sm text-muted-foreground md:grid-cols-4">
          <div><span className="block text-xs uppercase tracking-widest text-foreground/70">Metragem</span>{project.specs.area}</div>
          <div><span className="block text-xs uppercase tracking-widest text-foreground/70">Ano</span>{project.specs.year}</div>
          <div><span className="block text-xs uppercase tracking-widest text-foreground/70">Localização</span>{project.specs.location}</div>
          <div><span className="block text-xs uppercase tracking-widest text-foreground/70">Escopo</span>{project.specs.scope}</div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {project.images.map((src, idx) => (
            <button
              key={src + idx}
              className="overflow-hidden rounded-lg border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setLightboxIndex(idx)}
            >
              <img src={src} alt={`${project.title} ${idx + 1}`} className="aspect-4/3 w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/80">
          <button className="absolute right-6 top-6 rounded-md border bg-background/70 px-3 py-1 text-sm backdrop-blur hover:bg-background" onClick={() => setLightboxIndex(null)}>Fechar</button>
          <button className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border bg-background/70 p-2 backdrop-blur hover:bg-background" onClick={() => setLightboxIndex((i) => (i! - 1 + project.images.length) % project.images.length)} aria-label="Imagem anterior">◀</button>
          <img src={project.images[lightboxIndex]} alt={`${project.title} imagem ${lightboxIndex + 1}`} className="max-h-[80vh] max-w-[92vw] rounded-lg border object-contain shadow-2xl" />
          <button className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border bg-background/70 p-2 backdrop-blur hover:bg-background" onClick={() => setLightboxIndex((i) => (i! + 1) % project.images.length)} aria-label="Próxima imagem">▶</button>
        </div>
      )}
    </div>
  )
}

function Depoimentos() {
  const quotes = [
    { name: 'Marina S.', text: 'Profissional impecável! Transformou nosso apartamento com soluções inteligentes.' },
    { name: 'Eduardo R.', text: 'Prazo e orçamento respeitados. O resultado ficou além das expectativas.' },
    { name: 'Clínica Solaris', text: 'Ambiente acolhedor e funcional. Pacientes elogiam diariamente.' },
  ]
  return (
    <section id="depoimentos" className="border-t py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="depoimentos" title="O que clientes dizem" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote key={q.name} className="rounded-xl border p-6 shadow-sm">
              <p className="text-balance">“{q.text}”</p>
              <footer className="mt-4 text-sm text-muted-foreground">{q.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="border-t py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-6 rounded-2xl border bg-card p-8 shadow-sm md:grid-cols-[1fr_auto]">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Vamos conversar sobre o seu projeto?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Orçamento sem compromisso. Resposta em até 24h úteis.</p>
          </div>
          <a href="#contato" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-90">Solicitar Proposta</a>
        </div>
      </div>
    </section>
  )
}

function Contato() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  )
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      // Substitua pelo seu endpoint real do Formspree (ex.: https://formspree.io/f/abcdwxyz)
      const endpoint = 'https://formspree.io/f/xyzqwert'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (!res.ok) throw new Error('Falha ao enviar')
      setStatus('success')
      form.reset()
    } catch (err: any) {
      setStatus('error')
      setErrorMsg(
        'Não foi possível enviar a mensagem agora. Tente novamente em instantes.',
      )
    }
  }

  return (
    <section id="contato" className="border-t py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="contato"
          title="Conte sobre sua ideia"
          subtitle="Preencha os dados e retornarei rapidamente."
        />
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-xl space-y-4"
          noValidate
        >
          <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1 inline-block text-muted-foreground">Seu nome</span>
              <input
                className="w-full rounded-md border bg-background px-4 py-3 text-sm"
                name="name"
                placeholder="Maria Silva"
                required
                autoComplete="name"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 inline-block text-muted-foreground">E-mail</span>
              <input
                className="w-full rounded-md border bg-background px-4 py-3 text-sm"
                name="email"
                type="email"
                placeholder="maria@email.com"
                required
                autoComplete="email"
              />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1 inline-block text-muted-foreground">Telefone (opcional)</span>
            <input
              className="w-full rounded-md border bg-background px-4 py-3 text-sm"
              name="phone"
              placeholder="(11) 90000-0000"
              autoComplete="tel"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 inline-block text-muted-foreground">Mensagem</span>
            <textarea
              className="min-h-32 w-full rounded-md border bg-background px-4 py-3 text-sm"
              name="message"
              placeholder="Fale sobre o projeto, prazos e objetivos"
              required
            />
          </label>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
          >
            {status === 'loading' ? 'Enviando…' : 'Enviar mensagem'}
          </button>
          {status === 'success' && (
            <p className="text-sm text-emerald-600">Mensagem enviada com sucesso. Obrigado!</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  )
}

function ARSection() {
  return (
    <section id="ar" className="border-t py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading 
          kicker="realidade aumentada" 
          title="Visualize projetos em 3D" 
          subtitle="Experimente nossos projetos arquitetônicos em realidade aumentada. Visualize móveis, layouts e espaços no seu ambiente real." 
        />
        
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Conteúdo explicativo */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-xl font-semibold tracking-tight">Como funciona</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Abra esta página em um dispositivo móvel (iOS ou Android)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Toque no botão "Ver em AR" abaixo do modelo 3D</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Posicione o modelo no seu espaço usando a câmera</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Explore o modelo em escala real no seu ambiente</span>
              </li>
            </ul>
            <div className="mt-8 rounded-lg border bg-card p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Dica:</strong> Funciona melhor em dispositivos iOS (Safari) e Android (Chrome). 
                Certifique-se de permitir o acesso à câmera quando solicitado.
              </p>
            </div>
          </div>

          {/* Model Viewer 3D */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-lg">
              {/* Modelo 3D - Exemplo de móvel/objeto arquitetônico */}
              {/* 
                Para usar seu próprio modelo 3D:
                1. Converta seu modelo para formato .glb ou .gltf
                2. Coloque na pasta public/ (ex: public/modelo-cadeira.glb)
                3. Substitua o src abaixo por: src="/modelo-cadeira.glb"
              */}
              <model-viewer
                src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                alt="Modelo 3D de exemplo - Projeto arquitetônico"
                ar
                ar-modes="webxr scene-viewer quick-look"
                ar-scale="auto"
                camera-controls
                environment-image="neutral"
                shadow-intensity="1"
                style={{
                  width: '100%',
                  height: '500px',
                  backgroundColor: 'transparent',
                }}
                ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
              >
                {/* Botão de fallback caso AR não esteja disponível */}
                <div slot="ar-button" className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <button className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90">
                    Ver em AR
                  </button>
                </div>
              </model-viewer>
              
              {/* Overlay informativo */}
              <div className="absolute top-4 right-4 rounded-lg border border-border/50 bg-background/95 px-3 py-2 text-xs backdrop-blur-sm">
                <span className="text-muted-foreground">Modelo 3D interativo</span>
              </div>
            </div>
            
            {/* Instruções adicionais */}
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Use os controles para rotacionar, zoom e explorar o modelo. Toque em "Ver em AR" para visualizar no seu espaço.
            </p>
          </div>
        </div>

        {/* Cards de projetos com AR */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold tracking-tight">Mobiliário</h3>
            <p className="text-sm text-muted-foreground">Visualize móveis e objetos de decoração em escala real no seu espaço.</p>
          </div>
          
          <div className="rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold tracking-tight">Layouts</h3>
            <p className="text-sm text-muted-foreground">Experimente diferentes layouts e disposições de móveis antes de decidir.</p>
          </div>
          
          <div className="rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold tracking-tight">Espaços</h3>
            <p className="text-sm text-muted-foreground">Visualize projetos completos de ambientes em realidade aumentada.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t py-10 text-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Escritório Luana Palheta — Arq. & Interiores · Belém/PA</p>
        <div className="flex items-center gap-6">
          <a className="inline-flex items-center gap-2 hover:text-primary hover:underline decoration-primary underline-offset-4" href="https://instagram.com" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
            Instagram
          </a>
          <a className="inline-flex items-center gap-2 hover:text-primary hover:underline decoration-primary underline-offset-4" href="https://linkedin.com" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 6V24h-4v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V24h-4V8.5z"/></svg>
            LinkedIn
          </a>
          <a className="inline-flex items-center gap-2 hover:text-primary hover:underline decoration-primary underline-offset-4" href="https://behance.net" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.2 10.5c.9 0 1.6.2 2 .5V9.6c-.4-.2-1.1-.3-2-.3-2.6 0-4.2 1.5-4.2 4s1.6 4 4 4c1 0 1.7-.1 2.2-.3v-1.5c-.5.3-1.2.4-2 .4-1.2 0-2.2-.5-2.3-1.8h4.4c.1-.3.1-.6.1-.8 0-1.7-1-3.2-3.2-3.2zm-2 2.6c.1-1 .9-1.6 2-1.6s1.7.6 1.8 1.6H5.2zM17.3 9.2c-2.4 0-4 1.6-4 4s1.6 4 4 4c1.9 0 3.3-1.1 3.6-2.8h-1.8c-.2.8-.9 1.2-1.8 1.2-1.2 0-1.9-.7-2-2h5.6c.1-.3.1-.5.1-.8 0-2.1-1.4-3.6-3.7-3.6zm-1.9 3.1c.1-1 .8-1.6 1.9-1.6s1.7.6 1.8 1.6h-3.7zM14.5 7h4V8.2h-4V7z"/></svg>
            Behance
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const getInitialTheme = (): 'light' | 'dark' => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (stored) return stored
    // Padrão: escuro
    return 'dark'
  }

  const [theme, setTheme] = useState<'light' | 'dark'>(() => getInitialTheme())

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  const [openProject, setOpenProject] = useState<Project | null>(null)

  return (
    <div className="min-h-dvh">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <div className="animate-in fade-in-50 slide-in-from-bottom-2 duration-700">
          <Hero />
        </div>
        <div className="animate-in fade-in-50 slide-in-from-bottom-2 duration-700">
          <Sobre />
        </div>
        <div className="animate-in fade-in-50 slide-in-from-bottom-2 duration-700">
          <Servicos />
        </div>
        <div className="animate-in fade-in-50 slide-in-from-bottom-2 duration-700">
          <Portfolio onOpen={(p) => setOpenProject(p)} />
        </div>
        <div className="animate-in fade-in-50 slide-in-from-bottom-2 duration-700">
          <Depoimentos />
        </div>
        <div className="animate-in fade-in-50 slide-in-from-bottom-2 duration-700">
          <CTA />
        </div>
        <div className="animate-in fade-in-50 slide-in-from-bottom-2 duration-700">
          <Contato />
        </div>
        <div className="animate-in fade-in-50 slide-in-from-bottom-2 duration-700">
          <ARSection />
        </div>
      </main>
      <Footer />

      {openProject && (
        <ProjectGalleryModal project={openProject} onClose={() => setOpenProject(null)} />)
      }
    </div>
  )
}
