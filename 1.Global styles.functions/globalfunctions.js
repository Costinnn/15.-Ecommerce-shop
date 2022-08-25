// variables for navigation buttons
const shop = document.querySelector('[data-shop]');
const shopMenu = document.querySelector('[data-shopMenu]');
const collections = document.querySelector('[data-collections]');
const collectionsMenu = document.querySelector('[data-collectionsMenu]');
const brand = document.querySelector('[data-brand]');
const shopBrand = document.querySelector('[data-shopBrand]');
const account = document.querySelector('[data-account]');
const accountMenu = document.querySelector('[data-accountmenu]');
let isMouseOver = false;

/**
    code for navigation buttons
**/ 
// SHOP
shop.addEventListener('mouseenter',() => {
    shopMenu.style.visibility = 'visible'; 
    shopMenu.style.opacity = '1';
    
});

shopMenu.addEventListener('mouseenter',() => {
    isMouseOver = true;
})

shopMenu.addEventListener('mouseleave',() => {
    isMouseOver = false;
    shopMenu.style.opacity = '0';
    setTimeout(() => {
        shopMenu.style.visibility = 'hidden';
    }, 500)
    
    
})

shop.addEventListener('mouseleave',() => {
    setTimeout(() => {
        if(!isMouseOver){
            shopMenu.style.opacity = '0';
            setTimeout(() => {
                shopMenu.style.visibility = 'hidden';
            }, 500)
             
            
        }
    }, 400)
    
});

// COLLECTIONS
collections.addEventListener('mouseenter',() => {
    collectionsMenu.style.visibility = 'visible'; 
    collectionsMenu.style.opacity = '1';
    
});

collectionsMenu.addEventListener('mouseenter',() => {
    isMouseOver = true;
})

collectionsMenu.addEventListener('mouseleave',() => {
    isMouseOver = false;
    collectionsMenu.style.opacity = '0';
    setTimeout(() => {
        collectionsMenu.style.visibility = 'hidden';
    }, 500)
    
    
})

collections.addEventListener('mouseleave',() => {
    setTimeout(() => {
        if(!isMouseOver){
            collectionsMenu.style.opacity = '0';
            setTimeout(() => {
                collectionsMenu.style.visibility = 'hidden';
            }, 500)
             
            
        }
    }, 400)
    
});

//BRAND
brand.addEventListener('mouseenter',() => {
    shopBrand.style.visibility = 'visible'; 
    shopBrand.style.opacity = '1';
    
});

shopBrand.addEventListener('mouseenter',() => {
    isMouseOver = true;
})

shopBrand.addEventListener('mouseleave',() => {
    isMouseOver = false;
    shopBrand.style.opacity = '0';
    setTimeout(() => {
        shopBrand.style.visibility = 'hidden';
    }, 500)
    
    
})

brand.addEventListener('mouseleave',() => {
    setTimeout(() => {
        if(!isMouseOver){
            shopBrand.style.opacity = '0';
            setTimeout(() => {
                shopBrand.style.visibility = 'hidden';
            }, 500)
             
            
        }
    }, 400)
    
});

//ACCOUNT
account.addEventListener('mouseenter',() => {
    accountMenu.style.visibility = 'visible'; 
    accountMenu.style.opacity = '1';
    
});

accountMenu.addEventListener('mouseenter',() => {
    isMouseOver = true;
})

accountMenu.addEventListener('mouseleave',() => {
    isMouseOver = false;
    accountMenu.style.opacity = '0';
    setTimeout(() => {
        accountMenu.style.visibility = 'hidden';
    }, 500)
    
    
})

account.addEventListener('mouseleave',() => {
    setTimeout(() => {
        if(!isMouseOver){
            accountMenu.style.opacity = '0';
            setTimeout(() => {
                accountMenu.style.visibility = 'hidden';
            }, 500)
             
            
        }
    }, 400)
    
});


