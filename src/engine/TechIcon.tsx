import React from 'react';
import { Img } from 'remotion';

const ROOT = '/assets/iconos_paginas_y_empresas/icons';

const aliases: Record<string, string> = {
  php: 'php/php-original.svg',
  javascript: 'javascript/javascript-original.svg',
  js: 'javascript/javascript-original.svg',
  typescript: 'typescript/typescript-original.svg',
  react: 'react/react-original.svg',
  node: 'nodejs/nodejs-original.svg',
  nodejs: 'nodejs/nodejs-original.svg',
  python: 'python/python-original.svg',
  html: 'html5/html5-original.svg',
  css: 'css3/css3-original.svg',
  linux: 'linux/linux-original.svg',
  mysql: 'mysql/mysql-original.svg',
  sqlite: 'sqlite/sqlite-original.svg',
};

export const TechIcon: React.FC<{ name: string; size?: number }> = ({ name, size = 150 }) => {
  const key = name.toLowerCase().trim();
  const path = aliases[key];
  if (!path) return null;
  return <Img src={`${ROOT}/${path}`} style={{ width: size, height: size, objectFit: 'contain' }} />;
};
