import { useEffect, useState } from "react";

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
const CARD_WIDTH = 220;
const CARD_GAP = 18;
const CARDS_PER_CLICK = 3;
const INITIAL_COPY_INDEX = 1;

export const Marquee = ({
  items = CUSTOMERS,
  label = "Our customers",
}: Partial<MarqueeProps>) => {
  const loopItems = Array.from({ length: COPIES_COUNT }, () => items).flat();
  const [activeIndex, setActiveIndex] = useState(items.length * INITIAL_COPY_INDEX);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

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
            className={`marquee-list ${
              isTransitionEnabled ? "" : "marquee-list--no-transition"
            }`}
            style={{
              transform: `translateX(-${activeIndex * (CARD_WIDTH + CARD_GAP)}px)`,
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
