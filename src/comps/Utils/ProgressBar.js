import React, { useEffect } from 'react'
import useStorage from '../../Hooks/UseStorage'
import { motion } from 'framer-motion';
import './ProgressBar.css'

export default function ProgressBar({file, setFile}) {
    const { progress, url } = useStorage(file);

    useEffect(() => {
      if (url) {
        setFile(null);
      }
    }, [url, setFile]);
  
    return (
      <motion.div className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: progress + '%' }}
      ></motion.div>
    );
}
