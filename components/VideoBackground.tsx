"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  posterSrc?: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export default function VideoBackground({
  videoSrc,
  posterSrc,
  className = "",
  overlay = true,
  overlayOpacity = 0.6,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (prefersReducedMotion.matches) {
      setHasError(true);
      return;
    }

    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    const handleError = () => {
      setHasError(true);
    };

    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    // Attempt to play the video
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        // Fallback to poster image
        setHasError(true);
      }
    };

    if (video.readyState >= 3) {
      handleLoadedData();
    } else {
      playVideo();
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc]);

  if (hasError) {
    return null; // Gracefully degrade to no video background
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={posterSrc}
        aria-hidden="true"
        role="presentation"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          minWidth: "100%",
          minHeight: "100%",
          objectPosition: "center center",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc.replace(".mp4", ".webm")} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Loading fallback */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-pulse" />
      )}
    </div>
  );
}
