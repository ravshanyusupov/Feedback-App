import React, {useState} from 'react';
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion"


function FeedbackList({FeedbackData, remove, edit}) {
    const getItem = (id) => {
        edit(id)
    }
    return (
        <div>
            <AnimatePresence>
            {FeedbackData
            ? FeedbackData.map(item =>(
                <motion.div
                    key={item.id}
                    intial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <FeedbackItem
                        key={item.id}
                        item={item}
                        remove={remove}
                        getItem={getItem}
                    />
                </motion.div>
            ))
            : <h1>No Feedbacks yet</h1>
            }
            </AnimatePresence>
        </div>
    );
}

export default FeedbackList;