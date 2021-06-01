import { createGlobalStyle } from 'styled-components';

export const Font = createGlobalStyle`
    body{
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Sans:wght@400;700&family=Noto+Sans+HK:wght@300;500;700&family=Noto+Sans+JP:wght@300;500;700&family=Noto+Sans+SC:wght@300;500;700&family=Noto+Sans+TC:wght@300;500;700&display=swap');
        font-family: 'Noto Sans', 'Noto Sans KR','Noto Sans HK','Noto Sans JP','Noto Sans SC','Noto Sans TC', sans-serif;
    }
`;