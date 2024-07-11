import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/career", title: "Career" },
  { url: "/security", title: "Security" },
];

const slLinks = [
  { url: "/signup", title: "Signup" },
  { url: "/login", title: "Login" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full bg-blue-300 rounded-full mt-3 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden text-white md:flex gap-8 w-1/3">
        {links.map((link) => (
          <Link to={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link
          to="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-teal-200 w-20 justify-center text-center bg-grey-11">
            Smart
          </span>
          <span className="w-20 h-8 rounded bg-teal-200 text-grey-15 flex items-center justify-center">
            Weather
          </span>
        </Link>
      </div>
      <div className="hidden text-white md:flex gap-8 w-1/3">
        {slLinks.map((link) => (
          <Link to={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-grey-10 text-green-60 flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={itemVariants} key={link.title}>
                <Link to={link.url}>{link.title}</Link>
              </motion.div>
            ))}
            <button>Signup</button>
            <button>Login</button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
