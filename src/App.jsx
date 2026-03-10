import { useState, useEffect, useRef } from "react";

const PHASES = [
  {
    id: 1,
    color: "#2563EB",
    light: "#EFF6FF",
    border: "#BFDBFE",
    label: "PHASE 1",
    title: "Legal & Consent Foundation",
    duration: "Weeks 1–3",
    icon: "⚖️",
    steps: [
      {
        id: "1.1",
        title: "Engage Entertainment IP Attorney",
        tasks: [
          "Research and shortlist 3 entertainment IP attorneys specializing in right of publicity law",
          "Schedule initial consultations — ask specifically about AI likeness experience",
          "Engage attorney and brief them on the platform model",
          "Commission Talent License Agreement draft",
          "Commission Buyer License Agreement draft",
          "Commission Platform Terms of Service draft",
          "Commission Consent Capture Protocol document",
          "Commission Use Category Definitions document",
          "Review and sign off all five legal documents",
        ],
      },
      {
        id: "1.2",
        title: "Define Use Category Taxonomy",
        tasks: [
          "Define 'Social Ad' category: permitted platforms, excluded uses, duration options",
          "Define 'Brand Video' category: website/email/corporate, excluded broadcast uses",
          "Define 'Film / Narrative' category: streaming/short film, excluded theatrical",
          "Define 'Training Data' category: AI model training consent, output restrictions",
          "Set pricing for each category across 30-day, 90-day, and project licenses",
          "Confirm all four categories with attorney for legal clarity",
          "Create simple one-page buyer reference sheet for category definitions",
        ],
      },
      {
        id: "1.3",
        title: "Build the Consent Capture Protocol",
        tasks: [
          "Select and set up identity verification tool (Persona, Jumio, or Stripe Identity)",
          "Write plain-language informed consent summary (1 page, 10th-grade reading level)",
          "Have attorney review plain-language summary for accuracy",
          "Set up DocuSign or HelloSign account and upload signed agreement template",
          "Create video consent recording script (30 seconds: name, date, consent confirmation)",
          "Set up secure video storage for consent recordings (private S3 or Cloudflare R2)",
          "Test the full four-layer consent flow end-to-end with one internal person",
          "Document the protocol as a step-by-step SOP for onboarding use",
        ],
      },
    ],
  },
  {
    id: 2,
    color: "#0F766E",
    light: "#F0FDFA",
    border: "#99F6E4",
    label: "PHASE 2",
    title: "Talent Acquisition & Onboarding",
    duration: "Weeks 3–7",
    icon: "🎭",
    steps: [
      {
        id: "2.1",
        title: "Define Talent Tiers & Ideal Profile",
        tasks: [
          "Write talent profile criteria document: age range, diversity targets, on-camera requirements",
          "Define demographic targets for first 25 talent (minimum 8 distinct profiles)",
          "Create talent responsiveness SLA requirement (48-hour approval response)",
          "Build talent pricing tiers: standard, premium, and featured",
          "Create internal talent scorecard for evaluating applicants",
        ],
      },
      {
        id: "2.2",
        title: "Recruit First 25 Talent — Manually",
        tasks: [
          "Post talent call on Backstage with honest description of likeness licensing",
          "Post on Actors Access and Casting Networks",
          "Reach out to 10 content creators in personal network directly",
          "Contact 5 micro-influencers (5K–50K followers) with personal message",
          "Screen applicants against diversity and on-camera presence criteria",
          "Conduct brief video call with each prospective talent to assess comfort level",
          "Send offers to first 10 approved talent",
          "Onboard talent 11–25 using learnings from first cohort",
        ],
      },
      {
        id: "2.3",
        title: "Run Talent Capture Sessions",
        tasks: [
          "Book professional photographer for first 10 talent ($300–500 per session)",
          "Set up three-point lighting kit for video capture",
          "Prepare neutral background (white or light gray backdrop)",
          "Capture minimum 60 seconds continuous natural movement per talent",
          "Run directed expression sequence: neutral, smile, speaking, listening, nodding, left, right",
          "Record minimum 5 minutes of natural speech per talent",
          "Capture minimum 50 photos per talent across required angles and expressions",
          "Review all captured assets for technical quality before talent leaves",
          "Back up all assets to secure private storage immediately after each session",
        ],
      },
      {
        id: "2.4",
        title: "Complete Full Consent Process per Talent",
        tasks: [
          "Run identity verification for each talent via chosen tool",
          "Send plain-language informed consent summary for review",
          "Send DocuSign agreement and confirm signature received",
          "Schedule and record 30-second video consent confirmation per talent",
          "Store all consent documentation (ID verification result, signed doc, video) in audit trail system",
          "Confirm all four consent layers complete before activating talent profile",
        ],
      },
      {
        id: "2.5",
        title: "Build Internal Talent Catalog",
        tasks: [
          "Set up Airtable base with talent profile schema",
          "Upload 6 hero images per talent to profile",
          "Edit and upload 30-second video reel per talent",
          "Tag each profile: age bracket, ethnicity, gender, body type, distinctive features",
          "Mark which use categories each talent has consented to",
          "Set pricing tier per talent",
          "Link consent documentation records to each profile",
          "Review all 25 profiles for completeness before showing to any buyer",
        ],
      },
    ],
  },
  {
    id: 3,
    color: "#7C3AED",
    light: "#F5F3FF",
    border: "#DDD6FE",
    label: "PHASE 3",
    title: "Buyer-Side MVP & First Transactions",
    duration: "Weeks 6–12",
    icon: "💼",
    steps: [
      {
        id: "3.1",
        title: "Map Buyer Journey & Set Up Tools",
        tasks: [
          "Document all 8 buyer journey stages with friction points and solutions",
          "Set up Stripe account and configure payment processing",
          "Set up Stripe Connect for talent payouts",
          "Create buyer license agreement template in DocuSign",
          "Build brief intake form in Typeform (8 questions max: product, message, tone, script, requirements)",
          "Create Airtable transaction tracking board with stages: Received → Approved → In Production → QC → Talent Review → Delivered",
          "Set up Cloudflare Stream or Mux for secure video delivery",
          "Create PDF license certificate template",
          "Test complete tool chain end-to-end before first buyer",
        ],
      },
      {
        id: "3.2",
        title: "Select & Configure AI Video Generation Stack",
        tasks: [
          "Create HeyGen account and test talking head generation with internal test subject",
          "Create Runway account for narrative/cinematic use cases",
          "Test HeyGen output quality with 3 talent assets from your catalog",
          "Establish internal generation prompt templates for Social Ad and Brand Video categories",
          "Document generation settings that produce best results per talent type",
          "Define maximum generation attempts before flagging for manual review",
        ],
      },
      {
        id: "3.3",
        title: "Execute First 3 Paid Transactions",
        tasks: [
          "Identify first 3 buyers from personal network — offer 50% pilot discount",
          "Send buyer license agreement via DocuSign and collect payment via Stripe",
          "Receive completed brief intake form from each buyer",
          "Confirm talent approval for each brief within 48 hours",
          "Generate AI video using HeyGen for each approved brief",
          "Run internal QC checklist on each output before sending to talent",
          "Send output to talent for final approval — 24 hour review window",
          "Deliver video file plus PDF license certificate to each buyer",
          "Send post-delivery survey: 'Would you use this video in an actual campaign?'",
          "Document every friction point encountered across all three transactions",
        ],
      },
    ],
  },
  {
    id: 4,
    color: "#B45309",
    light: "#FFFBEB",
    border: "#FDE68A",
    label: "PHASE 4",
    title: "Quality Control & Output Standards",
    duration: "Weeks 10–16",
    icon: "✅",
    steps: [
      {
        id: "4.1",
        title: "Define Minimum Quality Bar",
        tasks: [
          "Write minimum acceptance criteria document: face fidelity, no artifacts, lip sync, representation, resolution",
          "Create QC checklist with 6 binary pass/fail items",
          "Define regeneration triggers: what constitutes minor vs. major artifact requiring redo",
          "Set output format standards: 1080p minimum, H.264 MP4, aspect ratio specifications per platform",
          "Have attorney review quality standards for alignment with buyer agreement warranties",
          "Train all internal reviewers on QC checklist",
        ],
      },
      {
        id: "4.2",
        title: "Build QC Review Process",
        tasks: [
          "Assign QC reviewer role (can be a co-founder at MVP stage)",
          "Create QC review log in Airtable tracking pass/fail/regenerate per video",
          "Define escalation path: what happens if QC flags an output the buyer has already paid for",
          "Run QC retrospective after first 10 transactions to identify most common failure points",
          "Update generation prompts and settings based on QC learnings",
        ],
      },
      {
        id: "4.3",
        title: "Create Revision & Rejection Protocol",
        tasks: [
          "Write talent rejection policy: valid grounds vs. invalid grounds for rejection",
          "Write buyer revision policy: what qualifies as a revision vs. a new transaction",
          "Define refund policy: 50% refund if second regeneration attempt also rejected by talent",
          "Create buyer credit system for disputed transactions",
          "Add revision and rejection policies to buyer and talent agreements",
          "Build rejection response templates for talent and buyer communications",
          "Test the rejection flow with a simulated dispute before it happens in real life",
        ],
      },
    ],
  },
  {
    id: 5,
    color: "#15803D",
    light: "#F0FDF4",
    border: "#BBF7D0",
    label: "PHASE 5",
    title: "Platform Launch & First 10 Buyers",
    duration: "Weeks 14–24",
    icon: "🚀",
    steps: [
      {
        id: "5.1",
        title: "Define & Identify First Buyer Targets",
        tasks: [
          "Write ideal first buyer profile: SMB brands, $500K–$10M marketing budget, digital-native",
          "List 20 target buyers from personal and talent networks",
          "Prioritize list: warm intros first, performance marketing agencies second",
          "Identify 5 boutique performance marketing agencies for direct outreach",
          "Write one-page product overview: what it is, how it works, pricing, sample output",
          "Prepare 3 sample videos across different demographics and use cases for demo",
        ],
      },
      {
        id: "5.2",
        title: "Execute Buyer Outreach Campaign",
        tasks: [
          "Send personal outreach messages to 10 contacts in personal network",
          "Ask each of 25 talent for one warm introduction to a marketer or brand team they know",
          "Send one-page product overview to 5 boutique performance marketing agencies",
          "Follow up with all non-responders after 5 business days",
          "Schedule demos with all interested prospects",
          "Conduct first 5 buyer demos using sample videos and consent chain walkthrough",
          "Close first 5 buyers and complete transactions",
          "Close buyers 6–10",
        ],
      },
      {
        id: "5.3",
        title: "Track Core Metrics from Transaction One",
        tasks: [
          "Set up metrics tracking dashboard in Airtable or Notion",
          "Track talent approval rate per transaction (target: above 70%)",
          "Track buyer satisfaction survey response after every delivery",
          "Track end-to-end turnaround days per transaction (target: under 7 days)",
          "Track whether buyers voluntarily use delivered video in live campaigns",
          "Calculate repeat purchase rate at 60-day mark for first 10 buyers",
          "Calculate average revenue per transaction",
          "Review all 5 metrics after transaction 10 and identify top 3 improvement areas",
        ],
      },
      {
        id: "5.4",
        title: "Prove the Model & Prepare for Next Stage",
        tasks: [
          "Complete 10 total paid transactions end-to-end",
          "Collect and document buyer testimonials and case study material",
          "Document at least one verified instance of a buyer running the video in an actual live campaign",
          "Run retrospective: what are the 3 biggest friction points from both sides?",
          "Write product roadmap for next 6 months based on learnings",
          "Calculate total revenue from first 10 transactions",
          "Prepare seed pitch deck incorporating real transaction data and buyer feedback",
          "Identify the next 3 features to build based on what manual process cannot scale",
        ],
      },
    ],
  },
];

