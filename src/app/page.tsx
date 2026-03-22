
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  BrainCircuit,
  Radar,
  ShieldAlert,
  TrendingUp,
  Factory,
  ShoppingCart,
  Wrench,
  Dumbbell,
  Store,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';

const card =
  'bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)]';
const cardDark =
  'bg-[#0c1122] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)]';
const section = 'max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20';

type NavItem = { label: string; href: string };
type Benefit = { icon: React.ComponentType<{ className?: string }>; text: string };
type AudienceItem = { title: string; icon: React.ComponentType<{ className?: string }> };
type FormState = { name: string; contact: string; request: string };

type FounderCTAProps = {
  telegramUrl: string;
  formData: FormState;
  handleInputChange: (
    field: keyof FormState
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const benefits: Benefit[] = [
  { icon: BrainCircuit, text: 'Анализирует управленческие решения' },
  { icon: ShieldAlert, text: 'Прогнозирует риски' },
  { icon: TrendingUp, text: 'Оценивает окупаемость решений' },
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
  ['01', 'Анализ 10–15 решений', 'Разбор ключевых решений: реклама, ассортимент, найм, маркетинг, цена.'],
  ['02', 'Сопровождение решений', '1–2 месяца AI помогает принимать решения и снижать риск ошибок.'],
  ['03', 'Подписка на AI-аналитика', 'Регулярный анализ бизнеса, слабых мест и точек роста.'],
  ['04', 'AI-двойник предпринимателя', 'Моделирует сценарии, прогнозирует риски и рекомендует лучший шаг.'],
] as const;

const cases = [
  ['Маркетплейсы — рост SKU', '+14% продаж', 'Оборот: 18 млн ₽ / мес', '+2.5 млн ₽ к выручке за квартал', 'Период: за квартал'],
  ['Маркетплейсы — реклама', '−11% расходов', 'Бюджет: 1.2 млн ₽ / мес', 'Снижение лишних расходов без просадки продаж', 'Период: за 2 месяца'],
  ['Автосервис', '+18% заявок', 'Выручка: 4.8 млн ₽ / мес', '+860 тыс. ₽ потенциала в месяц', 'Период: за 2 месяца'],
  ['Стоматология', '+12% записей', 'Средний чек: 14 000 ₽', 'Рост повторных визитов и загрузки врачей', 'Период: за 3 месяца'],
  ['Онлайн-школа', '+9% продаж', 'Оборот: 6.5 млн ₽ / запуск', 'Улучшение конверсии без роста команды', 'Период: за запуск'],
  ['Фитнес-клуб', '−8% оттока', 'База: 1 400 клиентов', 'Рост LTV за счет удержания', 'Период: за 3 месяца'],
] as const;

const reviews = [
  ['Дмитрий Соколов', 'Маркетплейс', 'AI показал, где терялись деньги в рекламе. Исправили ставки и карточки — продажи пошли вверх.'],
  ['Александр К.', 'Автосервис', 'Система подсветила слабые места в загрузке мастеров и потери в заявках.'],
  ['Екатерина М.', 'Онлайн-школа', 'AI разобрал воронку и показал, где теряются заявки. После изменений конверсия выросла.'],
] as const;

function HeaderHero({ telegramUrl, navItems }: { telegramUrl: string; navItems: NavItem[] }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b1a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
          <a href="#top" className="flex items-center gap-3 text-white">
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2">
              <Bot className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <div className="text-sm font-semibold">AI-двойник</div>
              <div className="text-xs text-white/50">предпринимателя</div>
            </div>
          </a>

          <nav className="hidden items-center gap-4 xl:gap-6 lg:flex">
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
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm"
            >
              Обсудить внедрение
            </a>
            <a href="#pilot" className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:scale-[1.03]">
              Запустить пилот
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 px-4 sm:px-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(88,80,236,0.26),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.2),_transparent_30%),radial-gradient(circle_at_bottom_center,_rgba(249,115,22,0.12),_transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-0 sm:px-6 py-14 sm:py-20 lg:py-24 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-[11px] sm:text-sm uppercase tracking-[0.18em] text-cyan-300">
              <Bot className="h-4 w-4" />AI-двойник предпринимателя
            </div>
            <h1 className="max-w-5xl text-4xl sm:text-5xl font-bold leading-[1.02] md:text-7xl">
              Система, которая превращает <span className="text-orange-400">хаотичные решения в предсказуемый рост прибыли</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/70">
              AI-двойник анализирует контекст бизнеса, оценивает риски, сравнивает сценарии и помогает выбирать более сильные решения до того, как ошибка начнет стоить денег.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <a href="#pilot" className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-3.5 font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-[1.04]">
                Запустить пилот
              </a>
              <a href="#cases" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-center">
                Смотреть кейсы
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-7 py-3.5 font-semibold text-cyan-300 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:scale-[1.04]"
              >
                <MessageCircle className="h-4 w-4" />Обсудить внедрение
              </a>
            </div>
            <div className="mt-8 grid max-w-3xl grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {[
                ['10–15', 'решений анализируем'],
                ['50+', 'параметров анализа'],
                ['20', 'сценариев решения'],
              ].map(([v, t]) => (
                <div key={v} className={`${card} p-4`}>
                  <div className="text-2xl text-cyan-400">{v}</div>
                  <div className="text-sm text-white/60">{t}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center lg:mt-0">
            <div className="relative mx-auto h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]">
              <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute inset-6 rounded-full border border-cyan-400/20" />
              <div className="absolute inset-0 rounded-full border border-fuchsia-400/15" />
              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-2xl" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-cyan-400/25 p-8">
                <div className="rounded-full border border-cyan-400/25 bg-[#0d1328]/80 p-10 backdrop-blur">
                  <Bot className="h-24 w-24 text-cyan-300" />
                </div>
              </div>
              {['Продажи', 'Риски', 'Реклама', 'Сценарии'].map((label, i) => {
                const positions = [
                  'left-1/2 top-2 -translate-x-1/2',
                  'right-0 top-1/2 -translate-y-1/2',
                  'left-1/2 bottom-2 -translate-x-1/2',
                  'left-0 top-1/2 -translate-y-1/2',
                ];
                return (
                  <div
                    key={label}
                    className={`absolute ${positions[i]} rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 backdrop-blur`}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function EngineBlock() {
  return (
    <>
      <section id="how-it-works" className={section}>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <h2 className="mb-6 text-4xl font-bold">Что делает AI-двойник</h2>
            <p className="max-w-2xl leading-8 text-white/70">
              AI помогает принимать более сильные решения: анализирует варианты, показывает слабые места, прогнозирует последствия и помогает выбирать лучший сценарий.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className={`${card} flex items-start gap-4`}>
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div>{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mt-1 text-3xl font-bold">Как AI принимает решения</h3>
            <p className="mt-3 leading-7 text-white/65">Визуальная схема того, как система превращает бизнес-контекст в конкретную рекомендацию.</p>
            <div className="mt-8 grid gap-4">
              {[
                ['01', 'Собирает контекст', 'Продажи, реклама, процессы, команда и экономика бизнеса'],
                ['02', 'Сравнивает сценарии', 'Показывает несколько вариантов действия и их последствия'],
                ['03', 'Оценивает риски', 'Подсвечивает слабые места до того, как ошибка приведет к потерям'],
                ['04', 'Рекомендует шаг', 'Выдает следующий сильный шаг с учетом приоритета прибыли'],
              ].map(([n, t, s], i) => (
                <div key={n} className="relative rounded-2xl border border-white/10 bg-[#0d1328] p-5">
                  <div className="mb-2 text-sm text-cyan-400">{n}</div>
                  <div className="font-semibold text-white/90">{t}</div>
                  <div className="mt-2 text-sm leading-6 text-white/60">{s}</div>
                  {i < 3 && <div className="absolute left-7 top-full h-4 w-px bg-gradient-to-b from-cyan-400/60 to-transparent" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={section}>
  <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1120] to-[#10182f] p-5 sm:p-8 md:p-10">
    <div className="grid items-start gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight break-words">
  Decision Engine для предпринимателя
</h2>
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-6 sm:leading-8 text-white/70">
                Это система, которая помогает понять: какое решение даст лучший результат, какой риск оно несет и сколько денег можно потерять, если выбрать слабый сценарий.
              </p>
              <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4">
                {['Видит связи между решениями и метриками', 'Сравнивает несколько сценариев роста', 'Помогает действовать системно'].map((t) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 text-sm sm:text-base text-white/85 break-words">
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {[
                ['Сигналы', 'Продажи, реклама, заявки'],
                ['Риски', 'Цена ошибки и слабые места'],
                ['Сценарии', 'Варианты роста и защиты прибыли'],
                ['Решение', 'Лучший следующий шаг'],
              ].map(([t, s]) => (
                <div key={t} className={`${cardDark} p-3 sm:p-5 overflow-hidden`}>
                  <div className="text-[11px] sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.18em] text-cyan-300 break-words">
  {t}
</div>
                  <div className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-white/70 break-words">
  {s}
</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
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
        <h2 className="mb-12 text-4xl font-bold">4 стадии продукта</h2>
        <div className="grid gap-6 md:grid-cols-2">
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
        <h2 className="text-4xl font-bold">Для кого продукт</h2>
        <p className="mt-4 max-w-3xl leading-8 text-white/70">
          AI-двойник помогает предпринимателям принимать решения быстрее и точнее в разных типах бизнеса.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {audience.map(({ title, icon: Icon }) => (
            <div key={title} className={`${card} p-5 text-center`}>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>
              {title}
            </div>
          ))}
        </div>
      </section>

      <section className={section}>
        <div className="grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-300">Почему предприниматели ошибаются</div>
            <h2 className="mt-3 text-4xl font-bold">Большинство ошибок — из-за слабой системы принятия решений</h2>
            <p className="mt-4 max-w-xl leading-8 text-white/70">
              Когда решения принимаются быстро и без полной картины бизнеса, предприниматель не видит реальную цену ошибки.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {['Слишком быстрые решения', 'Видна только часть данных', 'Ошибки замечают слишком поздно', 'Нет сравнения сценариев'].map((t, i) => (
              <div key={t} className={`${card} p-5`}>
                <div className="mb-3 text-sm text-orange-300">0{i + 1}</div>
                <div className="text-white/85">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
  <div className="overflow-hidden rounded-3xl border border-orange-400/15 bg-gradient-to-br from-orange-400/10 to-[#0d1328] p-5 sm:p-8 md:p-10">
    <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight break-words">
      Сколько стоит неправильное решение предпринимателя
    </h2>
          <div className="mt-6 sm:mt-10 grid gap-3 sm:gap-6 md:grid-cols-3">
            {[
  ['Ошибка в рекламе', '−300 000 ₽'],
  ['Ошибка в найме', '−2 месяца'],
  ['Ошибка в стратегии', '−миллионы ₽'],
].map(([t, v]) => (
  <div key={t} className="rounded-2xl border border-white/10 bg-[#0b1120] p-4 sm:p-6 overflow-hidden">
    <div className="text-[11px] sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.18em] text-orange-300 break-words">
      {t}
    </div>
    <div className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold break-words">
      {v}
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="mt-3 text-4xl font-bold">Сколько бизнес может терять из-за слабых решений</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_.9fr]">
            <div className="space-y-6">
              <div>
                <div className="mb-2 text-sm text-white/60">Месячная выручка: {monthlyRevenue.toLocaleString('ru-RU')} ₽</div>
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
                <div className="mb-2 text-sm text-white/60">Слабых решений в месяц: {decisionErrors}</div>
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
            </div>
            <div className="rounded-3xl border border-orange-400/20 bg-orange-400/10 p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-orange-300">Оценка потерь</div>
              <div className="mt-4 text-4xl font-bold text-orange-200">{loss.toLocaleString('ru-RU')} ₽ / мес</div>
              <div className="mt-8 text-2xl font-semibold">{yearLoss.toLocaleString('ru-RU')} ₽ / год</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CasesSection({ telegramUrl }: { telegramUrl: string }) {
  return (
    <section id="cases" className="bg-white/[0.02] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-bold">Кейсы</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/70">
              Кейсы по разным нишам и этапам продукта: от пилотного анализа до сопровождения и подписки.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cases.map(([title, result, meta, extra, period]) => (
            <div key={title} className={`${cardDark} flex min-h-[220px] flex-col`}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="text-sm text-orange-400">{result}</div>
                <div className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-cyan-300">
                  {period}
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-7">{title}</h3>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-cyan-300">{meta}</div>
              <div className="mt-auto pt-4 text-sm text-white/85">{extra}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-6 py-3 font-semibold text-slate-950"
          >
            <MessageCircle className="h-4 w-4" />Обсудить кейс
          </a>
        </div>
      </div>
    </section>
  );
}

function FounderCTA({ telegramUrl, formData, handleInputChange, handleFormSubmit }: FounderCTAProps) {
  return (
    <>
      <section className={section}>
        <h2 className="mb-10 text-4xl font-bold">Отзывы предпринимателей</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map(([name, niche, text]) => (
            <div key={name} className={card}>
              <p className="mb-4 text-white/70">{text}</p>
              <div className="text-sm text-cyan-400">{name}</div>
              <div className="text-xs text-white/50">{niche}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="founder" className={section}>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.25 }}
    className="grid items-start gap-8 lg:grid-cols-[1.15fr_.85fr]"
  >
    <div>
      <div className="text-sm uppercase tracking-[0.18em] text-cyan-300">
        Основатель
      </div>

      <h2 className="mt-3 text-4xl font-bold">
        Максим Котельников
      </h2>

      <p className="mt-4 max-w-xl leading-8 text-white/70">
        Я развиваю AI-продукт для предпринимателей, которым важно не просто
        получать аналитику, а принимать более точные решения в росте,
        рекламе, процессах и стратегии. Моя цель — сделать AI практическим
        инструментом прибыли, а не абстрактной технологией.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={telegramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] hover:scale-[1.04]"
        >
          <MessageCircle className="h-4 w-4" />
          Обсудить внедрение
        </a>

        <a
          href="#pilot"
          className="rounded-xl border border-white/20 bg-white/5 px-6 py-3"
        >
          Запустить пилот
        </a>
      </div>
    </div>

    <div className="relative w-full min-h-[520px] sm:min-h-[620px] md:min-h-0 md:grid md:grid-cols-[1fr_300px] items-start gap-4 lg:gap-5">
      <motion.div
  initial={{ opacity: 0, scale: 0.96, y: 20 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.25 }}
  className="
    absolute bottom-0 left-1/2 z-10 w-[92%] max-w-[420px] -translate-x-1/2
    flex items-end justify-center overflow-visible
    md:relative md:bottom-auto md:left-auto md:w-auto md:max-w-none md:translate-x-0
    md:mt-4 md:h-[420px] lg:h-[520px]
    md:items-start md:justify-center
  "
>
  <img
    src="/founder.png"
    alt="Максим Котельников"
    className="
      w-full object-contain
      md:relative md:z-10 md:h-full md:w-auto
      md:scale-[1.45] lg:scale-[2]
      md:-translate-y-[80px] lg:-translate-y-[180px]
      md:translate-x-[60px] lg:translate-x-[160px]
      drop-shadow-[0_0_40px_rgba(34,211,238,0.2)]
    "
  />
</motion.div>

     <motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.25 }}
  className="
    absolute bottom-0 left-1/2 z-30 w-[92%] max-w-[420px] -translate-x-1/2
    md:absolute md:bottom-auto md:left-auto md:translate-x-0
    md:w-[380px] lg:w-[420px]
    md:right-[-40px] lg:right-[30px]
    md:top-[210px]
  "
>
  <div className="absolute -inset-3 rounded-[28px] bg-cyan-400/10 blur-2xl" />

  <div className="relative rounded-[28px] border border-white/12 bg-white/[0.03] p-5 backdrop-blur-4xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
    <div className="text-sm text-white/55 mb-2">
      Контакт
    </div>

    <div className="text-lg font-semibold mb-3 text-white">
      @MAXKOTELNIKOV
    </div>

    <p className="text-sm leading-7 text-white/65">
      Напишите в Telegram, чтобы обсудить пилотный запуск AI-двойника
      и применимость продукта к вашему бизнесу.
    </p>
  </div>
</motion.div>
    </div>
  </motion.div>
</section>

      <section id="pilot" className="mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20 text-center">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
          <div className="text-sm uppercase tracking-[0.18em] text-orange-300">Пилотный запуск</div>
          <h2 className="mt-3 text-4xl font-bold">Старт AI-двойника</h2>
          <div className="mt-6 text-5xl font-bold text-orange-300">30 000 ₽</div>
          <form onSubmit={handleFormSubmit} className="mt-8 sm:mt-10 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Имя"
              value={formData.name}
              onChange={handleInputChange('name')}
              className="rounded-xl border border-white/10 bg-[#111933] px-4 py-3"
            />
            <input
              type="text"
              placeholder="Telegram или телефон"
              value={formData.contact}
              onChange={handleInputChange('contact')}
              className="rounded-xl border border-white/10 bg-[#111933] px-4 py-3"
            />
            <textarea
              placeholder="Коротко о бизнесе"
              value={formData.request}
              onChange={handleInputChange('request')}
              className="rounded-xl border border-white/10 bg-[#111933] px-4 py-3 md:col-span-2"
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-6 py-4 font-semibold text-black">
              Отправить заявку <ChevronRight className="h-4 w-4" />
            </button>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-4 font-semibold text-cyan-300"
            >
              <MessageCircle className="h-4 w-4" />Обсудить внедрение
            </a>
          </form>
        </div>
      </section>

      <footer id="contact" className="pb-20 text-center text-sm text-white/50">
        AI-двойник предпринимателя • Telegram: @MAXKOTELNIKOV
      </footer>

      <a
        href={telegramUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 px-6 py-3.5 font-semibold text-black shadow-lg transition-all duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] hover:scale-[1.05]"
      >
        <MessageCircle className="h-4 w-4" />Обсудить внедрение
      </a>
    </>
  );
}

export default function AIDvoynikLanding() {
  const telegramBase = 'https://t.me/ai_dvoynik_business_bot';
const telegramUrl = 'https://t.me/ai_dvoynik_business_bot?start=site';
  const navItems: NavItem[] = [
    { label: 'Как работает', href: '#how-it-works' },
    { label: 'Стадии', href: '#stages' },
    { label: 'Для кого', href: '#audience' },
    { label: 'Кейсы', href: '#cases' },
    { label: 'Основатель', href: '#founder' },
    { label: 'Контакты', href: '#contact' },
  ];

  const [formData, setFormData] = React.useState<FormState>({ name: '', contact: '', request: '' });
  const [monthlyRevenue, setMonthlyRevenue] = React.useState(3000000);
  const [decisionErrors, setDecisionErrors] = React.useState(2);

  const handleInputChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((p) => ({ ...p, [field]: e.target.value }));
    };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = encodeURIComponent(
      [
        'Здравствуйте! Хочу оставить заявку на пилотный запуск.',
        '',
        `Имя: ${formData.name || 'не указано'}`,
        `Контакт: ${formData.contact || 'не указано'}`,
        `Запрос: ${formData.request || 'не указано'}`,
      ].join('\n')
    );
    window.open(`${telegramBase}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="top" className="min-h-screen bg-[#070b1a] text-white selection:bg-cyan-400 selection:text-black">
      <HeaderHero telegramUrl={telegramUrl} navItems={navItems} />
      <EngineBlock />
      <TrustSections
        monthlyRevenue={monthlyRevenue}
        setMonthlyRevenue={setMonthlyRevenue}
        decisionErrors={decisionErrors}
        setDecisionErrors={setDecisionErrors}
      />
      <CasesSection telegramUrl={telegramUrl} />
      <FounderCTA
        telegramUrl={telegramUrl}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
