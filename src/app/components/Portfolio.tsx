import { useEffect, useRef, useState } from "react";
import { ExternalLink, Play, Eye } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { SectionLabel } from "./About";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Note: browsers typically block autoplay with sound. We'll attempt to unmute on hover below.

const portfolioScreenshot = new URL(
  "../../imports/Screenshot_2026-07-02_171746.png",
  import.meta.url,
).href;
const landingPageScreenshot = new URL("../../imports/pay.JPG", import.meta.url)
  .href;
const eventPoster = new URL("../../imports/exam.jpg", import.meta.url).href;
const Feeyah = new URL("../../imports/feeyah.JPG", import.meta.url).href;
const Obsidian = new URL("../../imports/obsi.JPG", import.meta.url).href;
const JaysHair = new URL("../../imports/jays.png", import.meta.url).href;
const brandingPoster = new URL("../../imports/Doorstep.png", import.meta.url)
  .href;
const tahseen = new URL("../../imports/tahseen.png", import.meta.url).href;
const day1 = new URL("../../imports/Day 1.mp4", import.meta.url).href;
const day2 = new URL("../../imports/day2.mp4", import.meta.url).href;
const afriSouq = new URL("../../imports/AfriSouq Express.mp4", import.meta.url)
  .href;

interface PortfolioProps {
  isDark: boolean;
}

type Category = "all" | "video" | "design" | "web";

// const DRIVE_URL = 'https://drive.google.com/drive/folders/1vpeWYB5oF39lP5_5irpvzqnhWKp7xKLY?usp=sharing';

const projects = [
  // Video projects first
  {
    id: 1,
    title: "Brand Story Reel",
    category: "video" as Category,
    label: "Video",
    description:
      "Dynamic brand story video with cinematic cuts and motion graphics.",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accentColor: "#F59E0B",
    icon: Play,
    href: "https://drive.google.com/file/d/1akw6Zn8vBw2WaDl5Jy-YOXnHcUsgVdp0/view?usp=drive_link",
    video: day1 as string,
  },
  {
    id: 2,
    title: "Event Highlights",
    category: "video" as Category,
    label: "Video",
    description:
      "Fast-paced event highlight reel with music sync and transitions.",
    gradient: "linear-gradient(135deg, #2d1b00 0%, #4a2f00 50%, #6b4300 100%)",
    accentColor: "#F97316",
    icon: Play,
    href: "https://drive.google.com/file/d/10RikYzqzepHOTot1Muu79gUP4mR4utN8/view?usp=drive_link",
    video: day2 as string,
  },
  {
    id: 3,
    title: "Product Demo Cut",
    category: "video" as Category,
    label: "Video",
    description:
      "Clean product showcase edit with text overlays and smooth pacing.",
    gradient: "linear-gradient(135deg, #0d0d0d 0%, #1a0a2e 50%, #2d1462 100%)",
    accentColor: "#FBBF24",
    icon: Play,
    href: "https://drive.google.com/file/d/1nAli4u5NjnkoJ4pEXUUEwMLi0J8svvdH/view?usp=drive_link",
    video: afriSouq as string,
  },
  // Design projects
  {
    id: 4,
    title: "Social Media Kit",
    category: "design" as Category,
    label: "Design",
    description:
      "Cohesive Instagram & Twitter template pack for a lifestyle brand.",
    gradient: "linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #122d45 100%)",
    accentColor: "#F59E0B",
    icon: Eye,
    href: "https://drive.google.com/drive/folders/1Qx53zseF7vjareaV6fV7w5qvQ82SJ7Ze?usp=sharing",
    image: tahseen as string,
  },
  {
    id: 5,
    title: "Brand Identity",
    category: "design" as Category,
    label: "Design",
    description:
      "Full brand identity system including logo, colors, and typography.",
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #2d1010 50%, #401616 100%)",
    accentColor: "#F97316",
    icon: Eye,
    href: "https://drive.google.com/drive/folders/1Qx53zseF7vjareaV6fV7w5qvQ82SJ7Ze?usp=sharing",
    image: brandingPoster as string,
  },
  {
    id: 6,
    title: "Event Poster Series",
    category: "design" as Category,
    label: "Design",
    description: "Bold poster designs for a music event series.",
    gradient: "linear-gradient(135deg, #0a1a0a 0%, #102810 50%, #163a16 100%)",
    accentColor: "#FBBF24",
    icon: Eye,
    href: "https://drive.google.com/drive/folders/1Qx53zseF7vjareaV6fV7w5qvQ82SJ7Ze?usp=sharing",
    image: eventPoster as string,
  },
  // Web/Vibe-coded projects
  {
    id: 7,
    title: "Portfolio Site",
    category: "web" as Category,
    label: "Web",
    description:
      "This very site — designed and built with AI-assisted coding tools.",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #101028 50%, #161640 100%)",
    accentColor: "#F59E0B",
    icon: ExternalLink,
    href: "https://myportfolio-rose-pi-89.vercel.app/",
    image: portfolioScreenshot as string,
  },
  {
    id: 8,
    title: "IqraPay",
    category: "web" as Category,
    label: "Web",
    description:
      "High-converting landing page for a SaaS product with animations.",
    gradient: "linear-gradient(135deg, #1a0a1a 0%, #280f28 50%, #3a163a 100%)",
    accentColor: "#F97316",
    icon: ExternalLink,
    href: "https://www.iqrapay.com.ng",
    image: landingPageScreenshot as string,
  },
  {
    id: 9,
    title: "Feeyah Signature",
    category: "web" as Category,
    label: "Web",
    description:
      "A polished web presence for a confectionery brand featuring pastries, baking, and premium treats.",
    gradient: "linear-gradient(135deg, #1a0a1a 0%, #280f28 50%, #3a163a 100%)",
    accentColor: "#A855F7",
    icon: ExternalLink,
    href: "https://feeyah.vercel.app/",
    image: Feeyah as string,
  },
  {
    id: 10,
    title: "Obsidian",
    category: "web" as Category,
    label: "Web",
    description:
      "E-commerce portfolio for Obsidian — handcrafted crochet accessories, home goods, and custom commissions.",
    gradient: "linear-gradient(135deg, #1a0a1a 0%, #280f28 50%, #3a163a 100%)",
    accentColor: "#F0EBE3",
    icon: ExternalLink,
    href: "https://obsidian-crochet.vercel.app/",
    image: Obsidian as string,
  },
  {
    id: 11,
    title: "Jays Hair",
    category: "web" as Category,
    label: "Web",
    description:
      "Modern e-commerce experience for Jays Hair, showcasing beauty services, product collections, and online booking.",
    gradient: "linear-gradient(135deg, #1a0a1a 0%, #280f28 50%, #3a163a 100%)",
    accentColor: "rgb(194, 112, 77)",
    icon: ExternalLink,
    href: "https://jayshair.vercel.app/",
    image: JaysHair as string,
  },
];

