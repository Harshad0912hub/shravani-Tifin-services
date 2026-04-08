import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Revert texts
  content = content.replace(/text-amber-950/g, 'text-white');
  content = content.replace(/text-amber-800/g, 'text-slate-200');
  content = content.replace(/text-amber-700\/80/g, 'text-slate-300');
  content = content.replace(/text-amber-700/g, 'text-slate-300');
  content = content.replace(/text-amber-600/g, 'text-gold');
  content = content.replace(/text-slate-300/g, 'text-slate-300'); // No-op, just for reference
  
  // Revert borders
  content = content.replace(/border-amber-900\/10/g, 'border-white/10');
  content = content.replace(/border-amber-900\/5/g, 'border-white/5');
  
  // Hero gradient fix
  content = content.replace(/<div className="absolute inset-0 bg-transparent z-0 pointer-events-none" \/>/g, '<div className="absolute inset-0 bg-gradient-to-br from-[#0c051a] via-transparent to-[#1a0808] z-0 pointer-events-none" />');
  
  // App.jsx specific body bg (Deep Violet to Ruby)
  content = content.replace(/bg-gradient-to-br from-\[\#FFF5E6\] via-\[\#FFEED4\] to-\[\#FFF0EC\]/g, 'bg-gradient-to-br from-[#0a0514] via-[#05020c] to-[#140505]');
  content = content.replace(/selection:text-amber-950/g, 'selection:text-white');
  content = content.replace(/mix-blend-normal/g, 'mix-blend-difference');
  
  // Orbs and Backgrounds
  content = content.replace(/bg-\[\#FFF5E6\]/g, 'bg-transparent');
  content = content.replace(/bg-white\/70/g, 'bg-black/40');
  content = content.replace(/bg-white\/60/g, 'bg-black/50');
  content = content.replace(/shadow-\[0_0_50px_rgba\(255,195,92,0.4\)\]/g, 'shadow-[0_0_50px_rgba(255,195,92,0.6)]');
  
  // Saffron texts
  content = content.replace(/text-saffron-700/g, 'text-saffron-200');
  content = content.replace(/text-saffron-600/g, 'text-saffron-400');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

const componentsDir = path.join(process.cwd(), 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx')).map(f => path.join(componentsDir, f));
files.push(path.join(process.cwd(), 'src', 'App.jsx'));
files.forEach(replaceInFile);

let cssPath = path.join(process.cwd(), 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/border-amber-900\/10/g, 'border-white/10');
css = css.replace(/border-white\/90/g, 'border-white/50');
css = css.replace(/bg-white\/50/g, 'bg-black/20');
fs.writeFileSync(cssPath, css, 'utf8');

console.log('✅ Magnificent Colorful Dark Mode Applied!');
