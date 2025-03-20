
import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-display font-medium mb-6">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          I'm always open to new projects and collaborations. If you have an idea or need a 
          developer with my expertise, don't hesitate to reach out.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-full transition-all hover:shadow-lg hover:translate-y-[-2px]"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
