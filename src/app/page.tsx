'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { reachGoal } from '../lib/metrika';
import {
  ArrowRight,
  BadgeAlert,
  BarChart3,
  Bot,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Dumbbell,
  Factory,
  Menu,
  MessageCircle,
  Radar,
  ShieldAlert,
  ShoppingCart,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Wrench,
  X,
} from 'lucide-react';

const card =
  'rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_10px_40px_rgba(34,211,238,0.12)]';

const cardDark =
  'rounded-2xl border border-white/10 bg-[#0c1122] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_10px_40px_rgba(34,211,238,0.12)]';

const section = 'mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20';

type NavItem = { label: string; href: string };
type Benefit = { icon: React.ComponentType<{ className?: string }>; text: string };
type AudienceItem = { title: string; icon: React.ComponentType<{ className?: string }> };
type FormState = { name: string; contact: string; request: string };

type FounderCTAProps = {
  telegramUrl: string;
  founderTelegramUrl: string;
  formData: FormState;
  handleInputChange: (
    field: keyof FormState
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void> | void;
  submitHint: string;
};

const benefits: Benefit[] = [
  { icon: BrainCircuit, text: 'Анализирует управленческие решения' },
  { icon: ShieldAlert, text: 'Показывает риски до потерь' },
  { icon: TrendingUp, text: 'Сравнивает сценарии роста' },
  { icon: Radar, text: 'Выявляет слабые места бизнеса' },
];

const audience: AudienceItem[] = [
  { title: 'Маркетплейсы', icon: ShoppingCart },
  { title: 'Автосервисы', icon: Wrench },
  { title: 'E-commerce', icon: Store },
  { title: 'Производство', icon: Factory },
  { title: 'Оффлайн-бизнес', icon: Dumbbell },
];

const stages = [
  ['01', 'Диагностика решений', 'Разбираем ключевые решения бизнеса и находим, где именно теряется прибыль.'],
  ['02', 'Пилотное внедрение', 'Проверяем подход на реальных задачах компании без тяжелого старта.'],
  ['03', 'Сопровождение решений', 'Помогаем принимать более сильные решения в ближайшие 1–2 месяца.'],
  ['04', 'AI-двойник бизнеса', 'Формируем постоянный контур аналитики, сценариев и контроля ошибок.'],
] as const;

const caseCards = [
  {
    title: 'Маркетплейсы',
    problem:
      'Рост SKU не давал ожидаемого роста продаж: ассортимент расширялся, но часть позиций съедала рекламный бюджет и оборот.',
    solution:
      'Пересобрали логику ассортимента, рекламы и приоритетов по карточкам. AI выделил слабые SKU и показал более сильные сценарии распределения внимания.',
    result: '+14% продаж',
    meta: 'Оборот: 18 млн ₽ / мес',
    impact: '+2.5 млн ₽ к выручке за квартал',
    period: 'За квартал',
  },
  {
    title: 'Маркетплейсы — реклама',
    problem:
      'Рекламный бюджет рос, но часть расходов не усиливала продажи и не давала достаточной отдачи.',
    solution:
      'AI выявил неэффективные зоны в ставках, приоритетах и логике продвижения карточек.',
    result: '−11% расходов',
    meta: 'Бюджет: 1.2 млн ₽ / мес',
    impact: 'Снижение лишних расходов без просадки продаж',
    period: 'За 2 месяца',
  },
  {
    title: 'Автосервис',
    problem:
      'Потери возникали из-за слабой логики загрузки мастеров, обработки заявок и распределения внимания собственника.',
    solution:
      'Собрали карту слабых решений, показали узкие места в потоке заявок и в управленческих приоритетах.',
    result: '+18% заявок',
    meta: 'Выручка: 4.8 млн ₽ / мес',
    impact: '+860 тыс. ₽ потенциала в месяц',
    period: 'За 2 месяца',
  },
  {
    title: 'Стоматология',
    problem:
      'Была недозагрузка врачей и слабая плотность повторных записей, из-за чего терялась часть выручки.',
    solution:
      'AI помог увидеть, где проседает логика повторных касаний, загрузки и приоритизации клиентского потока.',
    result: '+12% записей',
    meta: 'Средний чек: 14 000 ₽',
    impact: 'Рост повторных визитов и загрузки врачей',
    period: 'За 3 месяца',
  },
  {
    title: 'Онлайн-школа',
    problem:
      'Воронка теряла часть заявок, а рост продаж требовал все больше ручного участия команды.',
    solution:
      'AI разобрал сценарии движения заявки по воронке и показал точки потери конверсии.',
    result: '+9% продаж',
    meta: 'Оборот: 6.5 млн ₽ / запуск',
    impact: 'Рост конверсии без расширения команды',
    period: 'За запуск',
  },
  {
    title: 'Фитнес-клуб',
    problem:
      'Часть клиентов уходила из-за слабой логики удержания и отсутствия своевременных управленческих действий.',
    solution:
      'AI подсветил слабые точки в удержании, реактивации и приоритетах работы с базой.',
    result: '−8% оттока',
    meta: 'База: 1 400 клиентов',
    impact: 'Рост LTV за счет удержания',
    period: 'За 3 месяца',
  },
] as const;

const reviews = [
  [
    'Дмитрий С.',
    'Маркетплейс',
    'AI показал, где терялись деньги в рекламе. После корректировки ставок и карточек продажи пошли вверх.',
  ],
  [
    'Александр К.',
    'Автосервис',
    'Система подсветила слабые места в загрузке мастеров и потери в заявках. Стало понятнее, куда смотреть в первую очередь.',
  ],
  [
    'Екатерина М.',
    'Онлайн-школа',
    'AI разобрал воронку и показал, где теряются заявки. После изменений конверсия выросла без увеличения команды.',
  ],
] as const;

const faq = [
  [
    'Это консалтинг или IT-продукт?',
    'Это AI-продукт на стыке аналитики и управленческой диагностики. Он помогает предпринимателю видеть более сильные сценарии и цену слабых решений.',
  ],
  [
    'Кому это подходит лучше всего?',
    'Лучше всего продукт подходит бизнесам, где есть регулярные решения по рекламе, найму, ценам, ассортименту, загрузке, процессам и росту.',
  ],
  [
    'Что я получу на пилоте?',
    'Вы получите разбор ключевых решений, карту слабых мест, более понятную логику приоритетов и рекомендации по следующим сильным шагам.',
  ],
  [
    'Нужно ли внедрять сложную систему?',
    'Нет. На первом этапе задача не усложнить процессы, а быстро показать ценность: где вы теряете деньги и какие решения стоит пересобрать.',
  ],
] as const;

const pricing = [
  {
    name: 'Пилот',
    price: '30 000 ₽',
    desc: 'Для первого входа и быстрой проверки ценности продукта на реальных решениях бизнеса.',
    features: [
      'Разбор ключевых решений бизнеса',
      'Выявление слабых мест и потерь',
      'Первичная карта рисков и сценариев',
      'Понимание, где теряется прибыль',
    ],
    accent: 'from-orange-500 to-orange-400',
    recommended: false,
  },
  {
    name: 'Сопровождение',
    price: '70 000 ₽ / мес',
    desc: 'Для бизнеса, которому нужна регулярная поддержка управленческих решений и контроль ошибок.',
    features: [
      'Работа с новыми решениями в динамике',
      'Сравнение сценариев и рисков',
      'Регулярные приоритеты для собственника',
      'Поддержка логики роста и прибыли',
    ],
    accent: 'from-cyan-400 to-cyan-300',
    recommended: true,
  },
  {
    name: 'AI-двойник',
    price: 'Индивидуально',
    desc: 'Для компаний, которым нужен более глубокий контур аналитики и постоянная decision-система.',
    features: [
      'Постоянный контур AI-аналитики',
      'Глубокая работа с управленческими сценариями',
      'Приоритеты, риски и решения в системе',
      'Кастомизация под бизнес-модель компании',
    ],
    accent: 'from-fuchsia-500 to-cyan-400',
    recommended: false,
  },
] as const;

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div className="mb-3 text-xs uppercase tracking-[0.18em] text-cyan-300 sm:text-sm">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-white/70 sm:leading-8">{text}</p> : null}
    </div>
  );
}

