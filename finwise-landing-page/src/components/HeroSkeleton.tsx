export default function HeroSkeleton() {
  return (
    <section
      id="hero-skeleton"
      className="relative flex h-full sm:min-h-screen items-center justify-center text-left sm:text-center animate-pulse"
      aria-busy="true"
      aria-label="Loading content"
    >
      <div className="flex flex-col gap-y-3 w-full max-w-lg md:max-w-6xl my-32 sm:my-5 px-6 sm:px-10 items-start sm:items-center">
        
        {/* Category / Type Label */}
        <div className="h-4 sm:h-5 w-32 md:w-48 bg-muted rounded-md" />

        {/* Heading Block */}
        <div className="flex flex-col gap-2 sm:gap-3 mt-3 w-full items-start sm:items-center">
          {/* Main Heading (heading1) */}
          <div className="h-8 sm:h-10 md:h-16 lg:h-20 w-3/4 max-w-2xl bg-muted rounded-lg" />
          
          {/* Subheading ("in Software Engineering Research") */}
          <div className="h-6 sm:h-7 md:h-10 w-2/3 max-w-xl bg-muted rounded-lg" />
        </div>

        {/* Description Lines */}
        <div className="flex flex-col space-y-2.5 mt-4 sm:mt-4 w-full items-start sm:items-center">
          <div className="h-4 sm:h-5 w-full max-w-lg bg-muted rounded-md" />
          <div className="h-4 sm:h-5 w-4/5 max-w-md bg-muted rounded-md" />
        </div>

        {/* Scroll Prompt */}
        <div className="mt-12 h-4 w-36 bg-muted rounded-md" />

      </div>
    </section>
  );
}