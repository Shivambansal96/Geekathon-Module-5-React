const DarkModeReducer = (state, action) => {
    switch(action.type) {
        case 'Light': {
            return {                
                darkMode: false,
            } 
        }

        case 'Dark': {
            return {                
                darkMode: true,
            } 
        }

        case 'Toggle': {
            return {                
                darkMode: !state.darkMode,
            } 
        }

        default:
            return state;
    }
}

export default DarkModeReducer;