function MobileMenu({
  open,
  setOpen,
  navItems,
  telegramUrl,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: NavItem[];
  telegramUrl: string;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-[#070b1a]/90 backdrop-blur-xl lg:hidden"
        >
          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-4 rounded-3xl border border-white/10 bg-[#0b1120] p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2">
                  <Bot className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <div className="text-sm font-semibold">AI-двойник</div>
                  <div className="text-xs text-white/50">предпринимателя</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white/85"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              <a
                href="#pilot"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3.5 font-semibold text-white"
              >
                Запустить пилот
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3.5 font-semibold text-cyan-300"
              >
                <MessageCircle className="h-4 w-4" />
                Обсудить внедрение
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function HeaderHero({
  telegramUrl,
  navItems,
  onOpenMenu,
}: {
  telegramUrl: string;
  navItems: NavItem[];
  onOpenMenu: () => void;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b1a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3 text-white">
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2">
              <Bot className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <div className="text-sm font-semibold">AI-двойник</div>
              <div className="text-xs text-white/50">предпринимателя</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-white/70 transition hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white"
            >
              Обсудить внедрение
            </a>
            <a
              href="#pilot"
onClick={() => reachGoal('pilot_click', { place: 'hero' })}
              className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]"
            >
              Запустить пилот
            </a>
          </div>

          <button
  type="button"
  onClick={() => {
    reachGoal('mobile_menu_open');
    onOpenMenu();
  }}
  className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-white lg:hidden"
>
  <Menu className="h-5 w-5" />
</button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(88,80,236,0.30),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.22),_transparent_30%),radial-gradient(circle_at_bottom_center,_rgba(249,115,22,0.12),_transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-cyan-300 sm:text-sm">
              <Sparkles className="h-4 w-4" />
              AI-двойник предпринимателя
            </div>

            <h1 className="max-w-5xl text-4xl font-bold leading-[0.98] sm:text-5xl md:text-6xl xl:text-7xl">
              AI-двойник предпринимателя для собственников, которым нужна{' '}
              <span className="text-orange-400">системность в росте, рисках и прибыли</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              AI-двойник анализирует контекст бизнеса, сравнивает сценарии, показывает цену ошибки
              и помогает собственнику принимать более точные решения в росте, рекламе, процессах и стратегии.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Показывает, где бизнес уже теряет деньги',
                'Сравнивает сценарии до того, как решение принято',
                'Снижает стоимость слабых управленческих ошибок',
                'Дает собственнику спокойную и системную логику действий',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="text-sm text-white/85 sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#pilot"
                className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-3.5 text-center font-semibold transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
              >
                Запустить пилот
              </a>

              <a
                href="#cases"
onClick={() => reachGoal('cases_click', { place: 'hero' })}
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-center"
              >
                Смотреть кейсы
              </a>

              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
 onClick={() => reachGoal('telegram_click', { place: 'hero' })}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-7 py-3.5 font-semibold text-cyan-300 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
              >
                <MessageCircle className="h-4 w-4" />
                Обсудить внедрение
              </a>
            </div>

            <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                ['10–15', 'решений анализируем'],
                ['50+', 'параметров оценки'],
                ['20', 'сценариев решения'],
              ].map(([v, t]) => (
                <div
                  key={v}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                >
                  <div className="text-2xl text-cyan-400">{v}</div>
                  <div className="text-sm text-white/60">{t}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/12 blur-3xl sm:h-[380px] sm:w-[380px]" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#111a34] via-[#0d1427] to-[#0a0f1d] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                      Decision Core
                    </div>
                    <div className="mt-2 text-2xl font-semibold sm:text-3xl">
                      AI-двойник решений
                    </div>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                    <Bot className="h-6 w-6 text-cyan-300" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['Сигналы', 'Продажи, реклама, заявки, процессы'],
                    ['Риски', 'Где ошибка уже стоит денег'],
                    ['Сценарии', 'Какой путь усилит прибыль'],
                    ['Приоритет', 'Какое решение нужно принять сейчас'],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-300">
                        {title}
                      </div>
                      <div className="mt-3 text-sm leading-6 text-white/70">{text}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-orange-400/15 bg-orange-400/8 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-orange-300">
                    Итог системы
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    Не просто аналитика, а более сильный следующий шаг для собственника
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-[#0f1730]/90 p-4 backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                    Результат
                  </div>
                  <div className="mt-2 text-sm text-white/80">
                    Спокойнее решения • Меньше хаоса • Больше прибыли
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProofStrip() {
  return (
    <section className="border-b border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-3">
        {[
          ['Для собственников', 'Кому важно принимать решения не вслепую'],
          ['Для бизнеса с ростом', 'Где ошибки в рекламе, найме и стратегии стоят дорого'],
          ['Для системного масштаба', 'Где нужен контур решений, а не просто набор цифр'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-semibold text-white">{title}</div>
            <div className="mt-2 text-sm leading-6 text-white/65">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EngineBlock() {
  return (
    <>
      <section id="how-it-works" className={section}>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <SectionHeading
              eyebrow="Что делает AI-двойник"
              title="Помогает принимать более сильные решения"
              text="AI анализирует варианты, показывает слабые места, прогнозирует последствия и помогает выбирать лучший сценарий действий."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className={`${card} flex items-start gap-4`}>
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div className="text-white/90">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="text-2xl font-bold sm:text-3xl">Как система превращает контекст в решение</h3>
            <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
              Сначала собираем сигналы бизнеса, затем сравниваем сценарии и выдаем более сильный следующий шаг.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                ['01', 'Собирает контекст', 'Продажи, реклама, процессы, команда, экономика бизнеса'],
                ['02', 'Сравнивает сценарии', 'Показывает варианты действий и вероятные последствия'],
                ['03', 'Оценивает риск', 'Подсвечивает слабые решения до потерь'],
                ['04', 'Рекомендует шаг', 'Фокусирует собственника на наиболее сильном следующем действии'],
              ].map(([n, t, s], i) => (
                <div key={n} className="relative rounded-2xl border border-white/10 bg-[#0d1328] p-5">
                  <div className="mb-2 text-sm text-cyan-400">{n}</div>
                  <div className="font-semibold text-white/90">{t}</div>
                  <div className="mt-2 text-sm leading-6 text-white/60">{s}</div>
                  {i < 3 ? (
                    <div className="absolute left-7 top-full h-4 w-px bg-gradient-to-b from-cyan-400/60 to-transparent" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1120] to-[#10182f] p-6 sm:p-8 md:p-10">
          <div className="grid items-start gap-8 lg:grid-cols-[.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Decision Engine"
                title="Система для предпринимателя, а не просто дашборд"
                text="Задача AI-двойника — не показать еще один набор цифр, а помочь понять: какое решение даст лучший результат, какой риск оно несет и где бизнес уже теряет деньги."
              />

              <div className="mt-8 grid gap-3">
                {[
                  'Видит связи между решениями и метриками',
                  'Сравнивает несколько сценариев роста',
                  'Помогает действовать системно, а не импульсивно',
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/85 sm:text-base"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Сигналы', 'Продажи, реклама, заявки, процессы'],
                ['Риски', 'Цена ошибки и слабые места'],
                ['Сценарии', 'Варианты роста и защиты прибыли'],
                ['Решение', 'Лучший следующий шаг'],
              ].map(([t, s]) => (
                <div key={t} className={cardDark}>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-300 sm:text-sm">{t}</div>
                  <div className="mt-3 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function WhyBuyBlock() {
  return (
    <section className={section}>
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            icon: BadgeAlert,
            title: 'Ошибка дороже пилота',
            text: 'Одна слабая управленческая ошибка в рекламе, найме или стратегии может стоить дороже, чем весь пилотный запуск.',
          },
          {
            icon: Target,
            title: 'Понятнее приоритеты',
            text: 'Собственник начинает видеть, какое решение сейчас главное, а какие действия только создают шум и перегруз.',
          },
          {
            icon: BarChart3,
            title: 'Системность вместо хаоса',
            text: 'AI-двойник собирает контекст и помогает принимать решения не на интуиции, а на логике сценариев и рисков.',
          },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className={card}>
            <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <Icon className="h-5 w-5 text-cyan-300" />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-3 leading-7 text-white/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustSections({
  monthlyRevenue,
  setMonthlyRevenue,
  decisionErrors,
  setDecisionErrors,
}: {
  monthlyRevenue: number;
  setMonthlyRevenue: React.Dispatch<React.SetStateAction<number>>;
  decisionErrors: number;
  setDecisionErrors: React.Dispatch<React.SetStateAction<number>>;
}) {
  const loss = Math.round(monthlyRevenue * 0.03 * decisionErrors);
  const yearLoss = loss * 12;

  return (
    <>
      <section id="stages" className={section}>
        <SectionHeading
          eyebrow="Путь клиента"
          title="Как проходит работа"
          text="Мы не начинаем со сложного внедрения. Сначала быстро показываем ценность на реальных решениях бизнеса."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {stages.map(([n, t, s]) => (
            <div key={n} className={card}>
              <div className="mb-2 text-xl text-cyan-400">{n}</div>
              <h3 className="text-2xl font-semibold">{t}</h3>
              <p className="mt-2 leading-7 text-white/70">{s}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="audience" className={section}>
        <SectionHeading
          eyebrow="Для кого"
          title="Подходит предпринимателям, у которых решения напрямую влияют на деньги"
          text="Лучше всего продукт работает там, где регулярно принимаются решения по рекламе, найму, ассортименту, загрузке, процессам и стратегии."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {audience.map(({ title, icon: Icon }) => (
            <div key={title} className={`${card} p-5 text-center`}>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>
              <div className="text-sm sm:text-base">{title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={section}>
        <div className="grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-300">
              Почему бизнес теряет деньги
            </div>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Большая часть потерь возникает не из-за рынка, а из-за слабой логики решений
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-white/70">
              Когда собственник не видит полную картину бизнеса, цена ошибки растет. AI-двойник
              нужен именно для того, чтобы снизить стоимость слабых решений.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              'Слишком быстрые решения',
              'Видна только часть данных',
              'Ошибки замечают слишком поздно',
              'Нет сравнения сценариев',
            ].map((t, i) => (
              <div key={t} className={`${card} p-5`}>
                <div className="mb-3 text-sm text-orange-300">0{i + 1}</div>
                <div className="text-white/85">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="overflow-hidden rounded-3xl border border-orange-400/15 bg-gradient-to-br from-orange-400/10 to-[#0d1328] p-6 sm:p-8 md:p-10">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Сколько стоит неправильное решение предпринимателя
          </h2>

          <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
            {[
              ['Ошибка в рекламе', '−300 000 ₽'],
              ['Ошибка в найме', '−2 месяца'],
              ['Ошибка в стратегии', '−миллионы ₽'],
            ].map(([t, v]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-[#0b1120] p-5 sm:p-6">
                <div className="text-[11px] uppercase tracking-[0.18em] text-orange-300 sm:text-sm">
                  {t}
                </div>
                <div className="mt-4 text-2xl font-bold sm:text-3xl">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Сколько бизнес может терять из-за слабых решений
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_.9fr]">
            <div className="space-y-7">
              <div>
                <div className="mb-2 text-sm text-white/60">
                  Месячная выручка: {monthlyRevenue.toLocaleString('ru-RU')} ₽
                </div>
                <input
                  type="range"
                  min="500000"
                  max="30000000"
                  step="500000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <div className="mb-2 text-sm text-white/60">
                  Слабых решений в месяц: {decisionErrors}
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={decisionErrors}
                  onChange={(e) => setDecisionErrors(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0d1328] p-5">
                <div className="text-sm text-white/60">
                  Модель показывает приблизительную стоимость ошибок при слабой системе принятия решений.
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-orange-400/20 bg-orange-400/10 p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-orange-300">
                Оценка потерь
              </div>
              <div className="mt-4 text-4xl font-bold text-orange-200">
                {loss.toLocaleString('ru-RU')} ₽ / мес
              </div>
              <div className="mt-8 text-2xl font-semibold">
                {yearLoss.toLocaleString('ru-RU')} ₽ / год
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CompareSection() {
  return (
    <section className={section}>
      <SectionHeading title="Что происходит без системы и с AI-двойником" />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-6 sm:p-8">
          <div className="mb-4 inline-flex rounded-full border border-red-300/20 bg-red-300/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-red-200">
            Без системы
          </div>
          <div className="grid gap-4">
            {[
              'Решения принимаются на интуиции',
              'Слабые места замечают поздно',
              'Ошибки повторяются',
              'Нет понятной цены неправильного шага',
              'Собственник перегружен и тянет все на себе',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-[#150d16] p-4 text-white/80">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-400/15 bg-cyan-400/5 p-6 sm:p-8">
          <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-300">
            С AI-двойником
          </div>
          <div className="grid gap-4">
            {[
              'Есть логика сравнения сценариев',
              'Риски видны до потерь',
              'Появляется понятный следующий шаг',
              'Собственник видит, где именно теряет деньги',
              'Решения становятся системнее и спокойнее',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-[#0d1328] p-4 text-white/85">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection({ telegramUrl }: { telegramUrl: string }) {
  return (
    <section className={section}>
      <SectionHeading
        eyebrow="Пакеты"
        title="Форматы работы"
        text="От быстрого пилота до более глубокого AI-контура под задачи бизнеса."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {pricing.map((plan) => (
          <div
            key={plan.name}
            className={`relative overflow-hidden rounded-3xl border ${
              plan.recommended ? 'border-cyan-400/30 bg-cyan-400/[0.06]' : 'border-white/10 bg-white/[0.04]'
            } p-6 sm:p-7`}
          >
            {plan.recommended ? (
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-300">
                Рекомендуем
              </div>
            ) : null}

            <div className="text-sm uppercase tracking-[0.18em] text-white/50">{plan.name}</div>
            <div className="mt-3 text-3xl font-bold">{plan.price}</div>
            <p className="mt-4 min-h-[72px] leading-7 text-white/70">{plan.desc}</p>

            <div className="mt-6 grid gap-3">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-white/10 p-1">
                    <Check className="h-3.5 w-3.5 text-cyan-300" />
                  </div>
                  <div className="text-sm leading-6 text-white/85">{feature}</div>
                </div>
              ))}
            </div>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
onClick={() => reachGoal('pricing_click', { plan: plan.name })}
              className={`mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r ${plan.accent} px-5 py-3.5 font-semibold text-black`}
            >
              Обсудить формат
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function CasesSection({ telegramUrl }: { telegramUrl: string }) {
  return (
    <section id="cases" className="bg-white/[0.02] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Кейсы"
          title="Проблема → решение → результат"
          text="Примеры того, как AI-двойник помогает увидеть слабые решения и усилить результат бизнеса."
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-2">
          {caseCards.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#10182f] to-[#0c1122] p-6 sm:p-7"
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                    {item.title}
                  </div>
                  <div className="mt-2 text-2xl font-semibold">{item.result}</div>
                </div>

                <div className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-cyan-300">
                  {item.period}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-orange-300">Проблема</div>
                  <div className="mt-3 text-sm leading-6 text-white/75">{item.problem}</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-300">Решение</div>
                  <div className="mt-3 text-sm leading-6 text-white/75">{item.solution}</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-300">Результат</div>
                  <div className="mt-3 text-sm leading-6 text-white/85">{item.impact}</div>
                  <div className="mt-3 text-xs uppercase tracking-[0.18em] text-white/45">
                    {item.meta}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
onClick={() => reachGoal('case_telegram_click')}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-6 py-3 font-semibold text-slate-950"
          >
            <MessageCircle className="h-4 w-4" />
            Обсудить кейс
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className={section}>
      <SectionHeading title="Частые вопросы" />

      <div className="mt-10 grid gap-4">
        {faq.map(([q, a], index) => {
          const open = openIndex === index;

          return (
            <div
              key={q}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <button
  type="button"
  onClick={() => {
    if (!open) {
      reachGoal('faq_open', { index });
    }
    setOpenIndex(open ? null : index);
  }}
  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
>
                <div className="flex items-start gap-3">
                  <CircleHelp className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="text-base font-semibold text-white sm:text-lg">{q}</span>
                </div>

                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-5 w-5 text-white/60" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pl-[52px] text-white/70 sm:px-6 sm:pb-6 sm:pl-[58px]">
                      <p className="leading-7">{a}</p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FounderCTA({
  telegramUrl,
  founderTelegramUrl,
  formData,
  handleInputChange,
  handleFormSubmit,
  submitHint,
}: FounderCTAProps) {
  return (
    <>
      <section className={section}>
        <SectionHeading
          eyebrow="Отзывы"
          title="Что говорят предприниматели"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map(([name, niche, text]) => (
            <div key={name} className={card}>
              <p className="mb-4 leading-7 text-white/70">{text}</p>
              <div className="text-sm text-cyan-400">{name}</div>
              <div className="text-xs text-white/50">{niche}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="founder" className={section}>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-300">Основатель</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Максим Котельников</h2>

            <p className="mt-4 max-w-xl leading-8 text-white/70">
              Я развиваю AI-продукт для предпринимателей, которым важно не просто получать
              аналитику, а принимать более точные решения в росте, рекламе, процессах и стратегии.
              Моя задача — сделать AI практическим инструментом прибыли, а не абстрактной
              технологией.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Фокус на прикладной пользе для бизнеса',
                'Пилотный формат без сложного старта',
                'Ориентация на прибыль, риски и решения',
                'Понятная логика внедрения для собственника',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/85">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]"
              >
                <MessageCircle className="h-4 w-4" />
                Обсудить внедрение
              </a>

              <a
                href="#pilot"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-center"
              >
                Запустить пилот
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[32px] bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#101a34] to-[#0a1020] p-5 sm:p-6">
              <div className="grid gap-6 md:grid-cols-[1fr_260px] md:items-end">
                <div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-sm text-white/55">Контакт</div>
                    <div className="mt-2 text-xl font-semibold text-white">@MAXKOTELNIKOV</div>
                    <p className="mt-3 text-sm leading-7 text-white/65">
                      Напишите в Telegram, чтобы обсудить пилотный запуск AI-двойника и применимость
                      продукта к вашему бизнесу.
                    </p>

                    <a
                      href={founderTelegramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300"
                    >
                      Написать в Telegram
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="mx-auto flex max-w-[260px] items-end justify-center md:max-w-none">
                  <img
                    src="/founder.png"
                    alt="Максим Котельников"
                    className="h-auto w-full object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.18)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={section}>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/10 via-white/[0.03] to-orange-400/10 p-6 sm:p-8 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Если хотите понять, где бизнес уже теряет деньги — начнем с пилота
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/70">
                Пилот нужен, чтобы быстро показать ценность: разобрать ключевые решения, найти слабые
                места и определить более сильную логику действий.
              </p>
            </div>

            <a
              href="#pilot"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-4 font-semibold"
            >
              Запустить пилот
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <FAQAccordion />

      <section id="pilot" className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
          <div className="text-sm uppercase tracking-[0.18em] text-orange-300">Пилотный запуск</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Старт AI-двойника</h2>
          <div className="mt-6 text-4xl font-bold text-orange-300 sm:text-5xl">30 000 ₽</div>

          <div className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Пилотный формат позволяет быстро проверить применимость продукта к вашему бизнесу без
            сложного и дорогого внедрения.
          </div>

          <form onSubmit={handleFormSubmit} className="mt-8 grid gap-4 md:grid-cols-2 sm:mt-10">
            <input
              type="text"
              placeholder="Имя"
              value={formData.name}
              onChange={handleInputChange('name')}
              className="rounded-xl border border-white/10 bg-[#111933] px-4 py-3 text-white placeholder:text-white/50 focus:placeholder-transparent focus:outline-none"
            />

            <input
              type="text"
              placeholder="Telegram или телефон"
              value={formData.contact}
              onChange={handleInputChange('contact')}
              className="rounded-xl border border-white/10 bg-[#111933] px-4 py-3 text-white placeholder:text-white/50 focus:placeholder-transparent focus:outline-none"
            />

            <textarea
              placeholder="Коротко о бизнесе"
              value={formData.request}
              onChange={handleInputChange('request')}
              className="min-h-[120px] rounded-xl border border-white/10 bg-[#111933] px-4 py-3 text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none md:col-span-2"
            />

            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-6 py-4 font-semibold text-black">
              Отправить заявку
              <ChevronRight className="h-4 w-4" />
            </button>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-4 font-semibold text-cyan-300"
            >
              <MessageCircle className="h-4 w-4" />
              Открыть Telegram
            </a>
          </form>

          <div className="mt-4 text-sm leading-6 text-white/50">
            {submitHint}
          </div>
        </div>
      </section>

      <footer id="contact" className="pb-28 text-center text-sm text-white/50 sm:pb-20">
        AI-двойник предпринимателя • Telegram: @MAXKOTELNIKOV
      </footer>

      <a
  href={telegramUrl}
  target="_blank"
  rel="noreferrer"
  onClick={() => reachGoal('telegram_click', { place: 'floating_button' })}
  className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 px-5 py-3 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] sm:bottom-6 sm:right-6 sm:px-6 sm:py-3.5"
>
  <MessageCircle className="h-4 w-4" />
  <span className="hidden sm:inline">Обсудить внедрение</span>
  <span className="sm:hidden">Написать</span>
</a>
    </>
  );
}

export default function AIDvoynikLanding() {
  const telegramUrl = 'https://t.me/MAXKOTELNIKOV';

  const navItems: NavItem[] = [
    { label: 'Как работает', href: '#how-it-works' },
    { label: 'Стадии', href: '#stages' },
    { label: 'Для кого', href: '#audience' },
    { label: 'Пакеты', href: '#packages' },
    { label: 'Кейсы', href: '#cases' },
    { label: 'Основатель', href: '#founder' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Контакты', href: '#contact' },
  ];

  const [formData, setFormData] = React.useState<FormState>({
    name: '',
    contact: '',
    request: '',
  });
  const [monthlyRevenue, setMonthlyRevenue] = React.useState(3000000);
  const [decisionErrors, setDecisionErrors] = React.useState(2);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [submitHint, setSubmitHint] = React.useState(
    'После отправки текст заявки копируется в буфер, а Telegram открывается отдельно.'
  );

  const handleInputChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    reachGoal('form_submit', {
      has_name: Boolean(formData.name),
      has_contact: Boolean(formData.contact),
      has_request: Boolean(formData.request),
    });

    const requestText = [
      'Здравствуйте! Хочу обсудить пилотный запуск AI-двойника.',
      '',
      `Имя: ${formData.name || 'не указано'}`,
      `Контакт: ${formData.contact || 'не указано'}`,
      `О бизнесе: ${formData.request || 'не указано'}`,
    ].join('\n');

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(requestText);
        setSubmitHint(
          'Текст заявки скопирован в буфер. Сейчас откроется Telegram — просто вставьте сообщение в диалог.'
        );
      } else {
        setSubmitHint(
          'Telegram откроется отдельно. Скопируйте текст заявки вручную, если буфер обмена недоступен.'
        );
      }
    } catch {
      setSubmitHint(
        'Не удалось автоматически скопировать текст. Telegram откроется отдельно — текст можно вставить вручную.'
      );
    }

    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#070b1a] text-white selection:bg-cyan-400 selection:text-black"
    >
      <HeaderHero
        telegramUrl={telegramUrl}
        navItems={navItems}
        onOpenMenu={() => setMobileMenuOpen(true)}
      />

      <MobileMenu
        open={mobileMenuOpen}
        setOpen={setMobileMenuOpen}
        navItems={navItems}
        telegramUrl={telegramUrl}
      />

      <ProofStrip />
      <EngineBlock />
      <WhyBuyBlock />

      <TrustSections
        monthlyRevenue={monthlyRevenue}
        setMonthlyRevenue={setMonthlyRevenue}
        decisionErrors={decisionErrors}
        setDecisionErrors={setDecisionErrors}
      />

      <CompareSection />

      <section id="packages">
        <PricingSection telegramUrl={telegramUrl} />
      </section>

      <CasesSection telegramUrl={telegramUrl} />

      <FounderCTA
        telegramUrl={telegramUrl}
        founderTelegramUrl={telegramUrl}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        submitHint={submitHint}
      />
    </div>
  );
}