import { useEffect } from "react";

import { allProjects, projectDetails } from "../data";
import { Footer } from "../components/common/Footer";

function MetaStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <span className="font-['General_Sans:Regular',sans-serif] text-[#239cff] text-[13px] tracking-[1px] uppercase">{label}</span>
      <span className="font-['General_Sans:Regular',sans-serif] text-[#fcfaf5] text-[16px]">{value}</span>
    </div>
  );
}

export function WorkDetailPage({
  projectIndex,
  onNav,
  onSelectProject,
}: {
  projectIndex: number;
  onNav: (s: string) => void;
  onSelectProject: (i: number) => void;
}) {
  const project = allProjects[projectIndex];
  const detail = projectDetails[projectIndex];
  
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [projectIndex]);

  return (
    <div className="bg-[#0f0d0b] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-[100px] pb-24">
        <div className="max-w-[1120px] mx-auto">

          {/* Title */}
          <h1 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(48px,7vw,92px)] tracking-[-2px] leading-[1.1] mb-10">
            {project.title}
          </h1>

          {/* Hero image */}
          <div 
            className="w-full h-[clamp(260px,45vw,600px)] rounded-lg overflow-hidden mb-16"
            style={{ backgroundColor: project.bgColor || "#161412" }}
          >
            <img src={project.img} alt={project.title} className={`w-full h-full ${project.containImg ? 'object-contain p-8 md:p-16' : 'object-cover'}`} />
          </div>

          {/* Overview: heading left | text + meta right */}
          <div className="flex flex-col md:flex-row gap-10 mb-16">
            <div className="md:flex-1">
              <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(28px,4vw,48px)] tracking-[-0.3px] leading-[1.2]">
                {detail.overviewHeading}
              </h2>
            </div>
            <div className="md:flex-1 flex flex-col gap-5">
              <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6] whitespace-pre-wrap">{detail.overviewPara1}</p>
              <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6] whitespace-pre-wrap">{detail.overviewPara2}</p>
              {/* Meta stats — nested in the right column, below paragraphs */}
              <div className="flex flex-wrap gap-10 pt-6 mt-2 border-t border-white/10">
                <MetaStat label="Client" value={detail.client} />
                <MetaStat label="Duration" value={detail.duration} />
                <MetaStat label="Industry" value={detail.industry} />
              </div>
            </div>
          </div>

          {/* Challenge — image gallery above, two-col text below */}
          <div className="mb-16">
            {/* Gallery: full-width top + two side-by-side below, equal heights */}
            <div className="flex flex-col gap-3 mb-12">
              <div 
                className="w-full rounded-lg overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: detail.galleryBg || "#161412" }}
              >
                <img 
                  src={detail.galleryImg} 
                  alt="" 
                  className="max-w-full w-auto h-auto object-contain select-none" 
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div 
                  className="rounded-lg overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: detail.galleryBg || "#161412" }}
                >
                  <img src={detail.challengeImg0} alt="" className="w-full h-auto object-contain select-none" />
                </div>
                <div 
                  className="rounded-lg overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: detail.galleryBg || "#161412" }}
                >
                  <img src={detail.challengeImg1} alt="" className="w-full h-auto object-contain select-none" />
                </div>
              </div>
            </div>
            {/* Text: label+heading left | two paragraphs right */}
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:flex-1 flex flex-col gap-4">
                <span className="font-['General_Sans:Regular',sans-serif] text-[#239cff] text-[13px] tracking-[1px] uppercase">{detail.challengeLabel}</span>
                <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(28px,3.5vw,48px)] tracking-[-0.3px] leading-[1.2]">
                  {detail.challengeHeading}
                </h2>
              </div>
              <div className="md:flex-1 flex flex-col gap-5">
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6] whitespace-pre-wrap">{detail.challengePara1}</p>
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6] whitespace-pre-wrap">{detail.challengePara2}</p>
              </div>
            </div>
          </div>

          {/* Approach — image gallery above, two-col text below */}
          <div className="mb-16">
            <div className="flex flex-col gap-4 mb-12">
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="rounded-lg overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: detail.galleryBg || "#161412" }}
                >
                  <img src={detail.approachImg0} alt="" className="w-full h-auto object-contain select-none" />
                </div>
                <div 
                  className="rounded-lg overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: detail.galleryBg || "#161412" }}
                >
                  <img src={detail.approachImg1} alt="" className="w-full h-auto object-contain select-none" />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:flex-1 flex flex-col gap-4">
                <span className="font-['General_Sans:Regular',sans-serif] text-[#239cff] text-[13px] tracking-[1px] uppercase">{detail.approachLabel}</span>
                <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(28px,3.5vw,48px)] tracking-[-0.3px] leading-[1.2]">
                  {detail.approachHeading}
                </h2>
              </div>
              <div className="md:flex-1 flex flex-col gap-5">
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6] whitespace-pre-wrap">{detail.approachPara1}</p>
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6] whitespace-pre-wrap">{detail.approachPara2}</p>
              </div>
            </div>
          </div>

          {/* Solutions — image above, two-col text below */}
          <div className="mb-20">
            <div 
              className="w-full rounded-lg overflow-hidden flex items-center justify-center mb-12"
              style={{ backgroundColor: detail.solutionsBg || "#161412" }}
            >
              <img 
                src={detail.solutionsImg} 
                alt="" 
                className="w-full h-auto object-contain select-none" 
              />
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:flex-1 flex flex-col gap-4">
                <span className="font-['General_Sans:Regular',sans-serif] text-[#239cff] text-[13px] tracking-[1px] uppercase">{detail.solutionsLabel}</span>
                <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(28px,3.5vw,48px)] tracking-[-0.3px] leading-[1.2]">
                  {detail.solutionsHeading}
                </h2>
              </div>
              <div className="md:flex-1 flex flex-col gap-5">
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6] whitespace-pre-wrap">{detail.solutionsPara1}</p>
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6] whitespace-pre-wrap">{detail.solutionsPara2}</p>
                <div>
                  <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#239cff] to-[#005be3] text-white font-['General_Sans:Medium',sans-serif] text-[14px] hover:opacity-90 transition-opacity duration-200">
                    Live preview
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Previous / Next Project */}
          <div className="flex justify-between pt-4">
            {projectIndex > 0 ? (
              <button
                onClick={() => onSelectProject(projectIndex - 1)}
                className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] underline underline-offset-2 hover:text-white transition-colors duration-200"
              >
                ‹ Previous Project
              </button>
            ) : <div />}
            
            {projectIndex < allProjects.length - 1 ? (
              <button
                onClick={() => onSelectProject(projectIndex + 1)}
                className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] underline underline-offset-2 hover:text-white transition-colors duration-200"
              >
                Next Project ›
              </button>
            ) : <div />}
          </div>

        </div>
      </div>

      <Footer onNav={onNav} />
    </div>
  );
}
