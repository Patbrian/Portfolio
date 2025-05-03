// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProfileImage = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  return (
    <section className="p-8 flex justify-center">
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white"
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default ProfileImage;