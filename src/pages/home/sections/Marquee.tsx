import { useEffect, useRef, useState } from "react";

import "./styles/marquee.css";

interface MarqueeItem {
  id: number;
  name: string;
  logo?: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
  label?: string;
}

const CUSTOMERS: MarqueeItem[] = [
  { id: 1, name: "Green Yoga" },
  { id: 2, name: "Mindful Care" },
  { id: 3, name: "Prana Studio" },
  { id: 4, name: "Ayu Herbs" },
  { id: 5, name: "Zen Clinic" },
  { id: 6, name: "Wellness Lab" },
  { id: 7, name: "Herbal House" },
  { id: 8, name: "Calm Center" },
  { id: 9, name: "Balance Fit" },
  { id: 10, name: "Natura Spa" },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const COPIES_COUNT = 3;
const CARDS_PER_CLICK = 3;
const INITIAL_COPY_INDEX = 1;

export const Marquee = ({
  items = CUSTOMERS,
  label = "Our customers",
}: Partial<MarqueeProps>) => {
  const loopItems = Array.from({ length: COPIES_COUNT }, () => items).flat();
  // Ref нужен, чтобы измерять реальную ширину CSS-карточки после применения media queries.
  const listRef = useRef<HTMLDivElement>(null);
  // 238px - desktop fallback: 220px карточка + 18px gap, чтобы transform был валидным до первого измерения DOM.
  const [itemStep, setItemStep] = useState(238);
  const [activeIndex, setActiveIndex] = useState(items.length * INITIAL_COPY_INDEX);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  useEffect(() => {
    // Шаг прокрутки считаем из DOM, потому что на mobile ширина .marquee-item меняется в CSS.
    const updateItemStep = () => {
      const list = listRef.current;
      const firstItem = list?.querySelector<HTMLElement>(".marquee-item");

      // Если список ещё не отрисовался, оставляем fallback и не ломаем первый render.
      if (!list || !firstItem) {
        return;
      }

      // К ширине карточки добавляем gap списка, иначе каждый клик постепенно будет смещать ленту не по сетке.
      const gap = Number.parseFloat(window.getComputedStyle(list).columnGap) || 0;
      setItemStep(firstItem.offsetWidth + gap);
    };

    // Сразу измеряем текущий breakpoint после mount.
    updateItemStep();
    // При resize пересчитываем шаг, чтобы карусель продолжала совпадать с CSS-ширинами карточек.
    window.addEventListener("resize", updateItemStep);

    return () => {
      // Чистим listener, чтобы компонент не оставлял подписку после размонтирования.
      window.removeEventListener("resize", updateItemStep);
    };
  }, [items.length]);

  useEffect(() => {
    setIsTransitionEnabled(false);
    setActiveIndex(items.length * INITIAL_COPY_INDEX);
  }, [items.length]);

  useEffect(() => {
    if (isTransitionEnabled) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [activeIndex, isTransitionEnabled]);

  const scrollTrack = (direction: "left" | "right") => {
    setIsTransitionEnabled(true);
    setActiveIndex((currentIndex) => {
      return direction === "left"
        ? currentIndex - CARDS_PER_CLICK
        : currentIndex + CARDS_PER_CLICK;
    });
  };

  const normalizeIndex = () => {
    if (activeIndex >= items.length * 2) {
      setIsTransitionEnabled(false);
      setActiveIndex((currentIndex) => currentIndex - items.length);
      return;
    }

    if (activeIndex < items.length) {
      setIsTransitionEnabled(false);
      setActiveIndex((currentIndex) => currentIndex + items.length);
    }
  };

  return (
    <section className="marquee-section" aria-label={label}>
      {label && <h2 className="marquee-title">{label}</h2>}

      <div className="marquee-carousel">
        <div className="marquee-controls" aria-label="Customer carousel controls left">
          <button
            className="marquee-control marquee-control--left"
            type="button"
            aria-label="Scroll customers left"
            onClick={() => scrollTrack("left")}
          />
        </div>

        <div className="marquee-track">
          <div
            // Ref привязан к track-list, потому что отсюда берём gap и первую карточку для расчёта itemStep.
            ref={listRef}
            className={`marquee-list ${
              isTransitionEnabled ? "" : "marquee-list--no-transition"
            }`}
            style={{
              // Transform использует измеренный itemStep, поэтому один и тот же TS-код работает для desktop/tablet/mobile CSS.
              transform: `translateX(-${activeIndex * itemStep}px)`,
            }}
            onTransitionEnd={normalizeIndex}
          >
            {loopItems.map((item, index) => (
              <article className="marquee-item" key={`${item.id}-${index}`}>
                {item.logo ? (
                  <img src={item.logo} alt="" className="marquee-logo" />
                ) : (
                  <span className="marquee-logo" aria-hidden="true">
                    {getInitials(item.name)}
                  </span>
                )}
                <span>{item.name}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="marquee-controls" aria-label="Customer carousel controls right">
          <button
            className="marquee-control marquee-control--right"
            type="button"
            aria-label="Scroll customers right"
            onClick={() => scrollTrack("right")}
          />
        </div>
      </div>
    </section>
  );
};
