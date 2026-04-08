import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Massive Dark-to-Light colorful mode conversion!
  content = content.replace(/text-white/g, 'text-amber-950');
  content = content.replace(/text-slate-300/g, 'text-amber-800');
  content = content.replace(/text-slate-400/g, 'text-amber-700/80');
  content = content.replace(/bg-black\/[0-9]+/g, 'bg-white/70');
  content = content.replace(/bg-black/g, 'bg-transparent');
  content = content.replace(/bg-slate-900/g, 'bg-transparent');
  content = content.replace(/border-white\/10/g, 'border-amber-900/10');
  content = content.replace(/border-white\/5/g, 'border-amber-900/5');
  content = content.replace(/glass-dark/g, 'glass');
  
  // App.jsx specific body bg
  content = content.replace(/bg-gradient-to-br from-\[\#1c0800\] via-\[\#0a0500\] to-\[\#120300\]/g, 'bg-gradient-to-br from-[#FFF5E6] via-[#FFEED4] to-[#FFF0EC]');
  content = content.replace(/mix-blend-difference/g, 'mix-blend-normal');
  content = content.replace(/bg-\[\#030303\]/g, 'bg-[#FFF5E6]');
  
  // Saffron text fixes for light mode
  content = content.replace(/text-saffron-100/g, 'text-saffron-700');
  content = content.replace(/text-saffron-200/g, 'text-saffron-700');
  content = content.replace(/text-saffron-400/g, 'text-saffron-600');
  
  // Menu specific
  content = content.replace(/bg-white\/10/g, 'bg-white/60 backdrop-blur-md border border-amber-900/10');
  content = content.replace(/hover:bg-white\/20/g, 'hover:bg-saffron-100/60');
  
  // Form input backgrounds & Contact adjustments
  content = content.replace(/text-slate-700/g, 'text-slate-300'); 
  content = content.replace(/bg-slate-900/g, 'bg-[#FFF5E6]'); 
  content = content.replace(/bg-black\/40/g, 'bg-white/60');
  content = content.replace(/bg-black\/50/g, 'bg-white/60');
  content = content.replace(/text-gold/g, 'text-amber-600');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

const componentsDir = path.join(process.cwd(), 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx')).map(f => path.join(componentsDir, f));
files.push(path.join(process.cwd(), 'src', 'App.jsx'));

files.forEach(replaceInFile);

let cssPath = path.join(process.cwd(), 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/bg-white\/5/g, 'bg-white/50');
css = css.replace(/border-white\/10/g, 'border-amber-900/10');
css = css.replace(/border-white\/50/g, 'border-white/90');
css = css.replace(/glass-dark/g, 'glass');
fs.writeFileSync(cssPath, css, 'utf8');

console.log('✅ Dark mode stripped. Colorful Light mode applied globally!');
