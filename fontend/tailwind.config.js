/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color guide
        'BG' : '#FFFFFF',

        'primary' : '#FFFFFF',
        'primary1' : '#363738',
        
        'secondary' : '#F5F5F5',
        'secondary1' : '#FEFAF1',
        'secondary2' : '#DB4444',

        'text' : '#FAFAFA',
        'text1' : '#7D8184',
        'text2' : '#000000',
        'button' : '#000000',

        'button1' : '#00FF66',
        'button2' : '#DB4444',
        'hover-button' : '#E07575',
        'hover-button1' : '#A0BCE0',

        // Color
        'black' : '#000000',
        'white' : '#FFFFFF',

        'success-50' : '#ECFDF5',
        'success-100' : '#D1FAE5',
        'success-200' : '#A7F3D0',
        'success-300' : '#6EE7B7',
        'success-400' : '#34D399',
        'success-500' : '#10B981',
        'success-600' : '#059669',
        'success-700' : '#047857',
        'success-800' : '#065F46',
        'success-900' : '#064E3B',

        'warning-50' : '#FFFBEB',
        'warning-100' : '#FEF3C7',
        'warning-200' : '#FDE68A',
        'warning-300' : '#FCD34D',
        'warning-400' : '#FBBF24',
        'warning-500' : '#F59E0B',
        'warning-600' : '#D97706',
        'warning-700' : '#B45309',
        'warning-800' : '#92400E',
        'warning-900' : '#78350F',

        'error-50' : '#FFF1F2',
        'error-100' : '#FFE4E6',
        'error-200' : '#FECDD3',
        'error-300' : '#FDA4AF',
        'error-400' : '#FB7185',
        'error-500' : '#F43F5E',
        'error-600' : '#E11D48',
        'error-700' : '#BE123C',
        'error-800' : '#9F1239',
        'error-900' : '#881337',

        'neutral' : '#FFFFFF',
        'neutral-50' : '#F4F4F6',   // Backgrounds only
        'neutral-100' : '#E9EAEC',  // Lines / Borders
        'neutral-200' : '#D1D4DB',  // Form borders
        'neutral-300' : '#9096A2',  // Delete this?
        'neutral-400' : '#4D566B',
        'neutral-500' : '#202C46',
        'neutral-600' : '#1B253C',

        'blue-100' : '#F5F7FE',
        'blue-200' : '#EAEFFD',
        'blue-300' : '#ADBEF7',
        'blue-400' : '#5A7DEE',
        'blue-500' : '#315CEA',
        'blue-600' : '#2A4EC7',
        'blue-700' : '#2240A4',

        'purple-100' : '#F8F5FE',
        'purple-200' : '#F1ECFC',
        'purple-300' : '#C9B2F3',
        'purple-400' : '#9265E8',
        'purple-500' : '#773FE2',
        'purple-600' : '#6436BF',

        'magenta-100' : '#FEF6F8',
        'magenta-200' : '#FCEEF1',
        'magenta-300' : '#F4BAC8',
        'magenta-400' : '#E97591',
        'magenta-500' : '#E35275',
        'magenta-600' : '#C24764',

        'green-100' : '#F4FDF7',
        'green-200' : '#E9FAEF',
        'green-300' : '#A9EBBF',
        'green-400' : '#52D880',
        'green-500' : '#27CE60',
        'green-600' : '#21AF52',

        'red-100' : '#FCE9EC',
        'red-200' : '#F9D2D9',
        'red-300' : '#F2A6B4',
        'red-400' : '#E9677F',
        'red-500' : '#DF2648',
        'red-600' : '#B71F3B',

        'yellow-100' : '#FEF3E6',
        'yellow-200' : '#FDE7CD',
        'yellow-300' : '#FCCF9C',
        'yellow-400' : '#FAB261',
        'yellow-500' : '#F89118',
        'yellow-600' : '#C77414',
      },
      fontFamily: {
        baiJamjuree: ['Bai Jamjuree', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
