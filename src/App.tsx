import './index.css'
import { useEffect, useState } from 'react'

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
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-10%,oklch(0.968_0.007_247.896),transparent)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Arquitetura autoral, funcional e atemporal
          </h1>
          <p className="mt-4 max-w-prose text-muted-foreground">
            Projetos residenciais e comerciais com curadoria de materiais, iluminação e ergonomia. Do conceito à execução.
          </p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <a href="#contato" className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-90 sm:w-auto">Agendar Conversa</a>
            <a href="#portfolio" className="inline-flex w-full items-center justify-center rounded-md border px-5 py-3 text-sm font-medium hover:bg-muted sm:w-auto">Ver Portfólio</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
            <span>+7 anos de experiência</span>
            <span>+120 projetos entregues</span>
            <span>Atendimento em todo o Brasil</span>
          </div>
        </div>
        <div className="relative">
          <img
            className="aspect-4/3 w-full rounded-xl border object-cover shadow-sm"
            alt="Sala de estar contemporânea com marcenaria e iluminação cênica"
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  )
}

function SectionHeading(props: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {props.kicker && <p className="text-xs uppercase tracking-widest text-primary">{props.kicker}</p>}
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
    specs: { area: '120 m²', year: '2024', location: 'São Paulo, SP', scope: 'Interiores completos e marcenaria' },
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
    specs: { area: '140 m²', year: '2024', location: 'São Paulo, SP', scope: 'Reforma, acessibilidade e ambientação' },
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
    specs: { area: '48 m²', year: '2021', location: 'São Paulo, SP', scope: 'Conceito, layout e mobiliário solto' },
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

function Footer() {
  return (
    <footer className="border-t py-10 text-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Estúdio Luana Palheta — Arq. & Interiores · São Paulo/SP</p>
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
      </main>
      <Footer />

      {openProject && (
        <ProjectGalleryModal project={openProject} onClose={() => setOpenProject(null)} />)
      }
    </div>
  )
}
