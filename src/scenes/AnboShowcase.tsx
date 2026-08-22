import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { TechIcon } from '../engine/TechIcon';
import { drift, fade, pop, slideUp } from '../engine/animations';

export const AnboShowcase: React.FC<{ topic: string }> = ({ topic }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const gridX = interpolate(frame, [0, 300], [0, -70]);
  const pulse = 1 + Math.sin(frame * 0.09) * 0.025;
  return <AbsoluteFill style={{ background: '#f7f9ff', fontFamily: 'Arial, sans-serif', overflow: 'hidden' }}>
    <AbsoluteFill style={{ background: 'radial-gradient(circle at 75% 25%, rgba(70,130,255,.18), transparent 34%), radial-gradient(circle at 15% 85%, rgba(30,90,210,.14), transparent 32%)' }} />
    <AbsoluteFill style={{ opacity: .32, transform: `translateX(${gridX}px)`, backgroundImage: 'linear-gradient(rgba(70,120,220,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(70,120,220,.12) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
    {[0,1,2,3,4,5].map(i => <div key={i} style={{ position:'absolute', width:18, height:18, border:'2px solid #8eb4ff', borderRadius:'50%', left:`${10+i*16}%`, top:`${15+(i%3)*27}%`, opacity:.45, transform:`translateY(${drift(frame+i*20)}px)` }} />)}
    <div style={{ position:'absolute', left:110, top:80, color:'#5b88df', fontSize:42, fontWeight:800, letterSpacing:4, opacity:fade(frame,0) }}>ANBO2019</div>
    <div style={{ position:'absolute', left:180, top:300, opacity:fade(frame,18), transform:`translateY(${slideUp(frame,18)}px)` }}>
      <div style={{ color:'#4267a8', fontSize:34, fontWeight:700 }}>HOY HABLAMOS DE</div>
      <div style={{ color:'#13223d', fontSize:116, lineHeight:1, fontWeight:900, marginTop:18 }}>PHP</div>
      <div style={{ width:560, height:5, background:'#5e91ef', marginTop:32 }} />
      <div style={{ color:'#62708b', fontSize:28, marginTop:28 }}>Del código al servidor: ¿cómo funciona realmente?</div>
    </div>
    <div style={{ position:'absolute', right:210, top:220, width:380, height:380, borderRadius:70, background:'rgba(255,255,255,.72)', border:'1px solid rgba(90,135,220,.22)', boxShadow:'0 30px 100px rgba(60,100,190,.22)', display:'flex', alignItems:'center', justifyContent:'center', opacity:fade(frame,35), transform:`scale(${.7+pop(frame,fps,35)*.3})` }}>
      <div style={{ transform:`scale(${pulse})` }}><TechIcon name={topic} size={245} /></div>
    </div>
    <div style={{ position:'absolute', left:170, bottom:110, width:930, padding:30, borderRadius:24, background:'#111827', color:'#dbeafe', boxShadow:'0 25px 70px rgba(15,23,42,.22)', opacity:fade(frame,62), transform:`translateY(${slideUp(frame,62)}px)` }}>
      <div style={{ color:'#7dd3fc', fontSize:20, marginBottom:15 }}>server.php</div>
      <div style={{ fontFamily:'Consolas, monospace', fontSize:29, lineHeight:1.55 }}>&lt;?php<br /><span style={{color:'#fbbf24'}}>echo</span> <span style={{color:'#86efac'}}>&quot;Construyendo con PHP...&quot;</span>;<br />?&gt;</div>
    </div>
    <div style={{ position:'absolute', right:140, bottom:95, color:'#6079a5', fontSize:18, letterSpacing:2, opacity:fade(frame,100) }}>MOTION PROTOTYPE · 01</div>
  </AbsoluteFill>;
};
