"use client";

import React, { Fragment, useEffect, useId, useRef } from "react";

type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<N extends number> = Enumerate<N>;

interface ScrollBlurWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  minVelocity?: number;
  maxBlur?: number;
  strength?: number;
  blurDirection?: "vertical" | "horizontal";
  scrollContainer?: React.RefObject<HTMLElement>;
}

export const ScrollBlurWrapper = ({
  children,
  className,
  style,
  minVelocity = 10,
  maxBlur = 10,
  strength = 0.2,
  blurDirection = "vertical",
  scrollContainer,
}: ScrollBlurWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const filterRef = useRef<SVGFEGaussianBlurElement>(null);
  
  const lastScrollY = useRef(0);
  const currentBlur = useRef(0);
  const rafId = useRef<number>(0);
  const lastTime = useRef<number>(0);

  const filterId = useId();
  const uniqueFilterId = `motion-blur-${filterId.replace(/:/g, "")}`;

  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      prefersReducedMotion.current = mediaQuery.matches;
      
      const handleChange = () => { prefersReducedMotion.current = mediaQuery.matches; };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion.current) return;

    const getScrollPosition = () => 
      scrollContainer?.current ? scrollContainer.current.scrollTop : window.scrollY;

    lastScrollY.current = getScrollPosition();
    lastTime.current = performance.now();

    const loop = (time: number) => {
      const deltaTime = time - lastTime.current;
      lastTime.current = time;

      if (deltaTime <= 0) {
        rafId.current = requestAnimationFrame(loop);
        return;
      }

      const currentScroll = getScrollPosition();
      
      const rawVelocity = Math.abs(currentScroll - lastScrollY.current) / deltaTime; 
      const normalizedVelocity = rawVelocity * 16.67; // Base 60fps (~16ms)

      lastScrollY.current = currentScroll;

      let targetBlur = 0;
      if (normalizedVelocity > minVelocity) {
        targetBlur = Math.min(normalizedVelocity * strength, maxBlur);
      }

      const lerpFactor = 1 - Math.pow(0.15, deltaTime / 16.67); 
      // Nota: 0.15 era muito rápido, ajustei a lógica, ou pode usar valor fixo 0.1
      
      currentBlur.current += (targetBlur - currentBlur.current) * 0.15;

      if (Math.abs(currentBlur.current) < 0.05) {
        currentBlur.current = 0;
      }

      if (filterRef.current) {
        const currentAttr = filterRef.current.getAttribute("stdDeviation");
        const val = currentBlur.current.toFixed(1);
        
        const newVal = blurDirection === "vertical" ? `0 ${val}` : `${val} 0`;

        if (currentAttr !== newVal) {
          filterRef.current.setAttribute("stdDeviation", newVal);
        }
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [minVelocity, blurDirection, maxBlur, strength, scrollContainer]);

  return (
    <Fragment>
      <svg
        style={{
          position: "absolute",
          height: 0,
          width: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <defs>
          <filter id={uniqueFilterId} colorInterpolationFilters="sRGB">
            <feGaussianBlur
              ref={filterRef}
              in="SourceGraphic"
              stdDeviation="0 0"
              edgeMode="duplicate" 
            />
          </filter>
        </defs>
      </svg>
      <div
        ref={ref}
        className={className}
        style={{
          ...style,
          filter: prefersReducedMotion.current ? "none" : `url(#${uniqueFilterId})`,
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
      >
        {children}
      </div>
    </Fragment>
  );
};