const tabs: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Video", value: "video" },
  { label: "Design", value: "design" },
  { label: "Web", value: "web" },
];

export function Portfolio({ isDark }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const textColor = isDark ? "#f2ede8" : "#1a1919";
  const mutedColor = isDark ? "#888" : "#686868";
  const tabBg = isDark ? "#141414" : "#ffffff";
  const tabBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="work"
      style={{
        padding: "clamp(5rem, 10vh, 8rem) clamp(1.25rem, 8vw, 8rem)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: isDark ? "rgba(20,20,20,0.5)" : "rgba(0,0,0,0.02)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}
      >
        {/* attempting direct unmute on hover (no enable button) */}
        <AnimatedSection delay={0}>
          <SectionLabel>Selected Work</SectionLabel>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1.5rem",
              flexWrap: "wrap",
              marginTop: "2rem",
              marginBottom: "2.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: textColor,
                transition: "color 300ms ease",
              }}
            >
              Portfolio &amp; <span style={{ color: "#F59E0B" }}>Projects</span>
            </h2>

            {/* Filter tabs */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                backgroundColor: tabBg,
                border: `1px solid ${tabBorder}`,
                borderRadius: "8px",
                padding: "4px",
              }}
            >
              {tabs.map((tab) => (
                <FilterTab
                  key={tab.value}
                  label={tab.label}
                  isActive={activeTab === tab.value}
                  isDark={isDark}
                  onClick={() => setActiveTab(tab.value)}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {filtered.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 80}>
              <ProjectCard
                project={project}
                isDark={isDark}
                textColor={textColor}
                mutedColor={mutedColor}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterTab({
  label,
  isActive,
  isDark,
  onClick,
}: {
  label: string;
  isActive: boolean;
  isDark: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.4rem 1rem",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontSize: "0.82rem",
        fontWeight: isActive ? 700 : 400,
        backgroundColor: isActive ? "#F59E0B" : "transparent",
        color: isActive ? "#111" : isDark ? "#888" : "#666",
        transition: "all 200ms ease",
        letterSpacing: "0.01em",
      }}
    >
      {label}
    </button>
  );
}

function ProjectCard({
  project,
  isDark,
  textColor,
  mutedColor,
}: {
  project: (typeof projects)[0];
  isDark: boolean;
  textColor: string;
  mutedColor: string;
}) {
  const [isHover, setIsHover] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const Icon = project.icon;
  const cardBg = isDark ? "#141414" : "#ffffff";
  const cardBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const isClickable = !!project.href;
  const hasImage =
    typeof (project as any).image === "string" &&
    (project as any).image.trim() !== "";
  const hasVideo = "video" in project && !!project.video;

  useEffect(() => {
    if (!videoRef.current || !hasVideo) return;

    const video = videoRef.current;
    if (isHover) {
      // Try to unmute and play on hover. Browsers may still block autoplay with sound.
      try {
        video.muted = false;
      } catch (_) {}
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // If playing with sound is blocked, fall back to muted autoplay
          try {
            video.muted = true;
            video.play().catch(() => undefined);
          } catch (_) {}
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
      try {
        video.muted = true;
      } catch (_) {}
      setIsVideoPlaying(false);
    }
  }, [isHover, hasVideo]);

  const handleClick = () => {
    if (project.href)
      window.open(project.href, "_blank", "noopener,noreferrer");
  };

  const mediaStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    objectFit: "cover",
    objectPosition: "center center",
    transform: isHover ? "scale(1.04)" : "scale(1)",
    transition: "transform 400ms ease",
  };

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleClick}
      style={{
        borderRadius: "12px",
        backgroundColor: cardBg,
        border: `1px solid ${isHover ? `${project.accentColor}35` : cardBorder}`,
        cursor: isClickable ? "pointer" : "default",
        overflow: "hidden",
        transform: isHover
          ? "translateY(-6px) scale(1.01)"
          : "translateY(0) scale(1)",
        boxShadow: isHover
          ? isDark
            ? "0 24px 56px rgba(0,0,0,0.55)"
            : "0 24px 56px rgba(0,0,0,0.12)"
          : "none",
        transition: "all 300ms ease",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: "200px",
          background: project.gradient,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Media preview */}
        {hasVideo ? (
          <video
            ref={videoRef}
            src={project.video}
            autoPlay={false}
            loop
            playsInline
            preload="auto"
            onPlaying={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
            onEnded={() => {
              setIsVideoPlaying(false);
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(() => undefined);
              }
            }}
            style={{
              ...mediaStyle,
              position: "absolute",
              inset: 0,
            }}
          />
        ) : hasImage ? (
          <ImageWithFallback
            src={String((project as any).image)}
            alt={project.title}
            style={{
              ...mediaStyle,
              position: "absolute",
              inset: 0,
            }}
          />
        ) : null}

        {hasVideo && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              opacity: isVideoPlaying ? 0 : 0.85,
              transition: "opacity 300ms ease, transform 300ms ease",
              transform: isVideoPlaying ? "scale(0.96)" : "scale(1)",
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.24)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
              }}
            >
              <Play
                size={18}
                fill="white"
                style={{ marginLeft: "2px", color: "white" }}
              />
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              hasImage || hasVideo
                ? `linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.65) 100%)`
                : `${project.accentColor}18`,
            opacity: isHover ? 1 : hasImage || hasVideo ? 0 : 0,
            transition: "opacity 300ms ease",
          }}
        />

        {/* Center icon — only shown on cards without media */}
        {!hasImage && !hasVideo && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                backgroundColor: isHover
                  ? project.accentColor
                  : "rgba(255,255,255,0.1)",
                border: `1px solid ${isHover ? project.accentColor : "rgba(255,255,255,0.2)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: isHover ? "#111" : "rgba(255,255,255,0.7)",
                transform: isHover ? "scale(1.1)" : "scale(1)",
                transition: "all 300ms ease",
              }}
            >
              <Icon size={20} strokeWidth={1.8} />
            </div>
          </div>
        )}

        {/* Category tag on thumbnail */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
          }}
        >
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: project.accentColor,
              backgroundColor: `${project.accentColor}15`,
              border: `1px solid ${project.accentColor}30`,
              padding: "3px 10px",
              borderRadius: "999px",
              backdropFilter: "blur(8px)",
            }}
          >
            {project.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "0.5rem",
            marginBottom: "0.4rem",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: textColor,
              letterSpacing: "-0.01em",
              transition: "color 300ms ease",
            }}
          >
            {project.title}
          </h3>
          {isClickable && (
            <ExternalLink
              size={14}
              style={{
                color: isHover ? project.accentColor : mutedColor,
                flexShrink: 0,
                marginTop: "3px",
                transition: "color 200ms ease",
              }}
            />
          )}
        </div>
        <p
          style={{
            fontSize: "0.85rem",
            lineHeight: 1.65,
            color: mutedColor,
            fontWeight: 300,
            transition: "color 300ms ease",
          }}
        >
          {project.description}
        </p>
        {isClickable && (
          <p
            style={{
              fontSize: "0.72rem",
              color: isHover ? project.accentColor : "transparent",
              fontWeight: 600,
              letterSpacing: "0.05em",
              marginTop: "0.75rem",
              transition: "color 200ms ease",
            }}
          >
            {project.category === "web"
              ? "Go to Website"
              : "View on Google Drive"}
          </p>
        )}
      </div>
    </div>
  );
}
