import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0A0A]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold tracking-widest text-[#2DD4BF]">
          SHAGUFTA
        </h1>

        <p className="mt-2 text-sm tracking-[0.4em] text-gray-400">
          SABA
        </p>

        <motion.div
          className="mx-auto mt-6 h-[2px] w-24 bg-[#2DD4BF]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;