const totalTasks = PHASES.reduce((sum, p) => sum + p.steps.reduce((s, step) => s + step.tasks.length, 0), 0);

export default function App() {
  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem("verity_tasks_v1");
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });
  const [expandedPhases, setExpandedPhases] = useState({ 1: true, 2: false, 3: false, 4: false, 5: false });
  const [expandedSteps, setExpandedSteps] = useState({});
  const [filter, setFilter] = useState("all"); // all | active | done
  const [celebratePhase, setCelebratePhase] = useState(null);

  useEffect(() => {
    try { localStorage.setItem("verity_tasks_v1", JSON.stringify(checked)); } catch {}
  }, [checked]);

  const toggleTask = (key) => {
    setChecked(prev => {
      const next = { ...prev, [key]: !prev[key] };
      return next;
    });
  };

  const togglePhase = (id) => setExpandedPhases(p => ({ ...p, [id]: !p[id] }));
  const toggleStep = (id) => setExpandedSteps(p => ({ ...p, [id]: !p[id] }));

  const getPhaseProgress = (phase) => {
    const keys = phase.steps.flatMap(s => s.tasks.map((_, i) => `${s.id}-${i}`));
    const done = keys.filter(k => checked[k]).length;
    return { done, total: keys.length, pct: Math.round((done / keys.length) * 100) };
  };

  const getStepProgress = (step) => {
    const done = step.tasks.filter((_, i) => checked[`${step.id}-${i}`]).length;
    return { done, total: step.tasks.length, pct: Math.round((done / step.tasks.length) * 100) };
  };

  const totalDone = Object.values(checked).filter(Boolean).length;
  const overallPct = Math.round((totalDone / totalTasks) * 100);

  const clearAll = () => { if (confirm("Reset all tasks?")) setChecked({}); };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0E1A",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      color: "#E8ECF4",
      padding: "0 0 80px 0",
    }}>
      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #0D1B35 0%, #1a2744 50%, #0D1B35 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "32px 24px 28px",
        position: "sticky", top: 0, zIndex: 100,
        backdropFilter: "blur(20px)",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <span style={{ fontSize: 11, letterSpacing: 3, color: "#5B8DEF", fontWeight: 700, textTransform: "uppercase" }}>Verity</span>
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>•</span>
                <span style={{ fontSize: 11, letterSpacing: 2, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>MVP Build Tracker</span>
              </div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: -0.5 }}>
                Likeness Marketplace
              </h1>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>
                5 phases · {totalTasks} tasks · 6-month build plan
              </div>
            </div>

            {/* Overall progress */}
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: -1 }}>
                {overallPct}<span style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>%</span>
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
                {totalDone} / {totalTasks} complete
              </div>
              <div style={{ width: 140, height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2, marginTop: 8, marginLeft: "auto" }}>
                <div style={{ width: `${overallPct}%`, height: "100%", background: "linear-gradient(90deg, #2563EB, #0F766E)", borderRadius: 2, transition: "width 0.5s ease" }} />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: 8, marginTop: 20, alignItems: "center", flexWrap: "wrap" }}>
            {["all", "active", "done"].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: "5px 14px", borderRadius: 20, border: "1px solid",
                borderColor: filter === f ? "#2563EB" : "rgba(255,255,255,0.12)",
                background: filter === f ? "rgba(37,99,235,0.2)" : "transparent",
                color: filter === f ? "#93BFFF" : "rgba(255,255,255,0.45)",
                fontSize: 12, fontWeight: 600, cursor: "pointer", letterSpacing: 0.5,
                textTransform: "capitalize", transition: "all 0.2s",
              }}>{f === "all" ? "All Tasks" : f === "active" ? "To Do" : "Completed"}</button>
            ))}
            <button onClick={clearAll} style={{
              marginLeft: "auto", padding: "5px 14px", borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.08)", background: "transparent",
              color: "rgba(255,255,255,0.25)", fontSize: 12, cursor: "pointer",
            }}>Reset All</button>
          </div>
        </div>
      </div>

      {/* PHASES */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "24px 16px 0" }}>
        {PHASES.map((phase) => {
          const prog = getPhaseProgress(phase);
          const isOpen = expandedPhases[phase.id];
          const isComplete = prog.pct === 100;

          return (
            <div key={phase.id} style={{
              marginBottom: 16,
              borderRadius: 16,
              overflow: "hidden",
              border: `1px solid ${isComplete ? phase.border : "rgba(255,255,255,0.07)"}`,
              background: isComplete ? `${phase.light}08` : "rgba(255,255,255,0.03)",
              transition: "all 0.3s ease",
            }}>
              {/* Phase Header */}
              <div
                onClick={() => togglePhase(phase.id)}
                style={{
                  padding: "18px 20px",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 14,
                  background: isOpen ? `linear-gradient(135deg, ${phase.color}18, ${phase.color}08)` : "transparent",
                  borderBottom: isOpen ? `1px solid rgba(255,255,255,0.06)` : "none",
                  transition: "all 0.2s",
                }}
              >
                {/* Phase badge */}
                <div style={{
                  minWidth: 44, height: 44, borderRadius: 12,
                  background: isComplete ? phase.color : `${phase.color}25`,
                  border: `1px solid ${phase.color}50`,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s",
                }}>
                  <span style={{ fontSize: 9, fontWeight: 800, color: isComplete ? "#fff" : phase.color, letterSpacing: 1 }}>P</span>
                  <span style={{ fontSize: 16, fontWeight: 900, color: isComplete ? "#fff" : phase.color, lineHeight: 1 }}>{phase.id}</span>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: isComplete ? phase.color : "#E8ECF4" }}>
                      {phase.title}
                    </span>
                    {isComplete && (
                      <span style={{ fontSize: 10, fontWeight: 700, color: phase.color, background: `${phase.color}20`, padding: "2px 8px", borderRadius: 10, letterSpacing: 1 }}>
                        COMPLETE
                      </span>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{phase.duration}</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>·</span>
                    <span style={{ fontSize: 11, color: isComplete ? phase.color : "rgba(255,255,255,0.45)", fontWeight: 600 }}>
                      {prog.done}/{prog.total} tasks
                    </span>
                    {/* Mini progress */}
                    <div style={{ flex: 1, maxWidth: 80, height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 2 }}>
                      <div style={{ width: `${prog.pct}%`, height: "100%", background: phase.color, borderRadius: 2, transition: "width 0.4s ease" }} />
                    </div>
                    <span style={{ fontSize: 11, color: phase.color, fontWeight: 700 }}>{prog.pct}%</span>
                  </div>
                </div>

                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 18, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                  ⌄
                </div>
              </div>

              {/* Steps */}
              {isOpen && (
                <div style={{ padding: "12px 16px 16px" }}>
                  {phase.steps.map((step) => {
                    const sp = getStepProgress(step);
                    const stepOpen = expandedSteps[step.id] !== false; // default open
                    const stepDone = sp.pct === 100;

                    const visibleTasks = step.tasks.filter((_, i) => {
                      const key = `${step.id}-${i}`;
                      if (filter === "done") return checked[key];
                      if (filter === "active") return !checked[key];
                      return true;
                    });

                    if (filter !== "all" && visibleTasks.length === 0) return null;

                    return (
                      <div key={step.id} style={{
                        marginBottom: 10,
                        borderRadius: 12,
                        border: `1px solid ${stepDone ? `${phase.color}40` : "rgba(255,255,255,0.06)"}`,
                        background: stepDone ? `${phase.color}08` : "rgba(0,0,0,0.2)",
                        overflow: "hidden",
                      }}>
                        {/* Step header */}
                        <div
                          onClick={() => toggleStep(step.id)}
                          style={{
                            padding: "12px 16px",
                            display: "flex", alignItems: "center", gap: 12,
                            cursor: "pointer",
                            background: stepOpen ? "rgba(255,255,255,0.03)" : "transparent",
                          }}
                        >
                          <div style={{
                            width: 28, height: 28, borderRadius: 8, border: `1.5px solid ${phase.color}60`,
                            background: stepDone ? phase.color : "transparent",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0, transition: "all 0.2s",
                          }}>
                            {stepDone
                              ? <span style={{ color: "#fff", fontSize: 13 }}>✓</span>
                              : <span style={{ fontSize: 10, fontWeight: 800, color: phase.color }}>{step.id}</span>
                            }
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 13, fontWeight: 600, color: stepDone ? "rgba(255,255,255,0.45)" : "#E0E6F0",
                              textDecoration: stepDone ? "line-through" : "none" }}>
                              {step.title}
                            </div>
                            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>
                              {sp.done}/{sp.total} complete
                              <span style={{ display: "inline-block", width: 40, height: 2, background: "rgba(255,255,255,0.1)", borderRadius: 1, marginLeft: 8, verticalAlign: "middle" }}>
                                <span style={{ display: "block", width: `${sp.pct}%`, height: "100%", background: phase.color, borderRadius: 1, transition: "width 0.3s" }} />
                              </span>
                            </div>
                          </div>

                          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 14, transition: "transform 0.2s", transform: stepOpen ? "rotate(180deg)" : "none" }}>⌄</span>
                        </div>

                        {/* Tasks */}
                        {stepOpen && visibleTasks.length > 0 && (
                          <div style={{ padding: "4px 16px 14px 16px" }}>
                            {step.tasks.map((task, i) => {
                              const key = `${step.id}-${i}`;
                              const done = !!checked[key];

                              if (filter === "done" && !done) return null;
                              if (filter === "active" && done) return null;

                              return (
                                <div
                                  key={i}
                                  onClick={() => toggleTask(key)}
                                  style={{
                                    display: "flex", alignItems: "flex-start", gap: 12,
                                    padding: "9px 10px",
                                    borderRadius: 8, cursor: "pointer",
                                    marginBottom: 2,
                                    background: done ? "rgba(255,255,255,0.02)" : "transparent",
                                    transition: "all 0.15s",
                                    userSelect: "none",
                                  }}
                                  onMouseEnter={e => e.currentTarget.style.background = done ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.04)"}
                                  onMouseLeave={e => e.currentTarget.style.background = done ? "rgba(255,255,255,0.02)" : "transparent"}
                                >
                                  {/* Checkbox */}
                                  <div style={{
                                    width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 1,
                                    border: `1.5px solid ${done ? phase.color : "rgba(255,255,255,0.2)"}`,
                                    background: done ? phase.color : "transparent",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    transition: "all 0.15s",
                                  }}>
                                    {done && <span style={{ color: "#fff", fontSize: 11, lineHeight: 1, fontWeight: 700 }}>✓</span>}
                                  </div>

                                  <span style={{
                                    fontSize: 13, lineHeight: 1.5,
                                    color: done ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.75)",
                                    textDecoration: done ? "line-through" : "none",
                                    transition: "all 0.15s",
                                  }}>
                                    {task}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Summary row */}
        <div style={{
          marginTop: 8, padding: "16px 20px",
          borderRadius: 12, background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 12,
        }}>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {PHASES.map(p => {
              const prog = getPhaseProgress(p);
              return (
                <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: p.color }} />
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>P{p.id}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: prog.pct === 100 ? p.color : "rgba(255,255,255,0.5)" }}>{prog.pct}%</span>
                </div>
              );
            })}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            {totalDone} of {totalTasks} tasks complete
          </div>
        </div>
      </div>
    </div>
  );
}
