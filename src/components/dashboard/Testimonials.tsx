"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const testimonials = Array.from({ length: 12 }, (_, i) => ({
  src: `/assets/testimonials/${i + 1}.png`,
  alt: `Testimonial ${i + 1}`,
}));

export function Testimonials() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const testimonialsCol1 = testimonials.slice(0, 3);
  const testimonialsCol2 = testimonials.slice(3, 6);
  const testimonialsCol3 = testimonials.slice(6, 9);
  const testimonialsCol4 = testimonials.slice(9, 12);

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold uppercase tracking-widest text-text-strong">
            Wall of Love
          </h2>
          <p className="mt-4 text-lg text-[#64748B] max-w-3xl mx-auto">
            A collection of experiences and kind words from clients and partners I've had the pleasure to work with.
          </p>
        </motion.div>

        <div className="relative h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="absolute top-0 left-0 grid h-full grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <ScrollingColumn testimonials={testimonialsCol1} openModal={openModal} duration={30} />
            <ScrollingColumn testimonials={testimonialsCol2} openModal={openModal} duration={40} direction="down" />
            <ScrollingColumn testimonials={testimonialsCol3} openModal={openModal} duration={25} />
            <ScrollingColumn testimonials={testimonialsCol4} openModal={openModal} duration={45} direction="down" />
          </div>
        </div>

        {isModalOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged testimonial"
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                onClick={closeModal}
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

const ScrollingColumn = ({ testimonials, openModal, duration = 20, direction = "up" }: { testimonials: {src: string, alt: string}[], openModal: (src: string) => void, duration?: number, direction?: "up" | "down" }) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const y = direction === "up" ? ['-50%', '0%'] : ['0%', '-50%'];

  return (
    <motion.div
      className="flex flex-col gap-4 sm:gap-8"
      animate={{ y }}
      transition={{
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
      }}
    >
      {duplicatedTestimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="break-inside-avoid cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          onClick={() => openModal(testimonial.src)}
        >
          <img
            src={testimonial.src}
            alt={testimonial.alt}
            className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};