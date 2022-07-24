/*
 * Custom function used to generate the output of the theme variables
 */

var generateThemeVariables = function(params) {
   let fontParams = {
       'system-ui': {
          name: 'SystemUI',
          family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
       },
       andadapro: {
         name: 'Andada Pro',
         family: '\'Andada Pro\', serif',
         weight: '400 840'
       },
       antonio: {
        name: 'Antonio',
        family: '\'Antonio\', sans-serif',
        weight: '100 700'
      },
       archivonarrow: {
         name: 'Archivo Narrow',
         family: '\'Archivo Narrow\', sans-serif',
         weight: '400 700'
       },
       asap: {
        name: 'Asap',
        family: '\'Asap\', sans-serif',
        weight: '400 700'
      },
       besley: {
         name: 'Besley',
         family: '\'Besley\', serif',
         weight: '400 900'
       },
       bigshouldersdisplay: {
        name: 'Big Shoulders Display',
        family: '\'Big Shoulders Display\', cursive',
        weight: '100 900'
      },
       bitter: {
         name: 'Bitter',
         family: '\'Bitter\', serif',
         weight: '100 900'
       },
       brygada1918: {
         name: 'Brygada 1918',
         family: '\'Brygada 1918\', serif',
         weight: '400 700'
       },
       cairo: {
         name: 'Cairo',
         family: '\'Cairo\', sans-serif',
         weight: '200 1000'
       },
       comfortaa: {
        name: 'Comfortaa',
        family: '\'Comfortaa\', cursive',
        weight: '300 700'
       },
       dancingscript: {
        name: 'Dancing Script',
        family: '\'Dancing Script\', cursive',
        weight: '400 700'
       },
       domine: {
         name: 'Domine',
         family: '\'Domine\', serif',
         weight: '400 700'
       },
       dosis: {
         name: 'Dosis',
         family: '\'Dosis\', sans-serif',
         weight: '200 800'
       },
       exo: {
        name: 'Exo',
        family: '\'Exo\', sans-serif',
        weight: '100 900'
       },
       faustina: {
         name: 'Faustina',
         family: '\'Faustina\', serif',
         weight: '300 800'
       },
       glory: {
        name: 'Glory',
        family: '\'Glory\', sans-serif',
        weight: '100 800'
       },
       gluten: {
        name: 'Gluten',
        family: '\'Gluten\', cursive',
        weight: '100 900'
       },
       heebo: {
        name: 'Heebo',
        family: '\'Heebo\', sans-serif',
        weight: '100 900'
       },
       jetbrainsmono: {
        name: 'JetBrains Mono',
        family: '\'JetBrains Mono\', monospace',
        weight: '100 800'
       },
       jura: {
        name: 'Jura',
        family: '\'Jura\', sans-serif',
        weight: '300 700'
       },
       karla: {
         name: 'Karla',
         family: '\'Karla\', sans-serif',
         weight: '200 800'
       },
       kreon: {
        name: 'Kreon',
        family: '\'Kreon\', serif',
        weight: '300 700'
       },
       lemonada: {
        name: 'Lemonada',
        family: '\'Lemonada\', cursive',
        weight: '300 700'
      },
       librefranklin: {
        name: 'Libre Franklin',
        family: '\'Libre Franklin\', sans-serif',
        weight: '100 900'
      },
       lora: {
         name: 'Lora',
         family: '\'Lora\', serif',
         weight: '400 700'
       },
       manuale: {
         name: 'Manuale',
         family: '\'Manuale\', serif',
         weight: '300 800'
       },
       manrope: {
         name: 'Manrope',
         family: '\'Manrope\', sans-serif',
         weight: '100 900'
       },
       merriweathersans: {
         name: 'Merriweather Sans',
         family: '\'Merriweather Sans\', sans-serif',
         weight: '300 800'
       },
       montserrat: {
         name: 'Montserrat',
         family: '\'Montserrat\', sans-serif',
         weight: '100 900'
       },      
       nunito: {
         name: 'Nunito',
         family: '\'Nunito\', sans-serif',
         weight: '200 1000'
       },
       oswald: {
        name: 'Oswald',
        family: '\'Oswald\', sans-serif',
        weight: '200 700'
      },
       petrona: {
         name: 'Petrona',
         family: '\'Petrona\', serif',
         weight: '100 900'
       },
       playfairdisplay: {
         name: 'Playfair Display',
         family: '\'Playfair Display\', serif',
         weight: '400 900'
       },
       publicsans: {
        name: 'Public Sans',
        family: '\'Public Sans\', sans-serif',
        weight: '100 900'
       },
       quicksand: {
        name: 'Quicksand',
        family: '\'Quicksand\', sans-serif',
        weight: '300 700'
       },
       raleway: {
         name: 'Raleway',
         family: '\'Raleway\', sans-serif',
         weight: '100 900'
       },
       redhatmono: {
        name: 'Red Hat Mono',
        family: '\'Red Hat Mono\', monospace',
        weight: '300 700'
       },
       robotoslab: {
         name: 'Roboto Slab',
         family: '\'Roboto Slab\', serif',
         weight: '100 900'
       },
       rubik: {
         name: 'Rubik',
         family: '\'Rubik\', sans-serif',
         weight: '300 900'
       },
       ruda: {
        name: 'Ruda',
        family: '\'Ruda\', sans-serif',
        weight: '400 900'
       },
       smoochsans: {
        name: 'Smooch Sans',
        family: '\'Smooch Sans\', sans-serif',
        weight: '100 900'
       },
       sourcecodepro: {
        name: 'Source Code Pro',
        family: '\'Source Code Pro\', monospace',
        weight: '200 900'
       },
       spartan: {
        name: 'Spartan',
        family: '\'Spartan\', sans-serif',
        weight: '100 900'
       },
       urbanist: {
        name: 'Urbanist',
        family: '\'Urbanist\', sans-serif',
        weight: '100 900'
       },
       yanonekaffeesatz: {
         name: 'Yanone Kaffeesatz',
         family: '\'Yanone Kaffeesatz\', sans-serif',
         weight: '200 700'
       }
   };

   let fontBodyName = fontParams[params.fontBody]?.name;
   let fontBodyFamily = fontParams[params.fontBody]?.family;
   let fontBodyWeight  = fontParams[params.fontBody]?.weight;
   
   let fontHeadingsName = fontParams[params.fontHeadings]?.name;
   let fontHeadingsFamily = fontParams[params.fontHeadings]?.family;
   let fontHeadingsWeight = fontParams[params.fontHeadings]?.weight;
  
   if(params.fontMenu === 'system-ui') {
       params.fontMenu = fontParams['system-ui'].family;
   } 
   
   if(params.fontLogo === 'system-ui') {
       params.fontLogo = fontParams['system-ui'].family;
   } 

   let output = '';

    if((params.fontBody !== 'system-ui') && (params.fontBody !== params.fontHeadings)) {
        output += `             
          @font-face {
              font-family: '${fontBodyName}';
              src: url('../dynamic/fonts/${params.fontBody}/${params.fontBody}.woff2') format('woff2 supports variations'),
              url('../dynamic/fonts/${params.fontBody}/${params.fontBody}.woff2') format('woff2-variations');
              font-weight: ${fontBodyWeight};
              font-display: swap;
              font-style: normal;
          }
        `;   
    }

    if(params.fontHeadings !== 'system-ui') {
        output += `             
          @font-face {
              font-family: '${fontHeadingsName}';
              src: url('../dynamic/fonts/${params.fontHeadings}/${params.fontHeadings}.woff2') format('woff2 supports variations'),
              url('../dynamic/fonts/${params.fontHeadings}/${params.fontHeadings}.woff2') format('woff2-variations');
              font-weight: ${fontHeadingsWeight};
              font-display: swap;
              font-style: normal;
          }
        `;   
    }

    output += `  
      :root {
         --page-margin:           ${params.pageMargin};
         --page-width:            ${params.pageWidth};
         --entry-width:           ${params.entryWidth}; 
         --navbar-height:         3rem;
         --border-radius:         3px;
         --cards-gap:             1rem;
         --featured-image-height: ${params.featuredImageHeight}; 
         --animated-lines-time:   ${params.animatedLinesDuration}s; 
         --gallery-gap:           ${params.galleryItemGap}; 
         --magic-number:          4rem;
         --font-body:             ${fontBodyFamily};
         --font-heading:          ${fontHeadingsFamily};
         --font-logo:             ${params.fontLogo};
         --font-menu:             ${params.fontMenu};
         --font-weight-normal:    ${params.fontBodyWeight}; 
         --font-weight-bold:      ${params.fontBoldWeight}; 
         --headings-weight:       ${params.fontHeadignsWeight};
         --headings-transform:    ${params.fontHeadingsTransform};
         --line-height:           ${params.lineHeight}; 
         --letter-spacing:        -.03em;
    `; 

    if(params.cardsImageHeight != 'auto') {
      output += `             
         --card-image-height: calc(${params.cardsImageHeight} + 13vmin);
      `;
    } else {
        output += ` 
          --card-image-height: auto;
       `;
    }

    if(params.colorScheme === 'violet') {
      output += `             
          --white: #FFFFFF;
          --black: #000000;
          --green: #00C899;
          --blue: #3DBFE2;
          --red: #EB7F9B;
          --yellow:#FFC76B;
          --dark: #283149;
          --dark-rgb: 40, 49, 73;
          --gray-1: #5f5f74;
          --gray-2: #9196A2;
          --light: #d4d2e1;
          --lighter: #DBDDE6;
          --color: #6f689b;
          --color-rgb: 111, 104, 155;
          --page-bg: linear-gradient(110deg, rgba(215,218,227,1) 0%, rgba(242,243,248,1) 100%);
          --text-color: #343435;
          --headings-color: #283149;
          --link-color: #6f689b;
          --link-color-hover: #283149;
          --inline-code: 255, 81, 81;
      `;
    }

    if(params.colorScheme === 'custom') {
      output += `             
         --white:            ${params.white};
         --black:            ${params.black}; 
         --green:            ${params.green}; 
         --blue:             ${params.blue}; 
         --red:              ${params.red}; 
         --yellow:           ${params.yellow}; 
         --dark:             ${params.dark}; 
         --dark-rgb:         ${params.dark.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')};
         --gray-1:           ${params.gray1}; 
         --gray-2:           ${params.gray2}; 
         --gray:             ${params.gray}; 
         --light:            ${params.light}; 
         --lighter:          ${params.lighter}; 
         --color:            ${params.color};
         --color-rgb:        ${params.color.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')}; 
         --page-bg:          ${params.pageBg}; 
         --text-color:       ${params.textColor}; 
         --headings-color:   ${params.headingsColor}; 
         --link-color:       ${params.linkColor}; 
         --link-color-hover: ${params.linkColorHover}; 
         --inline-code:       255, 81, 81;
      `;
   }

  output += `
    --box-shadow:
        0px 4.4px 4.5px -100px rgba(var(--dark-rgb), 0.174),
        0px 12.3px 12.5px -100px rgba(var(--dark-rgb), 0.25),
        0px 29.5px 30.1px -100px rgba(var(--dark-rgb), 0.326),
        0px 98px 100px -100px rgba(var(--dark-rgb), 0.5);
    --box-shadow-hover:
        0px 5.4px 4.5px -100px rgba(var(--dark-rgb), 0.174),
        0px 15px 12.5px -100px rgba(var(--dark-rgb), 0.25),
        0px 36.2px 30.1px -100px rgba(var(--dark-rgb), 0.326),
        0px 120px 100px -100px rgba(var(--dark-rgb), 0.5);
  }`; 

  output += `   
    @media all and (min-width: 56.25em) {
      :root {
        --magic-number: 6rem;
      }
    }
    @media all and (min-width: 80.0625em) and (min-height: 50em) {
      :root {
        --cards-gap: 1.8rem;
        --magic-number: 8rem;
      }
    }                      
  `;  

return output;
}

module.exports = generateThemeVariables;