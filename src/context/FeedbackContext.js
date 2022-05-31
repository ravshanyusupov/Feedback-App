import { createContext } from "react";

const FeedbackContext = createContext(null)
const feedback = [{
            id: 1,
            text: 'This is from context',
            rating: 10,
            }]
export const FeedbackProvider = ({children}) => {
    return <FeedbackContext.Provider value={{feedback}}>
                {children}
            </FeedbackContext.Provider>
}

export default FeedbackContext