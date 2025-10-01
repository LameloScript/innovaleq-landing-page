import { CitationProps } from '../types';

export default function CitationSection({ quote, author }: CitationProps) {
  return (
    <section className="bg-black py-12 md:py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6 md:mb-8" style={{fontFamily: 'Bebas Neue, cursive'}}>
          &ldquo;{quote}&rdquo;
        </blockquote>
        <cite className="text-white/70 text-sm md:text-base font-medium not-italic" style={{fontFamily: 'Bebas Neue, cursive'}}>
          {author}
        </cite>
      </div>
    </section>
  );
}