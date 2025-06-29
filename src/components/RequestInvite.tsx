import { motion } from "motion/react";

export const RequestInvite = ({ hidden = "hidden", flex = "flex" }) => {
  return (
    <motion.div
    whileTap={{scale:0.8, transition: {duration:0.8}}}
   whileHover={{scale:1.1, transition: {duration:0.5}}}
    
    >
      <button
        className={`${hidden} rounded-3xl text-LightGray hover:bg-opacity-45 bg-gradient-to-r from-LimeGreen xl:flex to-Cyan px-10 py-3 ${flex}`}
      >
        Request Invite
      </button>
    </motion.div>
  );
};
