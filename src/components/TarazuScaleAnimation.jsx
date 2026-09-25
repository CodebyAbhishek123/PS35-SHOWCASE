import React, { useEffect, useRef, useState } from 'react';
import { Play, RotateCcw, Sparkles, Scale, Activity, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export function TarazuScaleAnimation() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [statusText, setStatusText] = useState("COMPLIANT EQUILIBRIUM");
  const [currentAngle, setCurrentAngle] = useState(0);
  const [autoLoop, setAutoLoop] = useState(true);

  const animStateRef = useRef({
    startTime: null,
    phase: 'idle',
    angle: 0,
    angleVelocity: 0,
    rockX: 0,
    rockY: 0,
    rockVx: 0,
    rockVy: 0,
    rockRot: 0,
    rockRotVel: 0,
    particles: [],
    dust: [],
    impactRings: [],
    lastTime: performance.now(),
    autoLoopTimer: null
  });

  const triggerAnimation = () => {
    const state = animStateRef.current;
    state.startTime = performance.now();
    state.phase = 'flying';
    state.angle = 0;
    state.angleVelocity = 0;
    state.particles = [];
    state.dust = [];
    state.impactRings = [];
    state.rockRot = 0;
    state.rockRotVel = 0.05;
    setStatusText("TEST LOAD DETECTED");
  };

  useEffect(() => {
    triggerAnimation();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const render = (now) => {
      const state = animStateRef.current;
      const dt = Math.min((now - state.lastTime) / 1000, 0.05);
      state.lastTime = now;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = rect.width;
      const height = rect.height;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const pivotY = height * 0.32;
      const beamLength = Math.min(width * 0.52, 340);
      const pillarHeight = height * 0.46;
      const panDistance = beamLength * 0.45;
      const chainLength = 110;
      const groundY = pivotY + pillarHeight + 25;

      const elapsedTime = state.startTime ? (now - state.startTime) / 1000 : 0;

      const currentRad = (state.angle * Math.PI) / 180;
      const tiltedRightPanX = centerX + Math.cos(currentRad) * panDistance;
      const tiltedRightPanY = pivotY + Math.sin(currentRad) * panDistance;
      const tiltedRightPanCenterY = tiltedRightPanY + chainLength + 12;

      if (state.phase === 'flying') {
        const flyDuration = 0.9;
        const progress = Math.min(elapsedTime / flyDuration, 1);

        const startX = width * 0.92;
        const startY = height * 0.05;
        const targetX = tiltedRightPanX;
        const targetY = tiltedRightPanCenterY - 15;

        const arcHeight = -60;
        state.rockX = startX + (targetX - startX) * progress;
        state.rockY = startY + (targetY - startY) * progress + Math.sin(progress * Math.PI) * arcHeight;
        state.rockRot += state.rockRotVel;

        if (progress >= 1) {
          state.phase = 'impact';
          state.startTime = now;
          state.angleVelocity = 42;
          setStatusText("HEAVY IMPACT! TILT BREACH DETECTED");

          state.impactRings.push({
            x: tiltedRightPanX,
            y: tiltedRightPanCenterY,
            radius: 5,
            maxRadius: 75,
            alpha: 1
          });

          for (let i = 0; i < 28; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 7;
            state.particles.push({
              x: tiltedRightPanX + (Math.random() - 0.5) * 20,
              y: tiltedRightPanCenterY - 10 + (Math.random() - 0.5) * 10,
              vx: Math.cos(angle) * speed + (Math.random() * 2),
              vy: Math.sin(angle) * speed - 2,
              size: 2 + Math.random() * 6,
              rot: Math.random() * Math.PI * 2,
              vRot: (Math.random() - 0.5) * 0.3,
              color: Math.random() > 0.4 ? '#475569' : '#94A3B8',
              alpha: 1
            });
          }

          for (let i = 0; i < 18; i++) {
            state.dust.push({
              x: tiltedRightPanX + (Math.random() - 0.5) * 30,
              y: tiltedRightPanCenterY + (Math.random() - 0.5) * 15,
              vx: (Math.random() - 0.5) * 3,
              vy: -0.5 - Math.random() * 1.5,
              radius: 8 + Math.random() * 16,
              alpha: 0.6 + Math.random() * 0.3,
              expansion: 0.4 + Math.random() * 0.4
            });
          }
        }
      } else if (state.phase === 'impact') {
        state.angle += state.angleVelocity * dt * 3;
        if (state.angle >= 26) {
          state.angle = 26;
          state.phase = 'sliding';
          state.startTime = now;
          state.rockVx = 3.5;
          state.rockVy = 1.5;
        }

        state.rockX = tiltedRightPanX;
        state.rockY = tiltedRightPanCenterY - 18;
        state.rockRot += 0.08;
      } else if (state.phase === 'sliding') {
        const slideElapsed = (now - state.startTime) / 1000;

        state.rockVx += 0.15;
        state.rockVy += 9.8 * dt * 2.2;
        state.rockX += state.rockVx;
        state.rockY += state.rockVy;
        state.rockRot += 0.12;

        const rockFloorY = groundY - 14;
        if (state.rockY >= rockFloorY) {
          state.rockY = rockFloorY;
          state.rockVx *= 0.6;
          state.rockVy = -state.rockVy * 0.35;
          if (Math.abs(state.rockVy) < 0.5) {
            state.rockVy = 0;
          }
        }

        if (slideElapsed > 0.3 && state.phase !== 'oscillating') {
          state.phase = 'oscillating';
          state.startTime = now;
          setStatusText("RE-BALANCING & SWAYING...");
        }
      } else if (state.phase === 'oscillating') {
        const oscElapsed = (now - state.startTime) / 1000;

        const initialAngle = 26;
        const damping = 0.95;
        const frequency = 4.2;

        state.angle = initialAngle * Math.exp(-damping * oscElapsed) * Math.cos(frequency * oscElapsed);

        if (state.rockY < groundY - 14) {
          state.rockVy += 9.8 * dt * 2.2;
          state.rockY += state.rockVy;
          state.rockX += state.rockVx;
          if (state.rockY >= groundY - 14) {
            state.rockY = groundY - 14;
            state.rockVy = 0;
            state.rockVx *= 0.7;
          }
        } else {
          state.rockVx *= 0.92;
          state.rockX += state.rockVx;
        }

        if (oscElapsed > 4.5 || Math.abs(state.angle) < 0.15) {
          state.angle = 0;
          state.phase = 'settled';
          setStatusText("COMPLIANT EQUILIBRIUM (OIML R-76 PASS)");

          if (autoLoop) {
            state.autoLoopTimer = setTimeout(() => {
              triggerAnimation();
            }, 3000);
          }
        }
      } else if (state.phase === 'settled') {
        state.angle = 0;
      }

      state.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25;
        p.rot += p.vRot;
        p.alpha -= 0.015;
      });
      state.particles = state.particles.filter(p => p.alpha > 0);

      state.dust.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        d.radius += d.expansion;
        d.alpha -= 0.012;
      });
      state.dust = state.dust.filter(d => d.alpha > 0);

      state.impactRings.forEach(r => {
        r.radius += 3;
        r.alpha -= 0.03;
      });
      state.impactRings = state.impactRings.filter(r => r.alpha > 0);

      setCurrentAngle(state.angle.toFixed(1));

      // Draw Scene
      const bgGlow = ctx.createRadialGradient(centerX, pivotY + 40, 20, centerX, pivotY + 40, width * 0.45);
      bgGlow.addColorStop(0, 'rgba(88, 66, 246, 0.12)');
      bgGlow.addColorStop(0.6, 'rgba(245, 158, 11, 0.05)');
      bgGlow.addColorStop(1, 'rgba(15, 23, 42, 0)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      const floorGrad = ctx.createLinearGradient(centerX - 200, groundY, centerX + 200, groundY);
      floorGrad.addColorStop(0, 'rgba(51, 65, 85, 0.1)');
      floorGrad.addColorStop(0.5, 'rgba(148, 163, 184, 0.4)');
      floorGrad.addColorStop(1, 'rgba(51, 65, 85, 0.1)');
      ctx.strokeStyle = floorGrad;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX - 220, groundY);
      ctx.lineTo(centerX + 220, groundY);
      ctx.stroke();

      const baseGrad = ctx.createLinearGradient(centerX - 45, groundY, centerX + 45, groundY);
      baseGrad.addColorStop(0, '#B45309');
      baseGrad.addColorStop(0.25, '#F59E0B');
      baseGrad.addColorStop(0.5, '#FDE047');
      baseGrad.addColorStop(0.75, '#D97706');
      baseGrad.addColorStop(1, '#78350F');

      ctx.fillStyle = baseGrad;
      ctx.beginPath();
      ctx.moveTo(centerX - 50, groundY);
      ctx.lineTo(centerX + 50, groundY);
      ctx.lineTo(centerX + 35, groundY - 16);
      ctx.lineTo(centerX - 35, groundY - 16);
      ctx.closePath();
      ctx.fill();

      const pillarGrad = ctx.createLinearGradient(centerX - 12, pivotY, centerX + 12, pivotY);
      pillarGrad.addColorStop(0, '#92400E');
      pillarGrad.addColorStop(0.3, '#F59E0B');
      pillarGrad.addColorStop(0.6, '#FEF08A');
      pillarGrad.addColorStop(0.85, '#D97706');
      pillarGrad.addColorStop(1, '#78350F');

      ctx.fillStyle = pillarGrad;
      ctx.beginPath();
      ctx.moveTo(centerX - 10, groundY - 16);
      ctx.lineTo(centerX - 6, pivotY + 12);
      ctx.lineTo(centerX + 6, pivotY + 12);
      ctx.lineTo(centerX + 10, groundY - 16);
      ctx.closePath();
      ctx.fill();

      const ringY1 = pivotY + pillarHeight * 0.4;
      const ringY2 = pivotY + pillarHeight * 0.7;
      [ringY1, ringY2].forEach(ry => {
        ctx.fillStyle = '#FEF08A';
        ctx.fillRect(centerX - 12, ry, 24, 4);
        ctx.fillStyle = '#78350F';
        ctx.fillRect(centerX - 12, ry + 4, 24, 2);
      });

      ctx.fillStyle = pillarGrad;
      ctx.beginPath();
      ctx.arc(centerX, pivotY, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#FEF08A';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#FFF';
      ctx.beginPath();
      ctx.arc(centerX - 4, pivotY - 4, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.save();
      ctx.translate(centerX, pivotY);
      ctx.rotate((state.angle * Math.PI) / 180);

      const beamGrad = ctx.createLinearGradient(-panDistance, 0, panDistance, 0);
      beamGrad.addColorStop(0, '#D97706');
      beamGrad.addColorStop(0.15, '#F59E0B');
      beamGrad.addColorStop(0.5, '#FEF08A');
      beamGrad.addColorStop(0.85, '#F59E0B');
      beamGrad.addColorStop(1, '#B45309');

      ctx.strokeStyle = beamGrad;
      ctx.lineWidth = 7;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-panDistance, 0);
      ctx.lineTo(panDistance, 0);
      ctx.stroke();

      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(-panDistance * 0.5, -8, panDistance * 0.4, 0, Math.PI);
      ctx.arc(panDistance * 0.5, -8, panDistance * 0.4, 0, Math.PI);
      ctx.stroke();

      [-panDistance, panDistance].forEach(px => {
        ctx.fillStyle = '#FEF08A';
        ctx.beginPath();
        ctx.arc(px, 0, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#78350F';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      const renderPan = (tipX, isRightSide) => {
        ctx.save();
        ctx.translate(tipX, 0);
        ctx.rotate((-state.angle * Math.PI) / 180);

        ctx.strokeStyle = '#D97706';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);

        const chainSpread = 28;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-chainSpread, chainLength);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, chainLength);
        ctx.moveTo(0, 0);
        ctx.lineTo(chainSpread, chainLength);
        ctx.stroke();
        ctx.setLineDash([]);

        const panY = chainLength;
        const panWidth = 70;
        const panHeight = 22;

        const panGrad = ctx.createLinearGradient(-panWidth, panY, panWidth, panY);
        panGrad.addColorStop(0, '#B45309');
        panGrad.addColorStop(0.2, '#F59E0B');
        panGrad.addColorStop(0.5, '#FEF08A');
        panGrad.addColorStop(0.8, '#F59E0B');
        panGrad.addColorStop(1, '#78350F');

        ctx.fillStyle = panGrad;
        ctx.beginPath();
        ctx.moveTo(-panWidth, panY);
        ctx.quadraticCurveTo(0, panY + panHeight * 2, panWidth, panY);
        ctx.quadraticCurveTo(0, panY + 4, -panWidth, panY);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#FFF';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(0, panY, panWidth, 5, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
      };

      renderPan(-panDistance, false);
      renderPan(panDistance, true);

      ctx.restore();

      state.dust.forEach(d => {
        ctx.save();
        ctx.fillStyle = `rgba(100, 116, 139, ${d.alpha})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      state.impactRings.forEach(r => {
        ctx.save();
        ctx.strokeStyle = `rgba(245, 158, 11, ${r.alpha})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });

      if (state.phase !== 'idle') {
        ctx.save();
        ctx.translate(state.rockX, state.rockY);
        ctx.rotate(state.rockRot);

        const rockGrad = ctx.createRadialGradient(-5, -5, 2, 0, 0, 24);
        rockGrad.addColorStop(0, '#94A3B8');
        rockGrad.addColorStop(0.4, '#475569');
        rockGrad.addColorStop(0.8, '#334155');
        rockGrad.addColorStop(1, '#0F172A');

        ctx.fillStyle = rockGrad;
        ctx.strokeStyle = '#1E293B';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(-18, -12);
        ctx.lineTo(-4, -22);
        ctx.lineTo(16, -18);
        ctx.lineTo(24, -4);
        ctx.lineTo(20, 16);
        ctx.lineTo(2, 22);
        ctx.lineTo(-16, 18);
        ctx.lineTo(-24, 4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-18, -12);
        ctx.lineTo(0, -2);
        ctx.lineTo(16, -18);
        ctx.moveTo(0, -2);
        ctx.lineTo(20, 16);
        ctx.moveTo(0, -2);
        ctx.lineTo(-16, 18);
        ctx.stroke();

        ctx.restore();
      }

      state.particles.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      ctx.restore();

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (animStateRef.current.autoLoopTimer) {
        clearTimeout(animStateRef.current.autoLoopTimer);
      }
    };
  }, [autoLoop]);

  return (
    <div className="w-full bg-slate-900 rounded-3xl p-4 sm:p-6 text-white shadow-2xl border border-slate-800 relative overflow-hidden my-8">
      <div className="absolute inset-0 bg-[radial-gradient(#007A8C_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#007A8C]/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 relative z-10 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-amber-500/20">
            <Scale className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-2 text-white">
              TARAZU <span className="text-amber-400 font-extrabold text-xs px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30">OIML R-76 DYNAMIC RESPONSE SIMULATOR</span>
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              Recreating legal metrology scale balance physics under extreme load impact & recovery
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center gap-2 text-xs font-mono">
            <Activity className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span className="text-slate-400">BEAM TILT:</span>
            <span className={`font-bold ${Math.abs(currentAngle) > 5 ? 'text-amber-400' : 'text-emerald-400'}`}>
              {currentAngle > 0 ? `+${currentAngle}` : currentAngle}°
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>OIML CLASS III VALIDATED</span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl bg-slate-950/80 border border-slate-800/80 overflow-hidden shadow-inner flex items-center justify-center">
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-xs font-semibold backdrop-blur-md">
          <span className={`w-2.5 h-2.5 rounded-full ${
            statusText.includes('HEAVY') ? 'bg-rose-500 animate-ping' : 
            statusText.includes('RE-BALANCING') ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'
          }`} />
          <span className="text-slate-200 font-mono text-[11px] tracking-wide uppercase">{statusText}</span>
        </div>

        <canvas 
          ref={canvasRef} 
          className="w-full h-full block cursor-crosshair"
          title="Click stage to trigger test impact animation"
          onClick={triggerAnimation}
        />

        <div className="absolute bottom-3 right-4 z-20 text-[10px] text-slate-500 font-mono flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
          <Zap className="w-3 h-3 text-amber-400" />
          <span>Click canvas or use button below to trigger rock impact</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-2">
        <div className="flex items-center gap-3">
          <button
            onClick={triggerAnimation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm transition-all transform active:scale-95 shadow-lg shadow-amber-500/25"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>Drop Heavy Weight Impact</span>
          </button>

          <button
            onClick={() => setAutoLoop(!autoLoop)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
              autoLoop 
                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' 
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            <RotateCcw className={`w-3.5 h-3.5 ${autoLoop ? 'animate-spin-slow' : ''}`} />
            <span>Auto Loop: {autoLoop ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Physics Engine: Precision Damped Harmonic Spring Recovery</span>
        </div>
      </div>
    </div>
  );
}

export default TarazuScaleAnimation;
