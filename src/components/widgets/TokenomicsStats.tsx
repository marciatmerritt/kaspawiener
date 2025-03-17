import { component$ } from '@builder.io/qwik';
import tokenomicsData from '../../data/tokenomics/content.json';

export const TokenomicsStats = component$(() => {
  return (
    <div class='-mt-4 grid grid-cols-2 gap-6 sm:-mt-8 md:grid-cols-2 md:gap-8'>
      {tokenomicsData.stats.map((stat, index) => {
        return (
          <div
            key={index}
            class={`mb-10 text-center md:mb-0 dark:md:border-slate-500 ${
              index % 2 === 0 ? 'md:border-r' : ''
            }`}
          >
            <div class='font-heading text-4xl font-bold text-primary-600 lg:text-5xl xl:text-6xl'>
              {stat.value}
            </div>
            <p class='text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base'>
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
});
